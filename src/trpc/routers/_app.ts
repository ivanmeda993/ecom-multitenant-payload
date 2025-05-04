import { authRouter } from "@/modules/auth/server/procedures";
import { breedsRouter } from "@/modules/breeds/server/procedures";
import { dogsRouter } from "@/modules/dogs/server/procedures";
import { tagsRouter } from "@/modules/tags/server/procedures";
import { tenantRouter } from "@/modules/tenants/server/procedures";
import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  auth: authRouter,

  tenants: tenantRouter,
  breeds: breedsRouter,
  tags: tagsRouter,
  dogs: dogsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
