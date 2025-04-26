import { SearchFilters } from "@/components/search-filters/index";
import { HydrateClient, prefetch, trpcServer } from "@/trpc/server";

export const SearchFilterServer = async () => {
  void prefetch(trpcServer.categories.getMany.queryOptions());
  return (
    <HydrateClient>
      <SearchFilters />
    </HydrateClient>
  );
};
