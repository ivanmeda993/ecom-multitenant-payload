"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useProductFilters } from "@/modules/products/hooks/use-product-filters";
import {
  ProductCard,
  ProductCardSkeleton,
} from "@/modules/products/ui/components/product-card";
import { useTRPC } from "@/trpc/client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { InboxIcon } from "lucide-react";

interface ProductListProps {
  category?: string;
  tenant?: string;
  narrowView?: boolean;
}

export const ProductList = ({
  category,
  tenant,
  narrowView,
}: ProductListProps) => {
  const { filters } = useProductFilters();
  const trpc = useTRPC();
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery(
      trpc.products.getMany.infiniteQueryOptions(
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
        <p>No products found</p>
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
          .map((product) => (
            <ProductCard
              key={product.id}
              productImage={product.image}
              authorUsername={`${product.tenant.name}'s store`}
              tenantSlug={product.tenant.slug}
              authorAvatar={product.tenant?.image}
              id={product.id}
              name={product.name}
              price={product.price}
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

interface ProductListSkeletonProps {
  narrowView?: boolean;
}
export const ProductListSkeleton = ({
  narrowView,
}: ProductListSkeletonProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4",
        narrowView && "lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  gap-4"
      )}
    >
      {[...new Array(3)].map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};
