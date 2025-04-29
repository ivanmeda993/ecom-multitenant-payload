import {
  ProductView,
  ProductViewSkeleton,
} from "@/modules/products/ui/views/product-view";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";
import { Suspense } from "react";

export const experimental_ppr = true;

interface ProductPageProps {
  searchParams: Promise<SearchParams>;
  params: Promise<{
    slug: string;
    productId: string;
  }>;
}
const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(
    trpcServer.products.getOne.queryOptions({
      id: productId,
    })
  );

  return (
    <HydrateClient>
      <Suspense fallback={<ProductViewSkeleton />}>
        <ProductView tenantSlug={slug} productId={productId} />
      </Suspense>
    </HydrateClient>
  );
};

export default ProductPage;
