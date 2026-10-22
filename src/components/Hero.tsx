"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import { GoDotFill } from "react-icons/go";
import { Icon } from "@iconify/react";
import ProjectSlidershow from "./ProjectSlidershow";
import { image } from "../../public/image";
import NumberTicker from "@/components/ui/number-ticker";
import Link from "next/link";

const AvatarImg = image.AvatarImg;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const hoverScale = {
    y: -4,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  };

  return (
    <motion.div
      className="w-full text-[#09090B] dark:text-[#FAFAFA] pb-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Top Editorial Identity / Name Lockup */}
      <motion.div variants={cardVariants} className="pt-6 pb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#121215] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA]">
          <span className="w-2 h-2 rounded-full bg-[#18181B] dark:bg-[#FAFAFA] animate-ping" />
          A SOFTWARE DEVELOPER
        </div>
        <h1 className="headline-display mb-3">
          Sanket <span className="text-[#71717A] dark:text-[#A1A1AA]">Pathare.</span>
        </h1>
        <p className="body-lg max-w-2xl text-[#71717A] dark:text-[#A1A1AA]">
          I am a Software Developer from India crafting responsive, high-performance digital experiences and scalable web applications.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Profile Card */}
        <motion.div
          className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div>
            <div className="overflow-hidden rounded-2xl border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] mb-6">
              <Image
                src={AvatarImg}
                alt="Profile Avatar"
                width={300}
                height={300}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-300"
                priority
              />
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
              A SOFTWARE DEVELOPER
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-2">
              Sanket <span className="text-[#71717A] dark:text-[#A1A1AA]">Pathare.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#71717A] dark:text-[#A1A1AA] leading-relaxed">
              I am a Software Developer from India.
            </p>
          </div>
          <div className="pt-6 mt-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex justify-between items-center">
            <span className="text-xs font-medium text-[#A1A1AA] dark:text-[#71717A]">About Profile</span>
            <Link
              href="/about"
              className="w-10 h-10 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#71717A] dark:text-[#A1A1AA] hover:text-white dark:hover:text-[#09090B] hover:bg-[#18181B] dark:hover:bg-[#FAFAFA] hover:border-[#18181B] dark:hover:border-[#FAFAFA] transition-all"
              aria-label="View About"
            >
              <FaArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Credentials Card */}
        <motion.div
          className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
              MORE ABOUT ME
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-4">
              Credentials
            </h2>
            <div className="flex items-center justify-center py-4">
              <Tilt
                className="background-stripes parallax-effect-glare-scale"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.02}
                glareColor="#ffffff"
              >
                <Image
                  src="https://uiverse.io/astronaut.png"
                  alt="Credentials Illustration"
                  width={160}
                  height={190}
                  className="filter grayscale hover:grayscale-0 transition duration-300"
                  priority
                />
              </Tilt>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
              {/* Resume Download Button */}
              <a
                href="/SanketPathare_ Resume.pdf"
                download={true}
                className="w-full sm:flex-1 btn-primary text-sm h-[43px]"
              >
                Resume
                <Icon icon="material-symbols:download" width="18" />
              </a>

              {/* Contact Button */}
              <a
                href="mailto:sanketpathare8808@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 btn-secondary text-sm h-[43px]"
              >
                Contact
                <Icon icon="mdi:contact" width="18" />
              </a>
            </div>
          </div>
          <div className="pt-6 mt-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex justify-between items-center">
            <span className="text-xs font-medium text-[#A1A1AA] dark:text-[#71717A]">More Details</span>
            <Link
              href="/about"
              className="w-10 h-10 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#71717A] dark:text-[#A1A1AA] hover:text-white dark:hover:text-[#09090B] hover:bg-[#18181B] dark:hover:bg-[#FAFAFA] hover:border-[#18181B] dark:hover:border-[#FAFAFA] transition-all"
              aria-label="View Credentials"
            >
              <FaArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Showcase / Projects Card */}
        <motion.div
          className="flex flex-col gap-6"
          variants={cardVariants}
        >
          {/* Marquee Pill */}
          <div className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-full py-2.5 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <Marquee speed={35} gradient={false} pauseOnHover={true}>
              <span className="flex items-center text-xs font-semibold tracking-wider text-[#71717A] dark:text-[#A1A1AA] uppercase mr-3">
                <GoDotFill className="text-[#09090B] dark:text-[#FAFAFA] mr-2" />
                LATEST PROJECTS AND
                <span className="ml-1 text-[#09090B] dark:text-[#FAFAFA] font-bold">FEATURED</span>
                <GoDotFill className="text-[#09090B] dark:text-[#FAFAFA] ml-3 mr-2" />
              </span>
            </Marquee>
          </div>

          {/* Showcase Card */}
          <motion.div
            className="flex-1 bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
            whileHover={hoverScale}
          >
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
                SHOWCASE
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-4">
                Projects
              </h2>
              <Link href="/projects" className="block my-2">
                <ProjectSlidershow />
              </Link>
            </div>
            <div className="pt-6 mt-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex justify-between items-center">
              <span className="text-xs font-medium text-[#A1A1AA] dark:text-[#71717A]">View All Works</span>
              <Link
                href="/projects"
                className="w-10 h-10 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#71717A] dark:text-[#A1A1AA] hover:text-white dark:hover:text-[#09090B] hover:bg-[#18181B] dark:hover:bg-[#FAFAFA] hover:border-[#18181B] dark:hover:border-[#FAFAFA] transition-all"
                aria-label="View Projects"
              >
                <FaArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
              GET IN TOUCH
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-6">
              Contact Me
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: <MdEmail className="w-5 h-5" />,
                  text: "sanketpathare8808@gmail.com",
                  href: "mailto:sanketpathare8808@gmail.com",
                },
                {
                  icon: <FaLinkedin className="w-5 h-5" />,
                  text: "Linkedin",
                  href: "https://www.linkedin.com/in/sanket-pathare-740703245/",
                },
                {
                  icon: <FaGithub className="w-5 h-5" />,
                  text: "Github",
                  href: "https://github.com/SanketPathare",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-2xl border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#FAFAFA] hover:border-[#09090B] dark:hover:border-[#FAFAFA] transition-all"
                >
                  <span className="text-[#09090B] dark:text-[#FAFAFA]">{item.icon}</span>
                  <span className="text-sm font-medium truncate">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="pt-6 mt-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex justify-between items-center">
            <span className="text-xs font-medium text-[#A1A1AA] dark:text-[#71717A]">Let's Connect</span>
            <Link
              href="/contact"
              className="w-10 h-10 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#71717A] dark:text-[#A1A1AA] hover:text-white dark:hover:text-[#09090B] hover:bg-[#18181B] dark:hover:bg-[#FAFAFA] hover:border-[#18181B] dark:hover:border-[#FAFAFA] transition-all"
              aria-label="Go to Contact"
            >
              <FaArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Services Card */}
        <motion.div
          className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
              SPECIALIZATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-6">
              Services Offering
            </h2>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {[
                {
                  icon: <Icon icon="icon-park-twotone:web-page" width="28" height="28" />,
                  text: "Web Development",
                },
                {
                  icon: <Icon icon="icomoon-free:mobile" width="28" height="28" />,
                  text: "Mobile Development",
                },
                {
                  icon: <Icon icon="qlementine-icons:ui-panel-right-16" width="28" height="28" />,
                  text: "UI/UX Design",
                },
                {
                  icon: <Icon icon="hugeicons:web-design-02" width="28" height="28" />,
                  text: "Graphic Design",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 rounded-2xl border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] flex flex-col items-center justify-center text-center hover:border-[#09090B] dark:hover:border-[#FAFAFA] hover:bg-white dark:hover:bg-[#202024] transition-all group"
                >
                  <div className="mb-2 text-[#09090B] dark:text-[#FAFAFA] group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] group-hover:text-[#09090B] dark:group-hover:text-[#FAFAFA] transition-colors">
                    {service.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-6 mt-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex justify-between items-center">
            <span className="text-xs font-medium text-[#A1A1AA] dark:text-[#71717A]">Expertise</span>
            <Link
              href="/about"
              className="w-10 h-10 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#71717A] dark:text-[#A1A1AA] hover:text-white dark:hover:text-[#09090B] hover:bg-[#18181B] dark:hover:bg-[#FAFAFA] hover:border-[#18181B] dark:hover:border-[#FAFAFA] transition-all"
              aria-label="View Services"
            >
              <FaArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Social Profiles Card */}
        <motion.div
          className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
              STAY WITH ME
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-6">
              Profiles
            </h2>
            <div className="flex items-center justify-center py-6">
              <motion.div
                className="flex items-center justify-center w-36 h-36 sm:w-40 sm:h-40 space-x-2 sm:space-x-3 border-2 border-dashed border-[#E4E4E7] dark:border-[#27272A] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[
                  {
                    href: "https://www.linkedin.com/in/sanket-pathare-740703245/",
                    icon: <FaLinkedin className="w-5 h-5 text-[#09090B] dark:text-[#FAFAFA]" />,
                    title: "LinkedIn",
                  },
                  {
                    href: "https://github.com/SanketPathare",
                    icon: <FaGithub className="w-5 h-5 text-[#09090B] dark:text-[#FAFAFA]" />,
                    title: "GitHub",
                  },
                  {
                    href: "mailto:sanketpathare8808@gmail.com",
                    icon: <MdEmail className="w-5 h-5 text-[#09090B] dark:text-[#FAFAFA]" />,
                    title: "Email",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center hover:border-[#09090B] dark:hover:border-[#FAFAFA] hover:shadow-sm transition-all"
                      title={item.title}
                    >
                      {item.icon}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="pt-6 mt-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex justify-between items-center">
            <span className="text-xs font-medium text-[#A1A1AA] dark:text-[#71717A]">Online Presence</span>
            <Link
              href="/contact"
              className="w-10 h-10 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#71717A] dark:text-[#A1A1AA] hover:text-white dark:hover:text-[#09090B] hover:bg-[#18181B] dark:hover:bg-[#FAFAFA] hover:border-[#18181B] dark:hover:border-[#FAFAFA] transition-all"
              aria-label="Go to Profiles"
            >
              <FaArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats and Work Together Section */}
      <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
        {/* Stats Card */}
        <motion.div
          className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 flex items-center hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full divide-x divide-[#E4E4E7] dark:divide-[#27272A]">
            {[
              {
                number: <NumberTicker value={3} className="text-[#09090B] dark:text-[#FAFAFA]" />,
                text: "YEARS\nEXPERIENCE",
              },
              {
                number: <NumberTicker value={20} className="text-[#09090B] dark:text-[#FAFAFA]" />,
                text: "CLIENTS\nWORLDWIDE",
              },
              {
                number: <NumberTicker value={90} className="text-[#09090B] dark:text-[#FAFAFA]" />,
                text: "TOTAL\nPROJECTS",
              },
            ].map((stat, index) => (
              <div key={index} className={index > 0 ? "pl-2 sm:pl-6" : ""}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-1 sm:mb-2 flex items-baseline">
                  +<span>{stat.number}</span>
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-medium text-[#71717A] dark:text-[#A1A1AA] whitespace-pre-line tracking-wider uppercase leading-tight">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Work Together Card */}
        <motion.div
          className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 flex items-center justify-between hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
              START A PROJECT
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
              Let&apos;s <span className="text-[#71717A] dark:text-[#A1A1AA]">work together.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#71717A] dark:text-[#A1A1AA] hover:text-white dark:hover:text-[#09090B] hover:bg-[#18181B] dark:hover:bg-[#FAFAFA] hover:border-[#18181B] dark:hover:border-[#FAFAFA] transition-all shadow-sm flex-shrink-0 ml-3 sm:ml-4"
            aria-label="Let's work together"
          >
            <FaArrowRight size={18} className="sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
