"use client";

import { withErrorBoundaryAndSuspense } from "@/components/error-suspense-hoc/with-error-boundary-and-suspense";
import { Categories } from "@/components/search-filters/categories";
import { SearchInput } from "@/components/search-filters/search-input";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

const SearchFiltersContent = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());
  return (
    <div
      className="flex w-full flex-col gap-4 border-b px-4 py-8 lg:px-12 border-black"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <SearchInput />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
    </div>
  );
};

const SearchFiltersSkeleton = () => {
  return (
    <div
      className="flex w-full flex-col gap-4 border-b px-4 py-8 lg:px-12 border-black"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <SearchInput disabled />
      <div className="hidden lg:block">
        <div className="h-11" />
      </div>
    </div>
  );
};

export const SearchFilters = withErrorBoundaryAndSuspense(
  SearchFiltersContent,
  {
    loadingFallback: <SearchFiltersSkeleton />,
  }
);
