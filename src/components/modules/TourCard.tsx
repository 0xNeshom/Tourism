'use client';
import { useQuery } from 'react-query';
import Image from 'next/image';
import { getTourData } from '@/utilities/actions/TourDataFetch';
import { toPersianDigits } from '@/utilities/persianNumber/persian';
import Link from 'next/link';
import img1 from '@/public/4dea20f52f20dbce6cff2159ed433d97 (1).jpeg';
import localFont from 'next/font/local';

//The main api is getTourData but it's not completed so i used a fake api
interface TripData {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  image?: string;
}

const TourCard = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['fetching-data'],
    queryFn: getTourData,
  });
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: someThing went wrong</div>;
  }

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div
        className='bg-white rounded-xl shadow-lg overflow-hidden rtl text-base  font-medium
           md:w-[821px] my-8'
      >
        <div className='flex flex-col md:flex-row items-center w-full gap-6'>
          <div className=' relative rounded-md overflow-hidden mr-3 my-3 '>
            <Image src={img1} alt='' className=' ' />
          </div>
          <div className='flex flex-col w-full h-full gap-6'>
            <div className=' '>
              <div className='flex flex-col pt-3 gap-5'>
                <h3>تور کمپ گیسوم</h3>
                <p>3 شب / طبیعت گردی / کمپ / چادر</p>
                <p>امکانات : غذا / تورلیدر / عکاس</p>
                <span>
                  قیمت : ۱۵۰۰۰۰۰
                  <small style={{ fontSize: '0.8em' }}> تومان </small>
                </span>
              </div>

              <div></div>
            </div>
            <div className='ml-5 my-3 justify-end items-end '>
              <div className='w-full bg-primary text-white flex rounded-md'>
                <Link href={`/tourlist/${data.id}`} className='w-full'>
                  <button
                    className='w-full h-[42px] flex items-center justify-center'
                    style={{ height: '42px' }}
                  >
                    مشاهده و رزرو
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data?.map((data: any) => (
        <div
          key={data.id}
          className='bg-white rounded-xl shadow-lg overflow-hidden rtl text-base  
      md:w-[821px] my-8'
        >
          <div className='flex flex-col md:flex-row items-center w-full gap-6'>
            <div className='md:w-[288px] relative rounded-md overflow-hidden mr-3 my-3'>
              <Image
                src={data.image || '/default-image.jpg'}
                alt=''
                width={280}
                height={280}
                className='h-full w-full object-cover'
              />
            </div>
            <div className='flex flex-col w-full h-full gap-6'>
              <div className='p-4'>
                <div className='flex flex-col gap-5'>
                  <h3>{data.tour.city.province.name}</h3>
                  <p>3 شب / طبیعت گردی / کمپ / چادر</p>
                  <p>امکانات : غذا / تورلیدر / عکاس</p>
                  <span>
                    {`قیمت : ${toPersianDigits(Math.round(data.price))} `}
                    <small style={{ fontSize: '0.8em' }}>تومان</small>
                  </span>
                </div>

                <div></div>
              </div>
              <div className='ml-5 my-3'>
                <div className='w-full bg-primary text-white flex rounded-md'>
                  <Link href={`/tourlist/${data.id}`} className='w-full'>
                    <button
                      className='w-full h-[42px] flex items-center justify-center'
                      style={{ height: '42px' }}
                    >
                      مشاهده و رزرو
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourCard;
