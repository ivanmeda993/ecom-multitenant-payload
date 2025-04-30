import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarItemProps {
  children: React.ReactNode;
  isActive?: boolean;
  href: string;
}
export const NavbarItem = ({ children, isActive, href }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "rounded-full border-transparent bg-transparent px-3.5 text-lg shadow-none hover:border-primary hover:bg-transparent",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};
