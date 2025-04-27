import { ProductList } from "@/modules/products/ui/components/product-list";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};
const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = await params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpcServer.products.getMany.queryOptions({
      categorySlug: category,
    })
  );

  return (
    <div>
      CategoryPage {category}
      <br />
      <HydrateClient>
        <ProductList category={category} />
      </HydrateClient>
    </div>
  );
};

export default CategoryPage;
