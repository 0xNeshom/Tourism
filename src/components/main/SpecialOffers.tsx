'use client';
import React from 'react';
import { toPersianDigits } from '@/utilities/persianNumber/persian';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

import img from '@/public/SpecialOffers/Vector.svg';
import img1 from '@/public/SpecialOffers/Image-9.svg';
import img2 from '@/public/SpecialOffers/Image-10.svg';
import img4 from '@/public/SpecialOffers/Image-12.svg';
import prev from '@/public/slider-nav/Iconly-1.svg';
import next from '@/public/slider-nav/Iconly.svg';
import origin from '@/public/Slider/Iconly.svg';
import comment from '@/public/Slider/Iconly-1.svg';
import star from '@/public/Slider/Iconly-2.svg';

const SpecialOffers = () => {
  const tours = [
    {
      id: 1,
      title: 'کشور آمریکا',
      price: `${toPersianDigits(4258000)} تومان`,
      origin: 'تهران',
      rating: toPersianDigits(4.41),
      detail: '۵ روزه / آبشار نیاگارا و...',
      comments: toPersianDigits(136),
      img: img,
    },
    {
      id: 2,
      title: 'کشور ترکیه',
      price: `${toPersianDigits(3258000)} تومان`,
      origin: 'تهران',
      rating: toPersianDigits(4.41),
      detail: '۳ روزه / ترکیه',
      comments: toPersianDigits(136),
      img: img1,
    },
    {
      id: 3,
      title: 'جزیره کیش',
      price: `${toPersianDigits(1350000)} تومان`,
      origin: 'تهران',
      rating: toPersianDigits(4.0),
      detail: '۳ روزه / سواحل کیش   ',
      comments: toPersianDigits(90),
      img: img2,
    },
    {
      id: 4,
      title: 'کوه‌های آلپ',
      price: `${toPersianDigits(5700000)} تومان`,
      origin: 'تهران',
      rating: toPersianDigits(4.8),
      detail: '۶ روزه / کوهنوردی و ... ',
      comments: toPersianDigits(210),
      img: img4,
    },
  ];

  return (
    <div className='bg-[#E8F8F5] pt-11 pb-24 mt-24 suppressHydrationWarning'>
      <div className='flex justify-between md:mx-28 mx-10 mb-10'>
        <h2 className='text-base md:text-2xl font-semibold'>تخفیف‌های ویژه</h2>
        <Link href={''}>
          <span className='text-primary'>مشاهده بیشتر</span>
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
          className='md:w-[90%] '
          breakpoints={{
            0: {
              spaceBetween: 0, 
              slidesPerView: 1.2
            },
            768: {
              spaceBetween: 32, 
              slidesPerView: 2.5, 
            },
          }}
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.id} className='md:p-4 p-3'>
              <div className='bg-white rounded-lg shadow-md'>
                <Image
                  src={tour.img}
                  alt={tour.title}
                  className='rounded-lg w-full object-cover'
                />
                <div className='p-4 flex justify-between mt-8 text-base font-semibold'>
                  <div className='gap-3 flex-col flex'>
                    <p>مقصد: {tour.title}</p>
                    <p>قیمت: {tour.price}</p>
                    <p>{tour.detail}</p>
                  </div>
                  <div className='gap-3 flex-col flex relative'>
                    <div className='flex justify-between'>
                      <span>مبدا: {tour.origin}</span>
                      <Image src={origin} alt='origin' loading='lazy' />
                    </div>
                    <div className='flex ml-1 justify-between'>
                      <span>{tour.comments}</span>
                      <Image src={comment} alt='comments' loading='lazy' />
                    </div>
                    <div className='flex ml-1 justify-between'>
                      <span>{tour.rating}</span>
                      <Image src={star} alt='rating' loading='lazy' />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className='custom-swiper-button-next absolute top-1/2 left-4 transform -translate-y-1/2 z-10'>
          <Image src={next} alt='next' loading='lazy' />
        </button>
        <button className='custom-swiper-button-prev absolute top-1/2 right-4 transform -translate-y-1/2 z-10'>
          <Image src={prev} alt='prev' loading='lazy' />
        </button>
      </div>
    </div>
  );
};

export default SpecialOffers;
