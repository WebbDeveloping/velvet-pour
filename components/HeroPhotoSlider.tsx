"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { brandColors } from "@/app/theme";
import { ChevronLeft, ChevronRight } from "@/lib/icons";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    alt: "Cocktail being poured into a glass",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
    alt: "Assorted cocktails on a bar",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    alt: "Dimly lit cocktail bar interior",
  },
  {
    src: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant wedding reception bar setup",
  },
  {
    src: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=1200&q=80",
    alt: "Champagne glasses at a celebration",
  },
] as const;

const AUTOPLAY_MS = 3800;

function slideNextWrapped(swiper: SwiperType) {
  if (swiper.isEnd) {
    swiper.slideTo(0);
  } else {
    swiper.slideNext();
  }
}

function slidePrevWrapped(swiper: SwiperType) {
  if (swiper.isBeginning) {
    swiper.slideTo(swiper.slides.length - 1);
  } else {
    swiper.slidePrev();
  }
}

export default function HeroPhotoSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const pausedRef = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      const swiper = swiperRef.current;
      if (!swiper || pausedRef.current) return;
      slideNextWrapped(swiper);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onEnter = () => {
      pausedRef.current = true;
    };
    const onLeave = () => {
      pausedRef.current = false;
    };

    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);
    root.addEventListener("focusin", onEnter);
    root.addEventListener("focusout", onLeave);

    return () => {
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
      root.removeEventListener("focusin", onEnter);
      root.removeEventListener("focusout", onLeave);
    };
  }, []);

  return (
    <Box
      ref={rootRef}
      className="hero-photo-slider"
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 420, md: 440 },
        mx: "auto",
      }}
    >
      <Box sx={{ width: "100%", px: { xs: "5%", sm: "4%", md: 0 } }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 400, sm: 460, md: 520 },
            mb: { xs: 2, md: 2.5 },
          }}
        >
          <Swiper
            modules={[EffectCards, Navigation]}
            effect="cards"
            grabCursor
            loop={false}
            cardsEffect={{
              perSlideOffset: 8,
              perSlideRotate: 2.5,
              slideShadows: true,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
              const nav = swiper.params.navigation;
              if (nav && typeof nav !== "boolean") {
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
              }
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (
                prevRef.current &&
                nextRef.current &&
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            className="hero-swiper"
          >
            {SLIDES.map((slide, index) => (
              <SwiperSlide key={slide.src} className="hero-swiper-slide">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={880}
                  height={1100}
                  sizes="(max-width: 600px) 90vw, (max-width: 900px) 420px, 440px"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1.5,
          mt: { xs: 0.5, md: 0 },
        }}
      >
        <IconButton
          ref={prevRef}
          aria-label="Previous photo"
          onClick={() => {
            const swiper = swiperRef.current;
            if (swiper) slidePrevWrapped(swiper);
          }}
          sx={{
            width: 44,
            height: 44,
            borderRadius: "2px",
            border: `1px solid ${brandColors.gold}`,
            color: brandColors.ivory,
            backgroundColor: "rgba(13, 12, 12, 0.55)",
            "&:hover": {
              backgroundColor: "rgba(198, 161, 91, 0.12)",
              borderColor: brandColors.gold,
            },
          }}
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </IconButton>
        <IconButton
          ref={nextRef}
          aria-label="Next photo"
          onClick={() => {
            const swiper = swiperRef.current;
            if (swiper) slideNextWrapped(swiper);
          }}
          sx={{
            width: 44,
            height: 44,
            borderRadius: "2px",
            border: `1px solid ${brandColors.gold}`,
            color: brandColors.ivory,
            backgroundColor: "rgba(13, 12, 12, 0.55)",
            "&:hover": {
              backgroundColor: "rgba(198, 161, 91, 0.12)",
              borderColor: brandColors.gold,
            },
          }}
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </IconButton>
      </Box>
    </Box>
  );
}
