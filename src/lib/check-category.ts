import type { CategoriesGetManyOutputSingle } from "@/modules/categories/types";

export const checkForSubcategories = (
  category: CategoriesGetManyOutputSingle
) => category.subcategories && category?.subcategories.length > 0;

export const checkCollection = <T>(item: string | T): item is T =>
  typeof item === "object" && item !== null;
