import { ProductFilters } from "@/modules/products/ui/components/product-filters";
import {
  ProductList,
  ProductListSkeleton,
} from "@/modules/products/ui/components/product-list";
import { ProductSort } from "@/modules/products/ui/components/product-sort";
import { Suspense } from "react";

interface ProductListViewProps {
  category?: string;
  tenant?: string;
  narrowView?: boolean;
}
export const ProductListView = async ({
  category,
  tenant,
  narrowView,
}: ProductListViewProps) => {
  return (
    <div className="px-4 lg:px-12 py-8 flex flex-col gap-4 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center  gap-y-2 lg:gap-y-0 justify-between">
        <p className="text-2xl font-medium">Curated for you</p>
        <ProductSort />
      </div>
      <div className="grid grid-col-1 lg:grid-cols-6 xl:grid-cols-8 gap-y-6 gap-x-16">
        <div className="lg:col-span-2 xl:col-span-2 overflow-hidden">
          <ProductFilters />
        </div>
        <div className="lg:col-span-4 xl:col-span-6 ">
          <Suspense fallback={<ProductListSkeleton narrowView={narrowView} />}>
            <ProductList
              category={category}
              tenant={tenant}
              narrowView={narrowView}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
