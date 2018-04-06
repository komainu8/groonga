/* -*- c-basic-offset: 2 -*- */
/*
  Copyright(C) 2009-2018 Brazil

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License version 2.1 as published by the Free Software Foundation.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this library; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
*/
#include <string.h>
#include "grn_token_cursor.h"
#include "grn_string.h"
#include "grn_plugin.h"
#include "grn_raw_string.h"
#include <groonga/tokenizer.h>

grn_obj *grn_tokenizer_uvector = NULL;

typedef struct {
  grn_tokenizer_token token;
  byte *curr;
  byte *tail;
  uint32_t unit;
} grn_uvector_tokenizer;

static grn_obj *
uvector_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_obj *str, *flags, *mode;
  grn_uvector_tokenizer *tokenizer;
  if (!(flags = grn_ctx_pop(ctx))) {
    ERR(GRN_INVALID_ARGUMENT, "[tokenizer][uvector] missing argument: flags");
    return NULL;
  }
  if (!(str = grn_ctx_pop(ctx))) {
    ERR(GRN_INVALID_ARGUMENT, "[tokenizer][uvector] missing argument: string");
    return NULL;
  }
  if (!(mode = grn_ctx_pop(ctx))) {
    ERR(GRN_INVALID_ARGUMENT, "[tokenizer][uvector] missing argument: mode");
    return NULL;
  }
  if (!(tokenizer = GRN_MALLOC(sizeof(grn_uvector_tokenizer)))) {
    ERR(GRN_NO_MEMORY_AVAILABLE,
        "[tokenizer][uvector] "
        "memory allocation to grn_uvector_tokenizer failed");
    return NULL;
  }
  user_data->ptr = tokenizer;

  grn_tokenizer_token_init(ctx, &(tokenizer->token));
  tokenizer->curr = (byte *)GRN_TEXT_VALUE(str);
  tokenizer->tail = tokenizer->curr + GRN_TEXT_LEN(str);
  tokenizer->unit = sizeof(grn_id);
  return NULL;
}

static grn_obj *
uvector_next(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_uvector_tokenizer *tokenizer = user_data->ptr;
  byte *p = tokenizer->curr + tokenizer->unit;
  if (tokenizer->tail < p) {
    grn_tokenizer_token_push(ctx, &(tokenizer->token),
                             (const char *)tokenizer->curr, 0,
                             GRN_TOKEN_LAST);
  } else {
    grn_token_status status;
    if (tokenizer->tail == p) {
      status = GRN_TOKEN_LAST;
    } else {
      status = GRN_TOKEN_CONTINUE;
    }
    grn_tokenizer_token_push(ctx, &(tokenizer->token),
                             (const char *)tokenizer->curr, tokenizer->unit,
                             status);
    tokenizer->curr = p;
  }
  return NULL;
}

static grn_obj *
uvector_fin(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_uvector_tokenizer *tokenizer = user_data->ptr;
  if (!tokenizer) {
    return NULL;
  }
  grn_tokenizer_token_fin(ctx, &(tokenizer->token));
  GRN_FREE(tokenizer);
  return NULL;
}

typedef struct {
  const uint8_t *delimiter;
  uint32_t delimiter_len;
  const unsigned char *next;
  const unsigned char *end;
  grn_tokenizer_token token;
  grn_tokenizer_query *query;
  grn_bool have_tokenized_delimiter;
} grn_delimited_tokenizer;

static grn_obj *
delimited_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data,
               const uint8_t *delimiter, uint32_t delimiter_len)
{
  grn_tokenizer_query *query;
  unsigned int normalize_flags = 0;
  const char *normalized;
  unsigned int normalized_length_in_bytes;
  grn_delimited_tokenizer *tokenizer;

  query = grn_tokenizer_query_open(ctx, nargs, args, normalize_flags);
  if (!query) {
    return NULL;
  }

  if (!(tokenizer = GRN_MALLOC(sizeof(grn_delimited_tokenizer)))) {
    ERR(GRN_NO_MEMORY_AVAILABLE,
        "[tokenizer][delimit] "
        "memory allocation to grn_delimited_tokenizer failed");
    grn_tokenizer_query_close(ctx, query);
    return NULL;
  }
  user_data->ptr = tokenizer;

  tokenizer->query = query;

  tokenizer->have_tokenized_delimiter =
    grn_tokenizer_have_tokenized_delimiter(ctx,
                                           tokenizer->query->ptr,
                                           tokenizer->query->length,
                                           tokenizer->query->encoding);
  tokenizer->delimiter = delimiter;
  tokenizer->delimiter_len = delimiter_len;
  grn_string_get_normalized(ctx, tokenizer->query->normalized_query,
                            &normalized, &normalized_length_in_bytes,
                            NULL);
  tokenizer->next = (const unsigned char *)normalized;
  tokenizer->end = tokenizer->next + normalized_length_in_bytes;

  grn_tokenizer_token_init(ctx, &(tokenizer->token));

  return NULL;
}

