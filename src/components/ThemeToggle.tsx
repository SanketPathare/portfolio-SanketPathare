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

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
      className="w-10 h-10 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white hover:border-[#09090B] dark:hover:border-white transition-all shadow-sm active:scale-95 cursor-pointer"
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-[#09090B] transition-transform duration-300" />
      )}
    </button>
  );
}

export default ThemeToggle;
