import type { RouterOutput } from "@/types";

export type DogsGetManyOutput = RouterOutput["categories"]["getMany"];
export type DogsGetManyOutputSingle = DogsGetManyOutput[0];