import { DEFAULT_PAGE_LIMIT } from "@/constants";
import { sexValues, sortValues } from "@/modules/dogs/nuqs-filters";
import { z } from "zod";

export const GET_ONE_DOG_INPUTS_SCHEMA = z.object({
  id: z.string(),
});

export const GET_MANY_DOGS_INPUTS_SCHEMA = z.object({
  cursor: z.number().default(1),
  limit: z.number().default(DEFAULT_PAGE_LIMIT),
  breedGroupSlug: z.string().nullable().optional(),
  breedSlug: z.string().nullable().optional(),
  minPrice: z.string().nullable().optional(),
  maxPrice: z.string().nullable().optional(),
  tags: z.array(z.string()).nullable().optional(),
  sex: z.enum(sexValues).nullable().optional(),
  sort: z.enum(sortValues).nullable().optional(),
  tenantSlug: z.string().nullable().optional(),
});

export type GetManyDogsInputs = z.infer<typeof GET_MANY_DOGS_INPUTS_SCHEMA>;
