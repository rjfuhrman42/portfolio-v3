import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

export const metadata: Metadata = {
  title: "Reid Fuhrman",
  description: "Reid Fuhrman's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fixedSysExcelsior.variable} ${modalzShort.variable} ${modalzTall.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
