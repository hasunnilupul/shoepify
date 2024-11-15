import * as React from "react";
import Link from "next/link";

import Icon from "@/components/Icon";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import UserAccountDropdown from "./UserAccountDropdown";
import ShoppingCartSheet from "./ShoppingCartSheet";
import SearchDrawer from "./SearchDrawer";

const navigationMenuLinks = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/categories/men" },
  { label: "Women", href: "/categories/women" },
  { label: "Kids", href: "/categories/kids" },
  { label: "Sale", href: "/sale" },
];

export default function TopNavbar() {
  return (
    <NavigationMenu className="sticky top-0 z-50 py-2 flex-none justify-between px-5 max-w-full bg-background">
      {/* Logo */}
      <Link href="/">
        <Icon name="shell" className="h-8 w-8" />
      </Link>

      {/* Navigation Menu Links */}
      <NavigationMenuList>
        {navigationMenuLinks.map((link) => (
          <NavigationMenuItem key={link.label}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background 
              px-4 py-2 text-sm sm:text-base font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none 
              disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50"
              >
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      {/* Navigation Menu Actions */}
      <div className="flex items-center space-x-3">
        {/* User Account Dropdown Button */}
        <UserAccountDropdown />

        {/* Shopping Cart Button */}
        <ShoppingCartSheet />

        {/* Search Button */}
        <SearchDrawer />
      </div>
    </NavigationMenu>
  );
}
