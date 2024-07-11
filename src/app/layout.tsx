import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehdi-Fadaei",
  description: "Portfolio site for Mehdi_fadaei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full antialiased font-sans bg-backgroundd", inter.className)}
      >
        {children}
      </body>
    </html>
  );
}
