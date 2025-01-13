import { StaticImageData } from "next/image";
import { image } from "../../public/image";

export interface ProjectType {
  title: string;
  category: string;
  description: string;
  link: string;
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
    link: "https://github.com/SanketPathare/-Tripfly.in",
    duration: "2 week",
    technologies: ["React", "CSS"],
    image: image.TripImg,
  },
  gemini: {
    title: "Gemini AI",
    category: "WEB DESIGNING",
    description:
      "Gemini AI is an AI chatbot that provides accurate and helpful information on a wide range of topics. It uses a massive knowledge base and natural language processing to understand and respond to user queries. It was built using ReactJS and CSS.",
    link: "https://github.com/SanketPathare/gemini-clone",
    duration: "1 week",
    technologies: ["React", "CSS"],
    image: image.GeminiImg,
  },
  crypto: {
    title: "Cryptocurrency Tracker",
    category: "WEB DESIGNING",
    description:
      "Cryptocurrency Tracker is a web application that allows users to track the current price of cryptocurrencies. It uses the CoinGecko API to fetch the latest prices and displays them in a user-friendly interface. It was built using ReactJS and CSS.",
    link: "https://github.com/SanketPathare/CryptoApp",
    duration: "1 week",
    technologies: ["React", "CSS"],
    image: image.CryptoAppImg,
  },
  ElectroMart: {
    title: "ElectroMart",
    category: "WEB DESIGNING",
    description:
      "ElectroMart is an e-commerce website that sells various electronic products. It was built using ReactJS and CSS.",
    link: "https://github.com/SanketPathare/E-Commerce",
    duration: "1 week",
    technologies: ["ReactsJs", "Tailwind CSS"],
    image: image.ElectromartImg,
  },
  ImageGenerator: {
    title: "Image Generator",
    category: "WEB DESIGNING",
    description:
      "Image Generator is a web application that allows users to generate different types of images based on their preferences. It uses the Canvas API to create the images and offers various options for customization. It was built using ReactJS and CSS.",
    link: "https://github.com/SanketPathare/ai-img",
    duration: "2 week",
    technologies: ["React", "CSS"],
    image: image.imageGeneratorImg,
  },
};

export async function getProjectData(
  slug: string
): Promise<ProjectType | undefined> {
  return   projects[slug];
}
