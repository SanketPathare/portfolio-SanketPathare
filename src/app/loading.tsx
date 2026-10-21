"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Dark Layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[#09090B]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Gray Layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#D4D4D8]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Light Layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#FFFFFF]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      />
    </div>
  );
}
