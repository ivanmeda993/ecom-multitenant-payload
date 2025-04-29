import { z } from "zod";

export const GET_ONE_TENANT_INPUTS_SCHEMA = z.object({
  slug: z.string(),
});

export type GetOneTenantInputs = z.infer<typeof GET_ONE_TENANT_INPUTS_SCHEMA>;
