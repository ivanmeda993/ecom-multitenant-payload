import type { Media } from "@/payload-types";
import type { AppRouter } from "@/trpc/routers/_app";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;

export type MediaType = Media | string | number | null | undefined; // for Payload media
