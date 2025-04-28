import { loadProductFilters } from "@/modules/products/nuqs-filters";
import { ProductListView } from "@/modules/products/ui/views/product-list-view";
import { HydrateClient, prefetch, trpcServer } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";

interface Props {
  searchParams: Promise<SearchParams>;
}

export const dynamic = "force-dynamic";

const HomePage = async ({ searchParams }: Props) => {
  const filters = await loadProductFilters(searchParams);
  void prefetch(
    trpcServer.products.getMany.queryOptions({
      ...filters,
    }),
    {
      infiniteQuery: true,
    }
  );

  return (
    <HydrateClient>
      <ProductListView />
    </HydrateClient>
  );
};

export default HomePage;
