"use client";
import { withErrorBoundaryAndSuspense } from "@/components/error-suspense-hoc/with-error-boundary-and-suspense";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface ProductListProps {
  category?: string;
}

const ProductListContent = ({ category }: ProductListProps) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.products.getMany.queryOptions({
      categorySlug: category,
    })
  );
  return (
    <div>
      ProductList
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export const ProductList = withErrorBoundaryAndSuspense(ProductListContent);
