import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/image 36.svg';
import search from '@/public/Search.svg';

const options = [
  { id: 1, text: 'شهر موردنظر' },
  { id: 2, text: 'تاریخ رفت' },
  { id: 3, text: 'تاریخ برگشت' },
  { id: 4, text: 'شهر موردنظر' }
];

const Banner: React.FC = () => {
  return (
    <div className='w-full '>
      <header>
        <div className='flex justify-center'>
          <div>
            <div className='bg-white text-[#3C005A] rounded-lg absolute top-1/3 right-28 font-semibold w-[520px] h-[68px] text-3xl flex items-center justify-center'>
              <span>سفرجو دری به سوی رویایی ترین خاطرات</span>
            </div>
            <Link href=''>
              <Image src={banner} alt='banner' />
            </Link>
            <div className='w-[808px] h-[80px] flex items-center mx-auto rounded-full bg-[#ffffff] relative text-black bottom-10 shadow-lg'>
              <ul className='flex gap-4 mx-auto'>
                {options.map(e => (
                  <li
                    key={e.id}
                    className='rounded-full w-40 h-12 border-[1px] border-primary'
                  >
                    <Link href='' className='flex justify-center items-center h-full'>
                      <span>{e.text}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Image src={search} alt='search-icon' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
