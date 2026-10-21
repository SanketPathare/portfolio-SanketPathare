"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionEffect = () => {
  const pathname = usePathname();
  const [animationKey, setAnimationKey] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    setAnimationKey((prev) => prev + 1);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div key={animationKey} className="pointer-events-none">
      {/* 1st Layer: High-contrast leading curtain */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9999] bg-[#09090B] dark:bg-[#18181B]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* 2nd Layer: Mid-tone monochrome curtain */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9998] bg-[#D4D4D8] dark:bg-[#27272A]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />

      {/* 3rd Layer: Canvas matching curtain */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9997] bg-[#FFFFFF] dark:bg-[#09090B]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        onAnimationComplete={() => setIsVisible(false)}
      />
    </div>
  );
};

export default TransitionEffect;
