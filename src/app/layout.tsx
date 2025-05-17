import { Inter } from "next/font/google";
import "./globals.css";
import DotPattern from "@/components/ui/dot-pattern";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import DotPattern from "@/components/ui/dot-pattern";
// import { cn } from "@/lib/utils";
// import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanket Pathare",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#101010] text-white antialiased max-w-[85rem] mx-auto dark:bg-darkMode dark:text-white transition-colors
        duration-200 ease-in-out `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
