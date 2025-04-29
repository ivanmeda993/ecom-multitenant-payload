"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CategoriesGetManyOutput } from "@/modules/categories/types";
import { ListFilterIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { CategoriesSidebar } from "./categories-sidebar";
import { CategoryDropdown } from "./category-dropdown";

interface CategoriesProps {
  data: CategoriesGetManyOutput;
}

export const Categories = ({ data }: CategoriesProps) => {
  const params = useParams();

  const categoriesWithAll: CategoriesGetManyOutput = [
    {
      id: "all",
      slug: "all",
      name: "All",
      subcategories: [],
      updatedAt: new Date().toDateString(),
      createdAt: new Date().toDateString(),
    },
    ...data,
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(categoriesWithAll.length);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categoryParam = params?.category as string | undefined;
  const activeCategory = categoryParam || "all";

  const activeCategoryIndex = categoriesWithAll.findIndex(
    (category) => category.slug === activeCategory
  );

  const isCategoryHidden =
    activeCategoryIndex >= visibleCount && activeCategoryIndex !== -1;

  useLayoutEffect(() => {
    const calculateVisible = () => {
      if (!containerRef.current || !measureRef.current || !viewAllRef.current)
        return;

      const containerWidth = containerRef.current.offsetWidth;
      const viewAllWidth = viewAllRef.current.offsetWidth;
      const availableWidth = containerWidth - viewAllWidth;

      const itmes = Array.from(measureRef.current.children);
      let totalWidth = 0;
      let visible = 0;

      for (const item of itmes) {
        const width = item.getBoundingClientRect().width;

        if (totalWidth + width > availableWidth) break;

        totalWidth += width;
        visible++;
      }
      setVisibleCount(visible);
    };

    const resizeObserver = new ResizeObserver(calculateVisible);
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    resizeObserver.observe(containerRef.current!);

    return () => {
      resizeObserver.disconnect();
    };
  }, [categoriesWithAll.length]);

  return (
    <div className="relative w-full ">
      {/* Categories sidebar */}
      <CategoriesSidebar
        isOpen={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      {/* Hidden div to measure all items */}
      <div
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none flex"
        style={{
          position: "fixed",
          top: "-9999",
          left: "-9999",
        }}
      >
        {categoriesWithAll.map((category) => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={activeCategory === category.slug}
              isNavigationHovered={false}
            />
          </div>
        ))}
      </div>

      {/* Visible container */}
      {/* biome-ignore lint/nursery/noStaticElementInteractions: <explanation> */}
      <div
        className="flex flex-nowrap items-center "
        ref={containerRef}
        onMouseEnter={() => setIsAnyHovered(true)}
        onMouseLeave={() => setIsAnyHovered(false)}
      >
        {categoriesWithAll.slice(0, visibleCount).map((category) => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={activeCategory === category.slug}
              isNavigationHovered={isAnyHovered}
            />
          </div>
        ))}

        <div ref={viewAllRef} className="shrink-0">
          <Button
            className={cn(
              " px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
              isCategoryHidden && !isAnyHovered && "bg-white border-primary"
            )}
            onClick={() => setIsSidebarOpen(true)}
          >
            View All
            <ListFilterIcon className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
