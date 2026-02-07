import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { COMPANY_INFO } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
  description: `${COMPANY_INFO.description}. Est. ${COMPANY_INFO.established}`,
  keywords: ["events", "weddings", "interior design", "custom builds", "styling", "florals"],
  openGraph: {
    title: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#FAF7F2] text-[#2C2C2C]">
        {children}
      </body>
    </html>
  );
}
