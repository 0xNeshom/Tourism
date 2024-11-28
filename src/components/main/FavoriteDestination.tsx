import img1 from '@/public/Image (2).svg';
import img2 from '@/public/Ismage (1).svg';
import img3 from '@/public/image 34.svg';
import img4 from '@/public/image 37.svg';
import Image from 'next/image';
import Link from 'next/link';
import icon1 from "@/public/Iconly12.svg"
const FavoriteDestination = () => {
  const options = [
    {
      id: 1,
      title: 'جنوب گردی',
      description: 'شور و حال جنوب محاله یادت بره',
      img: img1,
    },
    {
      id: 2,
      title: 'شمال گردی',
      description: 'اهوای شمال همیشه میچسبه',
      img: img2,
    },
    {
      id: 3,
      title: 'تهران گردی',
      description: 'تهرانو دست کم نگیر',
      img: img3,
    },
    {
      id: 4,
      title: 'کویر گردی',
      description: 'شبای کویر دیدن داره',
      img: img4,
    },
  ];
  return (
    <div className='bg-Main  flex md:gap-10 justify-center items-center flex-wrap md:mb-20 '>
      {options.map((e) => (
        <div key={e.id} className='md:mt-14 mt-7 md:mb-8 mb-4'>
          <div>
            <Image src={e.img} alt='south' className=' rounded-xl' />
          </div>
          <div className='flex justify-center items-center flex-col md:mt-14 mt-7 gap-2'>
            <h3 className='text-lg font-semibold'>{e.title}</h3>
            <p className='text-base font-extralight'>{e.description}</p>
            <Link href='' className='md:my-4 xs:my-2 flex gap-2 items-center justify-center'>
              <p  className='text-primary'>مشاهده</p>
              <Image src={icon1} alt='enter'/>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoriteDestination;
