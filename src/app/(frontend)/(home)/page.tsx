import { DEFAULT_PAGE_LIMIT } from "@/constants";
import { loadProductFilters } from "@/modules/products/nuqs-filters";
import { ProductListView } from "@/modules/products/ui/views/product-list-view";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";

export const experimental_ppr = true;

interface Props {
  searchParams: Promise<SearchParams>;
}

const HomePage = async ({ searchParams }: Props) => {
  const filters = await loadProductFilters(searchParams);

  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpcServer.products.getMany.infiniteQueryOptions({
      ...filters,
      limit: DEFAULT_PAGE_LIMIT,
    })
  );

  return (
    <HydrateClient>
      <ProductListView />
    </HydrateClient>
  );
};

export default HomePage;
