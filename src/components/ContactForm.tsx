"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-neutral-900 p-4 sm:p-8 rounded-2xl"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8"
      >
        <span className="text-white">Let&apos;s work </span>
        <span className="text-gray-500">Together.</span>
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        variants={containerVariants}
        className="space-y-4 sm:space-y-6"
      >
        <motion.div variants={itemVariants}>
          <input
            type="text"
            placeholder="Name *"
            className="w-full bg-neutral-800 text-white p-2 sm:p-3 rounded-md"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <input
            type="email"
            placeholder="Email *"
            className="w-full bg-neutral-800 text-white p-2 sm:p-3 rounded-md"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <input
            type="text"
            placeholder="Your Subject *"
            className="w-full bg-neutral-800 text-white p-2 sm:p-3 rounded-md"
            required
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <textarea
            placeholder="Your Message *"
            rows={4} // Reduced rows for smaller screens
            className="w-full bg-neutral-800 text-white p-2 sm:p-3 rounded-md"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </motion.div>

        <motion.button
          variants={itemVariants}
          type="submit"
          className="w-full bg-neutral-800 text-white py-3 sm:py-4 rounded-md hover:bg-gray-700 transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
