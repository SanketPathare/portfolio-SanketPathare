import { StaticImageData } from "next/image";
import { image } from "../../public/image";

export interface ProjectType {
  title: string;
  category: string;
  description: string;
  GithubLink: string;
  LiveLink: any;
  duration: string;
  technologies: string[];
  image: StaticImageData;
}

export const projects: { [key: string]: ProjectType } = {
  tripfly: {
    title: "Tripfly",
    category: "WEB DESIGNING",
    description:
      "Tripfly is a travel booking website that allows users to book hotels, and car rentals. It was built using ReactJS and CSS.",
    GithubLink: "https://github.com/SanketPathare/-Tripfly.in",
    LiveLink: "https://tripfly-in.vercel.app/",
    duration: "2 week",
    technologies: ["React", "CSS"],
    image: image.TripImg,
  },
  gemini: {
    title: "Gemini AI",
    category: "WEB DESIGNING",
    description:
      "Gemini AI is an AI chatbot that provides accurate and helpful information on a wide range of topics. It uses a massive knowledge base and natural language processing to understand and respond to user queries. It was built using ReactJS and CSS.",
    GithubLink: "https://github.com/SanketPathare/gemini-clone",
    LiveLink: "https://gemini-clone-ivory.vercel.app/",
    duration: "1 week",
    technologies: ["React", "CSS"],
    image: image.GeminiImg,
  },
  crypto: {
    title: "Cryptocurrency Tracker",
    category: "WEB DESIGNING",
    description:
      "Cryptocurrency Tracker is a web application that allows users to track the current price of cryptocurrencies. It uses the CoinGecko API to fetch the latest prices and displays them in a user-friendly interface. It was built using ReactJS and CSS.",
    GithubLink: "https://github.com/SanketPathare/CryptoApp",
    LiveLink: "https://crypto-app-iota-flame.vercel.app/",
    duration: "1 week",
    technologies: ["React", "CSS"],
    image: image.CryptoAppImg,
  },
  ElectroMart: {
    title: "ElectroMart",
    category: "WEB DESIGNING",
    description:
      "ElectroMart is an e-commerce website that sells various electronic products. It was built using ReactJS and CSS.",
    GithubLink: "https://github.com/SanketPathare/E-Commerce",
    LiveLink: "https://e-commerce-gilt-pi.vercel.app/",
    duration: "1 week",
    technologies: ["React", "Tailwind CSS"],
    image: image.ElectromartImg,
  },
  ImageGenerator: {
    title: "Image Generator",
    category: "WEB DESIGNING",
    description:
      "Image Generator is a web application that allows users to generate different types of images based on their preferences. It uses the Canvas API to create the images and offers various options for customization. It was built using ReactJS and CSS.",
    GithubLink: "https://github.com/SanketPathare/ai-img",
    LiveLink: "https://ai-img-tan.vercel.app/",
    duration: "2 week",
    technologies: ["React", "CSS"],
    image: image.imageGeneratorImg,
  },
  AnimeReview: {
    title: "Anime Review ",
    category: "WEB DESIGNING",
    description:
      "Anime Review App is a web application that allows users to search for anime titles and read reviews from various sources. It uses the JIKAN API and displays the results in a user-friendly interface. It was built using NextJS and Tailwind CSS.",
    GithubLink: "https://github.com/SanketPathare/animereviews",
    LiveLink: "https://animereviews-bay.vercel.app/",
    duration: "1 week",
    technologies: ["TS", "Next", "Tailwind css", " JIKAN API"],
    image: image.AnimeReview,
  },
  MoviesReview: {
    title: "Movies Review ",
    category: "WEB DESIGNING",
    description:
      "Movies Review App is a web application that allows users to search for movie titles and read reviews from various sources. It uses the TMDB API and displays the results in a user-friendly interface. It was built using NextJS and Tailwind CSS.",
    GithubLink: "https://github.com/SanketPathare/moviesreviews",
    LiveLink: "https://moviesreviews-eight.vercel.app/",
    duration: "1 week",
    technologies: ["JS", "Next", "Tailwind css", "TMDB API"],
    image: image.MoviesReview,
  },
  FitClub: {
    title: "FitClub",
    category: "WEB DESIGNING",
    description:
      "FitClub is a fitness and wellness platform that allows users to create and join workout groups, track their progress, and receive personalized recommendations. It was built using NextJS Tailwind CSS.",
    GithubLink: "https://github.com/SanketPathare/fitclub",
    LiveLink: "https://fitclub-plum.vercel.app/",
    duration: "1 week",
    technologies: ["TS", "Next", "Tailwind css"],
    image: image.Fitclub,
  },
  RecipeApp: {
    title: "Recipe App",
    category: "WEB DESIGNING",
    description:
      "Recipe App is a web application that allows users to search for recipes by ingredients, cooking methods, or cuisines. It uses the Edamam API to fetch the recipes and displays them in a user-friendly interface. It was built using Tailwind CSS.",
    GithubLink: "https://github.com/SanketPathare/recipe-app",
    LiveLink: "https://recipe-app-one-zeta.vercel.app/",
    duration: "1 week",
    technologies: ["JS", "Next", "Tailwind css"],
    image: image.RecipeApp,
  },
  NewsApp: {
    title: "News App",
    category: "WEB DESIGNING",
    description:
      "News App is a web application that allows users to browse and read news articles from various sources. It uses the News API to fetch the news articles and displays them in a user-friendly interface. It was built using NextJS and Tailwind CSS.",
    GithubLink: "https://github.com/SanketPathare/News-App",
    LiveLink: "https://news-app-indol-mu-38.vercel.app/",
    duration: "1 week",
    technologies: ["TS", "Next", "Tailwind css"],
    image: image.NewsApp,
  },
  WeatherApp: {
    title: "Weather App",
    category: "WEB DESIGNING",
    description:
      "Weather App is a web application that allows users to search for weather information by city name. It uses the OpenWeatherMap API to fetch the weather data and displays it in a user-friendly interface. It was built using R NextJS and Tailwind CSS.",
    GithubLink: "https://github.com/SanketPathare/weather-app",
    LiveLink: "https://weather-app-one-jade-20.vercel.app/",
    duration: "1 week",
    technologies: ["JS", "Next", "Tailwind css"],
    image: image.Weatherapp,
  },
  GlobalDoorsKitchen: {
    title: "Global Doors Kitchen",
    category: "WEB DESIGNING",
    description:
      "Global Doors Kitchen is a website for a kitchen appliance company.It was built using NextJS, Tailwind CSS, Framer Motion and Sanity CRM.",
    GithubLink: "https://github.com/SanketPathare/Global-Doors-Kitchen",
    LiveLink: "https://global-doors-kitchen.vercel.app/",
    duration: "1 week",
    technologies: [
      "TS",
      "Next",
      "Tailwind css",
      "Framer Motion",
      " Sanity CRM",
    ],
    image: image.GlobalDoorsKitchen,
  },
  GithubSearch: {
    title: "Github Search",
    category: "WEB DESIGNING",
    description:
      "Github Search is a web application that allows users to search for repositories by username and display the results in a user-friendly interface. It was built using  NextJS, Tailwind CSS.",
    GithubLink: "https://github.com/SanketPathare/github-search",
    LiveLink: "https://github-search-beta-seven.vercel.app/",
    duration: "1 week",
    technologies: ["Next", "Tailwind css"],
    image: image.GithubSearch,
  },
  CheatSheetAI: {
    title: "Cheat Sheet AI",
    category: "WEB DESIGNING",
    description:
      "Cheat Sheet AI is a web application that allows users to create and share cheat sheets for various programming languages. It was built using ReactJS, NextJS, and Tailwind CSS.",
    GithubLink: "https://github.com/SanketPathare/CheatSheetAI",
    LiveLink: "https://cheat-sheet-ai.vercel.app/",
    duration: "1 week",
    technologies: ["React", "Next", "Tailwind css"],
    image: image.CheatSheetAI,
  },
  GameInfo:{
    title: "Game Info",
    category: "WEB DESIGNING",
    description:
      "Game Info is a web application that allows users to search for game information by title and display the results in a user-friendly interface. It was built using ReactJS, NextJS, and Tailwind CSS.",
    GithubLink: "https://github.com/SanketPathare/game-info",
    LiveLink: "https://game-info-zeta.vercel.app//",
    duration: "1 week",
    technologies: ["React", "Next", "Tailwind css"],
    image: image.GameInfo,
  }
};

export async function getProjectData(
  slug: string
): Promise<ProjectType | undefined> {
  return projects[slug];
}
