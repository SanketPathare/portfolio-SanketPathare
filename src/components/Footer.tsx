import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-16 mb-10">
      <div className="bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:px-10 sm:py-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        {/* Brand & Lockup */}
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#09090B] hover:opacity-80 transition-opacity"
          >
            S<span className="text-[#71717A]">P</span>
          </Link>
          <span className="text-[#D4D4D8]">•</span>
          <span className="text-sm font-medium text-[#71717A]">
            Sanket Pathare
          </span>
        </div>

        {/* Text Navigation Links */}
        <div className="flex items-center space-x-6 text-sm text-[#71717A]">
          <Link href="/" className="hover:text-[#09090B] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#09090B] transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-[#09090B] transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-[#09090B] transition-colors">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm text-[#71717A]">
          {new Date().getFullYear()} © All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
