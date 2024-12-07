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
  { id: 1, href: './tours', img: forest, label: 'جنگلی' },
  { id: 2, href: './tours', img: umbrella, label: 'ساحلی' },
  { id: 3, href: './tours', img: place, label: 'زیارتی' },
  { id: 4, href: './tours', img: group, label: 'بومگردی' },
  { id: 5, href: './tours', img: map, label: 'تاریخی' },
  { id: 6, href: './tours', img: airicon, label: 'خارجی' },
  { id: 7, href: './tours', img: luggage, label: 'همه تورها' },
];

const Category: React.FC = () => {
  return (
    <div className='px-2 justify-center flex'>
      <div className='flex flex-wrap gap-2 md:gap-7 '>
        {categories.map((category) => (
          <div key={category.id} className='mx-auto '>
            <Link
              href={category.href}
              className='flex flex-col justify-center gap items-center border border-primary rounded-xl mx-auto xs:rounded-3xl
                w-20 h-24 md:w-40 md:h-44 
                md:gap-2 pb-2'
            >
              <Image
                src={category.img}
                alt={category.label}
                priority={true}
                className='  md:w-auto h-auto '
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
