"use client";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const components: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "CFP",
    href: "/cfp",
  },
  {
    title: "COMMITTEE",
    href: "/committe",
  },
  {
    title: "DATES",
    href: "/dates",
  },
  {
    title: "SPEAKERS",
    href: "/speakers",
  },
  {
    title: "SUBMISSIONS",
    href: "/submissions",
  },
  {
    title: "REGISTRATIONS",
    href: "/registration",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];

const Navigation = () => {
  return (
    <div className="w-full lg:hidden flex">
      <NavigationMenu className="bg-gradient-to-br rounded-md from-gray-700 via-gray-800 to-black text-white w-full">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white">
              NAVIGATION
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[395px] bg-gray-800 gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <NavigationMenuLink asChild>
                    <Link
                      href={component.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white text-white hover:text-gray-800 font-semibold focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {component.title}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
