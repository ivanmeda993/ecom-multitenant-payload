import {
  SearchFilters,
  SearchFiltersSkeleton,
} from "@/modules/home/search-filters/search-filter-client";
import { HydrateClient, prefetch, trpcServer } from "@/trpc/server";
import { Suspense } from "react";

export const SearchFilterServer = async () => {
  void prefetch(trpcServer.breeds.getMany.queryOptions());
  return (
    <HydrateClient>
      <Suspense fallback={<SearchFiltersSkeleton />}>
        <SearchFilters />
      </Suspense>
    </HydrateClient>
  );
};
