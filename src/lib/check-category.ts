import type { BreedsGetManyOutputSingle } from "@/modules/breeds/types";

export const checkForSubbreeds = (breed: BreedsGetManyOutputSingle) =>
  breed.breeds && breed?.breeds.length > 0;

export const checkCollection = <T>(item: string | T): item is T =>
  typeof item === "object" && item !== null;