static grn_obj *
delimited_next(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_delimited_tokenizer *tokenizer = user_data->ptr;

  if (tokenizer->have_tokenized_delimiter) {
    unsigned int rest_length;
    rest_length = tokenizer->end - tokenizer->next;
    tokenizer->next =
      (unsigned char *)grn_tokenizer_tokenized_delimiter_next(
        ctx,
        &(tokenizer->token),
        (const char *)tokenizer->next,
        rest_length,
        tokenizer->query->encoding);
  } else {
    size_t cl;
    const unsigned char *p = tokenizer->next, *r;
    const unsigned char *e = tokenizer->end;
    grn_token_status status;
    for (r = p; r < e; r += cl) {
      if (!(cl = grn_charlen_(ctx, (char *)r, (char *)e,
                              tokenizer->query->encoding))) {
        tokenizer->next = (unsigned char *)e;
        break;
      }
      {
        grn_bool found_delimiter = GRN_FALSE;
        const unsigned char *current_end = r;
        while (current_end + tokenizer->delimiter_len <= e &&
               !memcmp(current_end,
                       tokenizer->delimiter, tokenizer->delimiter_len)) {
          current_end += tokenizer->delimiter_len;
          tokenizer->next = current_end;
          found_delimiter = GRN_TRUE;
        }
        if (found_delimiter) {
          break;
        }
      }
    }
    if (r == e) {
      status = GRN_TOKEN_LAST;
    } else {
      status = GRN_TOKEN_CONTINUE;
    }
    grn_tokenizer_token_push(ctx,
                             &(tokenizer->token),
                             (const char *)p,
                             r - p,
                             status);
  }

  return NULL;
}

static grn_obj *
delimited_fin(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_delimited_tokenizer *tokenizer = user_data->ptr;
  if (!tokenizer) {
    return NULL;
  }
  grn_tokenizer_query_close(ctx, tokenizer->query);
  grn_tokenizer_token_fin(ctx, &(tokenizer->token));
  GRN_FREE(tokenizer);
  return NULL;
}

static grn_obj *
delimit_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  static const uint8_t delimiter[1] = {' '};
  return delimited_init(ctx, nargs, args, user_data, delimiter, 1);
}

static grn_obj *
delimit_null_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  static const uint8_t delimiter[1] = {'\0'};
  return delimited_init(ctx, nargs, args, user_data, delimiter, 1);
}

/* ngram tokenizer */

static grn_bool grn_ngram_tokenizer_remove_blank_enable = GRN_TRUE;

typedef struct {
  uint8_t unit;
  grn_bool uni_alpha;
  grn_bool uni_digit;
  grn_bool uni_symbol;
  grn_bool ignore_blank;
  grn_bool remove_blank;
  grn_bool loose_symbol;
  grn_bool loose_blank;
} grn_ngram_options;

typedef struct {
  grn_tokenizer_token token;
  grn_tokenizer_query *query;
  grn_ngram_options options;
  grn_bool overlap;
  struct {
    grn_bool ing;
    grn_bool need;
    grn_bool need_end_mark;
    grn_obj text;
    uint_least8_t *ctypes;
  } loose;
  int32_t pos;
  uint32_t skip;
  const unsigned char *next;
  const unsigned char *end;
  const uint_least8_t *ctypes;
  uint32_t len;
  uint32_t tail;
} grn_ngram_tokenizer;

static void
ngram_options_init(grn_ngram_options *options, uint8_t unit)
{
  options->unit = unit;
  options->uni_alpha = GRN_TRUE;
  options->uni_digit = GRN_TRUE;
  options->uni_symbol = GRN_TRUE;
  options->ignore_blank = GRN_FALSE;
  options->remove_blank = grn_ngram_tokenizer_remove_blank_enable;
  options->loose_symbol = GRN_FALSE;
  options->loose_blank = GRN_FALSE;
}

static void
ngram_switch_to_loose_mode(grn_ctx *ctx,
                           grn_ngram_tokenizer *tokenizer)
{
  const char *normalized;
  unsigned int normalized_length_in_bytes;
  unsigned int normalized_length_in_chars;
  const char *normalized_end;
  const uint_least8_t *types = tokenizer->ctypes;

  grn_string_get_normalized(ctx,
                            tokenizer->query->normalized_query,
                            &normalized,
                            &normalized_length_in_bytes,
                            &normalized_length_in_chars);
  normalized_end = normalized + normalized_length_in_bytes;

  if (types) {
    uint_least8_t *loose_types;

    tokenizer->loose.ctypes =
      GRN_MALLOC(sizeof(uint_least8_t) * normalized_length_in_chars);
    if (!tokenizer->loose.ctypes) {
      ERR(GRN_NO_MEMORY_AVAILABLE,
          "[tokenizer][ngram][loose] "
          "failed to allocate memory for character types");
      return;
    }
    loose_types = tokenizer->loose.ctypes;
    while (normalized < normalized_end) {
      size_t length;
      length = grn_charlen_(ctx,
                            (char *)normalized,
                            (char *)normalized_end,
                            tokenizer->query->encoding);
      if (length == 0) {
        break;
      }
      if (!((tokenizer->options.loose_symbol &&
             GRN_STR_CTYPE(*types) == GRN_CHAR_SYMBOL) ||
            (!tokenizer->options.remove_blank &&
             tokenizer->options.loose_blank &&
             GRN_STR_ISBLANK(*types)))) {
        GRN_TEXT_PUT(ctx, &(tokenizer->loose.text), normalized, length);
        *loose_types = *types;
        if (tokenizer->options.loose_blank && GRN_STR_ISBLANK(*types)) {
          *loose_types &= ~GRN_STR_BLANK;
        }
        loose_types++;
      }
      normalized += length;
      types++;
    }
    tokenizer->next =
      (const unsigned char *)GRN_TEXT_VALUE(&(tokenizer->loose.text));
    tokenizer->end = tokenizer->next + GRN_TEXT_LEN(&(tokenizer->loose.text));
    tokenizer->ctypes = tokenizer->loose.ctypes;
  } else {
    tokenizer->next = normalized;
    tokenizer->end = normalized_end;
  }

  tokenizer->pos = 0;
  tokenizer->skip = 0;
  tokenizer->overlap = GRN_FALSE;
  tokenizer->loose.ing = GRN_TRUE;
}

