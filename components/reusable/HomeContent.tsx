"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PlayPauseBtn from "../profilePage/PlayPauseBtn";

interface Item {
  name: string;
  image: string;
}

interface HomeProps {
  title: string;
  pl: number;
  data: Item[];
}

const HomeContent: React.FC<HomeProps> = ({ title, data, pl }) => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<any>(null);


  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="flex flex-col relative group">
      <h1 className="text-lg font-bold">{title}</h1>
      <Swiper
        spaceBetween={0}
        loop
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 3 },
          480: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1380: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div key={index} className="cursor-pointer flex flex-col gap-2 hover:bg-gray-800 p-3 rounded-md transition-colors duration-300">
              <div className="relative aspect-square group/card rounded-md overflow-hidden">
              <Image src={item.image} alt={item.name} fill className="object-cover"/>
              <PlayPauseBtn/>
            </div>
              <p
                className="text-xs font-md text-muted-foreground"
                style={{ paddingLeft: pl }}
              >
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div
        ref={prevRef}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-streamr/80 p-2 rounded-full cursor-pointer shadow-md hover:scale-110 z-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300"
      >
        <FaChevronLeft className="text-black" />
      </div>
      <div
        ref={nextRef}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-streamr/80 p-2 rounded-full cursor-pointer shadow-md hover:scale-110 z-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300"
      >
        <FaChevronRight className="text-black" />
      </div>
    </div>
  );
};

export default HomeContent;


