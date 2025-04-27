import { cn } from "@/lib/utils";
import { DynamicIcon } from "lucide-react/dynamic";
import { useState } from "react";

type ProductFilterProps = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};

export const ProductFilterItem = ({
  title,
  className,
  children,
}: ProductFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div className={cn("border-b p-4 flex flex-col gap-2", className)}>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
      >
        <p className="font-medium">{title}</p>
        <DynamicIcon
          name={isOpen ? "chevron-up" : "chevron-down"}
          className="size-5"
        />
      </div>
      {isOpen && children}
    </div>
  );
};
