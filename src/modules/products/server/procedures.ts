import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import type { Where } from "payload";
import { z } from "zod";

export const productsRouter = createTRPCRouter({
  getMany: baseProcedure
    .input(
      z.object({
        categorySlug: z.string().nullable().optional(),
      })
    )
    .query(async ({ ctx: { payload }, input }) => {
      const where: Where = {};
      if (input.categorySlug) {
        const categoriesData = await payload.find({
          collection: "category",
          limit: 1,
          depth: 1,
          pagination: false,
          where: {
            slug: {
              equals: input.categorySlug,
            },
          },
        });

        const subcategories = [];
        const parentCategory = categoriesData.docs[0];
        if (parentCategory) {
          if (
            parentCategory?.subcategories?.docs &&
            parentCategory?.subcategories?.docs.length > 0
          ) {
            subcategories.push(
              ...parentCategory.subcategories.docs.map(
                (subcategory) =>
                  typeof subcategory === "object" && subcategory.slug
              )
            );
          }

          console.log("subcategories", subcategories);
          where["category.slug"] = {
            in: [parentCategory.slug, ...subcategories],
          };
        }
      }
      const data = await payload.find({
        collection: "products",
        depth: 1,
        where,
      });

      return data;
    }),
});
