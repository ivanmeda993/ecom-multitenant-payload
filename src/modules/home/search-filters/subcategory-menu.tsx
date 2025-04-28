import { checkCollection, checkForSubcategories } from "@/lib/check-category";
import type { CategoriesGetManyOutputSingle } from "@/modules/categories/types";
import Link from "next/link";

interface SubcategoryMenuProps {
  category: CategoriesGetManyOutputSingle;
  isOpen: boolean;
}
export const SubcategoryMenu = ({ category, isOpen }: SubcategoryMenuProps) => {
  const hasSubcategories = checkForSubcategories(category);

  if (!isOpen || !hasSubcategories) {
    return null;
  }

  const bgColor = category.color || "#F5F5F5";
  return (
    <div
      className="absolute z-[100] border-primary shadow-xl drop-shadow-2xl"
      style={{ top: "100%", left: 0 }}
    >
      <div className="h-3 w-52" />
      <div
        className="-translate-x-[2px] -translate-y-[2px] w-52 overflow-hidden rounded-md text-black shadow-xl drop-shadow-xl "
        style={{ backgroundColor: bgColor }}
      >
        <div>
          {category.subcategories?.map((subcategory) => {
            const isCategory = checkCollection(subcategory);
            if (!isCategory) return null;

            return (
              <Link
                key={subcategory.id}
                href={`/${category.slug}/${subcategory.slug}`}
                className="flex w-full items-center justify-between px-3 py-2 text-left font-medium hover:bg-black hover:text-white "
              >
                {subcategory.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
