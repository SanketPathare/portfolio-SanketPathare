import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Sanket Pathare | Web Developer",
  description: "Personal Portfolio Website of Sanket Pathare - Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${inter.className} bg-[#FFFFFF] text-[#09090B] antialiased selection:bg-[#18181B] selection:text-white flex flex-col min-h-screen`}
      >
        <TransitionEffect />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
