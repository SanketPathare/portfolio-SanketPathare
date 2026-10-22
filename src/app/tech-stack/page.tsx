"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Sparkles,
  CreditCard,
  Wrench,
  Pause,
  Play,
  Search,
  Filter,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Zap,
  ShieldCheck,
  Globe,
  Flame,
  Menu,
  X,
} from "lucide-react";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiOpenai,
  SiGraphql,
  SiPostman,
  SiStripe,
  SiShopify,
  SiWoocommerce,
  SiRazorpay,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiVercel,
} from "react-icons/si";

export type SkillCategory =
  | "all"
  | "languages"
  | "frameworks"
  | "databases"
  | "ai_apis"
  | "commerce"
  | "tools";

export interface TechSkill {
  id: string;
  name: string;
  category: SkillCategory;
  categoryLabel: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  proficiency: "Expert" | "Advanced" | "Proficient";
  percentage: number;
  years: string;
  description: string;
  useCase: string;
  ringIndex: number;
  angle: number;
}

const CATEGORIES: {
  id: SkillCategory;
  label: string;
  shortLabel: string;
  count: number;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "languages", label: "Languages", shortLabel: "Languages", count: 4, Icon: Code2 },
  { id: "frameworks", label: "Frameworks", shortLabel: "Frameworks", count: 5, Icon: Layers },
  { id: "databases", label: "Databases", shortLabel: "Databases", count: 4, Icon: Database },
  { id: "ai_apis", label: "AI & APIs", shortLabel: "AI & APIs", count: 3, Icon: Sparkles },
  { id: "commerce", label: "Commerce", shortLabel: "Commerce", count: 5, Icon: CreditCard },
  { id: "tools", label: "Tools", shortLabel: "Tools", count: 4, Icon: Wrench },
];

