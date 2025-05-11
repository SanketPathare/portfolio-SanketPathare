"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { image } from "../../public/image";

const ProjectSlidershow = () => {
  const images = [
    { id: 1, src: image.TripImg, alt: "Slide 1" },
    { id: 2, src: image.imageGeneratorImg, alt: "Slide 2" },
    { id: 3, src: image.CryptoAppImg, alt: "Slide 3" },
    { id: 4, src: image.GeminiImg, alt: "Slide 4" },
    { id: 5, src: image.ElectromartImg, alt: "Slide 5" },
    { id: 6, src: image.AnimeReview, alt: "Slide 6" },
    { id: 7, src: image.MoviesReview, alt: "Slide 7" },
    { id: 8, src: image.Fitclub, alt: "Slide 8" },
    { id: 9, src: image.NewsApp, alt: "Slide 9" },
    { id: 10, src: image.RecipeApp, alt: "Slide 10" },
    { id: 11, src: image.Weatherapp, alt: "Slide 11" },
    { id: 12, src: image.GlobalDoorsKitchen, alt: "Slide 12" },
    { id: 13, src: image.GameInfo, alt: "Slide 13" },
    { id: 14, src: image.GithubSearch, alt: "Slide 14" },
    { id: 15, src: image.CheatSheetAI, alt: "Slide 15" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative flex items-center justify-center w-full max-w-2xl p-2 mx-auto overflow-hidden">
      {/* Image container */}
      <div className="relative h-[210px] w-[400px] object-cover  border-4 border-neutral-700 rounded-lg">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
    ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: "fill" }}
              className="object-contain p-1 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlidershow;
