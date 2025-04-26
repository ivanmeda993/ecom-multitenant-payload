"use client";
import { NavbarSidebar } from "@/components/layout/navbar-sidebar";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAVBAR_ITEMS = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/contact",
    children: "Contact",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const trpc = useTRPC();
  const { data: session, isPending } = useQuery(
    trpc.auth.session.queryOptions()
  );

  return (
    <nav className="flex h-20 justify-between border-b bg-white font-medium">
      <Logo className="pl-6" />

      {/* Descktop */}
      <div className="hidden items-center gap-4 lg:flex">
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem
            key={item.href}
            isActive={pathname === item.href}
            {...item}
          />
        ))}
      </div>

      {/* Mobile */}
      <NavbarSidebar
        items={NAVBAR_ITEMS}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      {isPending ? (
        <div className="hidden lg:flex lg:min-w-[343px] " />
      ) : (
        <div>
          {session?.user ? (
            <Button
              asChild
              variant="secondary"
              className="h-full rounded-none border-t-0 border-r-0 border-b-0 border-l bg-black px-12 text-lg text-white transition-colors hover:bg-violet-500 hover:text-black"
            >
              <Link href="/admin">Dashboard</Link>
            </Button>
          ) : (
            <div className="hidden lg:flex h-full">
              <Button
                asChild
                variant="secondary"
                className="h-full rounded-none border-t-0 border-r-0 border-b-0 border-l bg-white px-12 text-lg transition-colors hover:bg-violet-500"
              >
                <Link prefetch href="/sign-in">
                  Log in
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-full rounded-none border-t-0 border-r-0 border-b-0 border-l bg-black px-12 text-lg text-white transition-colors hover:bg-violet-500 hover:text-black"
              >
                <Link prefetch href="/sign-up">
                  Start Selling
                </Link>
              </Button>
            </div>
          )}
        </div>
      )}
      <div className="flex items-center justify-center lg:hidden">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
          <span className="sr-only">Menu</span>
        </Button>
      </div>
    </nav>
  );
};

interface NavbarItemProps {
  children: React.ReactNode;
  isActive?: boolean;
  href: string;
}

const NavbarItem = ({ children, isActive, href }: NavbarItemProps) => {
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
