import Link from 'next/link';
import Image from 'next/image';
import forest from '@/public/forest.svg';
import umbrella from '@/public/umbrella.svg'
import place from '@/public/Vector 41.svg'
import group from '@/public/Group.svg'
const CategoryIcons: React.FC = () => {
  const options = [
    { id: 1, text: 'جنگلی', img: forest },
    { id: 2, text: 'ساحلی' , img:umbrella},
    { id: 3, text: 'زیارتی' , img: place },
    { id: 4, text: ' بومگردی', img:group },
    { id: 5, text: ' تاریخی' },
    { id: 6, text: ' خارجی' },
    { id: 7, text: ' همه ی تورها' },
  ];
  return (
    <div className=''>
      <div className='flex gap-10 justify-center items-center '>
        {options.map((e) => (
          <div key={e.id}>
            <div >
              <Link href='' className='flex flex-col justify-center items-center border-[1px] border-primary rounded-3xl w-40 h-44 gap-4 text-xl'>
                <Image src={e.img} alt='forest' width={80} height={80}/>
                <span>{e.text}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;
