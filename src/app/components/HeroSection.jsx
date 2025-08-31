"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const mainImageRef = useRef(null);
  const otherImagesRef = useRef([]);
  const totalImages = 8;

  useEffect(() => {
    const mainImage = mainImageRef.current;
    const otherImages = otherImagesRef.current;

    const isMobile = window.innerWidth < 600;
    const radius = isMobile ? 140 : 250;

    const angleStep = (2 * Math.PI) / totalImages;

    // Initial positioning
    gsap.set(mainImage, {
      rotationY: 0,
      scale: 1,
      opacity: 1,
    });

    otherImages.forEach((el) =>
      gsap.set(el, {
        x: 0,
        y: 0,
        z: -50,
        rotationY: 0,
        scale: 1,
        opacity: 0,
      })
    );

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power2.inOut" },
    });

    // 1. Initial main image rotation
    tl.to(mainImage, {
      rotationY: 180,
      duration: 2,
    });

    // 2. Appear stacked images at halfway
    tl.to(
      otherImages,
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
      },
      "-=1.8" // appear 0.2s after rotation begins
    );

    // 3. Delay before fan out
    tl.to({}, { duration: 0.3 });

    // 4. Fan out into radial formation with 3D depth
    tl.to(
      otherImages,
      {
        x: (i) => radius * Math.cos(i * angleStep),
        y: (i) => radius * Math.sin(i * angleStep),
        z: (i) => Math.sin(i * angleStep) * 100,
        rotationY: 360,
        duration: 2.2,
      },
      "-=0.2"
    );

    // 5. Main image scales up during fan-out
    tl.to(
      mainImage,
      {
        scale: 1.6,
        duration: 2.2,
      },
      "-=2.2"
    );

    // 6. All rotate slowly together in place
    tl.to(
      [mainImage, ...otherImages],
      {
        rotationY: "+=360",
        duration: 3,
        ease: "power1.inOut",
      },
      "+=0.5"
    );

    // 7. Shrink fan slightly before collapse
    tl.to(
      otherImages,
      {
        x: (i) => {
          const isMobile = window.innerWidth < 768;
          const r = isMobile ? 140 : 250;
          const angle = (2 * Math.PI) / totalImages;
          return r * 0.5 * Math.cos(i * angle);
        },
        y: (i) => {
          const isMobile = window.innerWidth < 768;
          const r = isMobile ? 140 : 250;
          const angle = (2 * Math.PI) / totalImages;
          return r * 0.5 * Math.sin(i * angle);
        },
        z: (i) => {
          const angle = (2 * Math.PI) / totalImages;
          return Math.sin(i * angle) * 50;
        },
        duration: 1,
      },
      "-=0.5"
    );

    // 8. Collapse into center stack with back rotation
    tl.to(
      otherImages,
      {
        x: 0,
        y: 0,
        z: -50,
        rotationY: "+=180",
        duration: 1.2,
      },
      "+=0.1"
    );

    // 9. Hide other images
    tl.to(
      otherImages,
      {
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
      },
      "+=0.1"
    );

    // 10. Scale main image back and finish rotate
    tl.to(
      mainImage,
      {
        scale: 1,
        rotationY: "+=180",
        duration: 1.5,
      },
      "-=1"
    );

    // 11. Pause before loop restarts
    tl.to({}, { duration: 1.5 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full h-[700px] flex items-center justify-center bg-[#FAF6F6] overflow-hidden">
      {/* === Background Animated Text === */}
      <div
        className="absolute top-1/2 left-0 w-full z-0"
        style={{
          transform: "translateY(-50%)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px] font-normal uppercase"
          style={{
            display: "inline-block",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1708620736630-aa624de23469?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // ✅ Set your image
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            animation: "scrollText 90s linear infinite",
          }}
        >
          {Array(20).fill("RHIDYA GUPTA • ").join("")}
        </div>
      </div>

      {/* === Rotating Image Stack === */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {/* Main Image */}
        <div
          ref={mainImageRef}
          className="absolute z-20 w-[120px] h-[180px] md:w-[200px] md:h-[300px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url('/rdhiya1010.png')`,
              backfaceVisibility: "hidden",
            }}
          />
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url('/rdhiya1010.png')`,
              transform: "rotateY(180deg) scaleX(-1)",
              backfaceVisibility: "hidden",
            }}
          />
        </div>

        {/* 8 Other Images */}
        {[...Array(totalImages)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (otherImagesRef.current[i] = el)}
            className="absolute z-10 w-[120px] h-[180px] md:w-[200px] md:h-[300px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url('/photo-${i + 1}.png')`,
                backfaceVisibility: "hidden",
              }}
            />
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url('/photo-${i + 1}.png')`,
                transform: "rotateY(180deg) scaleX(-1)",
                backfaceVisibility: "hidden",
              }}
            />
          </div>
        ))}
      </div>

      {/* === Inline Keyframes for Text Scroll Animation === */}
      <style>{`
      @keyframes scrollText {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
    </section>
  );
};

export default HeroSection;
