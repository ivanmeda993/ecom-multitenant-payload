import { params } from "@/modules/products/nuqs-filters";
import { useQueryStates } from "nuqs";

export const useProductFilters = () => {
  const [filters, setFilters] = useQueryStates(params);

  const hasAnyFilters = Object.entries(filters).some(([key, value]) => {
    if (key === "sort") return false;

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    if (typeof value === "string") {
      return value !== "";
    }

    return value !== null;
  });

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
    hasFilters: hasAnyFilters,
    resetFilters,
    onChangeFilter,
  };
};
