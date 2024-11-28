'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import {  } from '@/utilities/persianNumber/persian';
import Kish from '@/public/Slider/Image-1.svg';
import Alps from '@/public/Slider/Image-2.svg';
import Turkey from '@/public/Slider/Image-3.svg';
import US from '@/public/Slider/Image-4.svg';
import prev from '@/public/slider-nav/Iconly-1.svg';
import next from '@/public/slider-nav/Iconly.svg';
import origin from '@/public/Slider/Iconly.svg';
import comment from '@/public/Slider/Iconly-1.svg';
import star from '@/public/Slider/Iconly-2.svg';
import Link from 'next/link';
const AbroadTourSlider = () => {
  const tours = [
    {
      id: 1,
      title: 'کشور آمریکا',
      destination: 'کشور: آمریکا',
      price: (4258000) + ' تومان',
      origin: ' تهران',
      rating: (4.41),
      detail: '5 روزه / آبشار نیاگارا و...',
      comments: (136),
      img: US,
    },
    {
      id: 2,
      title: 'کشور ترکیه',
      destination: 'کشور: ترکیه',
      price: (3258000) + ' تومان',
      origin: ' تهران',
      rating: (4.41),
      detail: '3 روزه / ترکیه',
      comments: (136),
      img: Turkey,
    },
    {
      id: 3,
      title: 'جزیره کیش',
      destination: 'کشور: ایران',
      price: (1350000) + ' تومان',
      origin: ' تهران',
      rating: (4.0),
      detail: '۳ روزه / سواحل کیش   ',
      comments: (90),
      img: Kish,
    },
    {
      id: 4,
      title: 'کوه‌های آلپ',
      destination: 'کشور: سوئیس',
      price: (5700000) + ' تومان',
      origin: ' تهران',
      rating: (4.8),
      detail: '۶ روزه / کوهنوردی و چشم‌اندازهای طبیعی',
      comments: (210),
      img: Alps,
    },
  ];

  return (
    <>
      <div className='flex justify-between md:mx-28 mx-10 my-10 mb-10'>
        <h2 className='md:text-2xl text-base' style={{fontWeight:600}}>تورهای خارج از کشور رو دیدی ؟</h2>
        <Link href={""}> <span className='text-primary'>مشاهده بیشتر</span> </Link>
      </div>
      <div className='relative md:mb-48 mb-24'>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={32}
          dir='rtl'
          autoplay={{ delay: 1500,
          disableOnInteraction: false }}
          loop={true}
          navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          }}
          modules={[Navigation]}
          className='mySwiper articles_slider w-[90%]'
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
            <SwiperSlide key={tour.id} className='p-4'>
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <Image
                  src={tour.img}
                  alt={tour.title}
                  className='rounded-lg w-full  object-cover'
                />
                <div
                  className='p-4 flex justify-between mt-8 text-base'
                  style={{ fontWeight: 600 }}
                >
                  <div
                    className='gap-3 flex-col flex '
                    style={{ fontWeight: 600 }}
                  >
                    <p className=''>مقصد: {tour.title}</p>
                    <p className=''>قیمت:{tour.price}</p>
                    <p className=''>{tour.detail}</p>
                  </div>
                  <div className='gap-3 flex-col flex relative'>
                    <div className='flex'>
                      <span>مبدا:{tour.origin}</span>
                      <Image src={origin} alt='origin' loading='lazy'/>
                    </div>
                    <div className='flex justify-between ml-1'>
                      <span>{tour.comments}</span>
                      <Image src={comment} alt='origin' loading='lazy' />
                    </div>
                    <div className='flex justify-between ml-1'>
                      <span>{tour.rating}</span>
                      <Image src={star} alt='origin' loading='lazy'/>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='custom-swiper-button-next absolute top-1/2 left-4 transform -translate-y-1/2 z-10'>
          <button>
            <Image src={next} alt='next' loading='lazy'/>
          </button>
        </div>
        <div className='custom-swiper-button-prev absolute top-1/2 right-4 transform -translate-y-1/2 z-10'>
          <button>
            <Image src={prev} alt='prev' loading='lazy'/>
          </button>
        </div>
      </div>
    </>
  );
};

export default AbroadTourSlider;
