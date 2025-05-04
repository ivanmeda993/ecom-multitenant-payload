import type { Breed, BreedGroup } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const breedsRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx: { payload } }) => {
    const data = await payload.find({
      collection: "breedGroups",
      pagination: false,
      depth: 2,

      sort: "name",
    });

    const formatedData = data.docs.map((doc) => ({
      ...(doc as BreedGroup),
      breeds: (doc.breeds?.docs ?? []).map((breed) => ({
        ...(breed as Breed),
      })),
    }));

    return formatedData;
  }),
});
