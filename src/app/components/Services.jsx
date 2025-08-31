"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Social Media Management",
    image: "/images/footerbg.jpeg",
  },
  {
    number: "02",
    title: "Ads",
    image: "/images/footerbg.jpeg",
  },
  {
    number: "03",
    title: "Graphic Designing",
    image: "/images/footerbg.jpeg",
  },
  {
    number: "04",
    title: "Video Editing",
    image: "/images/footerbg.jpeg",
  },
];

export default function HoverImageList() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverTop, setHoverTop] = useState(0);
  const itemRefs = useRef([]);

  // Calculate vertical center of hovered item
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    if (itemRefs.current[index]) {
      const rect = itemRefs.current[index].getBoundingClientRect();
      const containerTop = itemRefs.current[0].getBoundingClientRect().top;
      const itemCenter = rect.top - containerTop + rect.height / 2; // relative to container
      setHoverTop(itemCenter);
    }
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section className="relative w-full bg-[#faf8f8] py-20">
      <h1
        className="text-[40px] sm:text-[60px] mx-0 md:mx-30 md:text-[100px] lg:text-[140px] font-normal uppercase mb-16"
        style={{
          display: "inline-block",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1626285363447-8695424e9db4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        SERVICES
      </h1>

      <div className="max-w-7xl mx-auto relative">
        {/* Items list */}
        <div className="w-full relative z-10">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative overflow-hidden border-b border-gray-300 cursor-pointer w-full group"
            >
              {/* Background fill */}
              <div
                className={`absolute left-0 top-0 h-full bg-[#EDEDED] transition-all duration-500 ease-in-out z-0 ${
                  activeIndex === index ? "w-full" : "w-0"
                }`}
              />

              {/* Foreground content */}
              <div className="relative z-10 flex items-center justify-between py-8 px-2">
                <div className="flex items-center gap-6">
                  <span className="text-gray-500 text-lg font-medium w-10">
                    {item.number}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hover image container */}
        <div className="hidden md:block absolute top-0 right-0 w-[300px] lg:w-[400px] z-20">
          {activeIndex !== null && (
            <div
              style={{
                position: "absolute",
                top: `${hoverTop}px`,
                right: 0,
                transform: "translateY(-50%)", // center alignment
              }}
              className="transition-all duration-500 ease-in-out"
            >
              <Image
                src={items[activeIndex].image}
                alt={items[activeIndex].title}
                width={400}
                height={500}
                className="object-cover shadow-lg w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
