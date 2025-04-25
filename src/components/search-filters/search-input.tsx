"use client";
import { CategoriesSidebar } from "@/components/search-filters/categories-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ListFilterIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

interface SearchInputProps {
  disabled?: boolean;
}
export const SearchInput = ({ disabled }: SearchInputProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center gap-2 w-full ">
      <CategoriesSidebar isOpen={isOpen} onOpenChange={setIsOpen} />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input className="pl-8" placeholder="Search" disabled={disabled} />
      </div>
      <Button
        variant="outline"
        className="size-10 shrink-0 flex lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <ListFilterIcon />
        <span className="sr-only">Filter</span>
      </Button>
    </div>
  );
};
