"use client";

import { categories } from "../constant";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <nav className="grid max-w-6xl grid-cols-4 gap-4 pb-10 mx-auto text-xs border-b md:grid-cols-7 md:text-sm">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
