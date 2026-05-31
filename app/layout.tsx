import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-newsreader",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Ela Cwynar-Budzińska - O Komunikacji Po Ludzku",
  description: "Odzyskaj sprawczość w każdej rozmowie. Sztuka komunikacji i psychologia relacji dla biznesu, par i jednostek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${newsreader.variable} ${manrope.variable} bg-surface text-on-surface font-body selection:bg-primary/20 antialiased text-base md:text-lg overflow-x-hidden flex flex-col min-h-screen`}>
        <svg className="mask-container" viewBox="0 0 100 100" style={{ width: 0, height: 0, position: 'absolute', pointerEvents: 'none' }}>
          <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="blob-mask-hero">
              <path d="M0.1,0.05 C0.3,-0.05 0.7,-0.02 0.9,0.05 C1,0.1 1.05,0.4 0.95,0.7 C0.85,1 0.5,1.05 0.15,0.95 C-0.05,0.85 -0.02,0.4 0.1,0.05 Z"></path>
            </clipPath>
            <clipPath clipPathUnits="objectBoundingBox" id="blob-mask-1">
              <path d="M0.15,0.1 C0.3,0 0.75,0.05 0.9,0.2 C1.05,0.4 0.95,0.75 0.8,0.9 C0.6,1.05 0.2,1.02 0.05,0.8 C-0.1,0.5 0,0.2 0.15,0.1 Z"></path>
            </clipPath>
            <clipPath clipPathUnits="objectBoundingBox" id="blob-mask-2">
              <path d="M0.2,0.05 C0.5,-0.05 0.95,0.1 0.98,0.4 C1.01,0.7 0.8,0.98 0.5,0.95 C0.2,0.92 -0.05,0.7 0.02,0.35 C0.08,0.1 0.1,0.08 0.2,0.05 Z"></path>
            </clipPath>
          </defs>
        </svg>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
