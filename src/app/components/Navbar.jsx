"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["HOME", "ABOUT", "WORKS", "CONTACT"];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between md:px-8 py-6  md:mx-4 ">
        <Link href="/">
          <div className="text-xl font-normal  mx-2 md:mx-4 md:px-4 py-2 text-black rounded bg-[#F6F6F6] whitespace-nowrap">
            RHIDYA GUPTA
          </div>
        </Link>

        <div className="flex items-center ">
          {/* Custom Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-[3px] relative bg-[#F6F6F6] rounded-l"
            aria-label="Toggle Menu"
          >
            <motion.span
              className="w-5 h-[2px] bg-black origin-center"
              animate={isOpen ? { rotate: 45, y: 2.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-5 h-[2px] bg-black origin-center"
              animate={isOpen ? { rotate: -45, y: -2.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>

          {/* Phone Icon */}
          <a
            href="tel:+911234567890"
            className="w-10 h-10 flex items-center justify-center rounded-r bg-[#F6F6F6] text-black  transition-colors duration-200"
            aria-label="Call"
          >
            <FiPhone className="text-[20px]" />
          </a>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black text-white z-40"
          >
            {/* Top bar inside menu */}
            <div className="flex items-center justify-between px-8 py-6 mx-4 mt-4">
              <Link href="/">
                <div className="text-sm font-medium px-4 py-2 border rounded bg-[#F6F6F6] text-black">
                  RHIDYA GUPTA
                </div>
              </Link>

              <div className=" flex items-center">
                <div className=" bg-[#F6F6F6] flex rounded justify-center w-24 h-10">
                  {/* Close Button (same as hamburger but animated to cross) */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col justify-center items-center w-10 h-10 gap-[3px] relative bg-[#F6F6F6] "
                    aria-label="Close Menu"
                  >
                    <motion.span
                      className="w-5 h-[2px] bg-black origin-center"
                      initial={{ rotate: 45, y: 2.5 }}
                      animate={{ rotate: 45, y: 2.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="w-5 h-[2px] bg-black origin-center"
                      initial={{ rotate: -45, y: -2.5 }}
                      animate={{ rotate: -45, y: -2.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>

                  {/* Phone Icon */}
                  <a
                    href="tel:+911234567890"
                    className="w-10 h-10 flex items-center justify-center  bg-[#F6F6F6] text-black  transition-colors duration-200"
                    aria-label="Call"
                  >
                    <FiPhone className="text-[20px]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Menu content */}
            <div className="flex flex-col md:flex-row h-full">
              {/* Left - Menu Items */}
              <div className="flex-1 flex flex-col justify-center items-center gap-8 text-5xl md:text-7xl font-semibold p-8">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="transition duration-300 transform hover:scale-105 hover:text-gray-300"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Right - Full Height Image */}
              <motion.div
                className="hidden md:block md:flex-1 h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/photo-8.png')" }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
