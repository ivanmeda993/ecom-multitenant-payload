"use client";
import { BreadcrumbsNavigation } from "@/modules/home/search-filters/breadcrumbs-navigation";
import { Categories } from "@/modules/home/search-filters/categories";
import { SearchInput } from "@/modules/home/search-filters/search-input";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const SearchFilters = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  const params = useParams();
  const categoryParam = params.category as string | undefined;
  const activeCategorySlug = categoryParam || "all";
  const activeCategoryData = data?.find(
    (category) => category.slug === activeCategorySlug
  );
  const activeCategoryName = activeCategoryData?.name;
  const activeSubcategory = params.subcategory as string | undefined;
  const activeSubcategoryName =
    activeCategoryData?.subcategories?.find(
      (subcategory) => subcategory.slug === activeSubcategory
    )?.name || null;

  return (
    <div
      className="flex w-full flex-col gap-4 border-b px-4 py-8 lg:px-12 border-black"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <SearchInput />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
      <BreadcrumbsNavigation
        activeCategorySlug={activeCategorySlug}
        activeCategoryName={activeCategoryName}
        activeSubcategoryName={activeSubcategoryName}
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
