"use client";

import ProjectCard from "@/components/ProjectCard";
import { image } from "../../../public/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "LayerNLooms",
    category: "AGENCY / WEBSITE",
    image: image.LayerNLooms,
    slug: "layernlooms",
  },
  {
    id: 2,
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
    title: "Recipe App",
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
  initial: { opacity: 0, y: 16 },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
  out: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.3,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen pt-4 pb-12"
    >
      <div className="w-full">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-[#E4E4E7] dark:border-[#27272A] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#121215] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA]">
              PORTFOLIO ARCHIVE
            </div>
            <h1 className="headline-lg tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
              ALL <span className="text-[#71717A] dark:text-[#A1A1AA]">PROJECTS</span>
            </h1>
          </div>
          <div className="chip-mono text-xs font-semibold text-[#71717A] dark:text-[#A1A1AA]">
            <span>LATEST WORK AND</span>
            <span className="text-[#09090B] dark:text-[#FAFAFA] font-bold">FEATURED</span>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={pageVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={cardVariants}>
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image.src}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
}
