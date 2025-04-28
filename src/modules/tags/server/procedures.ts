import { GET_MANY_TAGS_INPUTS_SCHEMA } from "@/modules/tags/schema";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const tagsRouter = createTRPCRouter({
  getMany: baseProcedure
    .input(GET_MANY_TAGS_INPUTS_SCHEMA)
    .query(async ({ ctx: { payload }, input }) => {
      const data = await payload.find({
        collection: "tags",
        page: input.cursor,
        limit: input.limit,
      });

      return data;
    }),
});
