import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";

const myFont = localFont({
  src: "../../public/fonts/CaniculeDisplayv0.1-Regular.Trial.otf",
  variable: "--font-CaniculeDisplay",
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
    <html lang="en" className="h-dvh w-dvw m-0 p-0" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen h-dvh bg-background font-CaniculeDisplay antialiased flex flex-col ",
          myFont.variable
        )}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
