import { DEFAULT_PAGE_LIMIT } from "@/constants";
import { loadProductFilters } from "@/modules/products/nuqs-filters";
import { ProductListView } from "@/modules/products/ui/views/product-list-view";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";
import { Suspense } from "react";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<SearchParams>;
};
export const experimental_ppr = true;

export const dynamic = "force-dynamic";

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { category } = await params;
  const filters = await loadProductFilters(searchParams);

  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpcServer.products.getMany.infiniteQueryOptions({
      ...filters,
      categorySlug: category,
      limit: DEFAULT_PAGE_LIMIT,
    })
  );

  return (
    <HydrateClient>
      <Suspense fallback={<div>loading</div>}>
        <ProductListView category={category} />
      </Suspense>
    </HydrateClient>
  );
};

export default CategoryPage;
