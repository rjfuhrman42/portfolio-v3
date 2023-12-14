"use client";
import Link from "next/link";
import React from "react";
import { stagger, useAnimate } from "framer-motion";

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
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    animate([
      [".home-button", { y: [0, 2, 0] }, { duration: 0.25 }],
      [
        ".bubbles",
        { y: -100, opacity: [0, 1, 0] },
        { duration: 1, delay: stagger(0.1) },
      ],
      [".bubbles", { y: 0, opacity: 0 }, { duration: 0.00003 }],
    ]);
  };
  return (
    <div className="relative w-full flex justify-end items-center sm:gap-x-1">
      <Link href="/" onClick={onButtonClick} className="absolute -left-4 p-4">
        <div ref={scope}>
          <p className="home-button font-heading">RF</p>
          <div className="bubbles left-4" />
          <div className="bubbles right-3" />
          <div className="bubbles right-6" />
        </div>
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
