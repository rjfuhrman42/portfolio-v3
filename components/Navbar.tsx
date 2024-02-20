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
      <Link href="/" className="absolute left-0 py-4 pr-2 md:text-lg">
        RF
      </Link>
      {navItems.map((item) => {
        return (
          <Link
            href={item.href}
            key={item.label}
            className={`${item.color} p-1 md:py-4 md:px-2 md:text-lg`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
