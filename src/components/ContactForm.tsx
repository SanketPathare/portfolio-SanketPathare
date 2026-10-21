"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";

const ContactForm = () => {
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
        toast.success("Message sent successfully!");
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
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white border border-[#E4E4E7] rounded-3xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
    >
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-[#E4E4E7] bg-[#FAFAFA] text-xs font-semibold tracking-widest uppercase text-[#71717A]">
          SEND A MESSAGE
        </div>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] mb-8"
        >
          Let&apos;s Work <span className="text-[#71717A]">Together.</span>
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          className="space-y-4 sm:space-y-5"
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
              placeholder="Your Name *"
              className="w-full px-5 py-3.5 text-sm sm:text-base text-[#09090B] bg-white border border-[#E4E4E7] rounded-full focus:border-[#09090B] focus:ring-1 focus:ring-[#09090B] focus:outline-none transition-all placeholder:text-[#A1A1AA]"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              className="w-full px-5 py-3.5 text-sm sm:text-base text-[#09090B] bg-white border border-[#E4E4E7] rounded-full focus:border-[#09090B] focus:ring-1 focus:ring-[#09090B] focus:outline-none transition-all placeholder:text-[#A1A1AA]"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              placeholder="Your Message *"
              rows={5}
              className="w-full p-5 text-sm sm:text-base text-[#09090B] bg-white border border-[#E4E4E7] rounded-3xl focus:border-[#09090B] focus:ring-1 focus:ring-[#09090B] focus:outline-none transition-all placeholder:text-[#A1A1AA] resize-none"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={isSubmitting}
            className="w-full h-[45px] text-sm font-medium text-white bg-[#18181B] rounded-full hover:bg-[#27272A] disabled:opacity-60 transition-all shadow-sm flex items-center justify-center cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#09090B",
              color: "#FFFFFF",
              border: "1px solid #27272A",
              borderRadius: "9999px",
            },
            duration: 4000,
          }}
        />
      </div>
    </motion.div>
  );
};

export default ContactForm;
