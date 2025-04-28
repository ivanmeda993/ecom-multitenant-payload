import { params } from "@/modules/products/nuqs-filters";
import { useQueryStates } from "nuqs";

export const useProductFilters = () => {
  const [filters, setFilters] = useQueryStates(params);
  console.log("FILTERS", filters);

  const hasFilters = Object.values(filters).some(Boolean);

  const resetFilters = async () => {
    await setFilters(
      Object.fromEntries(
        Object.entries(filters).map(([key, value]) => [key, null])
      )
    );
  };

  const onChangeFilter = async (key: keyof typeof filters, value: unknown) => {
    await setFilters({
      ...filters,
      [key]: value,
    });
  };
  return {
    filters,
    setFilters,
    hasFilters,
    resetFilters,
    onChangeFilter,
  };
};
