import Link from "next/link";
import React from "react";

interface NavItem {
  href: string;
  label: string;
  color?: "text-accent-pink" | "text-accent-blue" | "text-accent-yellow";
}

const navItems: NavItem[] = [
  { href: "/#work", label: "Work", color: "text-accent-pink" },
  { href: "/#projects", label: "Projects", color: "text-accent-blue" },
  { href: "/#contact", label: "Contact", color: "text-accent-yellow" },
];

const Navbar = () => {
  return (
    <div className="relative w-full flex justify-end items-center sm:gap-x-1">
      <Link
        href="/"
        className="grid grid-cols-2 absolute left-0 py-4 pr-2 home-button"
      >
        <div className="bg-accent-green home-square"></div>
        <div className="bg-accent-teal home-square"></div>
        <div className="bg-accent-pink home-square"></div>
        <div className="bg-accent-yellow home-square"></div>
      </Link>
      {navItems.map((item) => {
        return (
          <Link
            href={item.href}
            key={item.label}
            className={`${item.color} p-1 md:py-4 md:px-2`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
