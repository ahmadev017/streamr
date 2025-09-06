"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import { GiPauseButton } from "react-icons/gi";

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
  const [isPlay , setIsPlay] =useState(true)


  return (
    <div className="flex flex-col relative group">
      {" "}
      {/* group for swiper nav */}
      <h1 className="text-lg font-bold">{title}</h1>
      <Swiper
        spaceBetween={0}
        loop
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          320: { slidesPerView: 3 },
          480: { slidesPerView: 4 },
          //768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          //1280: { slidesPerView: 5 },
        }}
        className="w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="cursor-pointer flex flex-col gap-2 hover:bg-gray-800 p-3 rounded-md transition-colors duration-300">
              {/* Card wrapper handles hover bg */}
              <div className="relative w-full aspect-square group/card rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                {/* Play Button - only for hovered card */}
                <div className="absolute text-black bottom-3 right-2 rounded-full p-2 hover:bg-streamr/80 bg-streamr flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 cursor-pointer">
                  {
                            isPlay?
                            <button onClick={()=>setIsPlay(false)} className="cursor-pointer">
                            <IoPlay size={25} />
                          </button> :
                          <button onClick={()=>setIsPlay(true)} className="cursor-pointer">
                            <GiPauseButton size={25}/>
                          </button>
                          }
                </div>
              </div>

              <p className="text-xs font-md text-muted-foreground" style={{ paddingLeft: pl }}>
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Nav Buttons - show when whole swiper is hovered */}
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
