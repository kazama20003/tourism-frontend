"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from 'next/navigation';

interface CustomCursorProps {
  children: React.ReactNode;
  text?: string;
  scrollToId?: string;
  navigateTo?: string;
}

export function CustomCursor({ 
  children, 
  text = "RESERVAR",
  scrollToId,
  navigateTo
}: CustomCursorProps) {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const handleCursorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Only proceed if clicking directly on cursor or text
    if (e.target === cursorRef.current || e.target === textRef.current) {
      if (navigateTo) {
        router.push(navigateTo);
      } else if (scrollToId) {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    (e.currentTarget as HTMLElement).blur();
    e.stopPropagation();
  };

  return (
    <div
      ref={wrapperRef}
      className="relative hide-system-cursor"
      style={{ cursor: 'none' }}
    >
      <div
        ref={cursorRef}
        className="
          fixed top-0 left-0 w-16 h-16 rounded-full
          pointer-events-auto z-[9999]
          mix-blend-difference flex items-center justify-center
          user-select-none
          outline-none focus:outline-none active:outline-none
        "
        style={{ opacity: isHovering ? 1 : 0, cursor: 'none' }}
        onClick={handleCursorClick}
        data-cursor-element="true"
      >
        <div
          ref={textRef}
          className="absolute text-black text-xs font-bold whitespace-nowrap select-none"
          style={{ opacity: 0, cursor: 'none' }}
        >
          {text}
        </div>

        <div className="w-full h-full bg-white rounded-full" />
      </div>

      {children}
    </div>
  );
}
