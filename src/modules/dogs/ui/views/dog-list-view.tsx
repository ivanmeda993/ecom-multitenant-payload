import { DogFilters } from "@/modules/dogs/ui/components/dog-filters";
import {
  DogList,
  DogListSkeleton,
} from "@/modules/dogs/ui/components/dog-list";
import { DogSort } from "@/modules/dogs/ui/components/dog-sort";
import { Suspense } from "react";

interface DogListViewProps {
  breedGroup?: string;
  breed?: string;
  tenant?: string;
  narrowView?: boolean;
}
export const DogListView = async ({
  breedGroup,
  breed,
  tenant,
  narrowView,
}: DogListViewProps) => {
  return (
    <div className="px-4 lg:px-12 py-8 flex flex-col gap-4 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center  gap-y-2 lg:gap-y-0 justify-between">
        <p className="text-2xl font-medium">Curated Dogs for You</p>
        <DogSort />
      </div>
      <div className="grid grid-col-1 lg:grid-cols-6 xl:grid-cols-8 gap-y-6 gap-x-16">
        <div className="lg:col-span-2 xl:col-span-2 overflow-hidden">
          <DogFilters />
        </div>
        <div className="lg:col-span-4 xl:col-span-6 ">
          <Suspense fallback={<DogListSkeleton narrowView={narrowView} />}>
            <DogList
              breedGroup={breedGroup}
              breed={breed}
              tenant={tenant}
              narrowView={narrowView}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
