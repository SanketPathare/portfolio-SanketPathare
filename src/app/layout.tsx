import { Inter } from "next/font/google";
import "./globals.css";
// import DotPattern from "@/components/ui/dot-pattern";
// import { cn } from "@/lib/utils";
// import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanket Pathare",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white  `}>
        {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] fixed inset-0 z-[-1] bg-black/90 ",
        )}
      /> */}
        {/* <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 fixed inset-0 z-[-1]",
        )}
      /> */}
        {children}
      </body>
    </html>
  );
}
