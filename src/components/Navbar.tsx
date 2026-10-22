"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Home, User, Briefcase, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when full-screen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu on pathname change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full py-3 sm:py-4 backdrop-blur-md border-b border-transparent transition-colors">
        <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-[#121215]/90 border border-[#E4E4E7] dark:border-[#27272A] rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-colors">
          {/* Brand Lockup */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#09090B] dark:text-white hover:opacity-80 transition-opacity"
          >
            S<span className="text-[#71717A] dark:text-[#A1A1AA]">P</span>
          </Link>

          {/* Desktop Nav Links with Icons and Text */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 text-sm transition-colors duration-150 py-1 ${
                    isActive
                      ? "font-semibold text-[#09090B] dark:text-white"
                      : "text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle, Desktop CTA, and Mobile Hamburger */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <ThemeToggle />

            <Link href="/contact" className="btn-primary text-sm !hidden md:!inline-flex">
              Let&apos;s talk
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 md:hidden bg-white/98 dark:bg-[#09090B]/98 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Top Bar inside Fullscreen Menu */}
            <div className="flex items-center justify-between pb-5 border-b border-[#E4E4E7] dark:border-[#27272A]">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold tracking-tight text-[#09090B] dark:text-white"
              >
                S<span className="text-[#71717A] dark:text-[#A1A1AA]">P</span>
              </Link>

              <div className="flex items-center space-x-3">
                <ThemeToggle />

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#09090B] dark:text-white hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] transition-colors shadow-xs"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Centered Refined Navigation Links with Icons and Balanced Text Size */}
            <div className="flex flex-col justify-center space-y-3 my-auto py-6">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.25, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                        isActive
                          ? "bg-[#18181B] text-white dark:bg-white dark:text-[#09090B] border-transparent shadow-sm"
                          : "bg-[#FAFAFA] dark:bg-[#121215] border-[#E4E4E7] dark:border-[#27272A] text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white hover:border-[#09090B] dark:hover:border-[#FAFAFA]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors ${
                            isActive
                              ? "bg-white/10 dark:bg-black/10 border-white/20 dark:border-black/20 text-white dark:text-[#09090B]"
                              : "bg-white dark:bg-[#18181B] border-[#E4E4E7] dark:border-[#27272A] text-[#09090B] dark:text-white"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-base sm:text-lg font-semibold tracking-tight">
                          {link.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono ${
                            isActive
                              ? "text-white/70 dark:text-black/70"
                              : "text-[#A1A1AA] dark:text-[#71717A]"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <ArrowUpRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                            isActive
                              ? "text-white dark:text-[#09090B]"
                              : "text-[#A1A1AA] dark:text-[#71717A]"
                          }`}
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Controls & Direct CTA */}
            <div className="pt-6 border-t border-[#E4E4E7] dark:border-[#27272A] space-y-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center text-base py-3.5 h-12 shadow-md flex items-center justify-center gap-2"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-between text-xs text-[#71717A] dark:text-[#A1A1AA] pt-2">
                <span>Pune, India (IST)</span>
                <div className="flex items-center gap-4 font-medium">
                  <a
                    href="https://github.com/SanketPathare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#09090B] dark:hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.linkedin.com/in/sanket-pathare-740703245/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#09090B] dark:hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
