import { ProductList } from "@/modules/products/ui/components/product-list";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";

interface SubCategoryPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}
const SubCategoryPage = async ({ params }: SubCategoryPageProps) => {
  const { category, subcategory } = await params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpcServer.products.getMany.queryOptions({
      categorySlug: subcategory,
    })
  );
  return (
    <div>
      SubCategory {category}
      <br />
      <HydrateClient>
        <ProductList category={subcategory} />
      </HydrateClient>
    </div>
  );
};

export default SubCategoryPage;
