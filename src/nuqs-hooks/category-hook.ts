import { parseAsString, useQueryStates } from "nuqs";
import { useTransition } from "react";

export function useCategoryState() {
  const [isPending, startTransition] = useTransition();
  const [{ category, subCategory }, setParams] = useQueryStates({
    category: parseAsString.withDefault("all").withOptions({
      shallow: false,
      history: "push",
      startTransition,
    }),
    subCategory: parseAsString.withDefault("").withOptions({
      shallow: false,
      history: "push",
      startTransition,
    }),
  });
  const setCategorySlug = async (category: string | null) =>
    await setParams({ category });

  const setSubCategorySlug = async (subCategory: string | null) =>
    await setParams({ subCategory });

  return {
    categorySlug: category,
    setCategorySlug,
    subCategorySlug: subCategory,
    setSubCategorySlug,
    isPending,
  };
}
