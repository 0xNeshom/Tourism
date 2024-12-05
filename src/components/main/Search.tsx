import Image from 'next/image';
import Link from 'next/link';
import search from '@/public/Search.svg';
import { useQuery } from 'react-query';
import { getCategory } from '@/utilities/actions/home/category/getCategory';
const Search = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['search-options'],
    queryFn: getCategory,
  });

  if (isLoading) {
    return (
      <div className='skeleton w-[75%]  md:w-[808px] py-1 md:h-[80px] flex items-center mx-auto rounded-full bg-[#ffffff] relative text-black bottom-10 shadow-lg'>
      </div>
    );
  }
  return (
    <div className='md:flex justify-center '>
      <div className='w-[75%]  md:w-[808px] py-1 md:h-[80px] flex items-center mx-auto rounded-full bg-[#ffffff] relative text-black bottom-10 shadow-lg'>
        <ul className='flex gap-2 xs:gap-1 md:gap-4 mx-auto'>
          {data.map((e: any) => (
            <li
              key={e.id}
              className='rounded-full px-1 sm:w-36 md:w-40 h-8 md:h-12 border-[1px] border-primary'
            >
              <Link
                href={`/category/${e.id}`}
                className='flex justify-center items-center h-full'
              >
                <span className='text-xs xs:text-nowrap sm:text-nowrap md:text-sm text-nowrap'>
                  {e.title}
                </span>
              </Link>
            </li>
          ))}
          <li className='hidden md:block'>
            <Image src={search} alt='search-icon' priority={true} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