static grn_obj *
ngram_init_raw(grn_ctx *ctx,
               int nargs,
               grn_obj **args,
               grn_user_data *user_data,
               const grn_ngram_options *options)
{
  unsigned int normalize_flags =
    GRN_STRING_REMOVE_BLANK |
    GRN_STRING_WITH_TYPES |
    GRN_STRING_REMOVE_TOKENIZED_DELIMITER;
  grn_tokenizer_query *query;
  const char *normalized;
  unsigned int normalized_length_in_bytes;
  grn_ngram_tokenizer *tokenizer;

  if (!options->remove_blank) {
    normalize_flags &= ~GRN_STRING_REMOVE_BLANK;
  }
  query = grn_tokenizer_query_open(ctx, nargs, args, normalize_flags);
  if (!query) {
    return NULL;
  }

  if (!(tokenizer = GRN_MALLOC(sizeof(grn_ngram_tokenizer)))) {
    grn_tokenizer_query_close(ctx, query);
    ERR(GRN_NO_MEMORY_AVAILABLE,
        "[tokenizer][ngram] "
        "memory allocation to grn_ngram_tokenizer failed");
    return NULL;
  }
  user_data->ptr = tokenizer;

  grn_tokenizer_token_init(ctx, &(tokenizer->token));
  tokenizer->query = query;

  tokenizer->options = *options;
  tokenizer->overlap = GRN_FALSE;
  tokenizer->loose.ing = GRN_FALSE;
  tokenizer->loose.need = GRN_FALSE;
  tokenizer->loose.need_end_mark = GRN_FALSE;
  GRN_TEXT_INIT(&(tokenizer->loose.text), 0);
  tokenizer->loose.ctypes = NULL;
  tokenizer->pos = 0;
  tokenizer->skip = 0;

  grn_string_get_normalized(ctx, tokenizer->query->normalized_query,
                            &normalized, &normalized_length_in_bytes,
                            &(tokenizer->len));
  tokenizer->next = (const unsigned char *)normalized;
  tokenizer->end = tokenizer->next + normalized_length_in_bytes;
  tokenizer->ctypes =
    grn_string_get_types(ctx, tokenizer->query->normalized_query);

  if (tokenizer->query->tokenize_mode == GRN_TOKEN_GET) {
    ngram_switch_to_loose_mode(ctx, tokenizer);
  }

  return NULL;
}

static grn_obj *
unigram_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_ngram_options options;
  ngram_options_init(&options, 1);
  return ngram_init_raw(ctx, nargs, args, user_data, &options);
}

static grn_obj *
bigram_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_ngram_options options;
  ngram_options_init(&options, 2);
  return ngram_init_raw(ctx, nargs, args, user_data, &options);
}

static grn_obj *
trigram_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_ngram_options options;
  ngram_options_init(&options, 3);
  return ngram_init_raw(ctx, nargs, args, user_data, &options);
}

static grn_obj *
bigrams_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_ngram_options options;
  ngram_options_init(&options, 2);
  options.uni_symbol = GRN_FALSE;
  return ngram_init_raw(ctx, nargs, args, user_data, &options);
}

static grn_obj *
bigramsa_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_ngram_options options;
  ngram_options_init(&options, 2);
  options.uni_symbol = GRN_FALSE;
  options.uni_alpha = GRN_FALSE;
  return ngram_init_raw(ctx, nargs, args, user_data, &options);
}

static grn_obj *
bigramsad_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_ngram_options options;
  ngram_options_init(&options, 2);
  options.uni_symbol = GRN_FALSE;
  options.uni_alpha = GRN_FALSE;
  options.uni_digit = GRN_FALSE;
  return ngram_init_raw(ctx, nargs, args, user_data, &options);
}

static grn_obj *
bigrami_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_ngram_options options;
  ngram_options_init(&options, 2);
  options.ignore_blank = GRN_TRUE;
  return ngram_init_raw(ctx, nargs, args, user_data, &options);
}

static grn_obj *
bigramis_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_ngram_options options;
  ngram_options_init(&options, 2);
  options.ignore_blank = GRN_TRUE;
  options.uni_symbol = GRN_FALSE;
  return ngram_init_raw(ctx, nargs, args, user_data, &options);
}

static grn_obj *
bigramisa_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_ngram_options options;
  ngram_options_init(&options, 2);
  options.ignore_blank = GRN_TRUE;
  options.uni_symbol = GRN_FALSE;
  options.uni_alpha = GRN_FALSE;
  return ngram_init_raw(ctx, nargs, args, user_data, &options);
}

