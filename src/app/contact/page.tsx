"use client";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    out: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    in: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-scree text-white"
    >
      <Navbar />

      <motion.div
        variants={containerVariants}
        className="pt-20 px-4 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 py-12 md:ml-8 md:mr-8 sm:px-4 px-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.4,
            
            }}
            className=" rounded-2xl border border-black ring-2 ring-neutral-700"
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </motion.main>
  );
}
