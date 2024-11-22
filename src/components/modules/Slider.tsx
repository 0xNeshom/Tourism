'use client';
import React from 'react';
import { toPersianDigits } from '@/utilities/persianNumber/persian';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img from '@/public/SpecialOffers/Vector.svg';
import img1 from '@/public/SpecialOffers/Image-9.svg';
import img2 from '@/public/SpecialOffers/Image-10.svg';
import img3 from '@/public/SpecialOffers/Image-11.svg';
import img4 from '@/public/SpecialOffers/Image-12.svg';
import prev from '@/public/slider-nav/Iconly-1.svg';
import next from '@/public/slider-nav/Iconly.svg';
import origin from '@/public/Slider/Iconly.svg';
import comment from '@/public/Slider/Iconly-1.svg';
import star from '@/public/Slider/Iconly-2.svg';
const Slider = ({ title, linkText, tours, bgColor  }:any) => (
    <div className={`pt-11 pb-24 ${bgColor}`}>
      <div className='flex justify-between mx-28 mb-10'>
        <h2 className='text-2xl' style={{ fontWeight: 600 }}>{title}</h2>
        <Link href=''>
          <span className='text-primary'>{linkText}</span>
        </Link>
      </div>
      <div className='relative'>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={32}
          dir='rtl'
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          }}
          modules={[Navigation, Autoplay]}
          className='mySwiper articles_slider w-[90%]'
        >
          {tours.map((tour:any) => (
            <SwiperSlide key={tour.id} className='p-4'>
              <TourCard tour={tour} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='custom-swiper-button-next absolute top-1/2 left-4 transform -translate-y-1/2 z-10'>
          <button>
            <Image src={next} alt='next' />
          </button>
        </div>
        <div className='custom-swiper-button-prev absolute top-1/2 right-4 transform -translate-y-1/2 z-10'>
          <button>
            <Image src={prev} alt='prev' />
          </button>
        </div>
      </div>
    </div>
  );