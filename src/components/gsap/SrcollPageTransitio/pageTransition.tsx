"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface FullScrollTransitionProps {
  children: ReactNode[]; // each child = one full page
}

export default function FullScrollTransition({ children }: FullScrollTransitionProps) {
  const totalPages = React.Children.count(children);
  const [activePage, setActivePage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const goToPage = (nextPage: number) => {
    if (isAnimating.current || nextPage === activePage) return;
    isAnimating.current = true;

    const sections = containerRef.current?.querySelectorAll<HTMLElement>(".page");
    if (!sections) return;

    const currentEl = sections[activePage];
    const nextEl = sections[nextPage];

    // Prepare next page (hidden initially)
    gsap.set(nextEl, {
      autoAlpha: 0,
      clipPath: "inset(100% 0 0 0)",
      zIndex: 10,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setActivePage(nextPage);
        isAnimating.current = false;

        // reset zIndex
        gsap.set(sections, { zIndex: 0 });
        gsap.set(nextEl, { zIndex: 5 });
      },
    });

    // Slide current page up
    tl.to(currentEl, {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(currentEl, { autoAlpha: 0 });
      },
    });

    // Reveal next page from bottom **at the same time**
    tl.to(
      nextEl,
      {
        autoAlpha: 1,
        clipPath: "inset(0% 0 0 0)",
        duration: 0.5,
        ease: "power2.inOut",
      },
      0
    );
  };

  // Scroll detection
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current) return;

      if (e.deltaY > 0) {
        const next = activePage + 1 >= totalPages ? 0 : activePage + 1;
        goToPage(next);
      } else if (e.deltaY < 0) {
        const prev = activePage - 1 < 0 ? totalPages - 1 : activePage - 1;
        goToPage(prev);
      }
    };

    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating.current) return;
      const endY = e.changedTouches[0].clientY;
      const diff = startY - endY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          const next = activePage + 1 >= totalPages ? 0 : activePage + 1;
          goToPage(next);
        } else {
          const prev = activePage - 1 < 0 ? totalPages - 1 : activePage - 1;
          goToPage(prev);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activePage, totalPages]);

  return (
    <div ref={containerRef} className="relative w-screen h-screen overflow-hidden">
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          className="page absolute inset-0"
          style={{
            zIndex: i === activePage ? 5 : 0,
            clipPath: i === activePage ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
