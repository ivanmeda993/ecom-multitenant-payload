import { ProductView } from "@/modules/products/ui/views/product-view";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";

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
      <ProductView tenantSlug={slug} productId={productId} />
    </HydrateClient>
  );
};

export default ProductPage;
