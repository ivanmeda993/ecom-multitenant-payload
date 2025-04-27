import { loadProductFilters } from "@/modules/products/nuqs-filters";
import { ProductFilters } from "@/modules/products/ui/components/product-filters";
import { ProductList } from "@/modules/products/ui/components/product-list";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";
import { Suspense } from "react";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<SearchParams>;
};
const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { category } = await params;
  const filters = await loadProductFilters(searchParams);

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpcServer.products.getMany.queryOptions({
      categorySlug: category,
      ...filters,
    })
  );

  return (
    <HydrateClient>
      <div className="px-4 lg:px-12 py-8 flex flex-col gap-4">
        <div className="grid grid-col-1 lg:grid-cols-6 xl:grid-cols-8 gap-y-6 gap-x-16">
          <div className="lg:col-span-2 ">
            <ProductFilters />
          </div>
          <div className="lg:col-span-4 xl:col-span-6">
            <Suspense fallback={<div>Loading...</div>}>
              <ProductList category={category} />
            </Suspense>
          </div>
        </div>
      </div>
    </HydrateClient>
  );
};

export default CategoryPage;
