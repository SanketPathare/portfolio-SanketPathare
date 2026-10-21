"use client";

import React from "react";
import {
  Code,
  Palette,
  Server,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";

const Page = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
      percentage: 95,
      tools: "React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, shadcn/ui, Three.js",
    },
    {
      name: "Backend Development",
      percentage: 85,
      tools: "Node.js, Express.js, REST API Development",
    },
    {
      name: "Database & Cloud",
      percentage: 80,
      tools: "MongoDB, PostgreSQL, Firebase",
    },
    {
      name: "Tools & UI/UX",
      percentage: 90,
      tools: "Git, GitHub, Postman, VS Code, Figma (Design Interpretation), Responsive Design",
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Adaptability",
    "Team Collaboration",
    "Clean Code Practices",
    "Continuous Learning",
    "Performance Optimization",
  ];

  const languages = ["English", "Hindi", "Marathi"];

  const ExperienceItem = ({
    startDate,
    endDate,
    title,
    company,
    link,
    description,
  }: {
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    link?: string;
    description: string;
  }) => (
    <motion.div variants={itemVariants} className="relative pl-6 pb-8 last:pb-2">
      {/* Timeline line and dot */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-[#E4E4E7] dark:bg-[#27272A]" />
      <div className="absolute -left-[5px] top-2 w-[11px] h-[11px] rounded-full bg-[#18181B] dark:bg-[#FAFAFA] ring-4 ring-white dark:ring-[#121215]" />

      <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-semibold tracking-wider uppercase text-[#71717A] dark:text-[#A1A1AA] mb-1">
        <span>
          {startDate} - {endDate}
        </span>
        <span className="text-[#09090B] dark:text-[#FAFAFA] font-medium">{title}</span>
      </div>
      <h3 className="font-bold text-lg text-[#09090B] dark:text-[#FAFAFA]">
        {company} {link && <span className="text-xs font-normal text-[#71717A] dark:text-[#A1A1AA]">({link})</span>}
      </h3>
      <p className="text-sm text-[#71717A] dark:text-[#A1A1AA] mt-2 whitespace-pre-line leading-relaxed">
        {description}
      </p>
    </motion.div>
  );

  return (
    <motion.main
      className="min-h-screen pt-4 pb-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full">
        <motion.div variants={itemVariants} className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#121215] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA]">
            PROFILE OVERVIEW
          </div>
          <h1 className="headline-lg tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
            SELF-<span className="text-[#71717A] dark:text-[#A1A1AA]">SUMMARY</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Get To Know Me */}
            <motion.div
              className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              variants={itemVariants}
            >
              <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
                BACKGROUND
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-4">
                Get To Know Me
              </h2>
              <p className="text-base leading-relaxed text-[#71717A] dark:text-[#A1A1AA]">
                Passionate Full Stack Web Developer with hands-on experience in building modern, scalable web applications using React.js, Next.js, and Node.js. Dedicated to turning complex ideas into real, user-friendly products while continuously improving technical skills. A quick learner and adaptable professional ready to tackle new challenges in dynamic, fast-paced environments based in Pune, India.
              </p>
            </motion.div>

            {/* Professional Experience */}
            <motion.div
              className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              variants={itemVariants}
            >
              <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
                CAREER HISTORY
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-6">
                Work Experience
              </h2>
              <div className="space-y-2">
                <ExperienceItem
                  startDate="2025"
                  endDate="Present"
                  title="Frontend Developer"
                  company="GiftsUnbound"
                  link="giftsunbound.com"
                  description={`• Developed and maintained a voucher-based e-commerce digital gifting platform using modern frontend technologies.\n• Built responsive and user-friendly UI components, improving accessibility across mobile, tablet, and desktop devices.\n• Optimized website performance, significantly reducing load times and enhancing the overall user experience.\n• Identified and resolved complex bugs, ensuring high functionality, reliability, and code quality.\n• Collaborated seamlessly with cross-functional team members to implement new features and system enhancements.`}
                />

                <ExperienceItem
                  startDate="2024"
                  endDate="2025"
                  title="Web Developer"
                  company="Neritic Industries"
                  description={`• Contributed to the development of a comprehensive admin dashboard with integrated frontend and backend functionality.\n• Designed and implemented scalable UI components, improving usability and system performance.\n• Integrated RESTful APIs and securely handled data flow between frontend interfaces and backend systems.\n• Improved overall system efficiency by optimizing existing features and quickly resolving technical debt.`}
                />

                <ExperienceItem
                  startDate="2022"
                  endDate="2024"
                  title="Web Developer"
                  company="LayerNLooms"
                  link="layernlooms.com"
                  description={`• Developed responsive web interfaces by converting complex Figma designs into highly reusable React components for a software enterprise offering SaaS, PaaS, and dashboard systems.\n• Managed technical branding, deployed promotional content, and ensured flawless cross-browser compatibility.\n• Improved website performance through advanced code optimization and efficient rendering techniques.`}
                />
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              variants={itemVariants}
            >
              <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
                ACADEMICS
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-6">
                Education
              </h2>
              <div className="space-y-6">
                <div className="relative pl-6 pb-4 border-l border-[#E4E4E7] dark:border-[#27272A]">
                  <div className="absolute -left-[5px] top-1 w-[11px] h-[11px] rounded-full bg-[#18181B] dark:bg-[#FAFAFA] ring-4 ring-white dark:ring-[#121215]" />
                  <div className="flex justify-between items-center text-xs font-semibold uppercase text-[#71717A] dark:text-[#A1A1AA] mb-1">
                    <span>2022 - 2025</span>
                    <span className="text-[#09090B] dark:text-[#FAFAFA]">Undergraduate</span>
                  </div>
                  <h3 className="text-base font-bold text-[#09090B] dark:text-[#FAFAFA]">
                    BTech in Computer Science
                  </h3>
                  <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-1">
                    G. H. Raisoni University Amravati
                  </p>
                  <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-2 leading-relaxed">
                    Achieved excellent academic performance, building a strong foundation in core computer science principles and problem-solving skills.
                  </p>
                </div>

                <div className="relative pl-6 border-l border-[#E4E4E7] dark:border-[#27272A]">
                  <div className="absolute -left-[5px] top-1 w-[11px] h-[11px] rounded-full bg-[#18181B] dark:bg-[#FAFAFA] ring-4 ring-white dark:ring-[#121215]" />
                  <div className="flex justify-between items-center text-xs font-semibold uppercase text-[#71717A] dark:text-[#A1A1AA] mb-1">
                    <span>2019 - 2022</span>
                    <span className="text-[#09090B] dark:text-[#FAFAFA]">Diploma</span>
                  </div>
                  <h3 className="text-base font-bold text-[#09090B] dark:text-[#FAFAFA]">
                    Diploma in Information Technology
                  </h3>
                  <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-1">
                    Jaywantrao Sawant Polytechnic
                  </p>
                  <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-2 leading-relaxed">
                    Developed a strong focus on programming fundamentals, web technologies, and IT systems architecture.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Soft Skills & Languages */}
            <motion.div
              className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              variants={itemVariants}
            >
              <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
                COMMUNICATION & MINDSET
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-6">
                Skills & Languages
              </h2>
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase text-[#71717A] dark:text-[#A1A1AA] block mb-3">
                  Professional Mindset
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {softSkills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="chip-mono text-xs sm:text-sm py-2 px-4 bg-[#FAFAFA] dark:bg-[#18181B] hover:bg-white dark:hover:bg-[#202024] hover:border-[#09090B] dark:hover:border-[#FAFAFA] transition-colors"
                      variants={itemVariants}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase text-[#71717A] dark:text-[#A1A1AA] block mb-3">
                  Languages Spoken
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] text-xs font-medium text-[#09090B] dark:text-[#FAFAFA]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Services */}
            <motion.div
              className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              variants={itemVariants}
            >
              <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
                CAPABILITIES
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-6">
                Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <motion.div
                    key={service.title}
                    className="p-5 border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] rounded-2xl hover:bg-white dark:hover:bg-[#202024] hover:border-[#09090B] dark:hover:border-[#FAFAFA] transition-all group"
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-11 h-11 border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#121215] rounded-full flex items-center justify-center mb-4 text-[#09090B] dark:text-[#FAFAFA] group-hover:border-[#09090B] dark:group-hover:border-[#FAFAFA] transition-colors">
                      <service.Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#09090B] dark:text-[#FAFAFA] mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              variants={itemVariants}
            >
              <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
                TECH STACK & TOOLS
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-6">
                Technical Skills
              </h2>
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-[#09090B] dark:text-[#FAFAFA]">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-medium text-[#71717A] dark:text-[#A1A1AA]">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-[#F4F4F5] dark:bg-[#27272A] rounded-full overflow-hidden mb-2">
                      <motion.div
                        className="h-full bg-[#18181B] dark:bg-[#FAFAFA] rounded-full"
                        custom={skill.percentage}
                        variants={skillBarVariants}
                      />
                    </div>
                    <p className="text-xs text-[#71717A] dark:text-[#A1A1AA]">{skill.tools}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Page;