static grn_obj *
bigramisad_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_ngram_options options;
  ngram_options_init(&options, 2);
  options.ignore_blank = GRN_TRUE;
  options.uni_symbol = GRN_FALSE;
  options.uni_alpha = GRN_FALSE;
  options.uni_digit = GRN_FALSE;
  return ngram_init_raw(ctx, nargs, args, user_data, &options);
}

static void *
ngram_open_options(grn_ctx *ctx,
                   grn_obj *lexicon,
                   grn_obj *raw_options,
                   void *user_data)
{
  grn_ngram_options *options;

  options = GRN_MALLOC(sizeof(grn_ngram_options));
  if (!options) {
    ERR(GRN_NO_MEMORY_AVAILABLE,
        "[tokenizer][ngram] "
        "failed to allocate memory for options");
    return NULL;
  }

  ngram_options_init(options, 2);

  GRN_OPTION_VALUES_EACH_BEGIN(ctx, raw_options, i, name, name_length) {
    grn_raw_string name_raw;
    name_raw.value = name;
    name_raw.length = name_length;

    if (GRN_RAW_STRING_EQUAL_CSTRING(name_raw, "n")) {
      options->unit = grn_vector_get_element_uint8(ctx,
                                                   raw_options,
                                                   i,
                                                   options->unit);
    } else if (GRN_RAW_STRING_EQUAL_CSTRING(name_raw, "remove_blank")) {
      options->remove_blank = grn_vector_get_element_bool(ctx,
                                                          raw_options,
                                                          i,
                                                          options->remove_blank);
    } else if (GRN_RAW_STRING_EQUAL_CSTRING(name_raw, "loose_symbol")) {
      options->loose_symbol = grn_vector_get_element_bool(ctx,
                                                          raw_options,
                                                          i,
                                                          options->loose_symbol);
    } else if (GRN_RAW_STRING_EQUAL_CSTRING(name_raw, "loose_blank")) {
      options->loose_blank = grn_vector_get_element_bool(ctx,
                                                          raw_options,
                                                          i,
                                                          options->loose_blank);
    }
  } GRN_OPTION_VALUES_EACH_END();

  return options;
}

static void
ngram_close_options(grn_ctx *ctx, void *data)
{
  grn_ngram_options *options = data;
  GRN_FREE(options);
}

static grn_obj *
ngram_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_obj *lexicon = args[0];
  grn_ngram_options *options;

  options = grn_table_cache_default_tokenizer_options(ctx,
                                                      lexicon,
                                                      ngram_open_options,
                                                      ngram_close_options,
                                                      NULL);
  if (ctx->rc != GRN_SUCCESS) {
    return NULL;
  }

  return ngram_init_raw(ctx, nargs, args, user_data, options);
}

