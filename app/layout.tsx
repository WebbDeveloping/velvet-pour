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

const siteTitle = "Velvet Pour | Elevated Cocktail Service";
const siteDescription =
  "We bring the bar, the pours, and the polish — for weddings, private gatherings, and corporate celebrations across Salt Lake City and the Wasatch Front.";

export const metadata: Metadata = {
  metadataBase: new URL("https://velvet-pour-neon.vercel.app"),
  title: {
    default: siteTitle,
    template: "%s | Velvet Pour",
  },
  description: siteDescription,
  applicationName: "Velvet Pour",
  keywords: [
    "cocktail service",
    "wedding bartender",
    "event bar service",
    "Salt Lake City bartender",
    "corporate cocktail catering",
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
