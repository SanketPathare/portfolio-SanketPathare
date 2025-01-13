"use client";

import { Calendar, Book, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (width: number) => ({
      width: `${width}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  const ServiceCard: React.FC<{
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
  }> = ({ Icon, title }) => (
    <motion.div
      className="p-3 sm:p-4 bg-neutral-800 rounded-xl"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/10 rounded-full flex items-center justify-center mb-2 sm:mb-3">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <h3 className="text-sm sm:text-base font-semibold">{title}</h3>
    </motion.div>
  );

  const services = [
    { Icon: Calendar, title: "Web Design" },
    { Icon: Book, title: "Development" },
    { Icon: Award, title: "Branding" },
    { Icon: Users, title: "Consultation" },
  ];

  const skills = [
    { name: "Web Development", percentage: 90 },
    { name: "UI/UX Design", percentage: 85 },
    { name: "Mobile Development", percentage: 75 },
  ];

  return (
    <>
      <Navbar />
      <motion.main
        className="min-h-screen pt-16 sm:pt-24 pb-8 sm:pb-12 mx-4 sm:mx-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12"
            variants={itemVariants}
          >
            SELF-SUMMARY
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              {/* know me */}
              <motion.div
                className="bg-neutral-900 p-4 sm:p-6 rounded-2xl border border-black ring-2 ring-neutral-700"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Get To Know Me
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-sm  -tracking-tight text-neutral-400">
                      Hi, my name is Sanket Pathare and I am from pune, India.
                      Im a Full stack web developer and a last year college
                      student pursuing BTech in CSE. I have done an internship
                      as a Web developer at Divinify. I love to create original
                      projects with beautiful designs, you can check out some of
                      my work in the projects section.
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                className="bg-neutral-900 p-4 sm:p-6 rounded-2xl  border border-black ring-2 ring-neutral-700"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Experience
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <motion.div variants={itemVariants}>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-neutral-400">
                      <span className="mb-1 sm:mb-0">2021 - 2022</span>
                      <span>ReactJs & NextJs</span>
                    </div>
                    <h3 className="font-semibold mt-1">Front-End Developer</h3>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-neutral-400">
                      <span className="mb-1 sm:mb-0">2023 - Onward</span>
                      <span>JavaScript & NodeJS </span>
                    </div>
                    <h3 className="font-semibold mt-1">Back-End Developer</h3>
                  </motion.div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                className="bg-neutral-900 p-4 sm:p-6 rounded-2xl border border-black ring-2 ring-neutral-700"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Education
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <motion.div variants={itemVariants}>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-neutral-400">
                      <span className="mb-1 sm:mb-0">2019 - 2022</span>
                      <span>JSPM&apos;s College, Hadapsar</span>
                    </div>
                    <h3 className="font-semibold mt-1 text-sm">
                      Diploma In Information Technology
                    </h3>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-neutral-400">
                      <span className="mb-1 sm:mb-0">2022 - Onward</span>
                      <span>G.H.Raisoni University, Wagholi</span>
                    </div>
                    <h3 className="font-semibold mt-1 text-sm">
                      Bachelor Degree in CSE
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                className="bg-neutral-900 p-4 sm:p-6 rounded-2xl border border-black ring-2 ring-neutral-700"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Services
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 ">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.title}
                      Icon={service.Icon}
                      title={service.title}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                className="bg-neutral-900 p-4 sm:p-6 rounded-2xl border border-black ring-2 ring-neutral-700"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Skills
                </h2>
                <div className="space-y-3 sm:space-y-4 ">
                  {skills.map((skill) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm sm:text-base font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm sm:text-base text-neutral-400">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-neutral-800 rounded-full">
                        <motion.div
                          className="h-full bg-neutral-500 rounded-full"
                          custom={skill.percentage}
                          variants={skillBarVariants}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default About;
