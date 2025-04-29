import { DEFAULT_PAGE_LIMIT } from "@/constants";
import { loadProductFilters } from "@/modules/products/nuqs-filters";
import { ProductListView } from "@/modules/products/ui/views/product-list-view";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";

interface TenantsProps {
  searchParams: Promise<SearchParams>;
  params: Promise<{
    slug: string;
  }>;
}
const Tenants = async ({ params, searchParams }: TenantsProps) => {
  const { slug } = await params;
  const filters = await loadProductFilters(searchParams);

  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpcServer.products.getMany.infiniteQueryOptions({
      ...filters,
      tenantSlug: slug,
      limit: DEFAULT_PAGE_LIMIT,
    })
  );

  return (
    <HydrateClient>
      <ProductListView tenant={slug} narrowView />
    </HydrateClient>
  );
};

export default Tenants;
