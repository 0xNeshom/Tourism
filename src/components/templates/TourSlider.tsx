'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import TourCard from '../modules/TourSwiper';
const TourSlider = () => {
  return (
    <div className='container  my-8 md:mb-20 xs:items-center xs:  '>
      <h1 className='md:mb-16 md:mx-20 md:text-2xl xs:pr-24 xs:pb-10 '>
        تورهای خارج از کشور رو دیدی ؟
      </h1>
      <main className='mx-20'>
        <Swiper
          slidesPerView={2.4}
          spaceBetween={2}
          dir='rtl'
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className='!px-4 sm:!px-0'
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
    </div>
  );
};

export default TourSlider;
