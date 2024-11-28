import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/header/Head.svg';

const Banner: React.FC = () => {
  return (
    <header>
      <div className='flex justify-center  md:max-w-full  mb-5 md:mb-0  mx-4 overflow-hidden'>
        <Link href=''>
          <Image
            src={banner}
            alt='banner'
            priority={true}
            className='max-w-full rounded-lg'
          />
        </Link>

      </div>
    </header>
  );
};

export default Banner;
