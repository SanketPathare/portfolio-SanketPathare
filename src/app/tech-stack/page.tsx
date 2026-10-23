"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  LayoutGrid,
  Monitor,
  Server,
  Database,
  Wrench,
  Cloud,
  MoreHorizontal,
  Check,
  ExternalLink,
  X,
  ArrowRight,
  ShieldCheck,
  Globe,
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
  SiFirebase,
  SiRedis,
  SiOpenai,
  SiGraphql,
  SiStripe,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiVercel,
  SiPython,
} from "react-icons/si";

export type SkillCategory =
  | "all"
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "cloud"
  | "others";

export interface TechCardItem {
  id: string;
  name: string;
  category: SkillCategory[];
  categoryLabel: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  isBlackCard?: boolean;
  initX: number; // percentage (0-100)
  initY: number; // percentage (0-100)
  rotation: number; // degrees
  floatDuration: number;
  subtitle: string;
  tags: string[];
  features: string[];
  commonUseCases: string;
  website: string;
  docs: string;
}

const CATEGORIES: {
  id: SkillCategory;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "all", label: "All", Icon: LayoutGrid },
  { id: "frontend", label: "Frontend", Icon: Monitor },
  { id: "backend", label: "Backend", Icon: Server },
  { id: "database", label: "Database", Icon: Database },
  { id: "tools", label: "Tools", Icon: Wrench },
  { id: "cloud", label: "Cloud", Icon: Cloud },
  { id: "others", label: "Others", Icon: MoreHorizontal },
];

