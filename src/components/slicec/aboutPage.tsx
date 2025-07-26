"use client";

import Image from "next/image";
import DotGrid from "../bits/Backgrounds/DotGrid/DotGrid";
import TextType from "../bits/TextAnimations/TextType/TextType";

export default function AboutSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-between overflow-hidden px-4 sm:px-8 md:px-12 lg:px-24">
      
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#e0e0e0"
          activeColor="#ff4500"
          proximity={150}
          shockRadius={5}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="relative z-10 w-full flex flex-col lg:hidden space-y-8 md:space-y-12 py-8">
        <div className="flex justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-red-500">
            <Image
              src="/praveen-effectapp.png"
              alt="Praveen"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-google-sans-code text-5xl sm:text-6xl md:text-7xl font-extrabold text-black leading-tight drop-shadow">
            About<span className="text-red-500">.</span>
          </h1>
          
          <p className="font-google-sans-code mt-4 md:mt-6 text-gray-900 text-lg sm:text-xl md:text-2xl tracking-wide max-w-2xl mx-auto md:mx-0">
            Hi, I&apos;m Praveen  a full-stack & creative developer passionate about interactive experiences.
          </p>
        </div>


        <div className="text-center md:text-left">
          <h2 className="text-sm uppercase tracking-widest font-google-sans-code text-gray-600 mb-4">
            My Journey
          </h2>
          <ul className="border-l-2 border-red-500 pl-4 sm:pl-6 space-y-3 sm:space-y-4 font-google-sans-code text-base sm:text-lg md:text-xl text-gray-900 inline-block text-left">
            <li>
              <span className="text-red-500 font-medium">2018 —</span> Started with basic HTML/CSS
            </li>
            <li>
              <span className="text-red-500 font-medium">2020 —</span> Learned JavaScript & React
            </li>
            <li>
              <span className="text-red-500 font-medium">2022 —</span> Got into Next.js & 3D WebGL
            </li>
            <li>
              <span className="text-red-500 font-medium">Today —</span> Crafting interactive digital experiences
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="text-center max-w-sm sm:max-w-md font-google-sans-code relative z-20">
            <div 
              className="inline-block text-red-500 text-base sm:text-lg font-medium leading-relaxed px-4" 
              style={{ minHeight: "3rem" }}
            >
              <TextType
                text={[
                  "Brave enough to risk it all. Humble enough to know I could lose it all. Confident enough to get it all back. This is the mind."
                ]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                textColors={["#000000"]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex relative z-10 w-full items-center justify-between">

        <div className="text-left max-w-xl">

          <h1 className="font-google-sans-code text-7xl xl:text-8xl 2xl:text-[9rem] font-extrabold text-black leading-tight drop-shadow">
            About<span className="text-red-500">.</span>
          </h1>

          <p className="font-google-sans-code mt-6 text-gray-900 text-2xl xl:text-3xl tracking-wide">
            Hi, I&apos;m Praveen — a full-stack & creative developer passionate about interactive experiences.
          </p>

          <div className="mt-10 space-y-4">
            <h2 className="text-sm uppercase tracking-widest font-google-sans-code text-gray-600 mb-3">
              My Journey
            </h2>
            <ul className="border-l-2 border-red-500 pl-6 space-y-4 font-google-sans-code text-xl xl:text-2xl text-gray-900">
              <li>
                <span className="text-red-500 font-medium">2018 —</span> Started with basic HTML/CSS
              </li>
              <li>
                <span className="text-red-500 font-medium">2020 —</span> Learned JavaScript & React
              </li>
              <li>
                <span className="text-red-500 font-medium">2022 —</span> Got into Next.js & 3D WebGL
              </li>
              <li>
                <span className="text-red-500 font-medium">Today —</span> Crafting interactive digital experiences
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center">

          <div className="relative w-64 h-64 xl:w-72 xl:h-72 rounded-xl overflow-hidden shadow-2xl border-4 border-red-500">
            <Image
              src="/praveen-effectapp.png"
              alt="Praveen"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-6 text-center max-w-xs xl:max-w-sm font-google-sans-code relative z-20">
            <div 
              className="inline-block w-[280px] xl:w-[320px] text-red-500 text-lg xl:text-xl font-medium leading-relaxed" 
              style={{ minHeight: "2.5rem" }}
            >
              <TextType
                text={[
                  "Brave enough to risk it all. Humble enough to know I could lose it all. Confident enough to get it all back. This is the mind."
                ]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                textColors={["#000000"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
