import Image from 'next/image';
import Link from 'next/link';
import search from '@/public/Search.svg';

const CategoryOptions = () => {
  const options = [
    { id: 1, text: 'شهر موردنظر' },
    { id: 2, text: 'تاریخ رفت' },
    { id: 3, text: 'تاریخ برگشت' },
    { id: 4, text: 'شهر موردنظر' },
  ];

  return (
    <div className='md:flex justify-center '>
      <div className='w-[70%] sm:w-[700px] md:w-[808px] py-1 md:h-[80px] flex items-center mx-auto rounded-full bg-[#ffffff] relative text-black bottom-10 shadow-lg'>
        <ul className='flex gap-2 xs:gap-1 md:gap-4 mx-auto'>
          {options.map((e) => (
            <li
              key={e.id}
              className='rounded-full px-2 sm:px-2 xs:px-2 sm:w-36 md:w-40 h-8 md:h-12 border-[1px] border-primary'
            >
              <Link href='' className='flex justify-center items-center h-full'>
                <span className='text-[8px] xs:text-nowrap sm:text-nowrap md:text-sm text-nowrap'>{e.text}</span>
              </Link>
            </li>
          ))}
          <li className='hidden md:block'>
            <Image src={search} alt='search-icon' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryOptions;
