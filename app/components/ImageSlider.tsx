"use client"

import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
  currentIndex: number;
  closeModal: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, currentIndex, closeModal }) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-full max-w-3xl">
        <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>
          &times;
        </button>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <img 
          src={images[activeIndex]} 
          alt="slider" 
          className="w-full h-96 object-cover"
        />
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;