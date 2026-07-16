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

const siteTitle = "Velvet Pour | Luxury Mobile Bartending";
const siteDescription =
  "Premium mobile bartending for weddings, private events, and corporate gatherings across Salt Lake City and the Wasatch Front.";

export const metadata: Metadata = {
  metadataBase: new URL("https://velvet-pour-neon.vercel.app"),
  title: {
    default: siteTitle,
    template: "%s | Velvet Pour",
  },
  description: siteDescription,
  applicationName: "Velvet Pour",
  keywords: [
    "mobile bartending",
    "Salt Lake City bartender",
    "wedding bartender",
    "corporate event bar",
    "luxury cocktail service",
    "Wasatch Front",
  ],
  authors: [{ name: "Velvet Pour" }],
  creator: "Velvet Pour",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Velvet Pour",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
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
