import { DEFAULT_PAGE_LIMIT } from "@/constants";
import { loadProductFilters } from "@/modules/products/nuqs-filters";
import { ProductListView } from "@/modules/products/ui/views/product-list-view";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";
import { Suspense } from "react";

interface SubCategoryPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
  searchParams: Promise<SearchParams>;
}

export const dynamic = "force-dynamic";
const SubCategoryPage = async ({
  params,
  searchParams,
}: SubCategoryPageProps) => {
  const { subcategory } = await params;
  const filters = await loadProductFilters(searchParams);

  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpcServer.products.getMany.infiniteQueryOptions({
      ...filters,
      categorySlug: subcategory,
      limit: DEFAULT_PAGE_LIMIT,
    })
  );
  return (
    <HydrateClient>
      <Suspense fallback={<div>loading</div>}>
        <ProductListView category={subcategory} />
      </Suspense>
    </HydrateClient>
  );
};

export default SubCategoryPage;
