"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="rounded h-5 w-5 pl-2 sm:pl-0"></div>;
  }

  return (
    <>
      <button
        className="rounded h-5 w-5 pl-2 sm:pl-0"
        onClick={() =>
          setTheme(theme === "dark" || theme === "system" ? "light" : "dark")
        }
      >
        {theme === "dark" ? (
          <Image
            className="imageFix"
            src={"/sun-fill.svg"}
            alt="Project Image"
            fill
            objectFit="cover"
          />
        ) : (
          <Image
            className="imageFix"
            src={"/moon-fill.svg"}
            alt="Project Image"
            fill
            objectFit="cover"
          />
        )}
      </button>
    </>
  );
};
