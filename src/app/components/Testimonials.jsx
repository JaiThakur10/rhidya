"use client";

import React, { useEffect, useRef } from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  //   const headingRef = useRef(null);
  //   const sectionRef = useRef(null);

  //   useEffect(() => {
  //     if (!headingRef.current || !sectionRef.current) return;

  //     // Ensure ScrollTrigger calculates correctly after page load
  //     setTimeout(() => {
  //       gsap.fromTo(
  //         headingRef.current,
  //         { x: "-100%", opacity: 0 },
  //         {
  //           x: "0%",
  //           opacity: 1,
  //           ease: "power3.out",
  //           scrollTrigger: {
  //             trigger: sectionRef.current,
  //             start: "top 95%", // Adjust this if you want it to animate later
  //             end: "top 50%",
  //             scrub: true,
  //             markers: false, // set to true for debugging
  //           },
  //         }
  //       );

  //       ScrollTrigger.refresh(); // Recalculate after DOM paints
  //     }, 100);
  //   }, []);

  return (
    <section className="relative flex flex-col items-start justify-center bg-[#F6F6F6] py-20 overflow-hidden px-8">
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
        REVIEWS
      </h1>

      <div className="w-full rounded-md flex flex-col antialiased bg-[#F6F6F6] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
        />
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
