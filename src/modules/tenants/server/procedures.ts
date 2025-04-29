import { GET_ONE_TENANT_INPUTS_SCHEMA } from "@/modules/tenants/schema";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { TRPCError } from "@trpc/server";

export const tenantRouter = createTRPCRouter({
  getOne: baseProcedure
    .input(GET_ONE_TENANT_INPUTS_SCHEMA)
    .query(async ({ ctx: { payload }, input }) => {
      const data = await payload.find({
        collection: "tenants",
        limit: 1,
        pagination: false,
        where: {
          slug: {
            equals: input.slug,
          },
        },
      });

      const tenant = data.docs[0];

      if (!tenant) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Tenant not found",
        });
      }

      return tenant;
    }),
});
