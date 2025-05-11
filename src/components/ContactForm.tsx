"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData(event.target);

      form.append("access_key", "3cc9e643-dc04-495a-8f34-3ca616ffa3b3");
      form.append("from_name", formData.name);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        // Show success message
        toast.success("Message sent successfully");
        // Reset the form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(
          `Failed to send message: ${data.message || "Please try again."}`
        );
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      className="p-3 rounded sm:p-8"
    >
      <div>
        <motion.h2
          variants={itemVariants}
          className="mb-6 text-2xl font-bold sm:text-3xl"
        >
          <span className="text-white">Let&apos;s Work </span>
          <span className="text-gray-500">Together.</span>
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          className="space-y-4 sm:space-y-6"
        >
          {/* Honeypot field to prevent spam */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              className="w-full p-2 text-white rounded-md bg-neutral-800 sm:p-3"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className="w-full p-2 text-white rounded-md bg-neutral-800 sm:p-3"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              placeholder="Your Message *"
              rows={4}
              className="w-full p-2 text-white rounded-md bg-neutral-800 sm:p-3"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-white transition rounded-md bg-neutral-800 sm:py-4 hover:bg-neutral-700 disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
              border: "1px solid #444",
            },
            duration: 4000,
          }}
        />
      </div>
    </motion.div>
  );
}
