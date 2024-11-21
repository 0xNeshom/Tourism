import Link from 'next/link';
import Image from 'next/image';
import forest from '@/public/forest.svg';
import umbrella from '@/public/umbrella.svg';
import place from '@/public/Vector 41.svg';
import group from '@/public/Group.svg';
import map from '@/public/map.svg';
import airicon from '@/public/Air Icon 1.svg';
import luggage from '@/public/luggage.svg';

const categories = [
  { id: 1, href: './tourlist', img: forest, label: 'جنگلی', width: 100, height: 100 },
  { id: 2, href: './tourlist', img: umbrella, label: 'ساحلی', width: 96, height: 96 },
  { id: 3, href: './tourlist', img: place, label: 'زیارتی', width: 80, height: 80 },
  { id: 4, href: './tourlist', img: group, label: 'بومگردی', width: 96, height: 96 },
  { id: 5, href: './tourlist', img: map, label: 'تاریخی', width: 72, height: 72 },
  { id: 6, href: './tourlist', img: airicon, label: 'خارجی', width: 80, height: 80 },
  { id: 7, href: './tourlist', img: luggage, label: 'همه تورها', width: 72, height: 72 },
];

const Category: React.FC = () => {
  return (
    <div className='px-2 justify-center flex'>
      <div className='grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-1 xs:gap-3 md:gap-10 justify-items-center justify-center md:mx-10 mx-auto '>
        {categories.map((category) => (
          <div key={category.id} className="w-full ">
            <Link 
              href={category.href} 
              className='flex flex-col justify-center items-center border border-primary rounded-xl xs:rounded-3xl
                w-20 h-20 xs:w-20 xs:h-20 md:w-40 md:h-44 
                gap-0.5 xs:gap-1 md:gap-2 md:pb-2'
            >
              <Image 
                src={category.img} 
                alt={category.label} 
                width={category.width} 
                height={category.height} 
                priority={true}
                className='w-8 xs:w-8 md:w-auto h-auto ' 
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