const SKILLS: TechSkill[] = [
  { id: "typescript", name: "TypeScript", category: "languages", categoryLabel: "Languages", Icon: SiTypescript, proficiency: "Advanced", percentage: 92, years: "3+ Yrs", description: "Strict static typing, interfaces & generic data structures.", useCase: "Enterprise architecture & reliable refactoring", ringIndex: 0, angle: 0 },
  { id: "react", name: "React", category: "frameworks", categoryLabel: "Frameworks", Icon: SiReact, proficiency: "Expert", percentage: 95, years: "4+ Yrs", description: "Component lifecycle, custom hooks, context & state management.", useCase: "High-performance reactive user interfaces", ringIndex: 0, angle: 90 },
  { id: "javascript", name: "JavaScript", category: "languages", categoryLabel: "Languages", Icon: SiJavascript, proficiency: "Expert", percentage: 96, years: "5+ Yrs", description: "ES6+, closures, async/await, DOM optimization & event loop.", useCase: "Core web engine & client scripting", ringIndex: 0, angle: 180 },
  { id: "nextjs", name: "Next.js", category: "frameworks", categoryLabel: "Frameworks", Icon: SiNextdotjs, proficiency: "Advanced", percentage: 92, years: "3+ Yrs", description: "App Router, Server Components, SSR/SSG & Edge Runtime.", useCase: "Full-stack scalable web applications", ringIndex: 0, angle: 270 },
  { id: "html5", name: "HTML5", category: "languages", categoryLabel: "Languages", Icon: SiHtml5, proficiency: "Expert", percentage: 98, years: "5+ Yrs", description: "Semantic hierarchy, accessibility (a11y) & metadata standards.", useCase: "Solid DOM skeleton & SEO optimization", ringIndex: 1, angle: 30 },
  { id: "nodejs", name: "Node.js", category: "frameworks", categoryLabel: "Frameworks", Icon: SiNodedotjs, proficiency: "Advanced", percentage: 88, years: "3+ Yrs", description: "Asynchronous I/O, server-side runtime & microservices.", useCase: "Backend services & API servers", ringIndex: 1, angle: 105 },
  { id: "express", name: "Express.js", category: "frameworks", categoryLabel: "Frameworks", Icon: SiExpress, proficiency: "Advanced", percentage: 90, years: "3+ Yrs", description: "Lightweight routing, middleware chaining & REST controllers.", useCase: "Robust REST APIs & backend pipelines", ringIndex: 1, angle: 175 },
  { id: "css3", name: "CSS3", category: "languages", categoryLabel: "Languages", Icon: SiCss3, proficiency: "Expert", percentage: 95, years: "5+ Yrs", description: "Modern Flexbox, CSS Grid, keyframes & responsive design.", useCase: "Pixel-perfect visual styling & layouts", ringIndex: 1, angle: 245 },
  { id: "tailwindcss", name: "Tailwind CSS", category: "frameworks", categoryLabel: "Frameworks", Icon: SiTailwindcss, proficiency: "Expert", percentage: 96, years: "4+ Yrs", description: "Utility-first design tokens, custom configs & dark mode styling.", useCase: "Rapid, consistent component engineering", ringIndex: 1, angle: 315 },
  { id: "mongodb", name: "MongoDB", category: "databases", categoryLabel: "Databases", Icon: SiMongodb, proficiency: "Advanced", percentage: 88, years: "3+ Yrs", description: "NoSQL document collections, aggregation pipelines & indexing.", useCase: "Dynamic schemas & JSON-first persistence", ringIndex: 2, angle: 20 },
  { id: "postgresql", name: "PostgreSQL", category: "databases", categoryLabel: "Databases", Icon: SiPostgresql, proficiency: "Advanced", percentage: 85, years: "2+ Yrs", description: "Relational database queries, foreign keys, views & ACID safety.", useCase: "Mission-critical relational data models", ringIndex: 2, angle: 95 },
  { id: "supabase", name: "Supabase", category: "databases", categoryLabel: "Databases", Icon: SiSupabase, proficiency: "Proficient", percentage: 82, years: "2+ Yrs", description: "Serverless Postgres, real-time channels & Row Level Security.", useCase: "Rapid backend prototyping & auth synchronization", ringIndex: 2, angle: 165 },
  { id: "redis", name: "Redis", category: "databases", categoryLabel: "Databases", Icon: SiRedis, proficiency: "Proficient", percentage: 80, years: "2+ Yrs", description: "In-memory caching, key-value stores & pub/sub messaging.", useCase: "Sub-millisecond data caching & session storage", ringIndex: 2, angle: 240 },
  { id: "openai", name: "OpenAI API", category: "ai_apis", categoryLabel: "AI & APIs", Icon: SiOpenai, proficiency: "Advanced", percentage: 88, years: "2+ Yrs", description: "LLM integration, function calling, embeddings & autonomous agents.", useCase: "AI automation & intelligent assistants", ringIndex: 2, angle: 310 },
  { id: "graphql", name: "GraphQL", category: "ai_apis", categoryLabel: "AI & APIs", Icon: SiGraphql, proficiency: "Proficient", percentage: 82, years: "2+ Yrs", description: "Declarative schema queries, mutations & over-fetch prevention.", useCase: "Efficient client-driven data fetching", ringIndex: 3, angle: 40 },
  { id: "postman", name: "REST APIs", category: "ai_apis", categoryLabel: "AI & APIs", Icon: SiPostman, proficiency: "Expert", percentage: 94, years: "4+ Yrs", description: "HTTP verbs, status codes, JWT auth & API collection testing.", useCase: "Standardized cross-platform communication", ringIndex: 3, angle: 110 },
  { id: "stripe", name: "Stripe", category: "commerce", categoryLabel: "Commerce", Icon: SiStripe, proficiency: "Advanced", percentage: 90, years: "3+ Yrs", description: "Payment intents, webhooks, checkout sessions & recurring billing.", useCase: "Global payment processing & subscriptions", ringIndex: 3, angle: 180 },
  { id: "shopify", name: "Shopify", category: "commerce", categoryLabel: "Commerce", Icon: SiShopify, proficiency: "Proficient", percentage: 84, years: "2+ Yrs", description: "Liquid themes, Storefront API & headless commerce integrations.", useCase: "Custom modern e-commerce storefronts", ringIndex: 3, angle: 250 },
  { id: "woocommerce", name: "WooCommerce", category: "commerce", categoryLabel: "Commerce", Icon: SiWoocommerce, proficiency: "Proficient", percentage: 80, years: "2+ Yrs", description: "Custom hooks, checkout customization & product catalog flows.", useCase: "Flexible open-source e-commerce solutions", ringIndex: 3, angle: 320 },
  { id: "razorpay", name: "Razorpay", category: "commerce", categoryLabel: "Commerce", Icon: SiRazorpay, proficiency: "Advanced", percentage: 88, years: "3+ Yrs", description: "Seamless Indian payment gateway integration & UPI checkouts.", useCase: "Domestic digital payments & automated refunds", ringIndex: 4, angle: 15 },
  { id: "github", name: "GitHub", category: "tools", categoryLabel: "Tools", Icon: SiGithub, proficiency: "Expert", percentage: 96, years: "4+ Yrs", description: "Code reviews, pull requests, actions CI/CD & repository flows.", useCase: "Collaborative software delivery & versioning", ringIndex: 4, angle: 75 },
  { id: "git", name: "Git", category: "tools", categoryLabel: "Tools", Icon: SiGit, proficiency: "Expert", percentage: 94, years: "4+ Yrs", description: "Branching strategies, rebase workflows, interactive stashes.", useCase: "Distributed source control & commit integrity", ringIndex: 4, angle: 150 },
  { id: "docker", name: "Docker", category: "tools", categoryLabel: "Tools", Icon: SiDocker, proficiency: "Proficient", percentage: 82, years: "2+ Yrs", description: "Containerization, Dockerfiles, Compose setups & image registry.", useCase: "Reproducible deployment environments", ringIndex: 4, angle: 220 },
  { id: "figma", name: "Figma", category: "tools", categoryLabel: "Tools", Icon: SiFigma, proficiency: "Advanced", percentage: 88, years: "3+ Yrs", description: "Vector layouts, auto-layout, design tokens & interactive specs.", useCase: "UI/UX wireframing & developer handoffs", ringIndex: 4, angle: 285 },
  { id: "vercel", name: "Vercel", category: "tools", categoryLabel: "Tools", Icon: SiVercel, proficiency: "Expert", percentage: 94, years: "3+ Yrs", description: "Serverless edge deployments, preview environments & DNS routing.", useCase: "Production web hosting & instant CI deploys", ringIndex: 4, angle: 345 },
];