static grn_obj *
ngram_next(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  size_t cl;
  grn_ngram_tokenizer *tokenizer = user_data->ptr;
  const unsigned char *p = tokenizer->next, *r = p, *e = tokenizer->end;
  int32_t len = 0, pos = tokenizer->pos + tokenizer->skip;
  grn_token_status status = 0;
  const uint_least8_t *cp = tokenizer->ctypes ? tokenizer->ctypes + pos : NULL;

  if (tokenizer->loose.ing && tokenizer->loose.need_end_mark) {
    grn_tokenizer_token_push(ctx,
                             &(tokenizer->token),
                             GRN_TOKENIZER_END_MARK_UTF8,
                             GRN_TOKENIZER_END_MARK_UTF8_LEN,
                             status);
    ngram_switch_to_loose_mode(ctx, tokenizer);
    tokenizer->loose.need_end_mark = GRN_FALSE;
    return NULL;
  }

#define LOOSE_NEED_CHECK(cp, tokenizer) do {                            \
    if (cp &&                                                           \
        !tokenizer->loose.ing &&                                        \
        !tokenizer->loose.need &&                                       \
        ((tokenizer->options.loose_symbol &&                            \
          GRN_STR_CTYPE(*cp) == GRN_CHAR_SYMBOL) ||                     \
         (tokenizer->options.loose_blank && GRN_STR_ISBLANK(*cp)))) {   \
      tokenizer->loose.need = GRN_TRUE;                                 \
    }                                                                   \
  } while (GRN_FALSE)

  LOOSE_NEED_CHECK(cp, tokenizer);

  if (cp && tokenizer->options.uni_alpha &&
      GRN_STR_CTYPE(*cp) == GRN_CHAR_ALPHA) {
    while ((cl = grn_charlen_(ctx, (char *)r, (char *)e,
                              tokenizer->query->encoding))) {
      len++;
      r += cl;
      LOOSE_NEED_CHECK(cp, tokenizer);
      if (/* !tokenizer->options.ignore_blank && */ GRN_STR_ISBLANK(*cp)) { break; }
      if (GRN_STR_CTYPE(*++cp) != GRN_CHAR_ALPHA) { break; }
    }
    tokenizer->next = r;
    tokenizer->overlap = GRN_FALSE;
  } else if (cp &&
             tokenizer->options.uni_digit &&
             GRN_STR_CTYPE(*cp) == GRN_CHAR_DIGIT) {
    while ((cl = grn_charlen_(ctx, (char *)r, (char *)e,
                              tokenizer->query->encoding))) {
      len++;
      r += cl;
      LOOSE_NEED_CHECK(cp, tokenizer);
      if (/* !tokenizer->options.ignore_blank && */ GRN_STR_ISBLANK(*cp)) { break; }
      if (GRN_STR_CTYPE(*++cp) != GRN_CHAR_DIGIT) { break; }
    }
    tokenizer->next = r;
    tokenizer->overlap = GRN_FALSE;
  } else if (cp &&
             tokenizer->options.uni_symbol &&
             GRN_STR_CTYPE(*cp) == GRN_CHAR_SYMBOL) {
    while ((cl = grn_charlen_(ctx, (char *)r, (char *)e,
                              tokenizer->query->encoding))) {
      len++;
      r += cl;
      LOOSE_NEED_CHECK(cp, tokenizer);
      if (!tokenizer->options.ignore_blank && GRN_STR_ISBLANK(*cp)) { break; }
      if (GRN_STR_CTYPE(*++cp) != GRN_CHAR_SYMBOL) { break; }
    }
    tokenizer->next = r;
    tokenizer->overlap = GRN_FALSE;
  } else {
#ifdef PRE_DEFINED_UNSPLIT_WORDS
    const unsigned char *key = NULL;
    // todo : grn_pat_lcp_search
    if ((tid = grn_sym_common_prefix_search(sym, p))) {
      if (!(key = _grn_sym_key(sym, tid))) {
        tokenizer->status = GRN_TOKEN_CURSOR_NOT_FOUND;
        return NULL;
      }
      len = grn_str_len(key, tokenizer->query->encoding, NULL);
    }
    r = p + grn_charlen_(ctx, p, e, tokenizer->query->encoding);
    if (tid && (len > 1 || r == p)) {
      if (r != p && pos + len - 1 <= tokenizer->tail) { continue; }
      p += strlen(key);
      if (!*p && tokenizer->mode == GRN_TOKEN_GET) {
        tokenizer->status = GRN_TOKEN_CURSOR_DONE;
      }
    }
#endif /* PRE_DEFINED_UNSPLIT_WORDS */
    if ((cl = grn_charlen_(ctx, (char *)r, (char *)e,
                           tokenizer->query->encoding))) {
      len++;
      r += cl;
      tokenizer->next = r;
      while (len < tokenizer->options.unit &&
             (cl = grn_charlen_(ctx, (char *)r, (char *)e,
                                tokenizer->query->encoding))) {
        if (cp) {
          LOOSE_NEED_CHECK(cp, tokenizer);
          if (!tokenizer->options.ignore_blank && GRN_STR_ISBLANK(*cp)) { break; }
          cp++;
          if ((tokenizer->options.uni_alpha &&
               GRN_STR_CTYPE(*cp) == GRN_CHAR_ALPHA) ||
              (tokenizer->options.uni_digit &&
               GRN_STR_CTYPE(*cp) == GRN_CHAR_DIGIT) ||
              (tokenizer->options.uni_symbol &&
               GRN_STR_CTYPE(*cp) == GRN_CHAR_SYMBOL)) {
            break;
          }
        }
        len++;
        r += cl;
      }
      if (tokenizer->overlap) {
        status |= GRN_TOKEN_OVERLAP;
      }
      if (len < tokenizer->options.unit) {
        status |= GRN_TOKEN_UNMATURED;
      }
      tokenizer->overlap = (len > 1) ? GRN_TRUE : GRN_FALSE;
    }
  }
  tokenizer->pos = pos;
  tokenizer->len = len;
  tokenizer->tail = pos + len - 1;
  if (p == r || tokenizer->next == e) {
    tokenizer->skip = 0;
    status |= GRN_TOKEN_LAST;
  } else {
    tokenizer->skip = tokenizer->overlap ? 1 : len;
  }
  if (r == e) { status |= GRN_TOKEN_REACH_END; }

  {
    if ((status & (GRN_TOKEN_LAST | GRN_TOKEN_REACH_END)) &&
        !tokenizer->loose.ing && tokenizer->loose.need) {
      status &= ~(GRN_TOKEN_LAST | GRN_TOKEN_REACH_END);
      tokenizer->loose.ing = GRN_TRUE;
      tokenizer->loose.need_end_mark = GRN_TRUE;
    }
    grn_tokenizer_token_push(ctx,
                             &(tokenizer->token),
                             (const char *)p,
                             r - p,
                             status);
  }

  return NULL;
}

static grn_obj *
ngram_fin(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_ngram_tokenizer *tokenizer = user_data->ptr;
  if (!tokenizer) {
    return NULL;
  }
  if (tokenizer->loose.ctypes) {
    GRN_FREE(tokenizer->loose.ctypes);
  }
  GRN_OBJ_FIN(ctx, &(tokenizer->loose.text));
  grn_tokenizer_token_fin(ctx, &(tokenizer->token));
  grn_tokenizer_query_close(ctx, tokenizer->query);
  GRN_FREE(tokenizer);
  return NULL;
}

/* regexp tokenizer */

typedef struct {
  grn_tokenizer_token token;
  grn_tokenizer_query *query;
  struct {
    int32_t n_skip_tokens;
  } get;
  grn_bool is_begin;
  grn_bool is_end;
  grn_bool is_start_token;
  grn_bool is_overlapping;
  const char *next;
  const char *end;
  unsigned int nth_char;
  const uint_least8_t *char_types;
  grn_obj buffer;
} grn_regexp_tokenizer;

