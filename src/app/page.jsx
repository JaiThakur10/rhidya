"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SelectedWorks from "./components/SelectedWorks";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import MovingText from "./components/MovingText";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SelectedWorks />
      <Testimonials />
      <Services />
      <MovingText />
    </main>
  );
}
