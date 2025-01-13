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
    <div className="w-full max-w-2xl mx-auto relative overflow-hidden flex justify-center items-center ">
      {/* Image container */}
      <div className="relative h-[205px] w-[350px] object-cover rounded-lg border-4 border-neutral-700">
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
              style={{objectFit: "fill"}}
              className=" object-contain p-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlidershow;
