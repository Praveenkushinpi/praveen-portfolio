"use client";

import Link from "next/link";
import { useState } from "react";
import { Globe } from "../magicui/Globe/globe";
import { InteractiveGridPattern } from "../magicui/grid/interactive-grid-pattern";

export default function MinimalIntro() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);

  const skills = [
    { name: "Creative Coding", href: "/skills/creative-coding" },
    { name: "WebGL & 3D", href: "/skills/webgl" },
    { name: "UI/UX Design", href: "/skills/ui-ux" },
    { name: "Next.js & React", href: "/skills/nextjs" },
    { name: "GSAP Animations", href: "/skills/gsap" },
    { name: "Three.js Visuals", href: "/skills/threejs" },
    { name: "Performance Optimization", href: "/skills/performance" },
    { name: "Creative Frontend Architecture", href: "/skills/frontend-architecture" },
    { name: "Interactive Experiences", href: "/skills/interactive" },
  ];

  return (
    <section className="relative flex min-h-screen w-full items-center justify-between overflow-hidden px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="absolute inset-0">
        <InteractiveGridPattern />
        <Globe className="absolute top-20 md:top-40 left-4 md:left-24 scale-50 md:scale-100 opacity-30 md:opacity-100" />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:hidden space-y-8 md:space-y-12 py-8">
        {/* Name + Tagline */}
        <div className="text-center md:text-left">
          <h1 className="font-google-sans-code text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-black">
            Praveen<span className="text-red-500">.</span>
          </h1>
          <p className="font-google-sans-code mt-4 md:mt-6 text-gray-700 text-lg sm:text-xl md:text-2xl tracking-wide">
            Engineering imagination into reality.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-sm uppercase tracking-widest font-google-sans-code text-gray-400 mb-3">
            About Me
          </h2>
          <div className="text-gray-600 font-google-sans-code space-y-1">
            <p className="text-base sm:text-lg font-medium">Based in Kanpur, India</p>
            <p className="text-base sm:text-lg font-medium">Manchester of India</p>
            <p className="text-base sm:text-lg font-medium">18 years old</p>
            <p className="text-base sm:text-lg font-medium">Full-stack & Creative Developer</p>
          </div>
        </div>

        <div 
          className="text-center md:text-left"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => {
            setIsNavHovered(false);
            setHovered(null);
          }}
        >
          <h2 className="text-xs uppercase tracking-widest font-google-sans-code text-gray-400 mb-4">
            Explore
          </h2>
          <ul className="flex flex-col items-center md:items-start space-y-2 sm:space-y-3">
            {skills.map((skill, index) => {
              const isActive = hovered === index;
              const isDimmed = isNavHovered && hovered !== index;

              return (
                <li
                  key={index}
                  onMouseEnter={() => setHovered(index)}
                  className={`font-google-sans-code text-lg sm:text-xl transition-all duration-300 ease-out 
                    ${isActive ? "text-black scale-105" : "text-gray-700"} 
                    ${isDimmed ? "opacity-70" : ""}`}
                >
                  <Link href={skill.href} className="hover:underline">
                    {skill.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="hidden lg:flex relative z-10 w-full items-center justify-between">

        <div className="text-left max-w-xl flex flex-col justify-center">
          <div className="translate-y-[-30px]">
            <h1 className="font-google-sans-code text-7xl xl:text-8xl font-extrabold leading-tight text-black">
              Praveen<span className="text-red-500">.</span>
            </h1>
            <p className="font-google-sans-code mt-6 text-gray-700 text-2xl xl:text-3xl tracking-wide">
              Engineering imagination into reality.
            </p>
          </div>
        </div>

        <div
          className="text-right max-w-sm flex flex-col justify-center"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => {
            setIsNavHovered(false);
            setHovered(null);
          }}
        >

          <h2 className="text-sm uppercase tracking-widest font-google-sans-code text-gray-400 mb-3">
            About Me
          </h2>
          <div className="mb-10 text-gray-600 text-right font-google-sans-code space-y-1">
            <p className="text-lg xl:text-xl font-medium">Based in Kanpur, India</p>
            <p className="text-lg xl:text-xl font-medium">Manchester of India</p>
            <p className="text-lg xl:text-xl font-medium">18 years old</p>
            <p className="text-lg xl:text-xl font-medium">Full-stack & Creative Developer</p>
          </div>

          <h2 className="text-xs uppercase tracking-widest font-google-sans-code text-gray-400 mb-6">
            Explore
          </h2>
          <ul className="flex flex-col items-end transition-all duration-300">
            {skills.map((skill, index) => {
              const isActive = hovered === index;
              const isDimmed = isNavHovered && hovered !== index;

              return (
                <li
                  key={index}
                  onMouseEnter={() => setHovered(index)}
                  className={`font-google-sans-code text-xl xl:text-2xl transition-all duration-300 ease-out 
                    ${isActive ? "text-black scale-110" : "text-gray-700"} 
                    ${isDimmed ? "translate-x-3 opacity-70" : ""}`}
                  style={{
                    marginBottom:
                      isActive ? "1.75rem" : isDimmed ? "1.25rem" : "0.75rem",
                  }}
                >
                  <Link href={skill.href} className="hover:underline">
                    {skill.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
