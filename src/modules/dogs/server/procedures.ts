import {
  GET_MANY_DOGS_INPUTS_SCHEMA,
  GET_ONE_DOG_INPUTS_SCHEMA,
} from "@/modules/dogs/schema";
import type { Media, Tenant } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import type { Sort, Where } from "payload";

export const dogsRouter = createTRPCRouter({
  getOne: baseProcedure
    .input(GET_ONE_DOG_INPUTS_SCHEMA)
    .query(async ({ ctx: { payload }, input }) => {
      const dog = await payload.findByID({
        collection: "dogs",
        id: input.id,
      });

      return {
        ...dog,
        tenant: dog.tenant as Tenant,
      };
    }),
  getMany: baseProcedure
    .input(GET_MANY_DOGS_INPUTS_SCHEMA)
    .query(async ({ ctx: { payload }, input }) => {
      const where: Where = {};
      let sort: Sort = "-createdAt";

      if (input.sort === "trending") {
        sort = "name";
      }

      if (input.sort === "curated") {
        sort = "-createdAt";
      }
      if (input.sort === "hot_and_new") {
        sort = "+createdAt";
      }

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

      if (input.tenantSlug) {
        where["tenant.slug"] = {
          equals: input.tenantSlug,
        };
      }

      if (input.categorySlug) {
        const categoriesData = await payload.find({
          collection: "categories",
          limit: 1,
          depth: 1,
          pagination: false,
          where: {
            slug: {
              equals: input.categorySlug,
            },
          },
        });

        const subcategories: string[] = [];
        const parentCategory = categoriesData.docs[0];
        if (parentCategory) {
          if (
            parentCategory?.subcategories?.docs &&
            parentCategory?.subcategories?.docs.length > 0
          ) {
            subcategories.push(
              ...parentCategory.subcategories.docs.map((subcategory) =>
                typeof subcategory === "object" && subcategory.slug
                  ? subcategory.slug
                  : ""
              )
            );
          }

          where["breed.slug"] = {
            in: [parentCategory.slug, ...subcategories],
          };
        }
      }

      if (input.tags && input.tags.length > 0) {
        where["tags.name"] = {
          in: input.tags,
        };
      }

      console.log("WHERE", where);

      const data = await payload.find({
        collection: "dogs",
        depth: 2,
        where,
        sort,
        page: input.cursor,
        limit: input.limit,
      });

      return {
        ...data,
        docs: data.docs.map((doc) => ({
          ...doc,
          image: doc.image as Media | null,
          tenant: doc.tenant as Tenant,
        })),
      };
    }),
});