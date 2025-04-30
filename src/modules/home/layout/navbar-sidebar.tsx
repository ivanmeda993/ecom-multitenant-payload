"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface NavbarSidebarProps {
  items: NavbarItem[];
  // open: boolean;
  // onOpenChange?: (open: boolean) => void;
  hasSession: boolean;
}
export const NavbarSidebar = ({
  items,
  // open,
  // onOpenChange,
  hasSession,
}: NavbarSidebarProps) => {
  const [open, setOpen] = useState(false);
  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild className="lg:hidden bg-red-400">
        <Button variant="ghost" className="size-12 border-transparent bg-white">
          <MenuIcon />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="border-b p-4">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex h-full flex-col overflow-y-auto pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex w-full items-center p-4 text-left font-medium text-base hover:bg-black hover:text-white"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}

          <div className="border-t">
            {hasSession ? (
              <Link
                href="/admin"
                className="flex w-full items-center p-4 text-left font-medium text-base hover:bg-black hover:text-white"
                onClick={() => onOpenChange(false)}
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="flex w-full items-center p-4 text-left font-medium text-base hover:bg-black hover:text-white"
                  onClick={() => onOpenChange(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/sign-up"
                  className="flex w-full items-center p-4 text-left font-medium text-base hover:bg-black hover:text-white"
                  onClick={() => onOpenChange(false)}
                >
                  Start Selling
                </Link>
              </>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
