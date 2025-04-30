"use client";

import { useDogsFilters } from "@/modules/dogs/hooks/use-dogs-filters";
import { PriceFilter } from "@/modules/dogs/ui/components/price-filter";
import { DogFilterItem } from "@/modules/dogs/ui/components/dog-filter-item";
import { TagsFilter } from "@/modules/dogs/ui/components/tags-filter";

export const DogFilters = () => {
  const { filters, resetFilters, onChangeFilter, hasFilters } =
    useDogsFilters();

  return (
    <div className="border rounded-md bg-white min-w-full ">
      <div className="p-4 border-b flex items-center justify-between w-full">
        <p className="font-medium">Filters</p>
        {hasFilters && (
          <button className="underline" type="button" onClick={resetFilters}>
            Clear
          </button>
        )}
      </div>
      <DogFilterItem title="Price">
        <PriceFilter
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          onMaxPriceChange={(maxPrice) => onChangeFilter("maxPrice", maxPrice)}
          onMinPriceChange={(minPrice) => onChangeFilter("minPrice", minPrice)}
        />
      </DogFilterItem>
      <DogFilterItem title="Tags" className="border-b-0">
        <TagsFilter
          tags={filters.tags}
          onChange={(tag) => onChangeFilter("tags", tag)}
        />
      </DogFilterItem>
    </div>
  );
};