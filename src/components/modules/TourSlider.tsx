'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '@/public/Slider/Image-1.svg'
import img2 from '@/public/Slider/Image-2.svg'
import img3 from '@/public/Slider/Image-3.svg'
import img4 from '@/public/Slider/Image-4.svg'
const TourSlider = () => {
  return (
    <div>
      <Swiper
         slidesPerView={3}
         spaceBetween={30}
         dir="rtl"
         autoplay={{ delay: 1500, disableOnInteraction: false }}
         //   rewind={true}
         loop={true}
         navigation={true}
         modules={[Navigation, Autoplay]}
         className="mySwiper articles_slider"
      >
        <SwiperSlide>
          <Image src={img1} alt=''/>
          <h3>عنوان اسلاید</h3>
          <p>توضیحات اسلاید</p>
        </SwiperSlide><SwiperSlide>
          <img src='https://limoo.host/asstes/img/hosts/down02.png' alt='تصویر 1' />
          <h3>عنوان اسلاید</h3>
          <p>توضیحات اسلاید</p>
        </SwiperSlide><SwiperSlide>
          <img src='https://limoo.host/asstes/img/hosts/down02.png' alt='تصویر 1' />
          <h3>عنوان اسلاید</h3>
          <p>توضیحات اسلاید</p>
        </SwiperSlide><SwiperSlide>
          <img src='https://limoo.host/asstes/img/hosts/down02.png' alt='تصویر 1' />
          <h3>عنوان اسلاید</h3>
          <p>توضیحات اسلاید</p>
        </SwiperSlide>

        <SwiperSlide><img src='https://limoo.host/asstes/img/hosts/down02.png' alt='تصویر 1' />
          <h3>عنوان اسلاید</h3>
          <p>توضیحات اسلاید</p></SwiperSlide>
        <SwiperSlide>اسلاید 3<img src='https://limoo.host/asstes/img/hosts/down02.png' alt='تصویر 1' />
          <h3>عنوان اسلاید</h3>
          <p>توضیحات اسلاید</p></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TourSlider;
