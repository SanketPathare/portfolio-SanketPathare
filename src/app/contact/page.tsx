"use client";

import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { motion } from "framer-motion";

export default function Contact() {
  const pageVariants = {
    initial: { opacity: 0, y: 16 },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    out: {
      opacity: 0,
      y: -16,
      transition: {
        duration: 0.3,
      },
    },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    in: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen pt-4 pb-12"
    >
      <motion.div variants={containerVariants} className="w-full">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#121215] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA]">
            GET IN TOUCH
          </div>
          <h1 className="headline-lg tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
            LET&apos;S <span className="text-[#71717A] dark:text-[#A1A1AA]">CONNECT</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  );
}
