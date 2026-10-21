"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full py-4 bg-white/85 backdrop-blur-md border-b border-transparent transition-all">
      <nav className="mx-auto flex items-center justify-between px-6 py-3 bg-white border border-[#E4E4E7] rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        {/* Brand Lockup */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#09090B] hover:opacity-80 transition-opacity"
        >
          S<span className="text-[#71717A]">P</span>
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
                    ? "font-medium text-[#09090B]"
                    : "text-[#71717A] hover:text-[#09090B]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA and Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <Link href="/contact" className="btn-primary text-sm">
            Let&apos;s talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#71717A] hover:text-[#09090B] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white border border-[#E4E4E7] rounded-3xl shadow-lg flex flex-col space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  isActive
                    ? "bg-[#18181B] text-white font-medium"
                    : "text-[#71717A] hover:text-[#09090B] hover:bg-[#F4F4F5]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
