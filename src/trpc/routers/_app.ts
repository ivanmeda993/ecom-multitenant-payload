import { authRouter } from "@/modules/auth/server/procedures";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import { dogsRouter } from "@/modules/dogs/server/procedures";
import { productsRouter } from "@/modules/products/server/procedures";
import { tagsRouter } from "@/modules/tags/server/procedures";
import { tenantRouter } from "@/modules/tenants/server/procedures";
import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  auth: authRouter,

  tenants: tenantRouter,
  categories: categoriesRouter,
  tags: tagsRouter,
  products: productsRouter,
  dogs: dogsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
