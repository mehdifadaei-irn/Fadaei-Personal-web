import { MainProvider } from "@/components/Provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/Toaster";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehdi-Fadaei",
  description: "Portfolio site for Mehdi_fadaei",

  // icons: {
  //   icon: "/ui/MC.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      {/* <Head>
        <link rel="icon" href="/MC.png" sizes="any" />
      </Head> */}
      <body
        className={cn(
          "relative antialiased font-sans min-h-screen",
          inter.className
        )}
      >
        <MainProvider>{children}</MainProvider>
        <Toaster />
      </body>
    </html>
  );
}
