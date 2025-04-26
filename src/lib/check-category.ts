import type { CategoriesGetManyOutputSingle } from "@/modules/categories/types";
import type { Category } from "@/payload-types";

export const checkForSubcategories = (
  category: CategoriesGetManyOutputSingle
) =>
  category.subcategories?.docs &&
  category?.subcategories.docs?.length > 0 &&
  typeof category.subcategories.docs[0] !== "string"
    ? (category.subcategories.docs as unknown as Category[])
    : false;

export const checkCollection = <T>(item: string | T): item is T =>
  typeof item === "object" && item !== null;
