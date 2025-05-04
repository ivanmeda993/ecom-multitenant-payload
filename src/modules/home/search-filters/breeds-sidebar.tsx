"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import type {
  BreedsGetManyOutputSingle,
  BreedsGetManyOutputSingleBreed,
} from "@/modules/breeds/types";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface BreedsSidebarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BreedsSidebar = ({ isOpen, onOpenChange }: BreedsSidebarProps) => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.breeds.getMany.queryOptions());

  const router = useRouter();

  const [selectedBreed, setSelectedBreed] =
    useState<BreedsGetManyOutputSingle | null>(null);

  const handleOpenChange = (open: boolean) => {
    setSelectedBreed(null);
    onOpenChange(open);
  };

  const handelBreedClick = (breed: BreedsGetManyOutputSingle) => {
    if (breed.breeds && breed.breeds.length > 0) {
      setSelectedBreed(breed);
    } else {
      setSelectedBreed(null);
      onOpenChange(false);
      router.push(`/${breed.slug}`);
    }
  };

  const handleSubBreedClick = (breed: BreedsGetManyOutputSingleBreed) => {
    setSelectedBreed(null);
    onOpenChange(false);
    router.push(`/${selectedBreed?.slug}/${breed.slug}`);
  };

  const handleBackClick = () => {
    setSelectedBreed(null);
  };

  const backgroundColor = selectedBreed?.color || "white";

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent
        side="left"
        className="p-0 transition-none"
        style={{
          backgroundColor,
        }}
      >
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {selectedBreed && (
            <button
              onClick={handleBackClick}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium cursor-pointer"
              type="button"
            >
              <ChevronLeftIcon className="size-4 mr-2" />
              Back
            </button>
          )}

          {selectedBreed
            ? selectedBreed.breeds?.map((breed) => (
                <button
                  key={breed.slug}
                  onClick={() => handleSubBreedClick(breed)}
                  className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center text-base font-medium cursor-pointer"
                  type="button"
                >
                  {breed.name}
                </button>
              ))
            : data?.map((breed) => (
                <button
                  key={breed.slug}
                  onClick={() => handelBreedClick(breed)}
                  className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center text-base font-medium cursor-pointer"
                  type="button"
                >
                  {breed.name}
                  {breed.breeds?.length > 0 && (
                    <ChevronRightIcon className="size-4" />
                  )}
                </button>
              ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
