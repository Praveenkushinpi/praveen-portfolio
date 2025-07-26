"use client";

import Link from "next/link";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-between overflow-hidden bg-white px-4 sm:px-8 md:px-12 lg:px-24">

      <RetroGrid />

      <div className="relative z-10 w-full flex flex-col lg:hidden space-y-8 md:space-y-12 py-8 pb-20">

        <div className="text-center md:text-left">
          <h1 className="font-google-sans-code text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight">
            Let&pose;s <br />
            Work <br />
            <span className="text-red-500">Together.</span>
          </h1>
          
          <p className="mt-4 md:mt-6 text-gray-700 text-lg sm:text-xl md:text-2xl tracking-wide font-google-sans-code max-w-2xl mx-auto md:mx-0">
            Open for collaborations, freelance projects & exciting opportunities.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">

          <Link
            href="mailto:praveenkushinpi@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold text-white bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full max-w-xs"
          >
            <Mail className="w-6 h-6" /> Email Me
          </Link>

          <div className="flex gap-8 justify-center">
            <Link
              href="https://github.com/praveenkushinpi"
              target="_blank"
              className="text-gray-500 hover:text-black transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </Link>
            <Link
              href="https://linkedin.com/in/praveenkushinpi"
              target="_blank"
              className="text-gray-500 hover:text-black transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </Link>
            <Link
              href="https://twitter.com/praveenkushinpi"
              target="_blank"
              className="text-gray-500 hover:text-black transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-8 h-8" />
            </Link>
          </div>

          <p className="text-gray-600 font-google-sans-code text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Prefer chatting? I&apos;m always up for coffee & brainstorming sessions.
          </p>
        </div>
      </div>

      <div className="hidden lg:flex relative z-10 w-full items-center justify-between">

        <div className="text-left max-w-xl">
          <h1 className="font-google-sans-code text-7xl xl:text-8xl 2xl:text-[9rem] font-extrabold text-black leading-tight">
           Let&apos;s<br />
            Work <br />
            <span className="text-red-500">Together.</span>
          </h1>

          <p className="mt-6 text-gray-700 text-2xl xl:text-3xl tracking-wide font-google-sans-code">
            Open for collaborations, freelance projects & exciting opportunities.
          </p>
        </div>

        <div className="flex flex-col items-start text-left max-w-sm space-y-6">

          <Link
            href="mailto:praveenkushinpi@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-lg text-lg font-semibold text-white bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Mail className="w-6 h-6" /> Email Me
          </Link>

          <div className="flex gap-6">
            <Link
              href="https://github.com/praveenkushinpi"
              target="_blank"
              className="text-gray-500 hover:text-black transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/praveenkushinpi"
              target="_blank"
              className="text-gray-500 hover:text-black transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://twitter.com/praveenkushinpi"
              target="_blank"
              className="text-gray-500 hover:text-black transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </Link>
          </div>

          <p className="text-gray-600 font-google-sans-code text-lg leading-relaxed">
            Prefer chatting? I&rsposem always up for coffee & brainstorming sessions.
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 text-center text-gray-400 text-xs sm:text-sm w-full px-4">
        © {new Date().getFullYear()} Praveen. All rights reserved.
      </div>
    </section>
  );
}
