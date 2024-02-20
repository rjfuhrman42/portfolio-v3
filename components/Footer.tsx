import Link from "next/link";
import React from "react";

interface FooterItem {
  handle: string;
  label: string;
  url: string;
  color: string;
}

const footerItems: FooterItem[] = [
  {
    label: "Email",
    handle: "hey@reidfuhrman.com",
    url: "mailto:hey@reidfuhrman.com",
    color: "text-accent-red dark:text-accent-green",
  },
  {
    label: "Github",
    handle: "git/rjfuhrman42",
    url: "https://github.com/rjfuhrman42",
    color: "text-accent-orange dark:text-accent-teal",
  },
  {
    label: "LinkedIn",
    handle: "in/reid-fuhrman",
    url: "https://www.linkedin.com/in/reid-fuhrman/",
    color: "text-accent-pink dark:text-accent-blue",
  },
  {
    label: "Codepen",
    handle: "@reidjf",
    url: "https://codepen.io/reidjf",
    color: "text-accent-purple",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col justify-between w-full bg-tan dark:bg-dark-blue p-6 gap-x-8">
      <h2 className="text-accent-orange dark:text-accent-yellow pb-4">
        Contact Me
      </h2>
      <div className="flex flex-col gap-y-4 md:gap-y-0">
        {footerItems.map((item) => {
          return (
            <Link
              href={item.url}
              key={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} flex justify-between md:py-4`}
            >
              <p className="flex-1 font-body text-sm md:text-xl">
                {item.label}
              </p>
              <p className="flex-1 font-body text-sm text-left md:text-xl">
                {item.handle}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
