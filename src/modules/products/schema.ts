import { sortValues } from "@/modules/products/nuqs-filters";
import { z } from "zod";

export const GET_MANY_PRODUCTS_INPUTS_SCHEMA = z.object({
  categorySlug: z.string().nullable().optional(),
  minPrice: z.string().nullable().optional(),
  maxPrice: z.string().nullable().optional(),
  tags: z.array(z.string()).nullable().optional(),
  sort: z.enum(sortValues).nullable().optional(),
});

export type GetManyProductsInputs = z.infer<
  typeof GET_MANY_PRODUCTS_INPUTS_SCHEMA
>;
