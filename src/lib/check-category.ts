import type { Category } from "@/payload-types";

export const checkForSubcategories = (category: Category) =>
  category.subcategories?.docs && category?.subcategories?.docs?.length > 0;

export const checkCollection = <T>(item: string | T): item is T =>
  typeof item === "object" && item !== null;
