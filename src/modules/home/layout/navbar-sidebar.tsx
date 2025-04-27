import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface NavbarSidebarProps {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  hasSession: boolean;
}
export const NavbarSidebar = ({
  items,
  open,
  onOpenChange,
  hasSession,
}: NavbarSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
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
