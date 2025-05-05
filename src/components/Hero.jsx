import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
      title: "Pay Bills Effortlessly",
      subtitle: "Manage electricity, gas, water & more from one platform",
      image: "https://i.postimg.cc/hvxZC3cn/download.webp",
    },
    {
      title: "Safe & Secure",
      subtitle: "Your data is protected with bank-grade encryption",
      image: "https://i.postimg.cc/v8fptXhh/Hero2.avif",
    },
    {
      title: "Stay On Track",
      subtitle: "Get reminders before due dates and never miss a payment",
      image: "https://source.unsplash.com/featured/?bills,technology",
    },
  ];

const Hero = () => {
    return (
        <section className="w-full bg-white">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-[400px] md:h-[500px]"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className=" p-6 rounded text-center max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-lg">{slide.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
    );
};

export default Hero;