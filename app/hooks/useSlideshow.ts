"use client";

import { useState, useEffect } from "react";

export function useSlideshow(images: string[], interval = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const nextSlide = (currentSlide + 1) % images.length;

  return { currentSlide, nextSlide };
}
