"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MovingText() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;

    // Duplicate the content to make it seamless
    const content = el.innerHTML;
    el.innerHTML += content;

    // Animate with GSAP
    gsap.to(el, {
      xPercent: -50,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#faf8f8] py-6">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap text-xl sm:text-3xl md:text-4xl font-medium"
        style={{ width: "max-content" }}
      >
        <span className="mx-8">★ Ready to Connect?</span>
        <span className="mx-8">★ Ready to Connect?</span>
        <span className="mx-8">★ Ready to Connect?</span>
        <span className="mx-8">★ Ready to Connect?</span>
        <span className="mx-8">★ Ready to Connect?</span>
      </div>
    </div>
  );
}
