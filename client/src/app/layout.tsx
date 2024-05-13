import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import NavBar from "@/components/navbar/NavBar";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import { Toaster } from "@/components/ui/toaster"
const myFont = localFont({
  src: "../../public/fonts/CaniculeDisplayv0.1-Regular.Trial.otf",
  variable: "--font-CaniculeDisplay",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
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
    <html lang="en" className="m-0 p-0" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen h-full bg-background antialiased",
          roboto,
          myFont.variable
        )}
      >
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
