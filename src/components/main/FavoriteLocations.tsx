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
    <div>
      <h3 className='md:text-2xl hidden md:block  md:mx-28 md:mb-10' style={{fontWeight:600}}>
        شهر های محبوب رو دیدی ؟
      </h3>
      <div className=' justify-center items-center md:flex  hidden md:mx-14 gap-7  '>
        
        <div className=' flex justify-center items-center gap-7'>
          <div className=' flex flex-col md:gap-8 justify-center items-center'>
            <div className='border-[1px] border-primary md:p-4 xs:p-2 rounded-3xl relative w-full'>
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
    </div>
  );
};

export default FavoriteLocations;