static grn_obj *
regexp_init(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  unsigned int normalize_flags = GRN_STRING_WITH_TYPES;
  grn_tokenizer_query *query;
  const char *normalized;
  unsigned int normalized_length_in_bytes;
  grn_regexp_tokenizer *tokenizer;

  query = grn_tokenizer_query_open(ctx, nargs, args, normalize_flags);
  if (!query) {
    return NULL;
  }

  tokenizer = GRN_MALLOC(sizeof(grn_regexp_tokenizer));
  if (!tokenizer) {
    grn_tokenizer_query_close(ctx, query);
    ERR(GRN_NO_MEMORY_AVAILABLE,
        "[tokenizer][regexp] failed to allocate memory");
    return NULL;
  }
  user_data->ptr = tokenizer;

  grn_tokenizer_token_init(ctx, &(tokenizer->token));
  tokenizer->query = query;

  tokenizer->get.n_skip_tokens = 0;

  tokenizer->is_begin = GRN_TRUE;
  tokenizer->is_end   = GRN_FALSE;
  tokenizer->is_start_token = GRN_TRUE;
  tokenizer->is_overlapping = GRN_FALSE;

  grn_string_get_normalized(ctx, tokenizer->query->normalized_query,
                            &normalized, &normalized_length_in_bytes,
                            NULL);
  tokenizer->next = normalized;
  tokenizer->end = tokenizer->next + normalized_length_in_bytes;
  tokenizer->nth_char = 0;
  tokenizer->char_types =
    grn_string_get_types(ctx, tokenizer->query->normalized_query);

  GRN_TEXT_INIT(&(tokenizer->buffer), 0);

  return NULL;
}

static grn_obj *
regexp_next(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  int char_len;
  grn_token_status status = 0;
  grn_regexp_tokenizer *tokenizer = user_data->ptr;
  unsigned int n_characters = 0;
  int ngram_unit = 2;
  grn_obj *buffer = &(tokenizer->buffer);
  const char *current = tokenizer->next;
  const char *end = tokenizer->end;
  const uint_least8_t *char_types = tokenizer->char_types;
  grn_tokenize_mode mode = tokenizer->query->tokenize_mode;
  grn_bool is_begin = tokenizer->is_begin;
  grn_bool is_start_token = tokenizer->is_start_token;
  grn_bool break_by_blank = GRN_FALSE;
  grn_bool break_by_end_mark = GRN_FALSE;

  GRN_BULK_REWIND(buffer);
  tokenizer->is_begin = GRN_FALSE;
  tokenizer->is_start_token = GRN_FALSE;

  if (char_types) {
    char_types += tokenizer->nth_char;
  }

  if (mode != GRN_TOKEN_GET) {
    if (is_begin) {
      grn_tokenizer_token_push(ctx,
                               &(tokenizer->token),
                               GRN_TOKENIZER_BEGIN_MARK_UTF8,
                               GRN_TOKENIZER_BEGIN_MARK_UTF8_LEN,
                               status);
      return NULL;
    }

    if (tokenizer->is_end) {
      status |= GRN_TOKEN_LAST | GRN_TOKEN_REACH_END;
      grn_tokenizer_token_push(ctx,
                               &(tokenizer->token),
                               GRN_TOKENIZER_END_MARK_UTF8,
                               GRN_TOKENIZER_END_MARK_UTF8_LEN,
                               status);
      return NULL;
    }
    if (is_start_token) {
      if (char_types && GRN_STR_ISBLANK(char_types[-1])) {
        status |= GRN_TOKEN_SKIP;
        grn_tokenizer_token_push(ctx, &(tokenizer->token), "", 0, status);
        return NULL;
      }
    }
  }

  char_len = grn_charlen_(ctx, current, end, tokenizer->query->encoding);
  if (char_len == 0) {
    status |= GRN_TOKEN_LAST | GRN_TOKEN_REACH_END;
    grn_tokenizer_token_push(ctx, &(tokenizer->token), "", 0, status);
    return NULL;
  }

  if (mode == GRN_TOKEN_GET) {
    if (is_begin &&
        char_len == GRN_TOKENIZER_BEGIN_MARK_UTF8_LEN &&
        memcmp(current, GRN_TOKENIZER_BEGIN_MARK_UTF8, char_len) == 0) {
      tokenizer->is_start_token = GRN_TRUE;
      n_characters++;
      GRN_TEXT_PUT(ctx, buffer, current, char_len);
      current += char_len;
      tokenizer->next = current;
      tokenizer->nth_char++;
      if (current == end) {
        status |= GRN_TOKEN_LAST | GRN_TOKEN_REACH_END;
      }
      grn_tokenizer_token_push(ctx,
                               &(tokenizer->token),
                               GRN_TOKENIZER_BEGIN_MARK_UTF8,
                               GRN_TOKENIZER_BEGIN_MARK_UTF8_LEN,
                               status);
      return NULL;
    }

    if (current + char_len == end &&
        char_len == GRN_TOKENIZER_END_MARK_UTF8_LEN &&
        memcmp(current, GRN_TOKENIZER_END_MARK_UTF8, char_len) == 0) {
      status |= GRN_TOKEN_LAST | GRN_TOKEN_REACH_END;
      grn_tokenizer_token_push(ctx,
                               &(tokenizer->token),
                               GRN_TOKENIZER_END_MARK_UTF8,
                               GRN_TOKENIZER_END_MARK_UTF8_LEN,
                               status);
      return NULL;
    }
  }

  while (GRN_TRUE) {
    n_characters++;
    GRN_TEXT_PUT(ctx, buffer, current, char_len);
    current += char_len;
    if (n_characters == 1) {
      tokenizer->next = current;
      tokenizer->nth_char++;
    }

    if (char_types) {
      uint_least8_t char_type;
      char_type = char_types[0];
      char_types++;
      if (GRN_STR_ISBLANK(char_type)) {
        break_by_blank = GRN_TRUE;
      }
    }

    char_len = grn_charlen_(ctx, (const char *)current, (const char *)end,
                            tokenizer->query->encoding);
    if (char_len == 0) {
      break;
    }

    if (mode == GRN_TOKEN_GET &&
        current + char_len == end &&
        char_len == GRN_TOKENIZER_END_MARK_UTF8_LEN &&
        memcmp(current, GRN_TOKENIZER_END_MARK_UTF8, char_len) == 0) {
      break_by_end_mark = GRN_TRUE;
    }

    if (break_by_blank || break_by_end_mark) {
      break;
    }

    if (n_characters == ngram_unit) {
      break;
    }
  }

  if (tokenizer->is_overlapping) {
    status |= GRN_TOKEN_OVERLAP;
  }
  if (n_characters < ngram_unit) {
    status |= GRN_TOKEN_UNMATURED;
  }
  tokenizer->is_overlapping = (n_characters > 1);

  if (mode == GRN_TOKEN_GET) {
    if (current == end) {
      tokenizer->is_end = GRN_TRUE;
      status |= GRN_TOKEN_LAST | GRN_TOKEN_REACH_END;
      if (status & GRN_TOKEN_UNMATURED) {
        status |= GRN_TOKEN_FORCE_PREFIX;
      }
    } else {
      if (break_by_blank) {
        tokenizer->get.n_skip_tokens = 0;
        tokenizer->is_start_token = GRN_TRUE;
      } else if (break_by_end_mark) {
        if (!is_start_token && (status & GRN_TOKEN_UNMATURED)) {
          status |= GRN_TOKEN_SKIP;
        }
      } else if (tokenizer->get.n_skip_tokens > 0) {
        tokenizer->get.n_skip_tokens--;
        status |= GRN_TOKEN_SKIP;
      } else {
        tokenizer->get.n_skip_tokens = ngram_unit - 1;
      }
    }
  } else {
    if (tokenizer->next == end) {
      tokenizer->is_end = GRN_TRUE;
    }
    if (break_by_blank) {
      tokenizer->is_start_token = GRN_TRUE;
    }
  }

  grn_tokenizer_token_push(ctx,
                           &(tokenizer->token),
                           GRN_TEXT_VALUE(buffer),
                           GRN_TEXT_LEN(buffer),
                           status);

  return NULL;
}

