"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { checkForSubcategories } from "@/lib/check-category";
import type {
  CategoriesGetManyOutput,
  CategoriesGetManyOutputSingle,
} from "@/modules/categories/types";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CategoriesSidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}
export const CategoriesSidebar = ({
  onOpenChange,
  isOpen,
}: CategoriesSidebarProps) => {
  const trpc = useTRPC();
  const { data, isFetching, isPending } = useQuery(
    trpc.categories.getMany.queryOptions()
  );

  const [parentCategories, setParentCategories] =
    useState<CategoriesGetManyOutput | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoriesGetManyOutputSingle | null>();
  const router = useRouter();

  const currentCategories = parentCategories ?? data ?? [];

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    setParentCategories(null);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category: CategoriesGetManyOutputSingle) => {
    if (category.subcategories && category.subcategories.length > 0) {
      setSelectedCategory(category);
      setParentCategories(category?.subcategories as CategoriesGetManyOutput);
    } else {
      if (parentCategories && selectedCategory) {
        router.push(`/${selectedCategory.slug}/${category.slug}`);
      } else {
        router.push(`/${category.slug}`);
      }

      handleOpenChange(false);
    }
  };

  const handleBackClick = () => {
    setParentCategories(null);
    setSelectedCategory(null);
  };

  const backgroundColor = selectedCategory?.color || "white";

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent
        side="left"
        className="p-0 transition-none"
        style={{ backgroundColor }}
      >
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {parentCategories && (
            <button
              type="button"
              className="w-full text-left font-medium text-base hover:bg-black hover:text-white flex items-center p-4"
              onClick={handleBackClick}
            >
              <ChevronLeft />
              Back
            </button>
          )}
          {currentCategories.map((category) => {
            const hasSubcategories = checkForSubcategories(category);
            return (
              <button
                key={category.id}
                type="button"
                className="w-full text-left font-medium text-base hover:bg-black hover:text-white flex items-center p-4 justify-between"
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
                {hasSubcategories && <ChevronRight className="size-4" />}
              </button>
            );
          })}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
