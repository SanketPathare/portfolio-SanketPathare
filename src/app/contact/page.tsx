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
    <>  

    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="text-white "
    >
      <motion.div
        variants={containerVariants}
        className="px-4 mx-auto my-10 max-w-7xl"
      >
        <div className="grid grid-cols-1 gap-12 px-1 py-12 md:grid-cols-2 md:ml-8 md:mr-8 sm:px-4">
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
            className="border border-black rounded-2xl ring-2 ring-neutral-700"
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>

    </motion.main>
    
    </>
  );
}
