import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/image 36.svg';

const Banner: React.FC = () => {
  return (
    <header>
      <div className='flex justify-center relative md:max-w-full sm:max-w-96 mb-3 mx-4 overflow-hidden'>
        <Link href=''>
          <Image
            src={banner}
            alt='banner'
            priority={true}
            className='max-w-full rounded-lg'
          />
        </Link>
        <div className='absolute xs:top-10 sm:top-20 xs:right-0 sm:right-24 w-auto h-1/3 items-center md:flex hidden'>
          <div
            className='bg-white text-[#3C005A] rounded-l-lg 
            xs:px-2 sm:px-4 
            xs:py-2 sm:py-3 
            xs:text-sm sm:text-lg md:text-2xl 
            font-semibold'
          >
            <span>سفرجو دری به سوی رویایی ترین خاطرات</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
