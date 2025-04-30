import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAVBAR_ITEMS } from "@/constants";
import { NavbarItem } from "./nav-item";
import { NavItems } from "./nav-items";
import { NavUserClient } from "./nav-user-client";
import { NavbarSidebar } from "./navbar-sidebar";

export const Navbar = () => {
  return (
    <nav className="flex h-20 justify-between border-b bg-white font-medium">
      <Logo className="pl-6" />

      <NavItems />

      <NavUserClient />

      <div className="flex items-center justify-center lg:hidden">
        <NavbarSidebar items={NAVBAR_ITEMS} hasSession={false} />
      </div>
    </nav>
  );
};

export const NavbarSkeleton = () => {
  return (
    <nav className="flex h-20 justify-between border-b bg-white font-medium">
      <Logo className="pl-6" />
      <div className="hidden items-center gap-4 lg:flex">
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem key={item.href} {...item} />
        ))}
      </div>
      <div className="hidden lg:min-w-[343px] lg:flex items-center justify-end">
        {Array.from({ length: 2 }).map((_, i) => (
          <Button
            key={i}
            variant="secondary"
            className="h-full rounded-none border-t-0 border-r-0 border-b-0 border-l bg-black px-12 text-lg text-white transition-colors hover:bg-violet-500 hover:text-black"
          >
            Start Selling
          </Button>
        ))}
      </div>
    </nav>
  );
};
