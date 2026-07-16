import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Velvet Pour | Luxury Mobile Bartending",
  description:
    "Premium mobile bartending for weddings, private events, and corporate gatherings. An elegant cocktail experience, wherever you celebrate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
