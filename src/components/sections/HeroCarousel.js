import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';

export default function HeroCarousel() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable arrows for cleaner mobile view
  };

  // Slides data
  const slides = [
    { text: "Sel-Building Initiative", image: "/images/slide1.jpg" },
    { text: "Education for All", image: "/images/slide2.jpg" },
    { text: "Community Development", image: "/images/slide3.jpg" },
    { text: "Health and Wellness", image: "/images/slide4.jpg" },
  ];

  return (
    <div className="relative">
      {/* Slider Wrapper */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[75vh] md:h-screen">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.text}
              layout="fill"
              objectFit="cover"
              priority // Ensures the first image loads faster
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* Slide Text */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {slide.text}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}