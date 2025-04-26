import type { RouterOutput } from "@/types";

export type CategoriesGetManyOutput = RouterOutput["categories"]["getMany"];
export type CategoriesGetManyOutputSingle = CategoriesGetManyOutput[0];
