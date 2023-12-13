"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "../toggle-theme/ToggleTheme";
import Link from "next/link";

const AppBar = () => {
  return (
    <NavigationMenu className="justify-between">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">Ricky And Morty</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="gap-x-7">
        <NavigationMenuItem>
          <Link href="/episodes">Episodes</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default AppBar;
