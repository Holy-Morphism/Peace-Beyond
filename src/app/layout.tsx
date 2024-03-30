import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Peace & Beyond",
  description: "Come Travel with Us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen h-dvh bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
