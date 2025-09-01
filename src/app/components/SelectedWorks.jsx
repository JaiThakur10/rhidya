"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlyingPosters from "./FlyingPosters";

const items = [
  "/rdhiya1010.png",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/400/400?grayscale",
];

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWorks() {
  const sectionRef = useRef(null);
  const selectedRef = useRef(null);
  const worksRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const selected = selectedRef.current;
    const works = worksRef.current;

    if (!section || !selected || !works) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "+=1000", // Adjust scroll range here
        scrub: true,
        markers: false,
      },
    });

    timeline
      .fromTo(selected, { x: "-100%" }, { x: "0%", duration: 1, ease: "none" })
      .fromTo(
        works,
        { x: "100%" },
        {
          x: "calc(-100% + 10rem)", // fine-tune until W and T align vertically
          duration: 1,
          ease: "none",
        },
        "<" // start at same time as previous (you can move this to ">" if needed)
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className=" bg-[#F6F6F6]">
      <div className=" bg-[#F6F6F6]  max-w-3xl mx-auto">
        <div style={{ height: "600px", position: "relative" }}>
          <FlyingPosters items={items} />
        </div>
      </div>
    </div>
  );
}
