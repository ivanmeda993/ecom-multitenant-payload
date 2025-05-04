import { DogView, DogViewSkeleton } from "@/modules/dogs/ui/views/dog-view";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";
import { Suspense } from "react";

export const experimental_ppr = true;

interface DogPageProps {
  searchParams: Promise<SearchParams>;
  params: Promise<{
    slug: string;
    productId: string;
  }>;
}
const DogPage = async ({ params }: DogPageProps) => {
  const { slug, productId } = await params;

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(
    trpcServer.dogs.getOne.queryOptions({
      id: productId,
    })
  );

  return (
    <HydrateClient>
      <Suspense fallback={<DogViewSkeleton />}>
        <DogView tenantSlug={slug} dogId={productId} />
      </Suspense>
    </HydrateClient>
  );
};

export default DogPage;
