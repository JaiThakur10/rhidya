// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full text-white">
      {/* -------- Background image (replace src) -------- */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/footerbg.jpeg" // <-- put your image here
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" /> {/* overlay */}
      </div>

      {/* -------- Content container -------- */}
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-24 pt-16 pb-12">
        {/* Top: 3 columns on desktop, stacked on mobile */}
        <div className="flex flex-col gap-8 text-center  px-0 py-0 md:py-10 md:px-26 sm:text-left md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg md:text-[20px] cursor-pointer leading-snug font-light">
              Rhidya Gupta
            </p>
            <p className="text-sm md:text-[18px] cursor-pointer leading-relaxed font-light opacity-85">
              rhidyagupta@weularity.com
            </p>
          </div>

          <div>
            <p className="text-lg md:text-[20px] cursor-pointer leading-snug font-light">
              Phone
            </p>
            <p className="text-sm md:text-[18px] cursor-pointer leading-relaxed font-light opacity-85">
              +91 (808 - 2922 - 021)
            </p>
          </div>

          <div className=" cursor-pointer">
            <p className="text-lg md:text-[20px] leading-snug font-light">
              28 D/C, Gandhi Nagar
            </p>
            <p className="text-sm md:text-[18px] leading-relaxed font-light opacity-85">
              Jammu, India
            </p>
          </div>
        </div>

        {/* Big headline */}
        <div className="mt-20 sm:mt-24 md:mt-28 flex items-center justify-center">
          <Link href="/contact">
            <h1 className="group relative  leading-[0.83] tracking-[-0.02em] text-center text-[62px] sm:text-[72px] md:text-[clamp(56px,16vw,320px)]">
              <span className="relative cursor-pointer inline-block">
                Let&apos;s Talk
                <span className="pointer-events-none absolute left-0 -bottom-2 sm:-bottom-3 h-[2px] sm:h-[3px] w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </span>
            </h1>
          </Link>
        </div>

        {/* Bottom meta */}
        <div className="mt-20 sm:mt-28 md:mt-[132px] flex items-center justify-center">
          <Link href="https://jai-thakur.vercel.app/">
            <p className="text-lg  leading-5 font-light opacity-85 text-center">
              Designed by Jai Thakur
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
