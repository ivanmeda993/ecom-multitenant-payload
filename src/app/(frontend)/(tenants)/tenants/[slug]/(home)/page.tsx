import { DEFAULT_PAGE_LIMIT } from "@/constants";
import { loadDogFilters } from "@/modules/dogs/nuqs-filters";
import { DogListView } from "@/modules/dogs/ui/views/dog-list-view";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";

export const experimental_ppr = true;

interface TenantsProps {
  searchParams: Promise<SearchParams>;
  params: Promise<{
    slug: string;
  }>;
}
const Tenants = async ({ params, searchParams }: TenantsProps) => {
  const { slug } = await params;
  const filters = await loadDogFilters(searchParams);

  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpcServer.dogs.getMany.infiniteQueryOptions({
      ...filters,
      tenantSlug: slug,
      limit: DEFAULT_PAGE_LIMIT,
    })
  );

  return (
    <HydrateClient>
      <DogListView tenant={slug} narrowView />
    </HydrateClient>
  );
};

export default Tenants;
