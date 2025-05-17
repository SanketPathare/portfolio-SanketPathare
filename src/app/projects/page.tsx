"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { image } from "../../../public/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Global Doors Kitchen",
    category: "WEBSITE",
    image: image.GlobalDoorsKitchen,
    slug: "GlobalDoorsKitchen",
  },
  {
    id: 2,
    title: "Cheat Sheet AI",
    category: "WEBSITE",
    image: image.CheatSheetAI,
    slug: "CheatSheetAI",
  },
  {
    id: 3,
    title: "Game Info",
    category: "WEBSITE",
    image: image.GameInfo,
    slug: "GameInfo",
  },
  {
    id: 4,
    title: "Github Search",
    category: "WEBSITE",
    image: image.GithubSearch,
    slug: "GithubSearch",
  },
  {
    id: 5,
    title: " Recipe App",
    category: "WEBSITE",
    image: image.RecipeApp,
    slug: "RecipeApp",
  },
  {
    id: 6,
    title: "News App",
    category: "WEBSITE",
    image: image.NewsApp,
    slug: "NewsApp",
  },
  {
    id: 7,
    title: "Weather App",
    category: "WEBSITE",
    image: image.Weatherapp,
    slug: "WeatherApp",
  },
  {
    id: 8,
    title: "Anime Review",
    category: "WEBSITE",
    image: image.AnimeReview,
    slug: "AnimeReview",
  },
  {
    id: 9,
    title: "Movies Review",
    category: "WEBSITE",
    image: image.MoviesReview,
    slug: "MoviesReview",
  },
  {
    id: 10,
    title: "Fit Club",
    category: "WEBSITE",
    image: image.Fitclub,
    slug: "FitClub",
  },
  {
    id: 11,
    title: "Tripfly",
    category: "WEBSITE",
    image: image.TripImg,
    slug: "tripfly",
  },
  {
    id: 12,
    title: "Gemini AI",
    category: "WEBSITE",
    image: image.GeminiImg,
    slug: "gemini",
  },
  {
    id: 13,
    title: "Crypto App",
    category: "WEBSITE",
    image: image.CryptoAppImg,
    slug: "crypto",
  },
  {
    id: 14,
    title: "ElectroMart",
    category: "WEBSITE",
    image: image.ElectromartImg,
    slug: "ElectroMart",
  },
  {
    id: 15,
    title: "Image Generator",
    category: "WEBSITE",
    image: image.imageGeneratorImg,
    slug: "ImageGenerator",
  },
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Projects() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <main className="min-h-screen pt-24 pb-12 px-4 md:mx-8">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-12">
              <motion.h1 variants={cardVariants} className="text-4xl font-bold">
                ALL PROJECTS
              </motion.h1>
              <div className="hidden sm:block">
                <motion.div variants={cardVariants} className="flex gap-2 ">
                  <span className="text-neutral-400 ">LATEST WORK AND</span>
                  <span className="text-white ml-1">FEATURED</span>
                </motion.div>
              </div>
            </div>
            <motion.div
              variants={pageVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={cardVariants}>
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    image={project.image.src}
                    slug={project.slug}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>
      </motion.div>
    </>
  );
}
