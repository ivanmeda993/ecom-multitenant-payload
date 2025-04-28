import { DEFAULT_PAGE_LIMIT } from "@/constants";
import { z } from "zod";

export const GET_MANY_TAGS_INPUTS_SCHEMA = z.object({
  cursor: z.number().default(1),
  limit: z.number().default(DEFAULT_PAGE_LIMIT),
});

export type GetManyProductsInputs = z.infer<typeof GET_MANY_TAGS_INPUTS_SCHEMA>;
