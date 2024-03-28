import Link from "next/link";
import React from "react";
import { ThemeChanger } from "./ThemeChanger";

interface NavItem {
  href: string;
  label: string;
  color?: string;
  border?: string;
  bg?: string;
}

const navItems: NavItem[] = [
  {
    href: "/#work",
    label: "Work",
    color: "text-accent-pink",
    border: "hover:border-accent-pink",
    bg: "hover:bg-accent-pink-faded",
  },
  {
    href: "/#projects",
    label: "Projects",
    color: "text-accent-blue",
    border: "hover:border-accent-blue",
    bg: "hover:bg-accent-blue-faded",
  },
  {
    href: "/#contact",
    label: "Contact",
    color: "text-accent-orange dark:text-accent-yellow",
    border: "hover:border-accent-yellow",
    bg: "hover:bg-accent-yellow-faded",
  },
];

const Navbar = () => {
  return (
    <div className="relative w-full flex justify-end items-center sm:gap-x-1">
      <Link href="/" className="absolute left-0 py-4 pr-2 md:text-lg">
        RF
      </Link>
      {navItems.map((item) => {
        return (
          <Link
            href={item.href}
            key={item.label}
            className={`${item.color} border-2 border-transparent p-1 md:py-4 md:px-2 md:text-lg ${item.border} ${item.bg}`}
          >
            {item.label}
          </Link>
        );
      })}
      <ThemeChanger />
    </div>
  );
};

export default Navbar;
