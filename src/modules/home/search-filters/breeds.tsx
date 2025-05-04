"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { BreedsGetManyOutput } from "@/modules/breeds/types";
import { ListFilterIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { BreedDropdown } from "./breed-dropdown";
import { BreedsSidebar } from "./breeds-sidebar";

interface BreedsProps {
  data: BreedsGetManyOutput;
}

export const Breeds = ({ data }: BreedsProps) => {
  const params = useParams();

  const breedsWithAll: BreedsGetManyOutput = [
    {
      id: "all",
      slug: "all",
      name: "All",
      breeds: [],
      updatedAt: new Date().toDateString(),
      createdAt: new Date().toDateString(),
    },
    ...data,
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(breedsWithAll.length);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const breedParam = params?.breed as string | undefined;
  const activeBreed = breedParam || "all";

  const activeBreedIndex = breedsWithAll.findIndex(
    (breed) => breed.slug === activeBreed
  );

  console.log("activeBreedIndex", activeBreedIndex);
  console.log("activeBreed", activeBreed);

  const isBreedHidden =
    activeBreedIndex >= visibleCount && activeBreedIndex !== -1;

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
    resizeObserver.observe(containerRef.current!);

    return () => {
      resizeObserver.disconnect();
    };
  }, [breedsWithAll.length]);

  return (
    <div className="relative w-full ">
      {/* Categories sidebar */}
      <BreedsSidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

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
        {breedsWithAll.map((breed) => (
          <div key={breed.id}>
            <BreedDropdown
              breed={breed}
              isActive={activeBreed === breed.slug}
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
        {breedsWithAll.slice(0, visibleCount).map((breed) => (
          <div key={breed.id}>
            <BreedDropdown
              breed={breed}
              isActive={activeBreed === breed.slug}
              isNavigationHovered={isAnyHovered}
            />
          </div>
        ))}

        <div ref={viewAllRef} className="shrink-0">
          <Button
            className={cn(
              " px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
              isBreedHidden && !isAnyHovered && "bg-white border-primary"
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
