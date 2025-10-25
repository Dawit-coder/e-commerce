"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function HeroCarousel() {
  const slides = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

  return (
    <div className="w-full h-[90vh] relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 4000 }}
        navigation
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
