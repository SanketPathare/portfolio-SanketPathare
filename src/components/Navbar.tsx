"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full py-3 sm:py-4 backdrop-blur-md border-b border-transparent transition-colors">
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-[#121215]/90 border border-[#E4E4E7] dark:border-[#27272A] rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-colors">
        {/* Brand Lockup */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#09090B] dark:text-white hover:opacity-80 transition-opacity"
        >
          S<span className="text-[#71717A] dark:text-[#A1A1AA]">P</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-150 ${
                  isActive
                    ? "font-semibold text-[#09090B] dark:text-white"
                    : "text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle, CTA, and Mobile Button */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <ThemeToggle />

          <Link href="/contact" className="btn-primary text-sm hidden sm:inline-flex">
            Let&apos;s talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl shadow-lg flex flex-col space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#18181B] dark:bg-white text-white dark:text-[#09090B]"
                    : "text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white hover:bg-[#F4F4F5] dark:hover:bg-[#18181B]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-[#E4E4E7] dark:border-[#27272A]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center text-sm py-2.5 h-10"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
