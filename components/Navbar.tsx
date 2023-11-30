import Link from "next/link";
import React from "react";

interface NavItem {
  href: string;
  label: string;
  color?: "text-accent-pink" | "text-accent-blue" | "text-accent-yellow";
}

const navItems: NavItem[] = [
  { href: "/resume", label: "Resume", color: "text-accent-pink" },
  { href: "/#projects", label: "Projects", color: "text-accent-blue" },
  { href: "/#contact", label: "Contact", color: "text-accent-yellow" },
];

const Navbar = () => {
  return (
    <div className="relative w-full flex justify-end items-center gap-2.5 xs:gap-4 md:gap-8">
      <Link href="/" className="absolute left-0 py-4">
        RF
      </Link>
      {navItems.map((item) => {
        return (
          <Link
            href={item.href}
            key={item.label}
            className={`${item.color} py-4`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
