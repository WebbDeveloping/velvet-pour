"use client";

import { useRef } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
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

export default function HeroPhotoSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Box
      className="hero-photo-slider"
      sx={{
        width: "100%",
        maxWidth: { xs: 320, sm: 380, md: 440 },
        mx: "auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 400, sm: 460, md: 520 },
          mb: 2.5,
        }}
      >
        <Swiper
          modules={[EffectCards, Navigation, Autoplay]}
          effect="cards"
          grabCursor
          loop={false}
          rewind
          autoplay={{
            delay: 3800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          cardsEffect={{
            perSlideOffset: 10,
            perSlideRotate: 3,
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
                sizes="(max-width: 600px) 320px, (max-width: 900px) 380px, 440px"
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1.5,
        }}
      >
        <IconButton
          ref={prevRef}
          aria-label="Previous photo"
          onClick={() => swiperRef.current?.slidePrev()}
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
          onClick={() => swiperRef.current?.slideNext()}
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
