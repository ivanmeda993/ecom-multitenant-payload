import { Categories } from "@/components/search-filters/categories";
import { SearchInput } from "@/components/search-filters/search-input";
import type { Category } from "@/payload-types";

interface SearchFiltersProps {
  data: Category[];
}

export const SearchFilters = ({ data }: SearchFiltersProps) => {
  return (
    <div className="flex w-full flex-col gap-4 border-b px-4 py-8 lg:px-12 border-black">
      <SearchInput data={data} />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
    </div>
  );
};
