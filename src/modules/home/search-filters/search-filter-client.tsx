"use client";
import { BreadcrumbsNavigation } from "@/modules/home/search-filters/breadcrumbs-navigation";
import { Breeds } from "@/modules/home/search-filters/breeds";
import { SearchInput } from "@/modules/home/search-filters/search-input";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const SearchFilters = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.breeds.getMany.queryOptions());

  const params = useParams();
  const breedParam = params.breed as string | undefined;
  const activeBreedSlug = breedParam || "all";
  const activeBreedData = data?.find((breed) => breed.slug === activeBreedSlug);
  const activeBreedName = activeBreedData?.name;
  const activeSubbreed = params.subbreed as string | undefined;
  const activeSubBreedName =
    activeBreedData?.breeds?.find(
      (subbreed) => subbreed.slug === activeSubbreed
    )?.name || null;

  return (
    <div
      className="flex w-full flex-col gap-4 border-b px-4 py-8 lg:px-12 border-black"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <SearchInput />
      <div className="hidden lg:block ">
        <Breeds data={data} />
      </div>
      <BreadcrumbsNavigation
        activeBreedSlug={activeBreedSlug}
        activeBreedName={activeBreedName ?? null}
        activeSubBreedName={activeSubBreedName}
      />
    </div>
  );
};

export const SearchFiltersSkeleton = () => {
  return (
    <div
      className="flex w-full flex-col gap-4 border-b px-4 py-8 lg:px-12 border-black"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <SearchInput disabled />
      <div className="hidden lg:block">
        <div className="h-9" />
      </div>
    </div>
  );
};
