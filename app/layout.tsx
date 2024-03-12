import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { Providers } from "./providers";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "700"],
});

const fixedSysExcelsior = localFont({
  src: "../fonts/Fixedsys-Excelsior-Regular.woff",
  variable: "--font-fixedsys-excelsior",
});
const modalzShort = localFont({
  src: "../fonts/modalz-short.woff2",
  variable: "--font-modalz-short",
});
const modalzTall = localFont({
  src: "../fonts/modalz-tall.woff2",
  variable: "--font-modalz-tall",
});
const pixelOperator = localFont({
  src: "../fonts/pixeloperator.woff2",
  variable: "--font-pixel-operator",
});
const w95fa = localFont({
  src: "../fonts/w95fa.woff",
  variable: "--font-w95fa",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reidfuhrman.com/"),
  title: "Reid Fuhrman",
  description: "Software Engineer in New York",
  openGraph: {
    title: "Reid Fuhrman",
    description: "Software Engineer in New York",
    url: "https://www.reidfuhrman.com/",
    images: [
      {
        url: "hi_im_reid.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.className} ${w95fa.variable} ${fixedSysExcelsior.variable} ${modalzShort.variable} ${modalzTall.variable} ${pixelOperator.variable} scroll-smooth h-full`}
    >
      <body>
        <Providers>
          {children}
          {/* <div className="noise"></div> */}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
