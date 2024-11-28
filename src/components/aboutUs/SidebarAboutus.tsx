import Image from 'next/image';
import Link from 'next/link';
import profile from '@/public/ProFile.svg';
import pencil from '@/public/d.svg';
import home from '@/public/Iconly22.svg';
import heart from '@/public/heaart.svg';
import reserves from '@/public/reserves.svg';
import passengers from '@/public/passengers.svg';
import commons from '@/public/commons.svg';
import about from '@/public/12345.svg';
import out from '@/public/out.svg';
const SidebarAboutus: React.FC = () => {
  return (
    <div className=' flex relative  shadow-xl w-[310px] h-[724px]'>
      <div className='w-full flex-col mr-6 mt-7 relative'>
        <div className='flex items-center gap-3 '>
          <Link href=''>
            <Image src={profile} alt='' />
          </Link>
          <div
            className='flex border-[1px] px-5 py-2 rounded-md
           border-primary items-center gap-2   '
          >
            <Image
              src={pencil}
              alt='edit'
              width={20}
              height={20}
              className='block'
            />
            <span className='text-xs'>الهه علی نیا</span>
          </div>
        </div>
        <div className='items flex flex-col text-sm mt-12 gap-8 w-2/3'>
          <Link href='' className='flex gap-2 mr-2'>
            <Image src={home} alt='' />
            <span>صفحه اصلی</span>
          </Link>
          <Link href='' className='flex gap-2 mr-2'>
            <Image src={heart} alt='' />
            <span>علاقه مندی</span>
          </Link>
          <Link href='' className='flex gap-2 mr-2'>
            <Image src={reserves} alt='' />
            <span>رزروهای من</span>
          </Link>
          <Link href='' className='flex gap-2 mr-2'>
            <Image src={passengers} alt='' />
            <span>مسافرهای من</span>
          </Link>
          <Link href='' className='flex gap-2 mr-2'>
            <Image src={commons} alt='' />
            <span>سوالات متداول</span>
          </Link>
          <Link
            href=''
            className='flex gap-2 mr-2 bg-[#E8EDEC4D] rounded-md py-1 border-primary border-l-2'
          >
            <Image src={about} alt='' />
            <span>درباره ما</span>
          </Link>
        </div>
        <Link href='' className='mt-28 flex text-sm gap-2 mr-2'>
          <Image src={out} alt='' />
          <span>خروج از حساب کاربری</span>
        </Link>
      </div>
      <div className='absolute bottom-3 w-full flex justify-center'>
        <span className='text-primary text-xs font-thin'>Version xx-x-x</span>
      </div>
    </div>
  );
};

export default SidebarAboutus;
