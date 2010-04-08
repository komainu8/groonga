/* -*- c-basic-offset: 2; coding: utf-8 -*- */
/*
  Copyright (C) 2008-2009  Kouhei Sutou <kou@cozmixng.org>

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License version 2.1 as published by the Free Software Foundation.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this library; if not, write to the Free Software
  Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
*/

#ifndef __GRN_ASSERTIONS_H__
#define __GRN_ASSERTIONS_H__

#include "grn-test-utils.h"

#define grn_test_assert(expression, ...)                        \
  cut_trace_with_info_expression(                               \
    cut_test_with_user_message(                                 \
      grn_test_assert_helper((expression), #expression),        \
      __VA_ARGS__),                                             \
    grn_test_assert(expression))

#define grn_test_assert_equal_rc(expected, actual, ...)         \
  cut_trace_with_info_expression(                               \
    cut_test_with_user_message(                                 \
      grn_test_assert_equal_rc_helper((expected), (actual),     \
                                      #expected, #actual),      \
      __VA_ARGS__),                                             \
    grn_test_assert_equal_rc(expected, actual))

#define grn_test_assert_nil(expression, ...)                    \
  cut_trace_with_info_expression(                               \
    cut_test_with_user_message(                                 \
      grn_test_assert_nil_helper((expression), #expression),    \
      __VA_ARGS__),                                             \
    grn_test_assert_nil(expression))

#define grn_test_assert_not_nil(expression, ...)                        \
  cut_trace_with_info_expression(                                       \
    cut_test_with_user_message(                                         \
      grn_test_assert_not_nil_helper((expression), #expression),        \
      __VA_ARGS__),                                                     \
    grn_test_assert_not_nil(expression))

#define grn_test_assert_context(context, ...)                   \
  cut_trace_with_info_expression(                               \
    cut_test_with_user_message(                                 \
      grn_test_assert_context_helper((context), #context),      \
      __VA_ARGS__),                                             \
    grn_test_assert_context(context))

#define grn_test_assert_error(rc, message, context, ...)                \
  cut_trace_with_info_expression(                                       \
    cut_test_with_user_message(                                         \
      grn_test_assert_error_helper((rc), (message), (context), #context), \
      __VA_ARGS__),                                                     \
    grn_test_assert_error(context))

#define grn_test_assert_null(context, object, ...)                      \
  cut_trace_with_info_expression(                                       \
    cut_test_with_user_message(                                         \
      grn_test_assert_null_helper((context), (object), #object),        \
      __VA_ARGS__),                                                     \
    grn_test_assert_null(context, object))

#define grn_test_assert_not_null(context, object, ...)                  \
  cut_trace_with_info_expression(                                       \
    cut_test_with_user_message(                                         \
      grn_test_assert_not_null_helper((context), (object), #object),    \
      __VA_ARGS__),                                                     \
    grn_test_assert_not_null(context, object))

#define grn_test_assert_select(context, expected, select_result,        \
                               text_column, ...)                        \
  cut_trace_with_info_expression(                                       \
    cut_test_with_user_message(                                         \
      grn_test_assert_select_helper((context), (expected),              \
                                    (select_result), (text_column),     \
                                    #expected,                          \
                                    #select_result, #text_column),      \
      __VA_ARGS__),                                                     \
    grn_test_assert_select(context, expected, select_result))

#define grn_test_assert_expr(context, inspected, expr, ...)             \
  cut_trace_with_info_expression(                                       \
    cut_test_with_user_message(                                         \
      grn_test_assert_expr_helper((context), (inspected), (expr),       \
                                  #inspected, #expr),                   \
      __VA_ARGS__),                                                     \
    grn_test_assert_expr(context, inspected, expr))

#define grn_test_assert_equal_encoding(expected, actual, ...)           \
  cut_trace_with_info_expression(                                       \
    cut_test_with_user_message(                                         \
      grn_test_assert_equal_encoding_helper((expected), (actual),       \
                                            #expected, #actual),        \
      __VA_ARGS__),                                                     \
    grn_test_assert_equal_encoding(expected, actual))

#define grn_test_assert_equal_view(context, expected, view,             \
                                   text_column_name, ...)               \
  cut_trace_with_info_expression(                                       \
    cut_test_with_user_message(                                         \
      grn_test_assert_equal_view_helper((context), (expected), (view),  \
                                        (text_column_name),             \
                                        #expected, #view,               \
                                        #text_column_name),             \
      __VA_ARGS__),                                                     \
    grn_test_assert_equal_view(context, expected, view, text_column_name))



void     grn_test_assert_helper         (grn_rc       rc,
                                         const gchar *expression);
void     grn_test_assert_equal_rc_helper(grn_rc       expected,
                                         grn_rc       actual,
                                         const gchar *expression_expected,
                                         const gchar *expression_actual);
void     grn_test_assert_nil_helper     (grn_id       id,
                                         const gchar *expression);
void     grn_test_assert_not_nil_helper (grn_id       id,
                                         const gchar *expression);
void     grn_test_assert_context_helper (grn_ctx     *context,
                                         const gchar *expression);
void     grn_test_assert_error_helper   (grn_rc       expected_rc,
                                         const gchar *expected_message,
                                         grn_ctx     *context,
                                         const gchar *expression);
void     grn_test_assert_null_helper    (grn_ctx     *context,
                                         grn_obj     *object,
                                         const gchar *expression);
void     grn_test_assert_not_null_helper(grn_ctx     *context,
                                         grn_obj     *object,
                                         const gchar *expression);
void     grn_test_assert_select_helper  (grn_ctx     *context,
                                         const GList *expected,
                                         grn_obj     *select_result,
                                         grn_obj     *text_column,
                                         const gchar *expected_expression,
                                         const gchar *select_result_expression,
                                         const gchar *text_column_expression);
void     grn_test_assert_expr_helper    (grn_ctx     *context,
                                         const gchar *inspected,
                                         grn_obj     *expr,
                                         const gchar *inspected_expression,
                                         const gchar *expr_expression);
void     grn_test_assert_equal_encoding_helper
                                        (grn_encoding expected,
                                         grn_encoding actual,
                                         const gchar *expression_expected,
                                         const gchar *expression_actual);
void     grn_test_assert_equal_view_helper
                                        (grn_ctx     *context,
                                         const GList *expected,
                                         grn_obj     *view,
                                         const gchar *text_column_name,
                                         const gchar *expected_expression,
                                         const gchar *view_expression,
                                         const gchar *text_column_name_expression);

#endif
