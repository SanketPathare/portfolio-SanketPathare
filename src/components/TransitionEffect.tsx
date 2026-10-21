"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionEffect = () => {
  const pathname = usePathname();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [pathname]);

  return (
    <div key={animationKey} className="pointer-events-none">
      {/* 1st Layer: Dark ink (#09090B) */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9999] bg-[#09090B]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* 2nd Layer: Gray (#D4D4D8) */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9998] bg-[#D4D4D8]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />

      {/* 3rd Layer: White (#FFFFFF) */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9997] bg-[#FFFFFF]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      />
    </div>
  );
};

export default TransitionEffect;
