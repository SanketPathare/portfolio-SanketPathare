import { Inter } from "next/font/google";
import "./globals.css";
import DotPattern from "@/components/ui/dot-pattern";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
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
        <div>
          {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] fixed inset-0 z-[-1] bg-black/90 ",
        )}
      />  
         <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[700%] skew-y-12 fixed inset-0 z-[-1]",
        )}
      />  */}
        </div>

        {children}
      </body>
    </html>
  );
}
