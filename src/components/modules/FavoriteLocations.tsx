import Image from 'next/image';
import Link from 'next/link';
import isfahan from '@/public/isfahan1.svg';
import rasht from '@/public/picture1.svg';
import japan from '@/public/japan.svg';
import paris from '@/public/Paris.svg';
const FavoriteLocations = () => {
  const options = [
    { id: 1, details: 2, text: 'رشت' },
    { id: 2, details: 2, text: 'اصفهان' },
    { id: 3, details: 2, text: 'اصفهان' },
    { id: 4, details: 2, text: 'ژاپن' },
  ];
  return (
    <>
      <div className=' justify-center items-center md:mt-20 hidden md:block'>
        <h3 className='text-2xl font-semibold md:mr-28 md:mb-10  '>
          شهر های محبوب رو دیدی ؟
        </h3>
        <div className='md:mx-12 flex justify-center items-center'>
          <div className='md:w-2/3 flex flex-col md:gap-9 justify-center items-center'>
            <div className='border-[1px] border-primary md:p-4 xs:p-2 rounded-3xl relative'>
              <Link href=''>
                <Image src={rasht} alt='rasht' />
              </Link>
              <div className='flex flex-col gap-2 absolute right-12 top-9 text-white '>
                <span className='text-xl font-bold'>رشت</span>
                <span className='text-sm font-normal'>2 تور فعال</span>
              </div>
            </div>

            <div className='flex gap-7'>
              <div className='border-[1px] border-primary md:p-4 xs:p-2 rounded-3xl relative'>
                <Link href=''>
                  <Image src={isfahan} alt='isfahan' />
                </Link>
                <div className='flex flex-col gap-2 absolute right-12 top-9 text-white '>
                  <span className='text-xl font-bold'>اصفهان</span>
                  <span className='text-sm font-normal'>2 تور فعال</span>
                </div>
              </div>
              <div className='border-[1px] border-primary md:p-4 xs:p-2 rounded-3xl relative'>
                <Link href=''>
                  <Image src={japan} alt='japan' />
                </Link>
                <div className='flex flex-col gap-2 absolute right-12 top-9 text-white '>
                  <span className='text-xl font-bold'>ژاپن</span>
                  <span className='text-sm font-normal'>2 تور فعال</span>
                </div>
              </div>
            </div>
          </div>
          <div className='border-[1px] border-primary md:p-4 xs:p-2 rounded-3xl relative'>
            <Link href=''>
              <Image src={paris} alt='paris' />
            </Link>
            <div className='flex flex-col gap-2 absolute right-12 top-9 text-white '>
                  <span className='text-xl font-bold'>پاریس</span>
                  <span className='text-sm font-normal'>2 تور فعال</span>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteLocations;
