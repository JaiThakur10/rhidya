"use client";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#F6F6F6] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        {/* Left: Section Title */}
        <div className="text-xl font-medium text-black flex-shrink-0">
          About <span className="inline-block ml-1">•</span>
        </div>

        {/* Right: Paragraph Content */}
        <div className="max-w-2xl text-[18px] leading-8 text-neutral-700">
          <p className="mb-4 text-black font-medium">
            Hi, I’m Rhidya Gupta, a passionate and driven Digital Marketing
            Manager with a creative heart and a strategic mind.
          </p>
          <p className="text-neutral-600 font-normal">
            With an MSc in Business Management from Cardiff University, UK, I
            bring global perspective, marketing expertise, and entrepreneurial
            energy to every brand I work with. From managing cross-platform
            campaigns to building scalable content systems and launching a
            digital venture of my own, I thrive at the intersection of
            creativity, clarity, and performance.
          </p>
        </div>
      </div>
    </section>
  );
}
