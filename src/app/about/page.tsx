"use client";

import {
  Code,
  Palette,
  Server,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
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
    description: string;
  }> = ({ Icon, title, description }) => (
    <motion.div
      className="p-4 sm:p-5 bg-neutral-800 rounded-xl"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-md text-neutral-400">{description}</p>
    </motion.div>
  );

  const services = [
    {
      Icon: Code,
      title: "Web Development",
      description:
        "Full-stack web applications using modern frameworks and best practices",
    },
    {
      Icon: Palette,
      title: "UI/UX Design",
      description:
        "Intuitive and responsive designs focused on user experience",
    },
    {
      Icon: Server,
      title: "Backend Development",
      description: "Scalable server solutions and API development",
    },
    {
      Icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud deployment and infrastructure management",
    },
  ];

  const technicalSkills = [
    {
      name: "Frontend Development",
      percentage: 90,
      tools: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      name: "Backend Development",
      percentage: 85,
      tools: "Node.js, Express, MongoDB, PostgreSQL",
    },
    {
      name: "UI/UX Design",
      percentage: 80,
      tools: "Figma, Adobe XD, Material-UI",
    },
    { name: "Mobile Development", percentage: 70, tools: "React Native, Expo" },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Project Management",
    "Communication",
    "Time Management",
    "Adaptability",
  ];

  const ExperienceItem = ({
    startDate,
    endDate,
    title,
    company,
    description,
  }: {
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    description: string;
  }) => (
    <motion.div variants={itemVariants} className="relative">
      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-neutral-400">
        <span className="mb-1 sm:mb-0">
          {startDate} - {endDate}
        </span>
        <span>{title}</span>
      </div>
      <h3 className="font-semibold mt-1 text-lg">{company}</h3>
      <p className="text-base text-neutral-400 mt-2 whitespace-pre-line">
        {description}
      </p>

      {/* Timeline Dot and Line */}
      <div className="absolute left-0 top-0 h-full ml-[-10px] sm:ml-[-15px] w-0.5 bg-neutral-700">
        <div className="absolute w-3 h-3 bg-neutral-500 rounded-full top-1/4 -translate-y-1/2 left-[-5px] sm:left-[-6px]"></div>
      </div>
    </motion.div>
  );

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
            className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 mt-4 text-center sm:text-left"
            variants={itemVariants}
          >
            SELF-SUMMARY
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Get To Know Me */}
              <motion.div
                className="bg-neutral-900 p-4 sm:p-6 rounded-2xl border border-black ring-2 ring-neutral-700"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Get To Know Me
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <motion.p
                      className="text-base leading-relaxed text-neutral-400"
                      variants={itemVariants} // Apply itemVariants for individual paragraph animation
                    >
                      Hi, I'm Sanket Pathare, a passionate Full-stack developer
                      based in Pune, India. Currently pursuing my BTech in
                      Computer Science Engineering, I combine academic
                      excellence with practical experience in web development.
                      During my internship at Divinify, I specialized in
                      building scalable web applications and implementing
                      responsive designs. I'm particularly interested in
                      creating innovative solutions that solve real-world
                      problems. My approach combines technical expertise with
                      creative problem-solving, ensuring that each project not
                      only functions flawlessly but also provides an exceptional
                      user experience.
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              {/* Professional Experience */}
              <motion.div
                className="bg-neutral-900 p-4 sm:p-6 rounded-2xl border border-black ring-2 ring-neutral-700"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Professional Experience
                </h2>
                <div className="space-y-4 sm:space-y-6 relative pl-6 sm:pl-8">
                  {/* Timeline Line */}
                  {/* <div className="absolute left-0 top-0 h-full ml-[-10px] sm:ml-[-15px] w-0.5 bg-neutral-700"></div> */}

                  <ExperienceItem
                    startDate="2023"
                    endDate="Present"
                    title="Full Stack Development"
                    company="Senior Developer at Divinify"
                    description={`• Led development of multiple client projects using React and Node.js
                      • Implemented CI/CD pipelines and improved deployment processes
                      • Mentored junior developers and conducted code reviews`}
                  />

                  <ExperienceItem
                    startDate="2021"
                    endDate="2023"
                    title="Frontend Development"
                    company="Frontend Developer"
                    description={`• Developed responsive web applications using React and Next.js
                      • Collaborated with UI/UX designers to implement pixel-perfect designs
                      • Optimized application performance and loading times`}
                  />
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                className="bg-neutral-900 p-4 sm:p-6 rounded-2xl border border-black ring-2 ring-neutral-700"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Soft Skills
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="bg-neutral-800 rounded-lg p-3 text-md"
                      variants={itemVariants} // Apply itemVariants to soft skills
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Services */}
              <motion.div
                className="bg-neutral-900 p-4 sm:p-6 rounded-2xl border border-black ring-2 ring-neutral-700"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.title}
                      Icon={service.Icon}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Technical Skills */}
              <motion.div
                className="bg-neutral-900 p-4 sm:p-6 rounded-2xl border border-black ring-2 ring-neutral-700"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Technical Skills
                </h2>
                <div className="space-y-4">
                  {technicalSkills.map((skill) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                      <div className="flex justify-between mb-2">
                        <span className="text-base sm:text-lg font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm sm:text-base text-neutral-400">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-neutral-800 rounded-full mb-2">
                        <motion.div
                          className="h-full bg-neutral-500 rounded-full"
                          custom={skill.percentage}
                          variants={skillBarVariants}
                        />
                      </div>
                      <motion.p className="text-xs text-neutral-400" variants={itemVariants}>{skill.tools}</motion.p>
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

export default Page;