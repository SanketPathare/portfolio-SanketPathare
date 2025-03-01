"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 12, transition: { duration: 0.2 } },
  };

  const contactItems = [
    {
      title: "MAIL US",
      icon: Mail,
      content: "sanketpathare8808@gmail.com",
    },
    {
      title: "CONTACT US",
      icon: Phone,
      content: "+91 9011513014",
    },
    {
      title: "LOCATION",
      icon: MapPin,
      content: "Pune, India",
    },
  ];

  return (
    <motion.div
      className="bg-neutral-900 text-white border border-black ring-2 ring-neutral-700 rounded-2xl p-4 sm:p-8" // Added responsive padding
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" // Added responsive font size and margin
      >
        <span className="text-white"> Contact </span>
        <span className="text-gray-500">Info -</span>
      </motion.h2>
      <div className="space-y-6 sm:space-y-8">
        {" "}
        {/* Added responsive spacing */}
        {contactItems.map((item, index) => (
          <motion.div key={item.title} variants={itemVariants}>
            <div className="p-3 sm:p-4 rounded-2xl bg-neutral-800">
              {" "}
              {/* Added responsive padding */}
              <h4 className="text-gray-400 mb-1 sm:mb-2 text-sm sm:text-md">
                {item.title}
              </h4>{" "}
              {/* Added responsive margin and font size */}
              <div className="flex items-center space-x-3 sm:space-x-4 group">
                {" "}
                {/* Added responsive spacing */}
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <item.icon className="text-gray-500 hover:text-white w-5 h-5 sm:w-6 sm:h-6" />{" "}
                  {/* Added responsive icon size */}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <p className="text-gray-500 hover:text-white text-sm lg:text-md">
                    {" "}
                    {/* Added responsive font size */}
                    {item.content}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
