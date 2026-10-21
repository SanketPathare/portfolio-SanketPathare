import React from "react";
import { Twitter, Dribbble } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-16 mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 bg-white border border-[#E4E4E7] rounded-3xl gap-4">
        {/* Brand Lockup */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#09090B] hover:opacity-80 transition-opacity"
        >
          S<span className="text-[#71717A]">P</span>
        </Link>

        {/* Rights text */}
        <div className="text-sm text-[#71717A]">
          {new Date().getFullYear()} © All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-2">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="flex items-center justify-center w-10 h-10 transition-colors border border-[#E4E4E7] rounded-full text-[#71717A] hover:text-[#09090B] hover:border-[#09090B] bg-white"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
            className="flex items-center justify-center w-10 h-10 transition-colors border border-[#E4E4E7] rounded-full text-[#71717A] hover:text-[#09090B] hover:border-[#09090B] bg-white"
          >
            <Dribbble className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
