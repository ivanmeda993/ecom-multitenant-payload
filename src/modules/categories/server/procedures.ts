import type { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx: { payload } }) => {
    const data = await payload.find({
      collection: "category",
      pagination: false,
      depth: 1,
      where: {
        parent: {
          exists: false,
        },
      },
      sort: "name",
    });

    const formatedData = data.docs.map((doc) => ({
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((subcategory) => ({
        ...(subcategory as Category),
        subcategories: undefined,
      })),
    }));

    return formatedData;
  }),
});
