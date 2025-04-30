"use client";

import { NAVBAR_ITEMS } from "@/constants";
import { usePathname } from "next/navigation";
import { NavbarItem } from "./nav-item";

export const NavItems = () => {
  const pathname = usePathname();
  return (
    <div className="hidden items-center gap-4 lg:flex">
      {NAVBAR_ITEMS.map((item) => (
        <NavbarItem
          key={item.href}
          isActive={pathname === item.href}
          {...item}
        />
      ))}
    </div>
  );
};
