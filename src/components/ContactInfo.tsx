'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 12, transition: { duration: 0.2 } }
  };

  const contactItems = [
    {
      title: "MAIL US",
      icon: Mail,
      content: "sanketpathare8808@gmail.com"
    },
    {
      title: "CONTACT US",
      icon: Phone,
      content: "+91 90511864578"
    },
    {
      title: "LOCATION",
      icon: MapPin,
      content: "Pune, India"
    }
  ];

  return (
    <motion.div 
      className="text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3 
        className="text-xl font-bold mb-6"
        variants={itemVariants}
      >
        CONTACT INFO -
      </motion.h3>
      <div className="space-y-8">
        {contactItems.map((item, index) => (
          <motion.div 
            key={item.title}
            variants={itemVariants}
          >
            <h4 className="text-gray-400 mb-2">{item.title}</h4>
            <div className="flex items-center space-x-4 group">
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <item.icon className="text-gray-400" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <p>{item.content}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}