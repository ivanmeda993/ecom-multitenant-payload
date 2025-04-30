"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDogsFilters } from "@/modules/dogs/hooks/use-dogs-filters";
import {
  DogCard,
  DogCardSkeleton,
} from "@/modules/dogs/ui/components/dog-card";
import { useTRPC } from "@/trpc/client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { InboxIcon } from "lucide-react";

interface DogListProps {
  category?: string;
  tenant?: string;
  narrowView?: boolean;
}

export const DogList = ({
  category,
  tenant,
  narrowView,
}: DogListProps) => {
  const { filters } = useDogsFilters();
  const trpc = useTRPC();
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery(
      trpc.dogs.getMany.infiniteQueryOptions(
        {
          categorySlug: category,
          tenantSlug: tenant,
          ...filters,
        },
        {
          getNextPageParam: (lastPage) =>
            lastPage.docs.length > 0 ? lastPage.nextPage : undefined,
        }
      )
    );
  if (data.pages?.[0]?.docs?.length === 0) {
    return (
      <div className="border border-black border-dashed flex flex-col items-center justify-center p-8 bg-white w-full rounded-lg">
        <InboxIcon />
        <p>No dogs found</p>
      </div>
    );
  }
  return (
    <>
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4",
          narrowView && "lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  gap-4"
        )}
      >
        {data?.pages
          .flatMap((page) => page.docs)
          .map((dog) => (
            <DogCard
              key={dog.id}
              dogImage={dog.image}
              authorUsername={`${dog.tenant.name}'s store`}
              tenantSlug={dog.tenant.slug}
              authorAvatar={dog.tenant?.image}
              id={dog.id}
              name={dog.name}
              price={dog.price}
              age={dog.age}
              reviewCount={10}
              reviewRating={10}
            />
          ))}
      </div>
      <div className="flex justify-center pt-8 ">
        {hasNextPage && (
          <Button
            variant="link"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="underline font-medium justify-start text-start disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Load more
          </Button>
        )}
      </div>
    </>
  );
};

interface DogListSkeletonProps {
  narrowView?: boolean;
}
export const DogListSkeleton = ({
  narrowView,
}: DogListSkeletonProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4",
        narrowView && "lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  gap-4"
      )}
    >
      {[...new Array(3)].map((_, index) => (
        <DogCardSkeleton key={index} />
      ))}
    </div>
  );
};