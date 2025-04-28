import { loadProductFilters } from "@/modules/products/nuqs-filters";
import { ProductList } from "@/modules/products/ui/components/product-list";
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
      categorySlug: "all",
      ...filters,
    }),
    {
      infiniteQuery: true,
    }
  );

  return (
    <HydrateClient>
      <ProductList />
    </HydrateClient>
  );
};

export default HomePage;
