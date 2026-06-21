import type { Metadata } from "next";
import { Bebas_Neue, Inter, Bangers } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Sol Mexican Food",
  description:
    "Authentic Mexican food truck in Columbus, NE. Tacos, Tortas, Burritos y Más!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} ${bangers.variable}`} style={{ backgroundColor: "#000" }} data-scroll-behavior="smooth">
      <body className="text-white antialiased">{children}</body>
    </html>
  );
}