const TECH_CARDS: TechCardItem[] = [
  {
    id: "react",
    name: "React.js",
    category: ["frontend"],
    categoryLabel: "Frontend",
    Icon: SiReact,
    isBlackCard: true,
    initX: 11,
    initY: 15,
    rotation: -5,
    floatDuration: 4.2,
    subtitle: "A powerful JavaScript library for building interactive user interfaces.",
    tags: ["JavaScript", "Frontend", "Library", "SPA"],
    features: [
      "Component-based architecture",
      "Virtual DOM for high-performance",
      "Large community support",
    ],
    commonUseCases:
      "Used to build modern single-page applications, dynamic web interfaces, dashboards and complex UI components.",
    website: "https://react.dev",
    docs: "https://react.dev/learn",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: ["frontend", "cloud"],
    categoryLabel: "Frontend / Cloud",
    Icon: SiNextdotjs,
    isBlackCard: false,
    initX: 29,
    initY: 12,
    rotation: 6,
    floatDuration: 4.8,
    subtitle: "The React Framework for the Web with Server Components and Edge Routing.",
    tags: ["React", "Fullstack", "SSR", "App Router"],
    features: [
      "Server-side rendering & static generation",
      "Zero-config App Router & Server Actions",
      "Automatic image, font, and script optimization",
    ],
    commonUseCases:
      "Production-grade full-stack web applications, e-commerce storefronts, and SEO-critical consumer websites.",
    website: "https://nextjs.org",
    docs: "https://nextjs.org/docs",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: ["frontend", "backend"],
    categoryLabel: "Languages",
    Icon: SiTypescript,
    isBlackCard: false,
    initX: 52,
    initY: 13,
    rotation: -3,
    floatDuration: 4.0,
    subtitle: "Typed superset of JavaScript that compiles to plain JavaScript.",
    tags: ["Language", "Static Typing", "Enterprise"],
    features: [
      "Compile-time type checking",
      "Rich interfaces and generic types",
      "Unmatched IDE autocomplete and refactoring safety",
    ],
    commonUseCases:
      "Enterprise software, API contracts, cross-platform codebases, and maintainable full-stack systems.",
    website: "https://www.typescriptlang.org",
    docs: "https://www.typescriptlang.org/docs/",
  },
  {
    id: "html5",
    name: "HTML5",
    category: ["frontend"],
    categoryLabel: "Frontend",
    Icon: SiHtml5,
    isBlackCard: false,
    initX: 74,
    initY: 14,
    rotation: 5,
    floatDuration: 4.5,
    subtitle: "Standard markup language for documents designed to be displayed in a web browser.",
    tags: ["Web Standard", "Semantic DOM", "a11y"],
    features: [
      "Semantic elements for structural clarity",
      "Built-in media audio/video support",
      "Accessibility (ARIA) & SEO metadata",
    ],
    commonUseCases:
      "Semantic page structuring, accessible document outlines, forms, and search engine crawlability.",
    website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
  },
  {
    id: "css3",
    name: "CSS3",
    category: ["frontend"],
    categoryLabel: "Frontend",
    Icon: SiCss3,
    isBlackCard: false,
    initX: 88,
    initY: 15,
    rotation: -6,
    floatDuration: 4.7,
    subtitle: "Style sheet language used for specifying the presentation and styling of web documents.",
    tags: ["Styling", "Flexbox", "Grid", "Animations"],
    features: [
      "Modern CSS Grid and Flexbox layouts",
      "Hardware-accelerated keyframe animations",
      "Custom CSS properties and fluid typography",
    ],
    commonUseCases:
      "Pixel-perfect layouts, responsive media queries, dark/light themes, and interactive animations.",
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    docs: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: ["frontend", "backend"],
    categoryLabel: "Languages",
    Icon: SiJavascript,
    isBlackCard: false,
    initX: 7,
    initY: 38,
    rotation: 4,
    floatDuration: 3.9,
    subtitle: "High-level, just-in-time compiled language conforming to the ECMAScript standard.",
    tags: ["ES2024+", "Event Loop", "Dynamic"],
    features: [
      "Asynchronous non-blocking event loop",
      "Prototypes, closures, and modern ES modules",
      "Massive universal ecosystem across browser & server",
    ],
    commonUseCases:
      "Client-side interactivity, DOM manipulation, asynchronous network requests, and algorithmic logic.",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: ["frontend"],
    categoryLabel: "Frontend",
    Icon: SiTailwindcss,
    isBlackCard: false,
    initX: 20,
    initY: 34,
    rotation: -6,
    floatDuration: 4.6,
    subtitle: "A utility-first CSS framework packed with classes for rapid, responsive UI development.",
    tags: ["Utility-First", "JIT", "Design Tokens"],
    features: [
      "Zero runtime overhead via JIT compiler",
      "Systematic spacing, color, and typography tokens",
      "Effortless responsive and dark mode variants",
    ],
    commonUseCases:
      "Rapid component engineering, custom design systems, and responsive production web applications.",
    website: "https://tailwindcss.com",
    docs: "https://tailwindcss.com/docs",
  },
  {
    id: "express",
    name: "Express.js",
    category: ["backend"],
    categoryLabel: "Backend",
    Icon: SiExpress,
    isBlackCard: false,
    initX: 78,
    initY: 33,
    rotation: 5,
    floatDuration: 4.3,
    subtitle: "Fast, unopinionated, minimalist web framework for Node.js backend development.",
    tags: ["Backend", "Node.js", "REST APIs"],
    features: [
      "Robust routing and middleware chaining",
      "High performance with minimal memory overhead",
      "Seamless integration with databases and auth gates",
    ],
    commonUseCases:
      "RESTful microservices, public web APIs, webhook handlers, and backend server infrastructure.",
    website: "https://expressjs.com",
    docs: "https://expressjs.com/en/starter/installing.html",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: ["database"],
    categoryLabel: "Database",
    Icon: SiMongodb,
    isBlackCard: false,
    initX: 13,
    initY: 58,
    rotation: -3,
    floatDuration: 4.4,
    subtitle: "Document-based distributed database designed for modern applications and the cloud.",
    tags: ["NoSQL", "Document Store", "Atlas"],
    features: [
      "Flexible schema evolution with JSON documents",
      "Rich aggregation pipelines and indexing",
      "Managed Atlas cloud with high availability",
    ],
    commonUseCases:
      "Dynamic catalog data, user profiles, real-time logging systems, and JSON-first persistence.",
    website: "https://www.mongodb.com",
    docs: "https://www.mongodb.com/docs/",
  },
  {
    id: "docker",
    name: "Docker",
    category: ["tools", "cloud"],
    categoryLabel: "Tools / Cloud",
    Icon: SiDocker,
    isBlackCard: true,
    initX: 26,
    initY: 53,
    rotation: 5,
    floatDuration: 4.1,
    subtitle: "Platform for developing, shipping, and running applications in isolated containers.",
    tags: ["Containers", "DevOps", "Compose"],
    features: [
      "Environment isolation and reproducibility",
      "Multi-stage builds for lean container images",
      "Docker Compose for local multi-service stacks",
    ],
    commonUseCases:
      "Containerizing microservices, reproducible CI/CD pipelines, and cloud container deployments.",
    website: "https://www.docker.com",
    docs: "https://docs.docker.com",
  },
  {
    id: "supabase",
    name: "Supabase",
    category: ["database", "backend", "cloud"],
    categoryLabel: "Database / Cloud",
    Icon: SiSupabase,
    isBlackCard: false,
    initX: 74,
    initY: 54,
    rotation: -5,
    floatDuration: 4.6,
    subtitle: "Open source Firebase alternative providing PostgreSQL database, Auth, and Realtime.",
    tags: ["PostgreSQL", "Realtime", "Auth", "BaaS"],
    features: [
      "Dedicated PostgreSQL with Row Level Security",
      "Realtime WebSocket database subscriptions",
      "Instant REST and GraphQL auto-generated APIs",
    ],
    commonUseCases:
      "Rapid backend prototyping, collaborative real-time apps, user authentication, and storage.",
    website: "https://supabase.com",
    docs: "https://supabase.com/docs",
  },
  {
    id: "firebase",
    name: "Firebase",
    category: ["database", "backend", "cloud"],
    categoryLabel: "Database / Cloud",
    Icon: SiFirebase,
    isBlackCard: false,
    initX: 90,
    initY: 48,
    rotation: 3,
    floatDuration: 4.0,
    subtitle: "Google platform for building and scaling web and mobile applications.",
    tags: ["Cloud", "Firestore", "Google Cloud"],
    features: [
      "NoSQL Firestore real-time synchronization",
      "Turnkey authentication and OAuth providers",
      "Serverless Cloud Functions and hosting",
    ],
    commonUseCases:
      "Real-time mobile/web applications, push notification systems, and serverless backends.",
    website: "https://firebase.google.com",
    docs: "https://firebase.google.com/docs",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: ["database"],
    categoryLabel: "Database",
    Icon: SiPostgresql,
    isBlackCard: false,
    initX: 7,
    initY: 77,
    rotation: 4,
    floatDuration: 4.5,
    subtitle: "Powerful, open source object-relational database system with strong ACID standards.",
    tags: ["SQL", "Relational", "ACID Compliant"],
    features: [
      "Strict data integrity and foreign keys",
      "Advanced indexing (B-Tree, GIN, GiST)",
      "Native JSONB support for hybrid document models",
    ],
    commonUseCases:
      "Financial transactions, mission-critical relational models, analytics, and enterprise data.",
    website: "https://www.postgresql.org",
    docs: "https://www.postgresql.org/docs/",
  },
  {
    id: "python",
    name: "Python",
    category: ["backend", "others"],
    categoryLabel: "Languages",
    Icon: SiPython,
    isBlackCard: false,
    initX: 20,
    initY: 75,
    rotation: -4,
    floatDuration: 4.3,
    subtitle: "High-level programming language known for readability, automation, and AI/ML ecosystems.",
    tags: ["Language", "Scripting", "AI / ML"],
    features: [
      "Clean, expressive, human-readable syntax",
      "Rich scientific, data, and machine learning libraries",
      "Extensive web framework ecosystems (FastAPI, Django)",
    ],
    commonUseCases:
      "AI/ML pipeline integration, automated scripting, data processing, and microservice APIs.",
    website: "https://www.python.org",
    docs: "https://docs.python.org/3/",
  },
  {
    id: "git",
    name: "Git",
    category: ["tools"],
    categoryLabel: "Tools",
    Icon: SiGit,
    isBlackCard: false,
    initX: 13,
    initY: 88,
    rotation: 3,
    floatDuration: 4.1,
    subtitle: "Distributed version control system designed to handle everything from small to large projects.",
    tags: ["VCS", "CLI", "Branching"],
    features: [
      "Distributed architecture with offline commits",
      "Lightning-fast branching and merging",
      "Cryptographic integrity of history (SHA-1/256)",
    ],
    commonUseCases:
      "Source code versioning, collaborative branching workflows, code reviews, and commit integrity.",
    website: "https://git-scm.com",
    docs: "https://git-scm.com/doc",
  },
  {
    id: "github",
    name: "GitHub",
    category: ["tools", "cloud"],
    categoryLabel: "Tools / Cloud",
    Icon: SiGithub,
    isBlackCard: false,
    initX: 27,
    initY: 86,
    rotation: -5,
    floatDuration: 4.7,
    subtitle: "Cloud-based developer platform for version control, CI/CD, and collaboration.",
    tags: ["CI/CD", "Pull Requests", "Actions"],
    features: [
      "GitHub Actions automated CI/CD workflows",
      "Pull request reviews and branch protections",
      "Package registry, issue tracking, and releases",
    ],
    commonUseCases:
      "Team collaboration, automated testing pipelines, continuous deployment, and open source delivery.",
    website: "https://github.com",
    docs: "https://docs.github.com",
  },
  {
    id: "figma",
    name: "Figma",
    category: ["frontend", "tools"],
    categoryLabel: "Tools",
    Icon: SiFigma,
    isBlackCard: false,
    initX: 75,
    initY: 79,
    rotation: 3,
    floatDuration: 4.2,
    subtitle: "The leading collaborative interface design tool for UX wireframing and design systems.",
    tags: ["UI/UX", "Design Systems", "Prototyping"],
    features: [
      "Vector editing with responsive Auto Layout",
      "Shared design tokens and component libraries",
      "Direct developer inspection specs and code export",
    ],
    commonUseCases:
      "Wireframing, prototyping, design token handoffs, and pixel-perfect design translation.",
    website: "https://www.figma.com",
    docs: "https://help.figma.com",
  },
  {
    id: "vercel",
    name: "Vercel",
    category: ["cloud", "tools"],
    categoryLabel: "Cloud",
    Icon: SiVercel,
    isBlackCard: false,
    initX: 89,
    initY: 71,
    rotation: -3,
    floatDuration: 4.4,
    subtitle: "Frontend cloud platform for seamless Next.js and web application deployment.",
    tags: ["Edge CDN", "Serverless", "Deployments"],
    features: [
      "Zero-config Git push deployments and previews",
      "Global Edge Network with minimal TTFB",
      "Serverless Functions and Edge Middleware execution",
    ],
    commonUseCases:
      "Hosting modern Next.js web applications, edge caching, preview environments, and custom domains.",
    website: "https://vercel.com",
    docs: "https://vercel.com/docs",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: ["backend"],
    categoryLabel: "Backend",
    Icon: SiNodedotjs,
    isBlackCard: false,
    initX: 43,
    initY: 82,
    rotation: 4,
    floatDuration: 4.3,
    subtitle: "JavaScript runtime built on Chrome's V8 engine for high-performance server applications.",
    tags: ["Runtime", "V8", "Async I/O"],
    features: [
      "Non-blocking asynchronous event model",
      "Rich NPM ecosystem of open-source packages",
      "Native worker threads and buffer stream handling",
    ],
    commonUseCases:
      "Backend microservices, real-time WebSockets, background jobs, and fullstack applications.",
    website: "https://nodejs.org",
    docs: "https://nodejs.org/en/docs",
  },
  {
    id: "redis",
    name: "Redis",
    category: ["database", "backend"],
    categoryLabel: "Database",
    Icon: SiRedis,
    isBlackCard: false,
    initX: 60,
    initY: 81,
    rotation: -5,
    floatDuration: 4.5,
    subtitle: "In-memory data store used as a database, cache, streaming engine, and message broker.",
    tags: ["In-Memory", "Caching", "Pub/Sub"],
    features: [
      "Sub-millisecond data read/write speeds",
      "Key-value data structures (strings, hashes, lists)",
      "Built-in pub/sub channels and TTL expiration",
    ],
    commonUseCases:
      "Database query caching, session stores, API rate limiting, and real-time message distribution.",
    website: "https://redis.io",
    docs: "https://redis.io/docs/",
  },
  {
    id: "openai",
    name: "OpenAI",
    category: ["others"],
    categoryLabel: "AI & APIs",
    Icon: SiOpenai,
    isBlackCard: false,
    initX: 38,
    initY: 28,
    rotation: 5,
    floatDuration: 4.6,
    subtitle: "Leading AI models and APIs for natural language, reasoning, and automation.",
    tags: ["AI", "LLM", "Function Calling"],
    features: [
      "State-of-the-art GPT-4 reasoning models",
      "Structured JSON responses and function calling",
      "Vector embeddings for semantic search & RAG",
    ],
    commonUseCases:
      "Contextual AI assistants, autonomous agent workflows, document analysis, and natural language interfaces.",
    website: "https://openai.com",
    docs: "https://platform.openai.com/docs",
  },
  {
    id: "graphql",
    name: "GraphQL",
    category: ["backend", "others"],
    categoryLabel: "AI & APIs",
    Icon: SiGraphql,
    isBlackCard: false,
    initX: 62,
    initY: 30,
    rotation: -4,
    floatDuration: 4.0,
    subtitle: "A query language for APIs providing a complete and understandable description of data.",
    tags: ["API", "Type-Safe", "Queries"],
    features: [
      "Clients request exact fields needed with zero over-fetch",
      "Single-endpoint schema composition",
      "Strongly typed schema contracts with auto-documentation",
    ],
    commonUseCases:
      "Aggregating distributed microservices, client-driven mobile apps, and unified data layers.",
    website: "https://graphql.org",
    docs: "https://graphql.org/learn/",
  },
  {
    id: "stripe",
    name: "Stripe",
    category: ["backend", "others"],
    categoryLabel: "Others",
    Icon: SiStripe,
    isBlackCard: false,
    initX: 48,
    initY: 68,
    rotation: 3,
    floatDuration: 4.2,
    subtitle: "Financial infrastructure and developer-first payment processing platform.",
    tags: ["Payments", "Billing", "SaaS"],
    features: [
      "Payment Intents and checkout sessions",
      "Subscription lifecycle management",
      "Webhook event signatures and PCI compliance",
    ],
    commonUseCases:
      "Global card processing, customer billing portals, SaaS subscriptions, and digital checkouts.",
    website: "https://stripe.com",
    docs: "https://stripe.com/docs",
  },
];

