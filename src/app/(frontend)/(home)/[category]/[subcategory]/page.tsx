import { ProductListView } from "@/modules/products/ui/views/product-list-view";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";

interface SubCategoryPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}
const SubCategoryPage = async ({ params }: SubCategoryPageProps) => {
  const { subcategory } = await params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpcServer.products.getMany.queryOptions({
      categorySlug: subcategory,
    })
  );
  return (
    <HydrateClient>
      <ProductListView category={subcategory} />
    </HydrateClient>
  );
};

export default SubCategoryPage;
