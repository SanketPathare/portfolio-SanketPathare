"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Smartphone,
  Monitor,
  Tablet,
  Shapes,
  Rocket,
  Award,
  Zap,
  Sparkles,
  Layers,
  Code2,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Globe,
} from "lucide-react";

const Principles: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full pb-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center sm:text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#121215] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          CORE METHODOLOGY
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
          Principles<span className="text-[#71717A] dark:text-[#A1A1AA]">.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#71717A] dark:text-[#A1A1AA] mt-2 max-w-xl leading-relaxed">
          The engineering standards and aesthetic philosophies that power every project, from architecture to user interaction.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* ROW 1 */}

        {/* 1. LATEST TECH */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="relative overflow-hidden bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#18181B] dark:hover:border-[#52525B] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)] group min-h-[360px] h-full"
        >
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-neutral-200/50 to-transparent dark:from-neutral-800/40 dark:to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          <div>
            <div className="w-11 h-11 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA] mb-4 shadow-xs group-hover:scale-105 transition-transform">
              <Crown className="w-5 h-5 stroke-[1.75]" />
            </div>

            <div className="relative h-32 my-3 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden p-3 flex flex-col justify-center">
              <div
                className="absolute inset-0 opacity-40 dark:opacity-20"
                style={{
                  backgroundImage: "radial-gradient(#71717A 1px, transparent 1px)",
                  backgroundSize: "14px 14px",
                }}
              />

              <div className="relative z-10 flex flex-wrap gap-2 items-center justify-center">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] text-[#09090B] dark:text-[#FAFAFA] shadow-xs flex items-center gap-1.5"
                >
                  <Code2 className="w-3 h-3 text-neutral-500" />
                  Next.js 15
                </motion.div>

                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#09090B] text-white dark:bg-[#FAFAFA] dark:text-[#09090B] shadow-xs flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3" />
                  React 19
                </motion.div>

                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] text-[#09090B] dark:text-[#FAFAFA] shadow-xs"
                >
                  TypeScript
                </motion.div>

                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] text-[#71717A] dark:text-[#A1A1AA] shadow-xs"
                >
                  Tailwind CSS
                </motion.div>
              </div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mt-4 mb-2">
              Latest Tech
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] leading-relaxed pt-2">
            Stay ahead with cutting-edge frameworks and libraries for a modern, high-performance web experience.
          </p>
        </motion.div>

        {/* 2. RESPONSIVENESS */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="relative overflow-hidden bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#18181B] dark:hover:border-[#52525B] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)] group min-h-[360px] h-full"
        >
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-neutral-200/50 to-transparent dark:from-neutral-800/40 dark:to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          <div>
            <div className="w-11 h-11 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA] mb-4 shadow-xs group-hover:scale-105 transition-transform">
              <Smartphone className="w-5 h-5 stroke-[1.75]" />
            </div>

            <div className="relative h-32 my-3 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden p-3 flex flex-col justify-between">
              <div className="flex items-center justify-center gap-1.5">
                {[
                  { id: "desktop", label: "Desktop", icon: Monitor },
                  { id: "tablet", label: "Tablet", icon: Tablet },
                  { id: "mobile", label: "Mobile", icon: Smartphone },
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setActiveDevice(d.id as any)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-medium transition-all ${
                      activeDevice === d.id
                        ? "bg-[#09090B] text-white dark:bg-[#FAFAFA] dark:text-[#09090B] shadow-xs"
                        : "text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#FAFAFA]"
                    }`}
                  >
                    <d.icon className="w-3 h-3" />
                    {d.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center w-full px-2">
                <motion.div
                  animate={{
                    width:
                      activeDevice === "desktop"
                        ? "94%"
                        : activeDevice === "tablet"
                        ? "68%"
                        : "38%",
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className="h-9 rounded-lg border border-[#09090B]/30 dark:border-[#FAFAFA]/30 bg-white dark:bg-[#121215] flex items-center justify-between px-2 shadow-xs"
                >
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  </div>
                  <div className="h-1.5 w-10 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
                  <div className="w-2 h-2 rounded-xs border border-neutral-400" />
                </motion.div>
              </div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mt-4 mb-2">
              Responsiveness
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] leading-relaxed pt-2">
            Seamless adaptation across devices for a flawless, fluid user experience everywhere.
          </p>
        </motion.div>

        {/* 3. BEAUTIFUL UX (Top Right - Matches Global Edge Height) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="relative overflow-hidden bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#18181B] dark:hover:border-[#52525B] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)] group min-h-[360px] h-full"
        >
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-neutral-200/50 to-transparent dark:from-neutral-800/40 dark:to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA] shadow-xs group-hover:scale-105 transition-transform">
                <Shapes className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#71717A] dark:text-[#A1A1AA] tracking-widest px-3 py-1 rounded-full bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A]">
                <span>○</span>
                <span>✕</span>
                <span>△</span>
                <span>◻</span>
              </div>
            </div>

            {/* Kinetic Geometry Playground */}
            <div className="relative h-32 my-3 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden p-3 flex flex-col justify-between items-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-40 rounded-full border border-neutral-300/40 dark:border-neutral-800 animate-[spin_24s_linear_infinite]" />
                <div className="absolute w-24 h-24 rounded-full border border-dashed border-neutral-300/60 dark:border-neutral-800" />
              </div>

              <div className="flex justify-between w-full px-3 relative z-10">
                <motion.div
                  animate={{ y: [0, -4, 0], rotate: [0, 360] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-xs font-bold shadow-xs text-[#09090B] dark:text-[#FAFAFA]"
                >
                  ○
                </motion.div>

                <motion.div
                  animate={{ y: [0, 4, 0], rotate: [0, -180] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="w-8 h-8 rounded-xl bg-[#09090B] text-white dark:bg-[#FAFAFA] dark:text-[#09090B] flex items-center justify-center text-xs font-bold shadow-xs"
                >
                  ✕
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md border border-[#E4E4E7] dark:border-[#27272A] shadow-xs flex items-center gap-2 text-[11px] font-semibold text-[#09090B] dark:text-[#FAFAFA]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Tactile &amp; Intuitive
              </motion.div>

              <div className="flex justify-between w-full px-3 relative z-10">
                <motion.div
                  animate={{ y: [0, 4, 0], rotate: [0, 120] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="w-8 h-8 rounded-xl bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-xs font-bold shadow-xs text-[#09090B] dark:text-[#FAFAFA]"
                >
                  △
                </motion.div>

                <motion.div
                  animate={{ y: [0, -4, 0], rotate: [0, 90] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  className="w-8 h-8 rounded-xl bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-xs font-bold shadow-xs text-[#09090B] dark:text-[#FAFAFA]"
                >
                  ◻
                </motion.div>
              </div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mt-4 mb-2">
              Beautiful UX
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] leading-relaxed pt-2">
            Aesthetic designs that blend style with usability for a polished, frictionless interface that users love to explore.
          </p>
        </motion.div>

        {/* ROW 2 */}

        {/* 4. PERFORMANCE */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="relative overflow-hidden bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#18181B] dark:hover:border-[#52525B] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)] group min-h-[360px] h-full"
        >
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-neutral-200/50 to-transparent dark:from-neutral-800/40 dark:to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          <div>
            <div className="w-11 h-11 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA] mb-4 shadow-xs group-hover:scale-105 transition-transform">
              <Rocket className="w-5 h-5 stroke-[1.75]" />
            </div>

            <div className="relative h-32 my-3 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-neutral-200 dark:text-neutral-800 stroke-current"
                      strokeWidth="3.5"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="text-emerald-500 stroke-current"
                      strokeWidth="3.5"
                      strokeDasharray="100, 100"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-xs font-mono font-bold text-[#09090B] dark:text-[#FAFAFA]">
                    100
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#09090B] dark:text-[#FAFAFA]">
                    Score 100
                  </span>
                  <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Lighthouse
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="px-2 py-1 rounded-md bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] text-[10px] font-mono font-bold text-[#09090B] dark:text-[#FAFAFA] flex items-center gap-1 shadow-xs">
                  <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                  60 FPS
                </div>
                <span className="text-[10px] font-mono text-[#71717A] dark:text-[#A1A1AA] mt-1">
                  &lt; 0.2s LCP
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mt-4 mb-2">
              Performance
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] leading-relaxed pt-2">
            Crafting intuitive and enjoyable interactions that keep users engaged with instant responsiveness.
          </p>
        </motion.div>

        {/* 5. BEAUTIFUL UI */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="relative overflow-hidden bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#18181B] dark:hover:border-[#52525B] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)] group min-h-[360px] h-full"
        >
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-neutral-200/50 to-transparent dark:from-neutral-800/40 dark:to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          <div>
            <div className="w-11 h-11 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA] mb-4 shadow-xs group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5 stroke-[1.75]" />
            </div>

            <div className="relative h-32 my-3 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden p-3 flex items-center justify-center">
              <div className="relative w-44 h-16">
                <motion.div
                  animate={{ y: [0, -2, 0], scale: [0.9, 0.92, 0.9] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-x-4 top-0 h-14 rounded-xl bg-neutral-200/70 dark:bg-neutral-800/70 border border-neutral-300 dark:border-neutral-700"
                />
                <motion.div
                  animate={{ y: [0, -4, 0], scale: [0.95, 0.97, 0.95] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute inset-x-2 top-2 h-14 rounded-xl bg-neutral-100 dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] shadow-xs"
                />
                <motion.div
                  whileHover={{ y: -6 }}
                  className="absolute inset-x-0 top-4 h-14 rounded-xl bg-white dark:bg-[#121215] border border-[#09090B]/20 dark:border-[#FAFAFA]/20 shadow-md flex items-center justify-between px-3 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#09090B] dark:text-[#FAFAFA]" />
                    <span className="text-xs font-semibold text-[#09090B] dark:text-[#FAFAFA]">
                      Design System
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] text-neutral-500">
                    v2.0
                  </span>
                </motion.div>
              </div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mt-4 mb-2">
              Beautiful UI
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] leading-relaxed pt-2">
            Optimized for speed and efficiency, delivering lightning-fast, pixel-perfect digital experiences.
          </p>
        </motion.div>

        {/* 6. GLOBAL EDGE (Bottom Right - Exactly Same Height as Beautiful UX) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="relative overflow-hidden bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#18181B] dark:hover:border-[#52525B] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)] group min-h-[360px] h-full"
        >
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-neutral-200/50 to-transparent dark:from-neutral-800/40 dark:to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA] shadow-xs group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5 stroke-[1.75]" />
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3 h-3" />
                Zero Trust
              </span>
            </div>

            {/* Edge Ping Nodes */}
            <div className="relative h-32 my-3 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden p-3 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#09090B] dark:text-[#FAFAFA] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Edge CDN
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">&lt; 12ms</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                {[
                  { city: "Mumbai", ping: "6ms" },
                  { city: "Tokyo", ping: "14ms" },
                  { city: "London", ping: "18ms" },
                ].map((node) => (
                  <div
                    key={node.city}
                    className="p-2 rounded-xl bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] text-center shadow-xs"
                  >
                    <div className="text-[10px] font-medium text-[#71717A] dark:text-[#A1A1AA] truncate">
                      {node.city}
                    </div>
                    <div className="text-xs font-mono font-bold text-[#09090B] dark:text-[#FAFAFA]">
                      {node.ping}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mt-4 mb-2">
              Global Edge
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] leading-relaxed pt-2">
            Ultra-low latency worldwide deployment powered by distributed edge caching and defensive SSL security.
          </p>
        </motion.div>

        {/* ROW 3 - FULL WIDTH BENTO ANCHOR CARD */}

        {/* 7. CLEAN ARCHITECTURE (Full Span 3 Columns) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="relative overflow-hidden bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#18181B] dark:hover:border-[#52525B] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)] group lg:col-span-3 min-h-[260px]"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-neutral-200/50 to-transparent dark:from-neutral-800/40 dark:to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA] mb-4 shadow-xs group-hover:scale-105 transition-transform">
                <Terminal className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-3">
                Clean Architecture
              </h3>
              <p className="text-sm text-[#71717A] dark:text-[#A1A1AA] leading-relaxed max-w-lg">
                Modular, scalable codebase engineered with strict TypeScript type-safety, zero technical debt, and automated unit/integration test coverage for rock-solid stability.
              </p>
            </div>

            {/* Next.js CLI Terminal Micro-Interaction */}
            <div className="rounded-2xl bg-[#09090B] text-white dark:bg-[#18181B] border border-[#27272A] overflow-hidden p-4 font-mono text-xs flex flex-col justify-between shadow-md">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] text-neutral-400">clean_arch.ts</span>
              </div>
              <div className="space-y-1.5 py-1">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="text-neutral-500">&gt;</span>
                  <span>next build --turbo</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="text-emerald-500">✓</span>
                  <span>Compiled successfully in 184ms</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400 text-[11px]">
                  <span className="text-blue-400">λ</span>
                  <span>Serverless edge functions active</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] text-neutral-500 border-t border-neutral-800/80 pt-2 mt-2">
                <span>99.9% Uptime</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Ready to scale
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Principles;
