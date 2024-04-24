"use client";

import Title from "@/components/Title";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  interface NavBarLinksClassName {
    className: string;
    href: string;
    name: string;
  }

  function NavBarLinks(props: NavBarLinksClassName) {
    return (
      <NavigationMenuItem className={props.className}>
        <Link href={props.href} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {props.name}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  }

  return (
    <nav className="flex flex-row justify-between items-center p-1 ">
      <Link href="/">
        <Title className="font-bold text-lg p-2" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavBarLinks href="/" className="bg-transparent" name="Home" />
          <NavBarLinks href="/auth/signup" className="" name="Sign Up" />
          <NavBarLinks href="/auth/login" className="" name="Log In" />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