const RINGS = [
  { radius: 76, duration: 40, direction: 1 },
  { radius: 130, duration: 52, direction: -1 },
  { radius: 185, duration: 68, direction: 1 },
  { radius: 240, duration: 84, direction: -1 },
  { radius: 295, duration: 104, direction: 1 },
];

export default function TechStackPage() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");
  const [hoveredSkill, setHoveredSkill] = useState<TechSkill | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<"orbit" | "grid">("orbit");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
      const matchesSearch = searchQuery.trim() === "" ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.useCase.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const handleNodeClick = (skill: TechSkill) => {
    setActiveCategory((prev) => (prev === skill.category ? "all" : skill.category));
    setHoveredSkill(null);
  };

  return (
    <main className="w-full text-[#09090B] dark:text-[#FAFAFA] pb-20 pt-6 select-none overflow-x-hidden">
      {/* Mobile Header Controls */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#09090B]/80 backdrop-blur-md border-b border-[#E4E4E7] dark:border-[#27272A] px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#09090B] dark:text-[#FAFAFA] font-bold text-lg">
            <Code2 className="w-5 h-5" /> SP
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg hover:bg-[#F4F4F5] dark:hover:bg-[#18181B] transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}

      {/* Page Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#121215] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#18181B] dark:bg-[#FAFAFA] animate-ping" />
          <span>Developer Arsenal</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-3 sm:mb-4"
        >
          Tech <span className="text-[#18181B] dark:text-[#FAFAFA]">Stack.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base text-[#71717A] dark:text-[#A1A1AA] max-w-2xl leading-relaxed mx-auto sm:mx-0"
        >
          The curated ecosystem of modern frameworks, languages, databases, cloud tools, and APIs that power production applications.
        </motion.p>
      </header>

      {/* Main Card */}
      <section
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16"
      >
        <div className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-[2rem] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.03)] group relative">
          {/* Spotlight */}
          <div
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.05), transparent 70%)`,
            }}
          />
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-neutral-200/30 dark:from-neutral-800/20 via-transparent to-transparent rounded-full blur-[64px] pointer-events-none z-0" />

          <div className="relative z-10 p-4 sm:p-6 lg:p-8">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 border-b border-[#E4E4E7] dark:border-[#27272A] pb-4 sm:pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 sm:mb-0 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA]">
                  <Layers className="w-3.5 h-3.5 text-[#09090B] dark:text-[#FAFAFA]" />
                  <span>Radar Architecture</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase text-[#09090B] dark:text-[#FAFAFA] font-mono">
                  Tech Stack
                </h2>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto sm:justify-end">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] text-xs font-mono font-medium text-[#71717A] dark:text-[#A1A1AA]">
                  <span className="w-2 h-2 rounded-full bg-[#09090B] dark:bg-[#FAFAFA] animate-pulse" />
                  <span className="text-[#09090B] dark:text-[#FAFAFA] font-semibold">6 Groups</span>
                  <span className="opacity-40">•</span>
                  <span>{SKILLS.length} Skills</span>
                </div>

                <div className="inline-flex items-center p-1 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B]">
                  <button
                    type="button"
                    onClick={() => setIsPaused((prev) => !prev)}
                    className="p-1.5 rounded-full hover:bg-white dark:hover:bg-[#202024] text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white transition-colors"
                    title={isPaused ? "Resume orbits" : "Pause orbits"}
                    aria-label={isPaused ? "Resume orbits" : "Pause orbits"}
                  >
                    {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  </button>
                  <div className="w-[1px] h-4 bg-[#E4E4E7] dark:bg-[#27272A] mx-1.5" />
                  <button
                    type="button"
                    onClick={() => setViewMode((prev) => (prev === "orbit" ? "grid" : "orbit"))}
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white transition-colors whitespace-nowrap"
                  >
                    {viewMode === "orbit" ? "Grid View" : "Orbit View"}
                  </button>
                </div>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="relative z-10 flex items-center gap-2 pt-4 pb-2 overflow-x-auto select-none -mx-2 px-2 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === "all"
                    ? "text-white dark:text-[#09090B]"
                    : "text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white"
                }`}
              >
                {activeCategory === "all" && (
                  <motion.span layoutId="activeCategoryPill" transition={{ type: "spring", stiffness: 400, damping: 30 }} className="absolute inset-0 rounded-full bg-[#18181B] dark:bg-[#FAFAFA] shadow-sm z-0" />
                )}
                <span className="relative z-10">All</span>
                <span className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full transition-colors ${activeCategory === "all" ? "bg-white/20 text-white dark:bg-[#09090B]/20 dark:text-[#09090B]" : "bg-[#F4F4F5] dark:bg-[#27272A] text-[#71717A] dark:text-[#A1A1AA]"}`}>
                  {SKILLS.length}
                </span>
              </button>

              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const CatIcon = cat.Icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory((prev) => (prev === cat.id ? "all" : cat.id))}
                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${isActive ? "text-white dark:text-[#09090B]" : "text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white"}`}
                  >
                    {isActive && (
                      <motion.span layoutId="activeCategoryPill" transition={{ type: "spring", stiffness: 400, damping: 30 }} className="absolute inset-0 rounded-full bg-[#18181B] dark:bg-[#FAFAFA] shadow-sm z-0" />
                    )}
                    <CatIcon className="relative z-10 w-4 h-4 opacity-80" />
                    <span className="relative z-10 hidden sm:inline">{cat.label}</span>
                    <span className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full transition-colors ${isActive ? "bg-white/20 text-white dark:bg-[#09090B]/20 dark:text-[#09090B]" : "bg-[#F4F4F5] dark:bg-[#27272A] text-[#71717A] dark:text-[#A1A1AA]"}`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Orbit View */}
            {viewMode === "orbit" && (
              <div className="relative w-full flex items-center justify-center py-6 sm:py-10 min-h-[520px] sm:min-h-[620px] lg:min-h-[700px] overflow-hidden">
                <div className={`relative shrink-0 ${isMobile ? "w-[340px] h-[340px] scale-[0.55] md:scale-[0.75] lg:scale-100" : "w-[620px] h-[620px] scale-[0.48] xs:scale-[0.58] sm:scale-[0.78] md:scale-[0.92] lg:scale-100"} transition-transform origin-center duration-500`}>
                  <div className="absolute inset-0 rounded-full pointer-events-none z-0" style={{
                    background: "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(255,255,255,0.01) 310deg, rgba(255,255,255,0.05) 360deg)",
                    animation: isPaused ? "none" : "spin 12s linear infinite",
                  }} />

                  {[0.9, 0.65].map((delay, i) => (
                    <motion.div
                      key={i}
                      animate={isPaused ? {} : { scale: [0.3, 1.1], opacity: [0.5, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeOut", delay: delay * 2.25 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-neutral-400/20 dark:border-white/10 pointer-events-none z-0"
                    />
                  ))}

                  {RINGS.map((ring, ringIdx) => {
                    const ringDiameter = ring.radius * 2;
                    const skillsOnThisRing = SKILLS.filter((s) => s.ringIndex === ringIdx);
                    return (
                      <div key={ringIdx} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: `${ringDiameter}px`, height: `${ringDiameter}px` }}>
                        <div className="absolute inset-0 rounded-full border border-dashed border-[#E4E4E7] dark:border-[#27272A] opacity-80" />
                        <motion.div
                          animate={isPaused ? {} : { rotate: 360 * ring.direction }}
                          transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 pointer-events-auto"
                        >
                          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                            {skillsOnThisRing.map((skill) => {
                              const isHighlighted = activeCategory !== "all" && skill.category === activeCategory;
                              if (!isHighlighted) return null;
                              const rad = (skill.angle * Math.PI) / 180;
                              const x = ring.radius + ring.radius * Math.cos(rad);
                              const y = ring.radius + ring.radius * Math.sin(rad);
                              return (
                                <line key={`line-${skill.id}`} x1={ring.radius} y1={ring.radius} x2={x} y2={y} stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-neutral-400 dark:text-neutral-500 opacity-50 animate-pulse" />
                              );
                            })}
                          </svg>
                          {skillsOnThisRing.map((skill) => {
                            const rad = (skill.angle * Math.PI) / 180;
                            const x = ring.radius + ring.radius * Math.cos(rad);
                            const y = ring.radius + ring.radius * Math.sin(rad);
                            const isHighlighted = activeCategory === "all" || skill.category === activeCategory;
                            const isHovered = hoveredSkill?.id === skill.id;
                            return (
                              <div key={skill.id} className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group" style={{ left: `${x}px`, top: `${y}px` }}
                                onMouseEnter={() => setHoveredSkill(skill)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                onTouchStart={() => setHoveredSkill(skill)}
                                onClick={() => handleNodeClick(skill)}
                              >
                                <motion.div
                                  animate={isPaused ? {} : { rotate: -360 * ring.direction }}
                                  transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                                  whileHover={{ scale: 1.3 }}
                                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 relative ${isHighlighted ? isHovered ? "bg-[#09090B] text-white dark:bg-[#FAFAFA] dark:text-[#09090B] border-2 border-[#09090B] dark:border-white shadow-[0_0_20px_rgba(255,255,255,0.4)] z-30" : "bg-white dark:bg-[#18181B] text-[#09090B] dark:text-[#FAFAFA] border border-[#E4E4E7] dark:border-[#27272A] hover:border-[#09090B] dark:hover:border-[#FAFAFA] shadow-md hover:shadow-lg" : "bg-[#FAFAFA] dark:bg-[#121215]/60 text-[#A1A1AA] dark:text-[#52525B] border border-[#E4E4E7]/60 dark:border-[#27272A]/50 opacity-30 hover:opacity-100"}`}
                                >
                                  <skill.Icon className="w-4.5 h-4.5 transition-transform group-hover:scale-110" />
                                  {isHighlighted && activeCategory !== "all" && (
                                    <span className="absolute -inset-1.5 rounded-full border border-[#09090B] dark:border-white animate-ping opacity-30 pointer-events-none" />
                                  )}
                                </motion.div>
                              </div>
                            );
                          })}
                        </motion.div>
                      </div>
                    );
                  })}

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-20 h-20 rounded-full border border-dashed border-[#E4E4E7] dark:border-[#3F3F46] opacity-70" style={{ animation: isPaused ? "none" : "spin 20s linear infinite reverse" }} />
                    <div className="w-20 h-20 rounded-full bg-neutral-300/30 dark:bg-neutral-600/20 blur-xl animate-pulse" />
                    <div className="absolute w-12 h-12 rounded-full bg-[#18181B] dark:bg-[#FAFAFA] flex items-center justify-center shadow-xl border-2 border-white dark:border-[#27272A]">
                      <div className="w-4 h-4 bg-white dark:bg-[#09090B] rounded-sm rotate-45 flex items-center justify-center shadow-inner">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#18181B] dark:bg-[#FAFAFA] animate-ping" />
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {hoveredSkill && (
                    <motion.div
                      ref={tooltipRef}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute ${isMobile ? "bottom-[60px] left-1/2 -translate-x-1/2 z-50 w-[90%]" : "bottom-4 left-1/2 -translate-x-1/2 z-50"} px-3 sm:px-4 py-3 sm:py-3.5 rounded-2xl bg-white/95 dark:bg-[#18181B]/95 border border-[#E4E4E7] dark:border-[#27272A] text-[#09090B] dark:text-[#FAFAFA] shadow-2xl backdrop-blur-md flex items-center gap-3 sm:gap-4 max-w-xs sm:max-w-md w-full`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA] shrink-0 shadow-inner">
                        <hoveredSkill.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 sm:gap-2.5">
                          <span className="font-bold text-sm sm:text-base text-[#09090B] dark:text-[#FAFAFA] truncate">{hoveredSkill.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FAFAFA] dark:bg-[#121215] text-[#71717A] dark:text-[#A1A1AA] border border-[#E4E4E7] dark:border-[#27272A] uppercase font-semibold shrink-0">{hoveredSkill.proficiency}</span>
                          <span className="text-[10px] font-mono text-[#A1A1AA]">{hoveredSkill.years}</span>
                        </div>
                        <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-1 sm:mt-1.5 line-clamp-1">{hoveredSkill.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Grid View */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8">
                {filteredSkills.map((skill) => {
                  const isHovered = hoveredSkill?.id === skill.id;
                  return (
                    <motion.div
                      key={skill.id}
                      whileHover={{ y: -3 }}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${isHovered ? "bg-white dark:bg-[#18181B] border-[#09090B] dark:border-[#FAFAFA] shadow-md" : "bg-[#FAFAFA] dark:bg-[#121215]/40 border-[#E4E4E7] dark:border-[#27272A]/50 hover:border-[#D4D4D8] dark:hover:border-[#3F3F46]"}`}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onTouchStart={() => setHoveredSkill(skill)}
                      onClick={() => handleNodeClick(skill)}
                    >
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA]">
                          <skill.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-full bg-white dark:bg-[#121215] text-[#71717A] dark:text-[#A1A1AA] border border-[#E4E4E7] dark:border-[#27272A] uppercase font-semibold">{skill.categoryLabel}</span>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                          <h3 className="text-sm sm:text-base font-bold text-[#09090B] dark:text-[#FAFAFA]">{skill.name}</h3>
                          <span className="text-[10px] sm:text-xs font-mono text-[#71717A] dark:text-[#A1A1AA]">{skill.years}</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#71717A] dark:text-[#A1A1AA] line-clamp-2 leading-relaxed">{skill.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Legend */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 sm:gap-3 pt-5 sm:pt-7 border-t border-[#E4E4E7] dark:border-[#27272A] text-[10px] sm:text-xs font-mono text-[#71717A] dark:text-[#A1A1AA]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#09090B] dark:bg-[#FAFAFA] animate-pulse" />
                <span className="hidden sm:inline">Interactive Radar: Click any node to highlight technologies</span>
                <span className="sm:hidden">Tap nodes to filter</span>
              </div>
              <span className="hidden sm:inline">Hover to inspect proficiency & details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2 sm:p-0 bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-2xl shadow-xs hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all">
          <div className="flex items-center gap-2.5 px-3 py-1.5 sm:py-2 flex-1 min-w-0">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#71717A] dark:text-[#A1A1AA] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technology, framework, database..."
              className="w-full bg-transparent text-sm sm:text-base text-[#09090B] dark:text-[#FAFAFA] placeholder:text-[#A1A1AA] dark:placeholder:text-[#71717A] focus:outline-none min-w-0"
            />
            {searchQuery && (
              <button type="button" onClick={() => setSearchQuery("")} className="text-xs text-[#71717A] hover:text-[#09090B] dark:hover:text-white px-2 py-0.5 rounded-md hover:bg-[#F4F4F5] dark:hover:bg-[#202024] whitespace-nowrap">Clear</button>
            )}
          </div>
          <div className="text-xs sm:text-sm font-mono text-[#71717A] dark:text-[#A1A1AA] px-3 py-1.5 flex items-center justify-between sm:justify-end gap-2 border-t sm:border-t-0 sm:border-l border-[#E4E4E7] dark:border-[#27272A]">
            <span>Showing:</span>
            <span className="font-semibold text-[#09090B] dark:text-[#FAFAFA]">{filteredSkills.length} of {SKILLS.length} Skills</span>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 sm:mb-4 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#121215] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA]">
            <Zap className="w-3.5 h-3.5 text-[#09090B] dark:text-[#FAFAFA]" />
            <span>Standards & Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">Engineering Philosophy</h2>
          <p className="text-sm sm:text-base text-[#71717A] dark:text-[#A1A1AA] mt-2 max-w-xl mx-auto sm:mx-0">
            How these tools come together to produce resilient, high-speed digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: <Flame className="w-5 h-5 text-[#09090B] dark:text-[#FAFAFA]" />,
              title: "Performance-First Execution",
              body: "Prioritizing server components, streaming SSR, aggressive edge caching, and minimal client JavaScript bundles for instant page loads.",
              badge: "Sub-100ms TTFB Standard",
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-[#09090B] dark:text-[#FAFAFA]" />,
              title: "Type-Safe Scalability",
              body: "End-to-end static typing with TypeScript, strict schema validations, and automated CI pipelines to catch regressions before deployment.",
              badge: "Zero-Downtime Releases",
            },
            {
              icon: <Globe className="w-5 h-5 text-[#09090B] dark:text-[#FAFAFA]" />,
              title: "Clean Aesthetics & UX",
              body: "Tailored micro-interactions, responsive fluid typography, and instant dark/light mode switches crafted with thoughtful ergonomics.",
              badge: "Accessible & Mobile-First",
            },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="p-5 sm:p-6 rounded-[1.5rem] bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] flex flex-col justify-between hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[1rem] bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA] mb-4 sm:mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#09090B] dark:text-[#FAFAFA] mb-2 sm:mb-2.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] leading-relaxed">{item.body}</p>
              </div>
              <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-[#E4E4E7] dark:border-[#27272A] text-[10px] sm:text-xs font-mono text-[#71717A] dark:text-[#A1A1AA]">{item.badge}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Category Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">Technology Breakdown</h2>
            <p className="text-sm sm:text-base text-[#71717A] dark:text-[#A1A1AA]">Deep dive into tooling, experience levels, and architectural roles.</p>
          </div>
          <span className="text-xs font-mono text-[#71717A] dark:text-[#A1A1AA]">Production Ready • Modern Standards</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const skillsInCat = filteredSkills.filter((s) => s.category === cat.id);
            const CatIcon = cat.Icon;
            if (skillsInCat.length === 0 && searchQuery) return null;
            return (
              <motion.div key={cat.id} whileHover={{ y: -3 }} className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-[1.5rem] p-5 sm:p-6 flex flex-col justify-between hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[1rem] bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA]">
                      <CatIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-medium px-2 py-0.75 rounded-full bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] text-[#71717A] dark:text-[#A1A1AA]">{skillsInCat.length} Technologies</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-1 sm:mb-1.5">{cat.label}</h3>
                  <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] mb-4 sm:mb-5">Core building blocks used in active projects.</p>
                  <div className="space-y-2 sm:space-y-3">
                    {skillsInCat.map((s) => (
                      <div key={s.id} className="p-3 sm:p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] hover:border-[#09090B] dark:hover:border-white transition-colors">
                        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                          <div className="flex items-center gap-2 sm:gap-2.5">
                            <s.Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#09090B] dark:text-white" />
                            <span className="text-xs sm:text-sm font-bold text-[#09090B] dark:text-[#FAFAFA]">{s.name}</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-1.5">
                            <span className="text-[10px] sm:text-xs font-mono text-[#71717A] dark:text-[#A1A1AA]">{s.years}</span>
                            <span className="text-[10px] sm:text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] text-[#71717A] dark:text-[#A1A1AA]">{s.proficiency}</span>
                          </div>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#71717A] dark:text-[#A1A1AA] leading-relaxed">{s.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-between text-[10px] sm:text-xs text-[#71717A] dark:text-[#A1A1AA]">
                  <span>Status</span>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 font-medium text-[#09090B] dark:text-[#FAFAFA]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#09090B] dark:bg-[#FAFAFA] animate-pulse" />
                    Active in Stack
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Footer */}
      <motion.div whileHover={{ y: -2 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 p-6 sm:p-10 rounded-[2rem] bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <div className="text-center sm:text-left">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] block mb-2 sm:mb-2.5">Have a Project in Mind?</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">Let's build something high-performance together.</h3>
          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] mt-2 sm:mt-3 max-w-xl mx-auto sm:mx-0">
            Whether it's a scalable web app, headless e-commerce store, or AI-powered workflow, I can take it from architecture to deployment.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
          <Link href="/contact" className="btn-primary text-sm h-11 px-6 inline-flex items-center justify-center gap-2">
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/projects" className="btn-secondary text-sm h-11 px-5 inline-flex items-center justify-center gap-2">
            <span>View Projects</span>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
