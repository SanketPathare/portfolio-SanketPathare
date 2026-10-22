"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-transparent" />
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark";

    // 1. Immediately toggle the class on <html> synchronously without delay
    const root = document.documentElement;

    // Temporarily suppress all transitions so hundreds of elements don't stall the browser
    const style = document.createElement("style");
    style.appendChild(
      document.createTextNode(
        "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
      )
    );
    document.head.appendChild(style);

    // Synchronously update HTML root class and colorScheme
    if (nextTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    root.style.colorScheme = nextTheme;

    // 2. Sync state with next-themes and localStorage
    setTheme(nextTheme);

    // 3. Remove transition freeze style on the next frame so normal interactions work
    window.getComputedStyle(document.body);
    setTimeout(() => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    }, 1);
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={handleToggle}
      className="w-10 h-10 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white hover:border-[#09090B] dark:hover:border-white transition-all shadow-sm active:scale-95 cursor-pointer"
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-white transition-transform duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-[#09090B] transition-transform duration-300" />
      )}
    </button>
  );
}

export default ThemeToggle;
