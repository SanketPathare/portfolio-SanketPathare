"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -16, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contactItems = [
    {
      title: "MAIL US",
      icon: Mail,
      content: "sanketpathare8808@gmail.com",
      href: "mailto:sanketpathare8808@gmail.com",
    },
    {
      title: "CONTACT US",
      icon: Phone,
      content: "+91 9011513014",
      href: "tel:+919011513014",
    },
    {
      title: "LOCATION",
      icon: MapPin,
      content: "Pune, India",
      href: "#",
    },
  ];

  return (
    <motion.div
      className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] h-full flex flex-col justify-between"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA]">
          CONTACT INFO
        </div>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-8"
        >
          Contact <span className="text-[#71717A] dark:text-[#A1A1AA]">Information</span>
        </motion.h2>

        <div className="space-y-4">
          {contactItems.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <a
                href={item.href}
                className="block p-5 rounded-2xl border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] hover:bg-white dark:hover:bg-[#202024] hover:border-[#09090B] dark:hover:border-[#FAFAFA] transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#121215] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA] group-hover:border-[#09090B] dark:group-hover:border-[#FAFAFA] transition-colors flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-[#09090B] dark:text-[#FAFAFA] group-hover:text-[#18181B] dark:group-hover:text-white transition-colors truncate">
                      {item.content}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[#E4E4E7] dark:border-[#27272A] text-xs text-[#71717A] dark:text-[#A1A1AA]">
        Looking forward to hearing from you. Always open to discussing new projects, creative ideas or opportunities.
      </div>
    </motion.div>
  );
};

export default ContactInfo;
