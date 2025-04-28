"use client";

import { useProductFilters } from "@/modules/products/hooks/use-product-filters";
import { PriceFilter } from "@/modules/products/ui/components/price-filter";
import { ProductFilterItem } from "@/modules/products/ui/components/product-filter-item";
import { TagsFilter } from "@/modules/products/ui/components/tags-filter";

export const ProductFilters = () => {
  const { filters, resetFilters, onChangeFilter, hasFilters } =
    useProductFilters();

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
      <ProductFilterItem title="Price">
        <PriceFilter
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          onMaxPriceChange={(maxPrice) => onChangeFilter("maxPrice", maxPrice)}
          onMinPriceChange={(minPrice) => onChangeFilter("minPrice", minPrice)}
        />
      </ProductFilterItem>
      <ProductFilterItem title="Tags" className="border-b-0">
        <TagsFilter
          tags={filters.tags}
          onChange={(tag) => onChangeFilter("tags", tag)}
        />
      </ProductFilterItem>
    </div>
  );
};
