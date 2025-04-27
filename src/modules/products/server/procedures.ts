import { GET_MANY_PRODUCTS_INPUTS_SCHEMA } from "@/modules/products/schema";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import type { Where } from "payload";

export const productsRouter = createTRPCRouter({
  getMany: baseProcedure
    .input(GET_MANY_PRODUCTS_INPUTS_SCHEMA)
    .query(async ({ ctx: { payload }, input }) => {
      const where: Where = {};

      if (input.minPrice && input.maxPrice) {
        where.price = {
          greater_than_equal: input.minPrice,
          less_than_equal: input.maxPrice,
        };
      } else if (input.minPrice) {
        where.price = {
          greater_than_equal: input.minPrice,
        };
      } else if (input.maxPrice) {
        where.price = {
          less_than_equal: input.maxPrice,
        };
      }

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

          where["category.slug"] = {
            in: [parentCategory.slug, ...subcategories],
          };
        }
      }

      console.log("WHERE", where);

      const data = await payload.find({
        collection: "products",
        depth: 1,
        where,
      });

      return data;
    }),
});
