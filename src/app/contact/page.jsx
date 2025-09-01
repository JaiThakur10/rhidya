// pages/contact.js
import { FaFacebook, FaTimes, FaInstagram } from "react-icons/fa";
import MovingText from "../components/MovingText";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-[#FAF6F6] flex flex-col px-4 py-20 md:px-20 md:py-16">
        {/* Heading */}
        <h1
          className="text-4xl md:text-9xl text-center md:mx-auto mt-8 md:mt-16 text-gray-900 uppercase mb-8 md:mb-12"
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
          Get in touch
        </h1>
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-36 gap-12 md:gap-24 w-full">
          {/* Left Side: Form */}
          <form className="flex flex-col space-y-8 md:space-y-12 w-full">
            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-400 text-xl md:text-2xl px-1 py-2 focus:outline-none focus:border-sky-400 transition-colors duration-200"
            />
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-400 text-xl md:text-2xl px-1 py-2 focus:outline-none focus:border-sky-400 transition-colors duration-200"
            />
            {/* Budget */}
            <input
              type="text"
              placeholder="Budget"
              className="w-full bg-transparent border-b border-gray-400 text-xl md:text-2xl px-1 py-2 focus:outline-none focus:border-sky-400 transition-colors duration-200"
            />
            {/* Message */}
            <textarea
              placeholder="Message"
              className="w-full h-24 bg-transparent border-b border-gray-400 text-xl md:text-2xl px-1 py-2 focus:outline-none focus:border-sky-400 resize-none transition-colors duration-200"
            />
            {/* Send Message Button */}
            <button
              type="submit"
              className="bg-black text-white border border-black text-lg md:text-xl rounded-none px-4 md:px-8 py-3 md:py-4 mt-6 w-full md:w-[230px] hover:bg-[#FAF6F6] hover:text-black transition"
            >
              Send Message
            </button>
          </form>
          {/* Right Side: Contact Info */}
          <div className="flex flex-col space-y-8 md:space-y-10 text-base md:text-lg mt-10 md:mt-0">
            {/* Phone */}
            <div>
              <p className="text-sm mb-2 text-gray-700">Phone</p>
              <p className="text-sm text-gray-900">808 - 2922 - 021</p>
            </div>
            {/* Email */}
            <div>
              <p className="text-sm mb-2 text-gray-700">Email</p>
              <p className="text-sm text-gray-900">rhidyagupta@weularity.com</p>
            </div>
            {/* Socials */}
            <div>
              <p className="text-sm mb-2 text-gray-700">Socials</p>
              <div className="flex items-center space-x-6 md:space-x-8 mt-2">
                <FaFacebook className="text-2xl md:text-3xl text-gray-900" />
                <FaTimes className="text-2xl md:text-3xl text-gray-900" />
                <FaInstagram className="text-2xl md:text-3xl text-gray-900" />
              </div>
            </div>
            {/* Location */}
            <div>
              <p className="text-sm mb-2 text-gray-700">Location</p>
              <p className="text-sm text-gray-900">
                28 D/C Gandhi Nagar, Jammu, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <MovingText />
    </>
  );
}
