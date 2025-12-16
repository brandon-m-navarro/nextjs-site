"use client";
import React, { useState, Children } from 'react';

interface SimpleCarouselProps {
  children?: React.ReactNode;
}

export default function SimpleCarousel ({ children }: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Children.count(children);

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const goToSlide = (index:number) => {
    setCurrentIndex(index);
  };

  if (totalSlides === 0) return null;

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Slides Container */}
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {Children.map(children, (child, index) => (
          <div className="min-w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicator */}
          <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-1 transition-all ${
                  index === currentIndex 
                    ? 'bg-black dark:bg-white scale-125' 
                    : 'bg-black/50 dark:bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
