"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const glowStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.15) 0%, transparent 50%)`,
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 text-gray-800 font-sans overflow-hidden">
      {/* Animated background glow that follows mouse */}
      <div
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={glowStyle}
      />

      {/* Floating hearts and sparkles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              fontSize: `${12 + Math.random() * 8}px`,
            }}
          >
            {i % 3 === 0 ? "💖" : i % 3 === 1 ? "✨" : "🌸"}
          </div>
        ))}
      </div>

      {/* Dreamy cloud shapes */}
      <div className="absolute top-10 left-20 w-32 h-16 bg-gradient-to-r from-pink-200/40 to-rose-200/40 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-32 w-24 h-12 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full blur-lg animate-float-delayed"></div>
      <div className="absolute bottom-32 left-16 w-28 h-14 bg-gradient-to-r from-rose-200/40 to-pink-200/40 rounded-full blur-xl animate-float"></div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile image */}
            <div
              className={`relative transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Glowing border effect with pink theme */}
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 rounded-full blur-md animate-pulse"></div>

                {/* Decorative elements around image */}
                <div className="absolute -top-6 -right-6 text-3xl animate-bounce">
                  🦋
                </div>
                <div
                  className="absolute -bottom-6 -left-6 text-2xl animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  🌺
                </div>
                <div
                  className="absolute -top-6 -left-6 text-2xl animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  ✨
                </div>
                <div
                  className="absolute -bottom-6 -right-6 text-3xl animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                >
                  💕
                </div>

                {/* Profile image container */}
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/60 backdrop-blur-sm shadow-2xl shadow-pink-300/50">
                  <Image
                    src="/rdhiya1010.png"
                    alt="Rhidya Gupta"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    priority
                  />

                  {/* Overlay gradient with pink tones */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div
              className={`text-center lg:text-left transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Greeting */}
              <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-pink-300/30 to-rose-300/30 rounded-full text-sm font-medium border border-pink-400/40 backdrop-blur-sm shadow-lg">
                  👋 Hello Beautiful Souls! 🌸
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block mb-2 text-gray-700">I am</span>
                <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                  Rhidya Gupta
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed font-light">
                ✨ Creative soul crafting beautiful digital experiences with
                love and passion ✨
              </p>

              {/* Coming Soon Message */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-200/50 shadow-xl backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎀</div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                    Something Magical is Coming Soon!
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    I&apos;m currently putting the finishing touches on my
                    digital space. It&apos;s going to be absolutely stunning! 💕
                  </p>

                  {/* Progress indicator */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-3 h-3 bg-rose-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>

                  <p className="text-sm text-gray-500 italic">
                    Stay tuned for the grand reveal! 🌟
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-pink-300/30 to-rose-300/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-rose-300/30 to-purple-300/30 rounded-full blur-xl animate-float-delayed"></div>

      {/* Cute scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default App;
