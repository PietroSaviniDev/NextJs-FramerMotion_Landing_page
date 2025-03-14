import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative" style={{
      scrollBehavior : 'smooth'
    }}>
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <SpeedInsights/>
        {children}
      </body>
    </html>
  );
}
