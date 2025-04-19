import { checkCollection, checkForSubcategories } from "@/lib/check-category";
import type { Category } from "@/payload-types";
import Link from "next/link";

interface SubcategoryMenuProps {
  category: Category;
  isOpen: boolean;
  position: { top: number; left: number };
}
export const SubcategoryMenu = ({
  category,
  isOpen,
  position,
}: SubcategoryMenuProps) => {
  const hasSubcategories = checkForSubcategories(category);

  if (!isOpen || !hasSubcategories) {
    return null;
  }

  const bgColor = category.color || "#F5F5F5";
  return (
    <div
      className="fixed z-[100] border-primary shadow-xl drop-shadow-2xl"
      style={{ ...position }}
    >
      <div className="h-3 w-52" />
      <div
        className="-translate-x-[2px] -translate-y-[2px] w-52 overflow-hidden rounded-md text-black shadow-xl drop-shadow-xl "
        style={{ backgroundColor: bgColor }}
      >
        <div>
          {category.subcategories?.docs?.map((subcategory) => {
            const isCategory = checkCollection(subcategory);
            if (!isCategory) return null;

            return (
              <Link
                key={subcategory.id}
                href="/"
                className="flex w-full items-center justify-between px-3 py-2 text-left font-medium hover:bg-black hover:text-white hover:underline"
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
