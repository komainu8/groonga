/* -*- c-basic-offset: 2 -*- */
/*
  Copyright(C) 2013-2014 Brazil

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

#include "../ctx_impl.h"

#ifdef GRN_WITH_MRUBY
#include <mruby.h>
#include <mruby/class.h>
#include <mruby/variable.h>
#include <mruby/data.h>
#include <mruby/array.h>

#include "../expr.h"
#include "../util.h"
#include "../mrb.h"
#include "mrb_accessor.h"
#include "mrb_expr.h"
#include "mrb_converter.h"

static struct mrb_data_type mrb_grn_scan_info_type = {
  "Groonga::ScanInfo",
  NULL
};
static struct mrb_data_type mrb_grn_expr_code_type = {
  "Groonga::ExpressionCode",
  NULL
};
static struct mrb_data_type mrb_grn_expression_type = {
  "Groonga::Expression",
  NULL
};

static mrb_value
mrb_grn_scan_info_new(mrb_state *mrb, scan_info *scan_info)
{
  grn_ctx *ctx = (grn_ctx *)mrb->ud;
  struct RClass *module = ctx->impl->mrb.module;
  struct RClass *klass;
  mrb_value mrb_scan_info;

  mrb_scan_info = mrb_cptr_value(mrb, scan_info);
  klass = mrb_class_get_under(mrb, module, "ScanInfo");
  return mrb_obj_new(mrb, klass, 1, &mrb_scan_info);
}

static mrb_value
mrb_grn_expr_code_new(mrb_state *mrb, grn_expr_code *code)
{
  grn_ctx *ctx = (grn_ctx *)mrb->ud;
  struct RClass *module = ctx->impl->mrb.module;
  struct RClass *klass;
  mrb_value mrb_code;

  mrb_code = mrb_cptr_value(mrb, code);
  klass = mrb_class_get_under(mrb, module, "ExpressionCode");
  return mrb_obj_new(mrb, klass, 1, &mrb_code);
}

static scan_info **
scan_info_build(grn_ctx *ctx, grn_obj *expr, int *n,
                grn_operator op, uint32_t size)
{
  grn_obj *var;
  scan_stat stat;
  int i, m = 0, o = 0;
  scan_info **sis, *si = NULL;
  grn_expr_code *c, *ce;
  grn_expr *e = (grn_expr *)expr;
  mrb_state *mrb = ctx->impl->mrb.state;
  mrb_value mrb_expr;
  mrb_value mrb_var;
  mrb_value mrb_si;

  mrb_expr = grn_mrb_value_from_grn_obj(mrb, expr);
  mrb_var = mrb_funcall(mrb, mrb_expr,
                        "get_var_by_offset", 1, mrb_fixnum_value(0));
  if (mrb_nil_p(mrb_var)) {
    return NULL;
  }

  var = mrb_cptr(mrb_var);
  for (stat = SCAN_START, c = e->codes, ce = &e->codes[e->codes_curr]; c < ce; c++) {
    switch (c->op) {
    case GRN_OP_MATCH :
    case GRN_OP_NEAR :
    case GRN_OP_NEAR2 :
    case GRN_OP_SIMILAR :
    case GRN_OP_PREFIX :
    case GRN_OP_SUFFIX :
    case GRN_OP_EQUAL :
    case GRN_OP_NOT_EQUAL :
    case GRN_OP_LESS :
    case GRN_OP_GREATER :
    case GRN_OP_LESS_EQUAL :
    case GRN_OP_GREATER_EQUAL :
    case GRN_OP_GEO_WITHINP5 :
    case GRN_OP_GEO_WITHINP6 :
    case GRN_OP_GEO_WITHINP8 :
    case GRN_OP_TERM_EXTRACT :
      if (stat < SCAN_COL1 || SCAN_CONST < stat) { return NULL; }
      stat = SCAN_START;
      m++;
      break;
    case GRN_OP_AND :
    case GRN_OP_OR :
    case GRN_OP_AND_NOT :
    case GRN_OP_ADJUST :
      if (stat != SCAN_START) { return NULL; }
      o++;
      if (o >= m) { return NULL; }
      break;
    case GRN_OP_PUSH :
      stat = (c->value == var) ? SCAN_VAR : SCAN_CONST;
      break;
    case GRN_OP_GET_VALUE :
      switch (stat) {
      case SCAN_START :
      case SCAN_CONST :
      case SCAN_VAR :
        stat = SCAN_COL1;
        break;
      case SCAN_COL1 :
        stat = SCAN_COL2;
        break;
      case SCAN_COL2 :
        break;
      default :
        return NULL;
        break;
      }
      break;
    case GRN_OP_CALL :
      if ((c->flags & GRN_EXPR_CODE_RELATIONAL_EXPRESSION) || c + 1 == ce) {
        stat = SCAN_START;
        m++;
      } else {
        stat = SCAN_COL2;
      }
      break;
    default :
      return NULL;
      break;
    }
  }
  if (stat || m != o + 1) { return NULL; }
  if (!(sis = GRN_MALLOCN(scan_info *, m + m + o))) { return NULL; }
  for (i = 0, stat = SCAN_START, c = e->codes, ce = &e->codes[e->codes_curr]; c < ce; c++) {
    switch (c->op) {
    case GRN_OP_MATCH :
    case GRN_OP_NEAR :
    case GRN_OP_NEAR2 :
    case GRN_OP_SIMILAR :
    case GRN_OP_PREFIX :
    case GRN_OP_SUFFIX :
    case GRN_OP_EQUAL :
    case GRN_OP_NOT_EQUAL :
    case GRN_OP_LESS :
    case GRN_OP_GREATER :
    case GRN_OP_LESS_EQUAL :
    case GRN_OP_GREATER_EQUAL :
    case GRN_OP_GEO_WITHINP5 :
    case GRN_OP_GEO_WITHINP6 :
    case GRN_OP_GEO_WITHINP8 :
    case GRN_OP_TERM_EXTRACT :
      stat = SCAN_START;
      mrb_si = mrb_grn_scan_info_new(mrb, si);
      mrb_funcall(mrb, mrb_si, "op=", 1, mrb_fixnum_value(c->op));
      mrb_funcall(mrb, mrb_si, "end=", 1, mrb_fixnum_value(c - e->codes));
      sis[i++] = si;
      mrb_funcall(mrb, mrb_si, "match_resolve_index", 0);
      si = NULL;
      break;
    case GRN_OP_AND :
    case GRN_OP_OR :
    case GRN_OP_AND_NOT :
    case GRN_OP_ADJUST :
      if (!grn_scan_info_put_logical_op(ctx, sis, &i, c->op, c - e->codes)) { return NULL; }
      stat = SCAN_START;
      break;
    case GRN_OP_PUSH :
      if (!si) {
        si = grn_scan_info_open(ctx, c - e->codes);
        if (!si) {
          int j;
          for (j = 0; j < i; j++) { grn_scan_info_close(ctx, sis[j]); }
          GRN_FREE(sis);
          return NULL;
        }
      }
      if (c->value == var) {
        stat = SCAN_VAR;
      } else {
        mrb_si = mrb_grn_scan_info_new(mrb, si);
        mrb_funcall(mrb, mrb_si, "push_arg",
                    1, grn_mrb_value_from_grn_obj(mrb, c->value));
        if (stat == SCAN_START) { grn_scan_info_set_flags(si, grn_scan_info_get_flags(si) | SCAN_PRE_CONST); }
        stat = SCAN_CONST;
      }
      break;
    case GRN_OP_GET_VALUE :
      switch (stat) {
      case SCAN_START :
        if (!si) {
          si = grn_scan_info_open(ctx, c - e->codes);
          if (!si) {
            int j;
            for (j = 0; j < i; j++) { grn_scan_info_close(ctx, sis[j]); }
            GRN_FREE(sis);
            return NULL;
          }
        }
        // fallthru
      case SCAN_CONST :
      case SCAN_VAR :
        stat = SCAN_COL1;
        mrb_si = mrb_grn_scan_info_new(mrb, si);
        mrb_funcall(mrb, mrb_si, "push_arg",
                    1, grn_mrb_value_from_grn_obj(mrb, c->value));
        break;
      case SCAN_COL1 :
        {
          int j;
          grn_obj inspected;
          GRN_TEXT_INIT(&inspected, 0);
          GRN_TEXT_PUTS(ctx, &inspected, "<");
          grn_inspect_name(ctx, &inspected, c->value);
          GRN_TEXT_PUTS(ctx, &inspected, ">: <");
          grn_inspect(ctx, &inspected, expr);
          GRN_TEXT_PUTS(ctx, &inspected, ">");
          ERR(GRN_INVALID_ARGUMENT,
              "invalid expression: can't use column as a value: %.*s",
              (int)GRN_TEXT_LEN(&inspected), GRN_TEXT_VALUE(&inspected));
          GRN_OBJ_FIN(ctx, &inspected);
          for (j = 0; j < i; j++) { grn_scan_info_close(ctx, sis[j]); }
          GRN_FREE(sis);
          return NULL;
        }
        stat = SCAN_COL2;
        break;
      case SCAN_COL2 :
        break;
      default :
        break;
      }
      break;
    case GRN_OP_CALL :
      if (!si) {
        si = grn_scan_info_open(ctx, c - e->codes);
        if (!si) {
          int j;
          for (j = 0; j < i; j++) { grn_scan_info_close(ctx, sis[j]); }
          GRN_FREE(sis);
          return NULL;
        }
      }
      if ((c->flags & GRN_EXPR_CODE_RELATIONAL_EXPRESSION) || c + 1 == ce) {
        stat = SCAN_START;
        mrb_si = mrb_grn_scan_info_new(mrb, si);
        mrb_funcall(mrb, mrb_si, "op=", 1, mrb_fixnum_value(c->op));
        mrb_funcall(mrb, mrb_si, "end=", 1, mrb_fixnum_value(c - e->codes));
        sis[i++] = si;
        mrb_funcall(mrb, mrb_si, "call_relational_resolve_indexes", 0);
        si = NULL;
      } else {
        stat = SCAN_COL2;
      }
      break;
    default :
      break;
    }
  }
  if (op == GRN_OP_OR && !size) {
    // for debug
    if (!(grn_scan_info_get_flags(sis[0]) & SCAN_PUSH) || (grn_scan_info_get_logical_op(sis[0]) != op)) {
      int j;
      ERR(GRN_INVALID_ARGUMENT, "invalid expr");
      for (j = 0; j < i; j++) { grn_scan_info_close(ctx, sis[j]); }
      GRN_FREE(sis);
      return NULL;
    } else {
      grn_scan_info_set_flags(sis[0], grn_scan_info_get_flags(sis[0]) & ~SCAN_PUSH);
      grn_scan_info_set_logical_op(sis[0], op);
    }
  } else {
    if (!grn_scan_info_put_logical_op(ctx, sis, &i, op, c - e->codes)) { return NULL; }
  }
  *n = i;
  return sis;
}

static mrb_value
mrb_grn_expr_build(mrb_state *mrb, mrb_value self)
{
  int *n;
  uint32_t size;
  scan_info **sis;
  grn_operator op;
  grn_obj *expr;
  grn_ctx *ctx = (grn_ctx *)mrb->ud;
  mrb_value mrb_expr, mrb_n;

  mrb_get_args(mrb, "ooii", &mrb_expr, &mrb_n, &op, &size);
  expr = mrb_cptr(mrb_expr);
  n = mrb_cptr(mrb_n);

  sis = scan_info_build(ctx, expr, n, op, size);
  return mrb_cptr_value(mrb, sis);
}

static mrb_value
mrb_grn_scan_info_initialize(mrb_state *mrb, mrb_value self)
{
  mrb_value mrb_ptr;

  mrb_get_args(mrb, "o", &mrb_ptr);
  DATA_TYPE(self) = &mrb_grn_scan_info_type;
  DATA_PTR(self) = mrb_cptr(mrb_ptr);
  return self;
}

static mrb_value
mrb_grn_expr_code_initialize(mrb_state *mrb, mrb_value self)
{
  mrb_value mrb_code;

  mrb_get_args(mrb, "o", &mrb_code);
  DATA_TYPE(self) = &mrb_grn_expr_code_type;
  DATA_PTR(self) = mrb_cptr(mrb_code);
  return self;
}

static mrb_value
mrb_grn_scan_info_put_index(mrb_state *mrb, mrb_value self)
{
  int sid;
  int32_t weight;
  scan_info *si;
  grn_ctx *ctx = (grn_ctx *)mrb->ud;
  grn_obj *index;
  mrb_value mrb_index;

  mrb_get_args(mrb, "oii", &mrb_index, &sid, &weight);
  si = DATA_PTR(self);
  index = DATA_PTR(mrb_index);
  grn_scan_info_put_index(ctx, si, index, sid, weight);
  return self;
}

static mrb_value
mrb_grn_scan_info_get_op(mrb_state *mrb, mrb_value self)
{
  scan_info *si;
  grn_operator op;

  si = DATA_PTR(self);
  op = grn_scan_info_get_op(si);
  return mrb_fixnum_value(op);
}

static mrb_value
mrb_grn_scan_info_set_op(mrb_state *mrb, mrb_value self)
{
  scan_info *si;
  grn_operator op;

  mrb_get_args(mrb, "i", &op);
  si = DATA_PTR(self);
  grn_scan_info_set_op(si, op);
  return self;
}

static mrb_value
mrb_grn_scan_info_set_end(mrb_state *mrb, mrb_value self)
{
  scan_info *si;
  int end;

  mrb_get_args(mrb, "i", &end);
  si = DATA_PTR(self);
  grn_scan_info_set_end(si, end);
  return self;
}

static mrb_value
mrb_grn_scan_info_set_query(mrb_state *mrb, mrb_value self)
{
  scan_info *si;
  mrb_value mrb_query;

  mrb_get_args(mrb, "o", &mrb_query);
  si = DATA_PTR(self);
  grn_scan_info_set_query(si, DATA_PTR(mrb_query));
  return self;
}

static mrb_value
mrb_grn_scan_info_set_flags(mrb_state *mrb, mrb_value self)
{
  scan_info *si;
  int flags;

  mrb_get_args(mrb, "i", &flags);
  si = DATA_PTR(self);
  grn_scan_info_set_flags(si, flags);
  return self;
}

static mrb_value
mrb_grn_scan_info_get_flags(mrb_state *mrb, mrb_value self)
{
  scan_info *si;
  int flags;

  si = DATA_PTR(self);
  flags = grn_scan_info_get_flags(si);
  return mrb_fixnum_value(flags);
}

static mrb_value
mrb_grn_scan_info_get_arg(mrb_state *mrb, mrb_value self)
{
  grn_ctx *ctx = (grn_ctx *)mrb->ud;
  scan_info *si;
  int index;
  grn_obj *arg;

  mrb_get_args(mrb, "i", &index);

  si = DATA_PTR(self);
  arg = grn_scan_info_get_arg(ctx, si, index);

  return grn_mrb_value_from_grn_obj(mrb, arg);
}

static mrb_value
mrb_grn_scan_info_push_arg(mrb_state *mrb, mrb_value self)
{
  scan_info *si;
  mrb_value mrb_arg;
  grn_bool success;

  mrb_get_args(mrb, "o", &mrb_arg);

  si = DATA_PTR(self);
  success = grn_scan_info_push_arg(si, DATA_PTR(mrb_arg));

  return mrb_bool_value(success);
}

static mrb_value
mrb_grn_expr_code_get_weight(mrb_state *mrb, mrb_value self)
{
  grn_ctx *ctx = (grn_ctx *)mrb->ud;

  return mrb_fixnum_value(grn_expr_code_get_weight(ctx, DATA_PTR(self)));
}

static mrb_value
mrb_grn_expr_code_get_value(mrb_state *mrb, mrb_value self)
{
  grn_expr_code *expr_code;

  expr_code = DATA_PTR(self);
  return grn_mrb_value_from_grn_obj(mrb, expr_code->value);
}

static mrb_value
mrb_grn_expr_code_get_op(mrb_state *mrb, mrb_value self)
{
  grn_expr_code *expr_code;

  expr_code = DATA_PTR(self);
  return mrb_fixnum_value(expr_code->op);
}

static mrb_value
mrb_grn_expr_code_get_flags(mrb_state *mrb, mrb_value self)
{
  grn_expr_code *expr_code;

  expr_code = DATA_PTR(self);
  return mrb_fixnum_value(expr_code->flags);
}

static mrb_value
mrb_grn_expression_initialize(mrb_state *mrb, mrb_value self)
{
  mrb_value mrb_expression_ptr;

  mrb_get_args(mrb, "o", &mrb_expression_ptr);
  DATA_TYPE(self) = &mrb_grn_expression_type;
  DATA_PTR(self) = mrb_cptr(mrb_expression_ptr);
  return self;
}

static mrb_value
mrb_grn_expression_codes(mrb_state *mrb, mrb_value self)
{
  grn_expr *expr;
  mrb_value mrb_codes;
  int i;

  expr = DATA_PTR(self);
  mrb_codes = mrb_ary_new_capa(mrb, expr->codes_curr);
  for (i = 0; i < expr->codes_curr; i++) {
    grn_expr_code *code = expr->codes + i;
    mrb_ary_push(mrb, mrb_codes, mrb_grn_expr_code_new(mrb, code));
  }

  return mrb_codes;
}

static mrb_value
mrb_grn_expression_get_var_by_offset(mrb_state *mrb, mrb_value self)
{
  grn_ctx *ctx = (grn_ctx *)mrb->ud;
  grn_obj *expr;
  mrb_int offset;
  grn_obj *var;

  mrb_get_args(mrb, "i", &offset);

  expr = DATA_PTR(self);
  var = grn_expr_get_var_by_offset(ctx, expr, offset);
  return grn_mrb_value_from_grn_obj(mrb, var);
}

void
grn_mrb_expr_init(grn_ctx *ctx)
{
  mrb_state *mrb = ctx->impl->mrb.state;
  struct RClass *module = ctx->impl->mrb.module;
  struct RClass *object_class = ctx->impl->mrb.object_class;
  struct RClass *klass;

  mrb_define_class_method(mrb, module,
                          "build", mrb_grn_expr_build, MRB_ARGS_REQ(4));

  klass = mrb_define_class_under(mrb, module, "ScanInfo", mrb->object_class);
  MRB_SET_INSTANCE_TT(klass, MRB_TT_DATA);
  mrb_define_method(mrb, klass, "initialize",
                    mrb_grn_scan_info_initialize, MRB_ARGS_REQ(1));
  mrb_define_method(mrb, klass, "put_index",
                    mrb_grn_scan_info_put_index, MRB_ARGS_REQ(3));
  mrb_define_method(mrb, klass, "op",
                    mrb_grn_scan_info_get_op, MRB_ARGS_NONE());
  mrb_define_method(mrb, klass, "op=",
                    mrb_grn_scan_info_set_op, MRB_ARGS_REQ(1));
  mrb_define_method(mrb, klass, "end=",
                    mrb_grn_scan_info_set_end, MRB_ARGS_REQ(1));
  mrb_define_method(mrb, klass, "query=",
                    mrb_grn_scan_info_set_query, MRB_ARGS_REQ(1));
  mrb_define_method(mrb, klass, "flags",
                    mrb_grn_scan_info_get_flags, MRB_ARGS_NONE());
  mrb_define_method(mrb, klass, "flags=",
                    mrb_grn_scan_info_set_flags, MRB_ARGS_REQ(1));
  mrb_define_method(mrb, klass, "get_arg",
                    mrb_grn_scan_info_get_arg, MRB_ARGS_REQ(1));
  mrb_define_method(mrb, klass, "push_arg",
                    mrb_grn_scan_info_push_arg, MRB_ARGS_REQ(1));

  klass = mrb_define_class_under(mrb, module,
                                 "ExpressionCode", mrb->object_class);
  MRB_SET_INSTANCE_TT(klass, MRB_TT_DATA);
  mrb_define_method(mrb, klass, "initialize",
                    mrb_grn_expr_code_initialize, MRB_ARGS_REQ(1));
  mrb_define_method(mrb, klass, "weight",
                    mrb_grn_expr_code_get_weight, MRB_ARGS_NONE());
  mrb_define_method(mrb, klass, "value",
                    mrb_grn_expr_code_get_value, MRB_ARGS_NONE());
  mrb_define_method(mrb, klass, "op",
                    mrb_grn_expr_code_get_op, MRB_ARGS_NONE());
  mrb_define_method(mrb, klass, "flags",
                    mrb_grn_expr_code_get_flags, MRB_ARGS_NONE());

  klass = mrb_define_class_under(mrb, module, "Expression", object_class);
  MRB_SET_INSTANCE_TT(klass, MRB_TT_DATA);
  mrb_define_method(mrb, klass, "initialize",
                    mrb_grn_expression_initialize, MRB_ARGS_REQ(1));
  mrb_define_method(mrb, klass, "codes",
                    mrb_grn_expression_codes, MRB_ARGS_NONE());
  mrb_define_method(mrb, klass, "get_var_by_offset",
                    mrb_grn_expression_get_var_by_offset, MRB_ARGS_REQ(1));

  grn_mrb_load(ctx, "expression.rb");
  grn_mrb_load(ctx, "scan_info.rb");
}

scan_info **
grn_mrb_scan_info_build(grn_ctx *ctx, grn_obj *expr, int *n,
                        grn_operator op, uint32_t size)
{
  scan_info **sis;
  mrb_state *mrb = ctx->impl->mrb.state;
  mrb_value mrb_sis;

  mrb_sis = mrb_funcall(mrb, mrb_obj_value(ctx->impl->mrb.module), "build", 4,
                        mrb_cptr_value(mrb, expr),
                        mrb_cptr_value(mrb, n),
                        mrb_fixnum_value(op),
                        mrb_fixnum_value(size));
  sis = mrb_cptr(mrb_sis);
  return sis;
}
#endif
