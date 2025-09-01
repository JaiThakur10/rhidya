"use client";

import TrailingImage from "../../components/animata/image/trailing-image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div>
        <TrailingImage />
      </div>

      <div className="bg-[#FAF6F6]">
        <p className="max-w-5xl mx-auto py-8 px-6 md:px-0 text-sm md:text-3xl text-[#5B5B5B]">
          Hi, I’m Rhidya Gupta, a passionate and driven Digital Marketing
          Manager with a creative heart and a strategic mind. With an MSc in
          Business Management from Cardiff University, UK, I bring global
          perspective, marketing expertise, and entrepreneurial energy to every
          brand I work with. From managing cross-platform campaigns to building
          scalable content systems and launching a digital venture of my own, I
          thrive at the intersection of creativity, clarity, and performance.
        </p>
      </div>

      <section
        className="relative w-full h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-center md:text-left"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/678a24e2ee27ae217007276f/678d5768cba5a51ee5853534_Photographers%20Silhouette%20Against%20Sunset.jpeg')",
        }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Left Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-light leading-snug md:leading-tight">
            Turning moments into stories <br className="hidden sm:block" />
            that evoke emotions and <br className="hidden sm:block" />
            bring your journey to life.
          </h1>
        </div>

        {/* Right Content */}
        <div className="relative hover:underline z-10 mt-6 md:mt-0">
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 text-white text-base sm:text-lg font-light hover:opacity-90"
            whileHover="hover"
          >
            <span className=" ">Book your session</span>
            <motion.span
              variants={{
                hover: { x: 6 },
                initial: { x: 0 },
              }}
              initial="initial"
              transition={{ type: "tween", duration: 0.3 }}
            >
              <ArrowRight className="w-5 h-5 " />
            </motion.span>
          </motion.a>
        </div>
      </section>
    </>
  );
}
