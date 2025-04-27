import { z } from "zod";

export const GET_MANY_PRODUCTS_INPUTS_SCHEMA = z.object({
  categorySlug: z.string().nullable().optional(),
  minPrice: z.string().nullable().optional(),
  maxPrice: z.string().nullable().optional(),
});

export type GetManyProductsInputs = z.infer<
  typeof GET_MANY_PRODUCTS_INPUTS_SCHEMA
>;
