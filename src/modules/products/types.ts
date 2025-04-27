import type { RouterOutput } from "@/types";

export type ProductsGetManyOutput = RouterOutput["categories"]["getMany"];
export type ProductsGetManyOutputSingle = ProductsGetManyOutput[0];
