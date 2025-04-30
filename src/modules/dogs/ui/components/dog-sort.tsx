"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDogsFilters } from "@/modules/dogs/hooks/use-dogs-filters";

export const DogSort = () => {
  const { filters, onChangeFilter } = useDogsFilters();
  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        className={cn(
          "rounded-full bg-white hover:bg-white",
          filters.sort !== "curated" &&
            "bg-transparent border-transparent hover:border-border hover:bg-transparent"
        )}
        variant="secondary"
        onClick={() => onChangeFilter("sort", "curated")}
      >
        Curated
      </Button>
      <Button
        size="sm"
        className={cn(
          "rounded-full bg-white hover:bg-white",
          filters.sort !== "trending" &&
            "bg-transparent border-transparent hover:border-border hover:bg-transparent"
        )}
        variant="secondary"
        onClick={() => onChangeFilter("sort", "trending")}
      >
        Trending
      </Button>
      <Button
        size="sm"
        className={cn(
          "rounded-full bg-white hover:bg-white",
          filters.sort !== "hot_and_new" &&
            "bg-transparent border-transparent hover:border-border hover:bg-transparent"
        )}
        variant="secondary"
        onClick={() => onChangeFilter("sort", "hot_and_new")}
      >
        Hot & New
      </Button>
    </div>
  );
};