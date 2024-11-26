import Link from 'next/link';
import Image from 'next/image';
import forest from '@/public/category/Frame 1.svg';
import umbrella from '@/public/category/Frame 1-1.svg';
import place from '@/public/category/Frame 1-2.svg';
import group from '@/public/category/Frame 1-3.svg';
import map from '@/public/category/Frame 1-4.svg';
import airicon from '@/public/category/Frame 1-5.svg';
import luggage from '@/public/category/Frame 1-6.svg';

const categories = [
  { id: 1, href: './tourlist', img: forest, label: 'جنگلی' },
  { id: 2, href: './tourlist', img: umbrella, label: 'ساحلی' },
  { id: 3, href: './tourlist', img: place, label: 'زیارتی' },
  { id: 4, href: './tourlist', img: group, label: 'بومگردی' },
  { id: 5, href: './tourlist', img: map, label: 'تاریخی' },
  { id: 6, href: './tourlist', img: airicon, label: 'خارجی' },
  { id: 7, href: './tourlist', img: luggage, label: 'همه تورها' },
];

const Category: React.FC = () => {
  return (
    <div className='px-2 justify-center flex'>
      <div className='md:flex  md:items-center  md:justify-center gap-4 mx-auto md:overflow-auto grid  grid-cols-4 justify-center items-center max-sm:grid-cols-2 max-[413px]:grid-cols-1  '>
        {categories.map((category) => (
          <div key={category.id} className='w-full min-w-[160px] mx-auto '>
            <Link
              href={category.href}
              className='flex flex-col justify-center items-center border border-primary rounded-xl mx-auto xs:rounded-3xl
                w-20 h-20 xs:w-20 xs:h-20 md:w-40 md:h-44 
                gap-0.5 xs:gap-1 md:gap-2 md:pb-2'
            >
              <Image
                src={category.img}
                alt={category.label}
                priority={true}
                className='min-w-8  md:w-auto h-auto '
              />
              <span className='text-xs xs:text-xs md:text-xl text-center leading-tight'>
                {category.label}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