static grn_obj *
regexp_fin(grn_ctx *ctx, int nargs, grn_obj **args, grn_user_data *user_data)
{
  grn_regexp_tokenizer *tokenizer = user_data->ptr;
  if (!tokenizer) {
    return NULL;
  }
  grn_tokenizer_token_fin(ctx, &(tokenizer->token));
  grn_tokenizer_query_close(ctx, tokenizer->query);
  GRN_OBJ_FIN(ctx, &(tokenizer->buffer));
  GRN_FREE(tokenizer);
  return NULL;
}

/* external */

grn_rc
grn_tokenizers_init(void)
{
  static grn_proc _grn_tokenizer_uvector;
  _grn_tokenizer_uvector.obj.db = NULL;
  _grn_tokenizer_uvector.obj.id = GRN_ID_NIL;
  _grn_tokenizer_uvector.obj.header.domain = GRN_ID_NIL;
  _grn_tokenizer_uvector.obj.range = GRN_ID_NIL;
  _grn_tokenizer_uvector.funcs[PROC_INIT] = uvector_init;
  _grn_tokenizer_uvector.funcs[PROC_NEXT] = uvector_next;
  _grn_tokenizer_uvector.funcs[PROC_FIN] = uvector_fin;
  grn_tokenizer_uvector = (grn_obj *)&_grn_tokenizer_uvector;
  return GRN_SUCCESS;
}

grn_rc
grn_tokenizers_fin(void)
{
  return GRN_SUCCESS;
}

grn_rc
grn_db_init_mecab_tokenizer(grn_ctx *ctx)
{
  switch (GRN_CTX_GET_ENCODING(ctx)) {
  case GRN_ENC_EUC_JP :
  case GRN_ENC_UTF8 :
  case GRN_ENC_SJIS :
#if defined(GRN_EMBEDDED) && defined(GRN_WITH_MECAB)
    {
      GRN_PLUGIN_DECLARE_FUNCTIONS(tokenizers_mecab);
      grn_rc rc;
      rc = GRN_PLUGIN_IMPL_NAME_TAGGED(init, tokenizers_mecab)(ctx);
      if (rc == GRN_SUCCESS) {
        rc = GRN_PLUGIN_IMPL_NAME_TAGGED(register, tokenizers_mecab)(ctx);
        if (rc != GRN_SUCCESS) {
          GRN_PLUGIN_IMPL_NAME_TAGGED(fin, tokenizers_mecab)(ctx);
        }
      }
      return rc;
    }
#else /* defined(GRN_EMBEDDED) && defined(GRN_WITH_MECAB) */
    {
      const char *mecab_plugin_name = "tokenizers/mecab";
      char *path;
      path = grn_plugin_find_path(ctx, mecab_plugin_name);
      if (path) {
        GRN_FREE(path);
        return grn_plugin_register(ctx, mecab_plugin_name);
      } else {
        return GRN_NO_SUCH_FILE_OR_DIRECTORY;
      }
    }
#endif /* defined(GRN_EMBEDDED) && defined(GRN_WITH_MECAB) */
    break;
  default :
    return GRN_OPERATION_NOT_SUPPORTED;
  }
}

