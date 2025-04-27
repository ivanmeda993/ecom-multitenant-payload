"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CategoriesGetManyOutput } from "@/modules/categories/types";
import { CategoriesSidebar } from "@/modules/home/search-filters/categories-sidebar";
import { CategoryDropdown } from "@/modules/home/search-filters/category-dropdown";
import { ListFilterIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface CategoriesProps {
  data: CategoriesGetManyOutput;
}

export const Categories = ({ data }: CategoriesProps) => {
  const params = useParams();

  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";

  const containerRef = useRef<HTMLDivElement>(null);
  const mesureRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(data?.length);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const calculateVisibleCount = () => {
      if (!containerRef.current || !mesureRef.current || !viewAllRef.current) {
        return;
      }

      const containerWidth = containerRef.current.offsetWidth;
      const viewAllWidth = viewAllRef.current.offsetWidth;
      const availableWidth = containerWidth - viewAllWidth;

      const items = Array.from(mesureRef.current.children);

      let totalWidth = 0;
      let visibleCount = 0;

      for (const item of items) {
        const width = item.getBoundingClientRect().width;

        if (totalWidth + width > availableWidth) {
          break;
        }

        totalWidth += width;
        visibleCount++;
      }
      setVisibleCount(visibleCount);
    };
    const resizeObserver = new ResizeObserver(calculateVisibleCount);
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    resizeObserver.observe(containerRef.current!);
    return () => {
      resizeObserver.disconnect();
    };
  }, [data?.length]);

  return (
    <div className="relative w-full ">
      <CategoriesSidebar
        isOpen={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      <div
        ref={mesureRef}
        className="absolute opacity-0 pointer-events-none flex"
        style={{
          position: "fixed",
          top: -9999,
          left: -9999,
        }}
      >
        {data?.map((category) => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isNavigationHovered={false}
              isActive={activeCategory === category.slug}
            />
          </div>
        ))}
      </div>
      {/* biome-ignore lint/nursery/noStaticElementInteractions: <explanation> */}
      <div
        ref={containerRef}
        className="flex flex-nowrap items-center"
        onMouseEnter={() => setIsAnyHovered(true)}
        onMouseLeave={() => setIsAnyHovered(false)}
      >
        {data?.slice(0, visibleCount).map((category) => (
          <div key={category.id}>
            <CategoryDropdown
              isActive={activeCategory === category.slug}
              category={category}
              isNavigationHovered={isAnyHovered}
            />
          </div>
        ))}

        <div className="shrink-0 ml-auto" ref={viewAllRef}>
          {visibleCount !== data?.length && (
            <Button
              variant="outline"
              className={cn(
                "rounded-lg px-2 py-1 transition-all duration-100 ease-in-out hover:no-underline cursor-pointer"
              )}
              onClick={() => setIsSidebarOpen(true)}
            >
              View All
              <ListFilterIcon />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
