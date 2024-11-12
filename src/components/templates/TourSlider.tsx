'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import TourCard from '../modules/TourSwiper';
import Link from 'next/link';
import next from "@/public/next.svg"
import Image from 'next/image';
const TourSlider = () => {
  return (
    <div className="container md:w-full my-8 md:mb-20 xs:items-center relative">
      <h1 className="md:mb-16 md:text-2xl xs:pr-24 xs:pb-10">
        تورهای خارج از کشور رو دیدی ؟
      </h1>
      <main className="mx-20">
        <Swiper
          slidesPerView={2.4}
          spaceBetween={2}
          dir="rtl"
          loop={true}
          navigation={{
            nextEl: '.custom-next', 
            prevEl: '.custom-prev', 
          }}
          modules={[Navigation, Autoplay]}
          className="!px-4 sm:!px-0"
        >
          <SwiperSlide>
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            <TourCard />
          </SwiperSlide>
        </Swiper>
      </main>
      <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer ">
      
      </button>
      <button className="custom-prev absolute left-0 top-1/2 p-2  cursor-pointer ">
      <Image src={next} alt=''/>
      </button>
      <div>
        
      </div>
    </div>
  );
};

export default TourSlider;