export default function TechStackPage() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  const [activeModalSkill, setActiveModalSkill] = useState<TechCardItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingCardRef = useRef<boolean>(false);
  const dragStartPosRef = useRef<{ x: number; y: number } | null>(null);

  const handleCardClick = (skill: TechCardItem) => {
    if (isDraggingCardRef.current) return;
    setActiveModalSkill(skill);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalSkill(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="w-full text-[#09090B] dark:text-[#FAFAFA] pb-20 pt-6 select-none overflow-x-hidden">
      {/* Top Header Section matching screenshot */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#121215] text-[11px] font-mono font-semibold tracking-wider uppercase text-[#09090B] dark:text-[#FAFAFA] shadow-xs">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Technology Stack</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
              Software Developer
            </h1>
            <p className="text-sm sm:text-base text-[#71717A] dark:text-[#A1A1AA] mt-2 max-w-2xl leading-relaxed">
              Technologies I work with to build modern, scalable and high-performance applications.
            </p>
          </div>

          {/* Filter Pills on Right */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 max-w-full lg:max-w-xl lg:justify-end select-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const Icon = cat.Icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-tight transition-all duration-200 whitespace-nowrap shrink-0 border ${
                    isActive
                      ? "bg-[#09090B] text-white border-[#09090B] dark:bg-white dark:text-[#09090B] dark:border-white shadow-xs"
                      : "bg-white dark:bg-[#121215] text-[#09090B] dark:text-[#FAFAFA] border-[#E4E4E7] dark:border-[#27272A] hover:bg-[#F4F4F5] dark:hover:bg-[#18181B]"
                  }`}
                >
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Interactive Floating Canvas Container */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div
          ref={containerRef}
          className="relative w-full h-[500px] rounded-[2.5rem] bg-white dark:bg-[#0c0c0e] border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.03)]"
        >
         


          {/* Floating Interactive Technology Cards */}
          {TECH_CARDS.map((card) => {
            const isCategoryMatch =
              activeCategory === "all" || card.category.includes(activeCategory);

            return (
              <motion.div
                key={card.id}
                drag
                dragConstraints={containerRef}
                dragElastic={0.2}
                dragMomentum={true}
                onPointerDown={(e: React.PointerEvent) => {
                  dragStartPosRef.current = { x: e.clientX, y: e.clientY };
                  isDraggingCardRef.current = false;
                }}
                onDragStart={() => {
                  isDraggingCardRef.current = true;
                }}
                onDrag={(_, info) => {
                  if (Math.hypot(info.offset.x, info.offset.y) >= 6) {
                    isDraggingCardRef.current = true;
                  }
                }}
                onPointerUp={(e: React.PointerEvent) => {
                  if (dragStartPosRef.current) {
                    const dist = Math.hypot(
                      e.clientX - dragStartPosRef.current.x,
                      e.clientY - dragStartPosRef.current.y
                    );
                    if (dist >= 7) {
                      isDraggingCardRef.current = true;
                    }
                  }
                }}
                onDragEnd={(_, info) => {
                  if (Math.hypot(info.offset.x, info.offset.y) >= 6) {
                    isDraggingCardRef.current = true;
                  }
                  setTimeout(() => {
                    isDraggingCardRef.current = false;
                  }, 150);
                }}
                whileDrag={{
                  scale: 1.14,
                  zIndex: 45,
                  cursor: "grabbing",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                whileHover={{
                  scale: 1.08,
                  zIndex: 35,
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [card.rotation, card.rotation + 2, card.rotation],
                  opacity: isCategoryMatch ? 1 : 0.25,
                  filter: isCategoryMatch ? "blur(0px)" : "blur(1.5px)",
                }}
                transition={{
                  y: {
                    duration: card.floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: card.floatDuration * 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  opacity: { duration: 0.3 },
                }}
                style={{
                  position: "absolute",
                  left: `${card.initX}%`,
                  top: `${card.initY}%`,
                  transform: `translate(-50%, -50%) rotate(${card.rotation}deg)`,
                }}
                onClick={(e) => {
                  if (isDraggingCardRef.current) {
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                  }
                  handleCardClick(card);
                }}
                className={`touch-none cursor-grab active:cursor-grabbing select-none p-2.5 sm:p-4 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center transition-colors duration-200 ${
                  card.isBlackCard
                    ? "bg-[#09090B] text-white dark:bg-white dark:text-[#09090B] shadow-xl border border-[#09090B] dark:border-white"
                    : "bg-white dark:bg-[#18181B] text-[#09090B] dark:text-[#FAFAFA] border border-[#E4E4E7] dark:border-[#27272A] shadow-md hover:shadow-xl hover:border-[#09090B] dark:hover:border-white"
                }`}
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center">
                  <card.Icon size={28} className="sm:hidden" />
                  <card.Icon size={34} className="hidden sm:block" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold tracking-tight mt-1 whitespace-nowrap">
                  {card.name}
                </span>
              </motion.div>
            );
          })}

          
        </div>
      </section>

      {/* Popup Modal matching screenshot */}
      <AnimatePresence>
        {activeModalSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalSkill(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 14 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-[2rem] p-5 sm:p-6 shadow-2xl overflow-hidden z-10 max-h-[88vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {/* Giant faint watermark outline on the right (matches screenshot!) */}
              <activeModalSkill.Icon
                size={220}
                className="absolute -right-8 -bottom-10 opacity-[0.04] dark:opacity-[0.05] pointer-events-none"
              />

              {/* Close Button X in top-right */}
              <button
                type="button"
                onClick={() => setActiveModalSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-[#71717A] hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-white hover:bg-[#F4F4F5] dark:hover:bg-[#18181B] transition-colors"
                aria-label="Close details"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Header: Large Black Squircle Badge + Title + Subtitle */}
              <div className="flex items-start gap-3.5 sm:gap-4 mb-4 pr-8">
                {/* Large Black Icon Badge */}
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#09090B] text-white dark:bg-white dark:text-[#09090B] flex items-center justify-center shrink-0 shadow-md">
                  <activeModalSkill.Icon size={34} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
                    {activeModalSkill.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#71717A] dark:text-[#A1A1AA] mt-0.5 leading-relaxed">
                    {activeModalSkill.subtitle}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex items-center gap-1.5 flex-wrap mt-2">
                    {activeModalSkill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-[#F4F4F5] dark:bg-[#18181B] text-[#09090B] dark:text-[#FAFAFA] border border-[#E4E4E7] dark:border-[#27272A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features Checklist */}
              <div className="space-y-1.5 py-3 border-t border-[#E4E4E7] dark:border-[#27272A] text-xs sm:text-[13px] font-medium text-[#09090B] dark:text-[#FAFAFA]">
                {activeModalSkill.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#09090B] text-white dark:bg-white dark:text-[#09090B] flex items-center justify-center shrink-0">
                      <Check className="w-2 h-2 stroke-[3]" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Common Use Cases Section */}
              <div className="pt-2.5 pb-4">
                <span className="text-xs sm:text-[13px] font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] block mb-1">
                  Common Use Cases
                </span>
                <p className="text-xs sm:text-[13px] text-[#71717A] dark:text-[#A1A1AA] leading-relaxed">
                  {activeModalSkill.commonUseCases}
                </p>
              </div>

              {/* Action Buttons: Official Website & Documentation */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={activeModalSkill.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs h-9 px-4 sm:px-5 inline-flex items-center justify-center gap-2"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={activeModalSkill.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs h-9 px-4 sm:px-5 inline-flex items-center justify-center gap-2"
                >
                  <span>Documentation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Engineering Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 sm:mb-4 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#121215] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA]">
            <Zap className="w-3.5 h-3.5 text-[#09090B] dark:text-[#FAFAFA]" />
            <span>Standards & Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
            Engineering Philosophy
          </h2>
          <p className="text-sm sm:text-base text-[#71717A] dark:text-[#A1A1AA] mt-2 max-w-xl mx-auto sm:mx-0">
            How these tools come together to produce resilient, high-speed digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
              title: "Sub-Second Latency",
              body: "Edge caching, streaming SSR, optimized bundle splitting, and zero-layout-shift design patterns deliver instant render cycles.",
              badge: "Core Web Vitals 95+",
            },
            {
              icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
              title: "Deterministic Types",
              body: "End-to-end type safety from database schemas to API contracts and frontend views prevents runtime regression in production.",
              badge: "Zero Runtime Failure",
            },
            {
              icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
              title: "Fluid Accessibility",
              body: "Semantic HTML5, ARIA compliance, screen reader considerations, and responsive viewport engineering across all modern devices.",
              badge: "Accessible & Mobile-First",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="p-5 sm:p-6 rounded-[1.5rem] bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] flex flex-col justify-between hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
            >
              <div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[1rem] bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center text-[#09090B] dark:text-[#FAFAFA] mb-4 sm:mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#09090B] dark:text-[#FAFAFA] mb-2 sm:mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] leading-relaxed">
                  {item.body}
                </p>
              </div>
              <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-[#E4E4E7] dark:border-[#27272A] text-[10px] sm:text-xs font-mono text-[#71717A] dark:text-[#A1A1AA]">
                {item.badge}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <motion.div
        whileHover={{ y: -2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 p-6 sm:p-10 rounded-[2rem] bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
      >
        <div className="text-center sm:text-left">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] block mb-2 sm:mb-2.5">
            Have a Project in Mind?
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
            Let&apos;s build something high-performance together.
          </h3>
          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] mt-2 sm:mt-3 max-w-xl mx-auto sm:mx-0">
            Whether it&apos;s a scalable web app, headless e-commerce store, or AI-powered workflow, I can take it from architecture to deployment.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
          <Link
            href="/contact"
            className="btn-primary text-sm h-11 px-6 inline-flex items-center justify-center gap-2"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/projects"
            className="btn-secondary text-sm h-11 px-5 inline-flex items-center justify-center gap-2"
          >
            <span>View Projects</span>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
