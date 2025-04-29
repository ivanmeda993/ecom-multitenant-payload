import { DEFAULT_PAGE_LIMIT } from "@/constants";
import { sortValues } from "@/modules/products/nuqs-filters";
import { z } from "zod";

export const GET_MANY_PRODUCTS_INPUTS_SCHEMA = z.object({
  cursor: z.number().default(1),
  limit: z.number().default(DEFAULT_PAGE_LIMIT),
  categorySlug: z.string().nullable().optional(),
  minPrice: z.string().nullable().optional(),
  maxPrice: z.string().nullable().optional(),
  tags: z.array(z.string()).nullable().optional(),
  sort: z.enum(sortValues).nullable().optional(),
  tenantSlug: z.string().nullable().optional(),
});

export type GetManyProductsInputs = z.infer<
  typeof GET_MANY_PRODUCTS_INPUTS_SCHEMA
>;