#define DEF_TOKENIZER(name, init, next, fin, vars)\
  (grn_proc_create(ctx, (name), (sizeof(name) - 1),\
                   GRN_PROC_TOKENIZER, (init), (next), (fin), 3, (vars)))

grn_rc
grn_db_init_builtin_tokenizers(grn_ctx *ctx)
{
  grn_obj *obj;
  grn_expr_var vars[3];

  vars[0].name = NULL;
  vars[0].name_size = 0;
  GRN_TEXT_INIT(&vars[0].value, 0);
  vars[1].name = NULL;
  vars[1].name_size = 0;
  GRN_TEXT_INIT(&vars[1].value, 0);
  vars[2].name = NULL;
  vars[2].name_size = 0;
  GRN_UINT32_INIT(&vars[2].value, 0);

  {
    char grn_ngram_tokenizer_remove_blank_enable_env[GRN_ENV_BUFFER_SIZE];

    grn_getenv("GRN_NGRAM_TOKENIZER_REMOVE_BLANK_ENABLE",
               grn_ngram_tokenizer_remove_blank_enable_env,
               GRN_ENV_BUFFER_SIZE);
    if (grn_ngram_tokenizer_remove_blank_enable_env[0]) {
      if (strcmp(grn_ngram_tokenizer_remove_blank_enable_env, "no") == 0) {
        grn_ngram_tokenizer_remove_blank_enable = GRN_FALSE;
      } else {
        grn_ngram_tokenizer_remove_blank_enable = GRN_TRUE;
      }
    } else {
      /* Deprecated. Use GRN_NGRAM_TOKENIZER_REMOVE_BLANK_ENABLE instead. */
      char grn_ngram_tokenizer_remove_blank_disable_env[GRN_ENV_BUFFER_SIZE];

      grn_getenv("GRN_NGRAM_TOKENIZER_REMOVE_BLANK_DISABLE",
                 grn_ngram_tokenizer_remove_blank_disable_env,
                 GRN_ENV_BUFFER_SIZE);
      if (grn_ngram_tokenizer_remove_blank_disable_env[0]) {
        grn_ngram_tokenizer_remove_blank_enable = GRN_FALSE;
      }
    }
  }

  obj = DEF_TOKENIZER("TokenDelimit",
                      delimit_init, delimited_next, delimited_fin, vars);
  if (!obj || ((grn_db_obj *)obj)->id != GRN_DB_DELIMIT) { return GRN_FILE_CORRUPT; }
  obj = DEF_TOKENIZER("TokenUnigram",
                      unigram_init, ngram_next, ngram_fin, vars);
  if (!obj || ((grn_db_obj *)obj)->id != GRN_DB_UNIGRAM) { return GRN_FILE_CORRUPT; }
  obj = DEF_TOKENIZER("TokenBigram",
                      bigram_init, ngram_next, ngram_fin, vars);
  if (!obj || ((grn_db_obj *)obj)->id != GRN_DB_BIGRAM) { return GRN_FILE_CORRUPT; }
  obj = DEF_TOKENIZER("TokenTrigram",
                      trigram_init, ngram_next, ngram_fin, vars);
  if (!obj || ((grn_db_obj *)obj)->id != GRN_DB_TRIGRAM) { return GRN_FILE_CORRUPT; }

  DEF_TOKENIZER("TokenBigramSplitSymbol",
                bigrams_init, ngram_next, ngram_fin, vars);
  DEF_TOKENIZER("TokenBigramSplitSymbolAlpha",
                bigramsa_init, ngram_next, ngram_fin, vars);
  DEF_TOKENIZER("TokenBigramSplitSymbolAlphaDigit",
                bigramsad_init, ngram_next, ngram_fin, vars);
  DEF_TOKENIZER("TokenBigramIgnoreBlank",
                bigrami_init, ngram_next, ngram_fin, vars);
  DEF_TOKENIZER("TokenBigramIgnoreBlankSplitSymbol",
                bigramis_init, ngram_next, ngram_fin, vars);
  DEF_TOKENIZER("TokenBigramIgnoreBlankSplitSymbolAlpha",
                bigramisa_init, ngram_next, ngram_fin, vars);
  DEF_TOKENIZER("TokenBigramIgnoreBlankSplitSymbolAlphaDigit",
                bigramisad_init, ngram_next, ngram_fin, vars);
  DEF_TOKENIZER("TokenDelimitNull",
                delimit_null_init, delimited_next, delimited_fin, vars);
  DEF_TOKENIZER("TokenRegexp",
                regexp_init, regexp_next, regexp_fin, vars);
  DEF_TOKENIZER("TokenNgram",
                ngram_init, ngram_next, ngram_fin, vars);
  return GRN_SUCCESS;
}
