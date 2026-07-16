"use client";

import { useEffect, useRef, type RefObject } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { brandColors } from "@/app/theme";

export const ORBIT_IMAGES = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80",
] as const;

const ORBIT_SLOTS = Array.from({ length: 16 }, (_, i) => ({
  angle: i * 12,
  image: ORBIT_IMAGES[i % ORBIT_IMAGES.length],
}));

const ROTATE_START = -61;
const ROTATE_END = -150;

type PhotoOrbitRingProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

/**
 * Scroll-driven circular photo ring (Webflow IX2 recreate).
 * Parent section should be position:relative; overflow:hidden with enough top padding for the arc.
 */
export default function PhotoOrbitRing({ sectionRef }: PhotoOrbitRingProps) {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ring = ringRef.current;
    if (!section || !ring) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      ring.style.transform = `rotateZ(${ROTATE_START}deg)`;
      return;
    }

    let rafId = 0;

    const update = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const total = rect.height + viewH;
      const progress = Math.min(
        1,
        Math.max(0, (viewH - rect.top) / total),
      );
      const deg = ROTATE_START + (ROTATE_END - ROTATE_START) * progress;
      ring.style.transform = `rotateZ(${deg}deg)`;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [sectionRef]);

  return (
    <Box
      ref={ringRef}
      aria-hidden
      sx={{
        position: "absolute",
        zIndex: 0,
        left: 0,
        top: 0,
        width: "100%",
        height: { xs: 2000, sm: 2400, md: 2800 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        willChange: "transform",
        transform: `rotateZ(${ROTATE_START}deg)`,
        transformStyle: "preserve-3d",
        pointerEvents: "none",
      }}
    >
      {ORBIT_SLOTS.map((slot) => (
        <Box
          key={slot.angle}
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            transform: `rotate(${slot.angle}deg)`,
          }}
        >
          <Box
            sx={{
              width: { xs: 88, md: 120 },
              height: { xs: 118, md: 160 },
              p: "5px 5px 14px",
              backgroundColor: brandColors.ivory,
              boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Image
                src={slot.image}
                alt=""
                fill
                sizes="120px"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
