import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { getBanner } from '@/utilities/actions/home/Banner/BannerFetch';

const Banner: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['fetching-banner'],
    queryFn: getBanner,
  });

  if (isLoading) {
    return (
        <div className='w-full flex justify-center h-[155px] mb-5 mx-4  md:h-[505px]'>
          <span className='skeleton w-[90%] md:w-[1296px] md:h-[505px]'></span>
        </div>
      );
  }

  if (isError) {
    return (
      <div className='w-full flex justify-center h-[155px] mb-5 mx-4  md:h-[505px]'>
        <span className='skeleton w-[90%] md:w-[1296px] md:h-[505px]'></span>
      </div>
    );
  };

 
  return (
    <header>
      {data.map((banner: any) => (
        <div
          className='flex justify-center md:max-w-full mb-5 md:mb-0 mx-4 overflow-hidden'
          key={banner.id}
        >
          <Link href=''>
            <Image
              src={banner.image}
              alt={banner.title}
              loading='lazy'
              className='max-w-full rounded-lg'
              width={1296} 
              height={505}
            />
          </Link>
        </div>
      ))}
    </header>
  );
};

export default Banner;
