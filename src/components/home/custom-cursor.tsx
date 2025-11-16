"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface CustomCursorProps {
  children: React.ReactNode;
  scrollToId?: string;
}

export function CustomCursor({ children, scrollToId = "reservar" }: CustomCursorProps) {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const wrapper = wrapperRef.current;
    if (!cursor || !wrapper) return;

    let animationFrameId: number;

    const moveCursor = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();

        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          gsap.to(cursor, {
            x: e.clientX - 32,
            y: e.clientY - 32,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });
    };

    const enterArea = () => setIsHovering(true);
    const leaveArea = () => setIsHovering(false);

    wrapper.addEventListener("mousemove", moveCursor);
    wrapper.addEventListener("mouseenter", enterArea);
    wrapper.addEventListener("mouseleave", leaveArea);

    return () => {
      wrapper.removeEventListener("mousemove", moveCursor);
      wrapper.removeEventListener("mouseenter", enterArea);
      wrapper.removeEventListener("mouseleave", leaveArea);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current || !textRef.current) return;

    gsap.to(cursorRef.current, {
      scale: isHovering ? 1.2 : 1,
      duration: 0.2,
      ease: "power2.out",
    });

    gsap.to(textRef.current, {
      opacity: isHovering ? 1 : 0,
      duration: 0.1,
      ease: "none",
    });
  }, [isHovering]);

  const handleCursorClick = () => {
    const element = document.getElementById(scrollToId);
    console.log("[v0] Buscando elemento con id:", scrollToId);
    console.log("[v0] Elemento encontrado:", element);
    if (element) {
      console.log("[v0] Scrolleando a:", scrollToId);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("[v0] No se encontró elemento con id:", scrollToId);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative hide-system-cursor"
      onClick={handleCursorClick}
    >
      <div
        ref={cursorRef}
        className="
          fixed top-0 left-0 w-16 h-16 rounded-full
          pointer-events-none z-[9999]
          mix-blend-difference flex items-center justify-center
        "
        style={{ opacity: isHovering ? 1 : 0 }}
      >
        <div
          ref={textRef}
          className="absolute text-black text-xs font-bold whitespace-nowrap"
          style={{ opacity: 0 }}
        >
          RESERVAR
        </div>

        <div className="w-full h-full bg-white rounded-full" />
      </div>

      {children}
    </div>
  );
}
