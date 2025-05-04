import {
  GET_MANY_DOGS_INPUTS_SCHEMA,
  GET_ONE_DOG_INPUTS_SCHEMA,
} from "@/modules/dogs/schema";
import type { Breed, Media, Tenant } from "@/payload-types";
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

      if (input.breedGroupSlug) {
        const breedsData = await payload.find({
          collection: "breedGroups",
          limit: 1,
          depth: 1,
          pagination: false,
          where: {
            slug: {
              equals: input.breedGroupSlug,
            },
          },
        });

        const breeds: string[] = [];
        const parentBreedGroup = breedsData.docs[0];
        if (parentBreedGroup) {
          if (
            parentBreedGroup?.breeds?.docs &&
            parentBreedGroup?.breeds?.docs.length > 0
          ) {
            breeds.push(
              ...parentBreedGroup.breeds.docs.map((breed) =>
                typeof breed === "object" && breed.slug ? breed.slug : ""
              )
            );
          }

          where["breed.slug"] = {
            in: [...breeds],
          };
        }
      }

      if (input.breedSlug) {
        where["breed.slug"] = {
          equals: input.breedSlug,
        };
      }

      if (input.tags && input.tags.length > 0) {
        where["tags.name"] = {
          in: input.tags,
        };
      }

      if (input.sex && input.sex !== "all") {
        where.sex = {
          equals: input.sex,
        };
      }
      console.log("INPUT", input);
      console.log("WHERE DOGS QUERY", where);

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
          breed: doc.breed as Breed,
          tenant: doc.tenant as Tenant,
        })),
      };
    }),
});
