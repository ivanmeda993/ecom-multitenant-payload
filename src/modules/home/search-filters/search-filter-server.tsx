import { SearchFilters } from "@/modules/home/search-filters/search-filter-client";
import { HydrateClient, prefetch, trpcServer } from "@/trpc/server";

export const SearchFilterServer = async () => {
  void prefetch(trpcServer.categories.getMany.queryOptions());
  return (
    <HydrateClient>
      <SearchFilters />
    </HydrateClient>
  );
};
