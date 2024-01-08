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
  metadataBase: new URL("http://localhost:3000"),
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
      lang="en"
      className={`${fixedSysExcelsior.variable} ${modalzShort.variable} ${modalzTall.variable} scroll-smooth h-full`}
    >
      <body>
        {children}
        <div className="noise"></div>
      </body>
    </html>
  );
}
