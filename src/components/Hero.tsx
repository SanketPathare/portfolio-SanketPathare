"use client";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import { GoDotFill } from "react-icons/go";
import { Icon } from "@iconify/react";
import ProjectSlidershow from "./ProjectSlidershow";
import { image } from "../../public/image";
import NumberTicker from "@/components/ui/number-ticker";
import Link from "next/link";

//Replace these with your actual image imports or paths
const AvatarImg = image.AvatarImg;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverScale = {
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  };

  return (
    <motion.div
      className="min-h-screen text-white p-4 sm:p-8  mt-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Profile Card */}
        <motion.div
          className="bg-neutral-900 rounded-2xl p-4 sm:p-6 border border-black ring-2 ring-neutral-700"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={AvatarImg}
              alt="Profile Avatar"
              width={300}
              height={300}
              className="rounded-lg bg-neutral-900 mb-4 mx-auto"
            />
          </motion.div>
          <div className="text-center">
            <motion.div
              className="mb-2 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              A WEB DEVELOPER
            </motion.div>
            <motion.h1
              className="text-2xl sm:text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Sanket Pathare.
            </motion.h1>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I am a Web Developer from India.
            </motion.p>
          </div>
        </motion.div>

        {/* Credentials Card */}
        <motion.div
          className="bg-neutral-900 rounded-2xl p-4 sm:p-6 border border-black ring-2 ring-neutral-700"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div className="text-gray-400 mb-2">MORE ABOUT ME</div>
          <h2 className="text-xl sm:text-2xl font-bold ">Credentials</h2>
          <div className="flex justify-center items-center">
            <Tilt
              className="background-stripes parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
              glareColor="black"
            >
              <Image
                src="https://uiverse.io/astronaut.png"
                alt="img"
                width={170}
                height={200}
                className="filter grayscale hover:grayscale-0 hover:shadow-white hover:shadow-3xl"
              />
            </Tilt>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center p-4 w-full max-w-2xl mx-auto">
            {/* Resume Download Button */}
            <button
              className="relative w-full sm:w-40 h-12 cursor-pointer flex items-center 
                justify-center border-2 rounded-lg bg-black overflow-hidden 
                group hover:bg-neutral-800 border-neutral-700 active:border-neutral-700
                transition-all duration-300"
            >
              <span
                className="transform text-white text-sm transition-all duration-300
                  group-hover:opacity-0 flex items-center justify-center gap-3"
              >
                Resume <Icon icon="material-symbols:download" width="20" />
              </span>
              <span
                className="absolute inset-0 flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <a href="/SanketPathare_ Resume.pdf" download={true}>
                  <Icon icon="material-symbols:download" width="20" />
                </a>
              </span>
            </button>

            {/* Contact Button */}
            <a
              href="mailto:sanketpathare8808@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-40"
            >
              <button
                className="w-full h-12 cursor-pointer border-2 border-neutral-700 rounded-lg
                  bg-black hover:bg-neutral-800
                  flex items-center justify-center gap-3
                  text-white transition-all duration-300"
              >
                <span className="text-sm">Contact</span>
                <Icon icon="mdi:contact" width="20" height="20" />
              </button>
            </a>
          </div>

          <br />
          <motion.button
            className="text-gray-400 hover:text-white float-right "
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={"/about"}>
              <FaCircleArrowRight size={30} />
            </Link>
          </motion.button>
        </motion.div>

        {/* Marquee Section */}
        <motion.div variants={cardVariants}>
          <div className="flex justify-center items-center w-full ">
            <motion.div
              className=" hidden sm:block text-sm text-gray-400 border border-black ring-2 ring-neutral-700 rounded-lg p-2"
              whileHover={{ borderColor: "#FFFF" }}
            >
              <Marquee
                speed={50}
                gradient={false}
                pauseOnHover={true}
                className=""
              >
                <span className="text-white mr-2 flex">
                  <GoDotFill />
                </span>
                LATEST PROJECTS AND
                <span className="text-white ml-1">FEATURED</span>
                <span className="text-white ml-2 flex">
                  <GoDotFill />
                </span>
              </Marquee>
            </motion.div>
          </div>

          {/* Showcase Card */}
          <motion.div
            className="bg-neutral-900 rounded-2xl p-4 sm:p-6 h-[380px] mt-8  border border-black ring-2 ring-neutral-700"
            variants={cardVariants}
            whileHover={hoverScale}
          >
            <div className="text-gray-400 mb-2">SHOWCASE</div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Projects</h2>
            <div className="mb-6 flex items-center justify-center">
              <ProjectSlidershow />
            </div>
            <motion.button
              className="text-gray-400 hover:text-white float-right"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={"/projects"}>
                <FaCircleArrowRight size={30} />
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="bg-neutral-900 rounded-2xl p-4 sm:p-6  border border-black ring-2 ring-neutral-700"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div className="text-gray-400 mb-2">GET IN TOUCH</div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Me</h2>
          <motion.div className="space-y-4">
            {[
              {
                icon: <MdEmail size={28} />,
                text: "sanketpathare8808@gmail.com",
                href: "mailto:sanketpathare8808@gmail.com",
              },
              {
                icon: <FaLinkedin size={28} />,
                text: "Linkedin",
                href: "https://www.linkedin.com/in/sanket-pathare-740703245/",
              },
              {
                icon: <FaGithub size={28} />,
                text: "Github",
                href: "https://github.com/SanketPathare",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                className="flex items-center space-x-2 text-gray-400 hover:text-white"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Card */}
        <motion.div
          className="bg-neutral-900 rounded-2xl p-4 sm:p-6  border border-black ring-2 ring-neutral-700"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div className="text-gray-400 mb-2">SPECIALIZATION</div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Services Offering
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              {
                icon: (
                  <Icon
                    icon="icon-park-twotone:web-page"
                    width="48"
                    height="48"
                  />
                ),
                text: "Web Development",
              },
              {
                icon: (
                  <Icon icon="icomoon-free:mobile" width="48" height="48" />
                ),
                text: "Mobile Development",
              },
              {
                icon: (
                  <Icon
                    icon="qlementine-icons:ui-panel-right-16"
                    width="48"
                    height="48"
                  />
                ),
                text: "UI/UX Design",
              },
              {
                icon: (
                  <Icon icon="hugeicons:web-design-02" width="48" height="48" />
                ),
                text: "Graphic Design",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-4 bg-neutral-800 rounded-lg  "
                whileHover={{ scale: 1.05, backgroundColor: "#404040" }}
              >
                <h1 className=" mb-2  flex justify-center items-center ">
                  {service.icon}
                </h1>
                <h2 className="text-gray-400 hover:text-white text-sm flex  justify-center items-center">
                  {service.text}
                </h2>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Profiles Card */}
        <motion.div
          className="bg-neutral-900 rounded-2xl p-4 sm:p-6  border border-black ring-2 ring-neutral-700"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div className="text-gray-400 mb-2">STAY WITH ME</div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Profiles</h2>
          <div className="flex items-center justify-center">
            <motion.div
              className="flex justify-center space-x-4 mb-6 rounded-full border-4 border-white h-40 w-40 items-center"
              animate={{ rotate: 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[
                {
                  icon: (
                    <Link
                      href="https://www.linkedin.com/in/sanket-pathare-740703245/"
                      target="_blank"
                    >
                      <FaLinkedin className="w-8 h-8" />
                    </Link>
                  ),
                },
                {
                  icon: (
                    <Link
                      href="https://github.com/SanketPathare"
                      target="_blank"
                    >
                      <FaGithub className="w-8 h-8" />
                    </Link>
                  ),
                },
                {
                  icon: (
                    <Link
                      href="mailto:sanketpathare8808@gmail.com"
                      target="_blank"
                    >
                      <MdEmail className="w-8 h-8" />
                    </Link>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gray-700 rounded-full hover:bg-gray-600"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 ">
        <motion.div
          className="bg-neutral-900 rounded-2xl p-4 sm:p-6  border border-black ring-2 ring-neutral-700"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                number: <NumberTicker value={3} className="text-white" />,
                text: "YEARS\nEXPERIENCE",
              },
              {
                number: <NumberTicker value={20} className="text-white" />,
                text: "CLIENTS\nWORLDWIDE",
              },
              {
                number: <NumberTicker value={90} className="text-white" />,
                text: "TOTAL\nPROJECTS",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  +{stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm whitespace-pre-line">
                  {stat.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* work together */}
        <motion.div
          className="bg-neutral-900 rounded-2xl p-4 sm:p-6  border border-black ring-2 ring-neutral-700"
          variants={cardVariants}
          whileHover={hoverScale}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Let&apos;s
              <br />
              work <span className="text-gray-500">together</span>.
            </h2>
            <motion.button
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={"/contact"}>
                <FaCircleArrowRight size={30} />
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
