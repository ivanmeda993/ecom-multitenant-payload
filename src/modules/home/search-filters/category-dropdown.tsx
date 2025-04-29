"use client";
import { Button } from "@/components/ui/button";
import { checkForSubcategories } from "@/lib/check-category";
import { cn } from "@/lib/utils";
import type { CategoriesGetManyOutputSingle } from "@/modules/categories/types";
import { SubcategoryMenu } from "@/modules/home/search-filters/subcategory-menu";
import Link from "next/link";
import { useRef, useState } from "react";

interface CategoryDropdownProps {
  category: CategoriesGetManyOutputSingle;
  isNavigationHovered?: boolean;
  isActive: boolean;
}
export const CategoryDropdown = ({
  category,
  isActive,
}: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hasSubcategories = checkForSubcategories(category);

  const onMouseEnter = () => hasSubcategories && setIsOpen(true);
  const onMouseLeave = () => setIsOpen(false);
  // const toggleDropdown = () => {
  //   if (hasSubcategories) {
  //     setIsOpen((prev) => !prev);
  //   }
  // };

  return (
    // biome-ignore lint/nursery/noStaticElementInteractions: <explanation>
    <div
      className="relative "
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <Button
          className={cn(
            "rounded-lg px-2 py-1    hover:no-underline cursor-pointer hover:scale-105 hover:font-semibold",
            isActive &&
              "scale-105 border-primary underline text-primary hover:underline font-bold",
            isOpen && "scale-105 font-semibold"
          )}
          variant="link"
          asChild
        >
          <Link href={`/${category.slug === "all" ? "" : category.slug}`}>
            {category.name}
          </Link>
        </Button>
        {hasSubcategories && isOpen && (
          <div
            className={cn(
              "-bottom-3 -translate-x-1/2 absolute left-1/2 h-0 w-0 border-r-[10px] border-r-transparent border-b-[10px] border-b-black border-l-[10px] border-l-transparent opacity-20",
              isOpen && "opacity-100"
            )}
          />
        )}
      </div>

      <SubcategoryMenu category={category} isOpen={isOpen} />
    </div>
  );
};
