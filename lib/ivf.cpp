// Copyright (C) 2025  Horimoto Yasuhiro <horimoto@clear-code.com>
//
// This library is free software; you can redistribute it and/or
// modify it under the terms of the GNU Lesser General Public
// License as published by the Free Software Foundation; either
// version 2.1 of the License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301 USA

#include "grn_ctx.h"
#include "grn_ivf.h"

#include <faiss/IndexFlat.h>

extern "C" {
grn_ivf *
grn_ivf_create(grn_ctx *ctx, const char *path, grn_obj *lexicon, uint32_t flags)
{
  auto ivf = static_cast<grn_ivf *>(GRN_CALLOC(sizeof(grn_ivf)));
  if (!ivf) {
    return NULL;
  }
  GRN_DB_OBJ_SET_TYPE(ivf, GRN_COLUMN_IVF_INDEX);
  return ivf;
}
}

