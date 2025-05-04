import { DEFAULT_PAGE_LIMIT } from "@/constants";
import { loadDogFilters } from "@/modules/dogs/nuqs-filters";
import { DogListView } from "@/modules/dogs/ui/views/dog-list-view";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";
import { Suspense } from "react";

interface SubCategoryPageProps {
  params: Promise<{
    breed: string;
    subbreed: string;
  }>;
  searchParams: Promise<SearchParams>;
}

export const dynamic = "force-dynamic";
const SubCategoryPage = async ({
  params,
  searchParams,
}: SubCategoryPageProps) => {
  const { breed, subbreed } = await params;
  const filters = await loadDogFilters(searchParams);

  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpcServer.dogs.getMany.infiniteQueryOptions({
      ...filters,
      breedGroupSlug: breed,
      breedSlug: subbreed,
      limit: DEFAULT_PAGE_LIMIT,
    })
  );
  return (
    <HydrateClient>
      <Suspense fallback={<div>loading</div>}>
        <DogListView breed={subbreed} />
      </Suspense>
    </HydrateClient>
  );
};

export default SubCategoryPage;
