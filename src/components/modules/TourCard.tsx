'use client';
import Image from 'next/image';
const TourCard = () => {
  const tours = [
    {
      id: 1,
      image: '/images/green-hills.jpg',
      title: 'کمپ جنگل گیسوم',
      duration: 'سه شب',
      campType: ' طبیعت گردی',
      accommodation: 'تورلیدر چوبی',
      startPoint: 'تهران',
      capacity: 'ظرفیت: 15 نفر',
      facilities: 'غذا / تورلیدر / عکاس',
      price: 'هزینه ۱ شب: ۳۵۰,۰۰۰ تومان',
      comments: 12,
      liked: false,
    },
    {
      id: 2,
      image: '/images/desert-road.jpg',
      title: 'کمپ جنگل گیسوم',
      duration: '2 روز و 1 شب',
      campType: 'کمپ ساحلی',
      accommodation: 'چادر مسافرتی',
      startPoint: 'رشت',
      capacity: 'ظرفیت: 20 نفر',
      facilities: 'غذا / تورلیدر / عکاس',
      amenities: 'امکانات: برق / شومینه / مبلمان',
      price: 'هزینه ۱ شب: ۳۵۰,۰۰۰ تومان',
      comments: 8,
      liked: false,
    },
    {
      id: 3,
      image: '/images/lake-forest.jpg',
      title: 'کمپ جنگل گیسوم',
      duration: '4 روز و 3 شب',
      campType: 'کمپ جنگلی',
      accommodation: 'ویلا',
      startPoint: 'اردبیل',
      capacity: 'ظرفیت: 25 نفر',
      facilities: 'غذا / تورلیدر / عکاس',
      amenities: 'امکانات: برق / شومینه / مبلمان',
      price: 'هزینه ۱ شب: ۳۵۰,۰۰۰ تومان',
      comments: 15,
      liked: true,
    },
    {
      id: 4,
      image: '/images/mountain-meadow.jpg',
      title: 'کمپ جنگل گیسوم',
      duration: '3 روز و 2 شب',
      campType: 'کمپ کوهستانی',
      accommodation: 'تورلیدر سنتی',
      startPoint: 'مشهد',
      capacity: 'ظرفیت: 12 نفر',
      facilities: 'غذا / تورلیدر / عکاس',
      amenities: 'امکانات: برق / شومینه / مبلمان',
      price: 'هزینه ۱ شب: ۳۵۰,۰۰۰ تومان',
      comments: 20,
      liked: false,
    },
    {
      id: 5,
      image: '/images/yellow-flowers.jpg',
      title: 'کمپ جنگل گیسوم',
      duration: '2 روز و 1 شب',
      campType: 'کمپ گل گشت',
      accommodation: 'سوئیت',
      startPoint: 'شیراز',
      capacity: 'ظرفیت: 18 نفر',
      facilities: 'غذا / تورلیدر / عکاس',
      amenities: 'امکانات: برق / شومینه / مبلمان',
      price: 'هزینه ۱ شب: ۳۵۰,۰۰۰ تومان',
      comments: 6,
      liked: false,
    },
    {
      id: 6,
      image: '/images/canyon.jpg',
      title: 'کمپ جنگل گیسوم',
      duration: '5 روز و 4 شب',
      campType: 'کمپ دره نوردی',
      accommodation: 'اقامتگاه بومگردی',
      startPoint: 'کرمان',
      capacity: 'ظرفیت: 10 نفر',
      facilities: 'غذا / تورلیدر / عکاس',
      amenities: 'امکانات: برق / شومینه / مبلمان',
      price: 'هزینه ۱ شب: ۳۵۰,۰۰۰ تومان',
      comments: 25,
      liked: false,
    },
    {
      id: 7,
      image: '/images/valley.jpg',
      title: 'کمپ جنگل گیسوم',
      duration: '3 روز و 2 شب',
      campType: 'کمپ روستایی',
      accommodation: 'خانه محلی',
      startPoint: 'تبریز',
      capacity: 'ظرفیت: 16 نفر',
      facilities: 'غذا / تورلیدر / عکاس',
      amenities: 'امکانات: برق / شومینه / مبلمان',
      price: 'هزینه ۱ شب: ۳۵۰,۰۰۰ تومان',
      comments: 18,
      liked: false,
    },
    {
      id: 8,
      image: '/images/red-rocks.jpg',
      title: 'کمپ جنگل گیسوم',
      duration: '4 روز و 3 شب',
      campType: 'کمپ کویری',
      accommodation: 'اقامتگاه سنتی',
      startPoint: 'یزد',
      capacity: 'ظرفیت: 22 نفر',
      facilities: 'غذا / تورلیدر / عکاس',
      amenities: 'امکانات: برق / شومینه / مبلمان',
      price: 'هزینه ۱ شب: ۳۵۰,۰۰۰ تومان',
      comments: 30,
      liked: false,
    },
    {
      id: 9,
      image: '/images/mountain-lake.jpg',
      title: 'کمپ جنگل گیسوم',
      duration: '3 روز و 2 شب',
      campType: 'کمپ دریاچه',
      accommodation: 'تورلیدر ساحلی',
      startPoint: 'انزلی',
      capacity: 'ظرفیت: 14 نفر',
      facilities: 'غذا / تورلیدر / عکاس',
      amenities: 'امکانات: برق / شومینه / مبلمان',
      price: 'هزینه ۱ شب: ۳۵۰,۰۰۰ تومان',
      comments: 22,
      liked: false,
    },
    {
      id: 10,
      image: '/images/desert-dunes.jpg',
      title: 'کمپ جنگل گیسوم',
      duration: '2 روز و 1 شب',
      campType: 'کمپ صحرایی',
      accommodation: 'چادر عشایری',
      startPoint: 'اصفهان',
      capacity: 'ظرفیت: 20 نفر',
      facilities: 'غذا / تورلیدر / عکاس',
      amenities: 'امکانات: برق / شومینه / مبلمان',
      price: 'هزینه ۱ شب: ۳۵۰,۰۰۰ تومان',
      comments: 16,
      liked: true,
    },
  ];

  return (
    <div className='max-w-4xl   mx-auto space-y-6 p-4'>
      {tours.map((tour) => (
        <div
          key={tour.id}
          className='bg-white rounded-xl shadow-md overflow-hidden rtl'
        >
          <div className='flex flex-col  md:flex-row'>
            {/* Image section */}
            <div className='md:w-72 relative'>
              <div className='relative h-full'>
                <Image
                  src={tour.image}
                  alt={tour.title}
                  width={288}
                  height={400}
                  className='h-full w-full object-cover'
                />
                <button className='absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors'>
                  {/* <Heart 
                    className={`w-5 h-5 ${tour.liked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                  /> */}
                </button>
              </div>
            </div>
            <div className='flex'>
              {/* THE RIGHT DIV ON CARD */}
              <div>
                <p>{tour.title}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourCard;
