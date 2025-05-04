import type { RouterOutput } from "@/types";

export type BreedsGetManyOutput = RouterOutput["breeds"]["getMany"];
export type BreedsGetManyOutputSingle = BreedsGetManyOutput[0];
export type BreedsGetManyOutputSingleBreed =
  BreedsGetManyOutputSingle["breeds"][0];
