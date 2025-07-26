"use client";

import Link from "next/link";
import { useState } from "react";
import { GradientBars } from "@/components/ui/gradient-bars";

const projects = [
  { name: "Creative Portfolio", href: "/projects/portfolio", description: "Next.js & GSAP portfolio" },
  { name: "3D Web Experience", href: "/projects/3d-experience", description: "WebGL immersive experience" },
  { name: "Full-stack SaaS", href: "/projects/saas", description: "Auth + billing SaaS platform" },
  { name: "AI Visualizer", href: "/projects/ai-visualizer", description: "Generative AI art platform" },
  { name: "Realtime Multiplayer Game", href: "/projects/multiplayer-game", description: "Physics-based WebSocket game" },
  { name: "E-Commerce Platform", href: "/projects/ecommerce", description: "Modern headless commerce solution" },
  { name: "Data Visualization Dashboard", href: "/projects/dashboard", description: "Interactive analytics platform" },
  { name: "Mobile-First PWA", href: "/projects/pwa", description: "Progressive web application" },
];

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-between overflow-hidden px-4 sm:px-8 md:px-12 lg:px-24">

      <div className="absolute inset-0">
        <GradientBars />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:hidden space-y-8 md:space-y-12 py-8">

        <div className="text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-black drop-shadow-md">
            Projects<span className="text-red-500">.</span>
          </h1>
          
          <p className="mt-4 md:mt-6 text-gray-900 text-lg sm:text-xl md:text-2xl font-google-sans-code max-w-2xl mx-auto md:mx-0">
            A collection of my best interactive & scalable digital experiences.
          </p>
        </div>

        <div 
          className="text-center md:text-left"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => {
            setIsNavHovered(false);
            setHovered(null);
          }}
        >

          <h2 className="text-sm uppercase tracking-widest font-google-sans-code text-gray-600 mb-6 transition-all duration-500 ease-out">
            Featured Work
          </h2>

          <ul className="flex flex-col items-center md:items-start space-y-4 sm:space-y-6">
            {projects.map((project, index) => {
              const isActive = hovered === index;
              const isDimmed = isNavHovered && hovered !== index;

              return (
                <li
                  key={index}
                  onMouseEnter={() => setHovered(index)}
                  onTouchStart={() => setHovered(index)} // Touch support
                  className="w-full max-w-md transition-all duration-500 ease-out"
                  style={{
                    transform: `scale(${isActive ? 1.02 : isDimmed ? 0.98 : 1})`,
                    opacity: isDimmed ? 0.6 : 1,
                  }}
                >
                  <div className="text-center md:text-left group">
                    <Link 
                      href={project.href} 
                      className="block transition-all duration-300 ease-out hover:underline decoration-2 underline-offset-4"
                    >
                      <span 
                        className={`
                          font-google-sans-code text-lg sm:text-xl md:text-2xl inline-block
                          transition-all duration-300 ease-out
                          ${isActive 
                            ? "text-black font-bold tracking-wide" 
                            : "text-gray-700 font-medium"
                          }
                        `}
                      >
                        {project.name}
                      </span>
                    </Link>

                    <div className="mt-2 sm:hidden">
                      <p className="text-sm text-gray-600 font-normal leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div 
                      className="hidden sm:block overflow-hidden transition-all duration-400 ease-out"
                      style={{
                        maxHeight: isActive ? '3rem' : '0px',
                        opacity: isActive ? 1 : 0,
                        transform: `translateY(${isActive ? '0px' : '-10px'})`,
                      }}
                    >
                      <p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 text-center md:text-left">
            <p className="text-xs sm:text-sm font-google-sans-code text-gray-500 uppercase tracking-wide">
              <span className="hidden sm:inline">Hover to explore • </span>Tap to view
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex relative z-10 w-full items-center justify-between">

        <div className="text-left max-w-xl">
          <h1 className="text-7xl xl:text-8xl 2xl:text-9xl font-extrabold leading-tight text-black drop-shadow-md">
            Projects<span className="text-red-500">.</span>
          </h1>

          <p className="mt-6 text-gray-900 text-2xl xl:text-3xl font-google-sans-code">
            A collection of my best interactive & scalable digital experiences.
          </p>
        </div>

        <div
          className="text-right max-w-lg flex flex-col justify-center"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => {
            setIsNavHovered(false);
            setHovered(null);
          }}
        >

          <h2 className="text-sm uppercase tracking-widest font-google-sans-code text-gray-600 mb-8 transition-all duration-500 ease-out">
            Featured Work
          </h2>

          <ul className="flex flex-col items-end space-y-0">
            {projects.map((project, index) => {
              const isActive = hovered === index;
              const isDimmed = isNavHovered && hovered !== index;

              return (
                <li
                  key={index}
                  onMouseEnter={() => setHovered(index)}
                  className="w-full transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  style={{
                    transform: `
                      scale(${isActive ? 1.05 : isDimmed ? 0.95 : 1}) 
                      translateX(${isDimmed ? '12px' : '0px'})
                    `,
                    opacity: isDimmed ? 0.4 : 1,
                    marginBottom: isActive ? '2rem' : isDimmed ? '0.5rem' : '1rem',
                  }}
                >
                  <div className="text-right group">
                    <Link 
                      href={project.href} 
                      className="block transition-all duration-500 ease-out hover:underline decoration-2 underline-offset-4"
                    >
                      <span 
                        className={`
                          font-google-sans-code text-xl xl:text-2xl inline-block
                          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                          ${isActive 
                            ? "text-black font-bold tracking-wide" 
                            : "text-gray-700 font-medium"
                          }
                        `}
                        style={{
                          transform: `translateY(${isActive ? '-2px' : '0px'})`,
                        }}
                      >
                        {project.name}
                      </span>
                    </Link>

                    <div 
                      className="overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                      style={{
                        maxHeight: isActive ? '3rem' : '0px',
                        opacity: isActive ? 1 : 0,
                        transform: `translateY(${isActive ? '0px' : '-10px'})`,
                      }}
                    >
                      <p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div 
            className="mt-10 text-right transition-all duration-700 ease-out"
            style={{
              opacity: isNavHovered ? 1 : 0.7,
              transform: `translateY(${isNavHovered ? '0px' : '5px'})`,
            }}
          >
            <p className="text-sm font-google-sans-code text-gray-500 uppercase tracking-wide">
              Hover to explore • Click to view
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
