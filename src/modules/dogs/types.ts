import type { RouterOutput } from "@/types";

export type DogsGetManyOutput = RouterOutput["dogs"]["getMany"];
export type DogsGetManyOutputSingle = DogsGetManyOutput["docs"][0];
