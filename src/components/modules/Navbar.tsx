import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/Logo/Logo.svg';
import Logo1 from '@/public/سفرجو.svg';
import notif from '@/public/Iconly.svg';
import alarm from '@/public/alarm.svg';
import enter from '@/public/enter.svg';
import profile from '@/public/profile.svg';

const Navbar: React.FC = () => {
  return (
    <nav className='w-full px-4 sm:px-8 md:px-16 py-4 md:h-20 flex items-center justify-between'>
      <div className='flex items-center'>
        <ul className='flex gap-2 items-center'>
          <li>
            <Link href='/'>
              <Image
                priority={true}
                width={50}
                height={50}
                src={Logo}
                alt='Logo'
                className='w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px]'
              />
            </Link>
          </li>
          <li>
            <Link href='/'>
              <Image
                priority={true}
                src={Logo1}
                width={50}
                height={50}
                alt='Logo'
                className='w-8 h-8 sm:w-10 sm:h-10 md:w-[65px] md:h-[36px]'
              />
            </Link>
          </li>
        </ul>
        <div className='hidden md:flex md:gap-3 md:text-lg text-nowrap font-medium items-center md:mr-7'>
          <Link href=''>
            <Image
              priority={true}
              src={notif}
              alt='notif'
              className='hover:opacity-80'
            />
          </Link>
          <Link href=''>
            <span className='hover:text-primary'>پیام ها</span>
          </Link>
          <Link href=''>
            <Image
              priority={true}
              src={alarm}
              alt='alarm'
              className='hover:opacity-80'
            />
          </Link>
          <Link href=''>
            <span className='hover:text-primary'>پشتیبانی</span>
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-3 sm:gap-5 md:gap-5'>
        <Link href='' className='hidden md:block'>
          <Image
            priority={true}
            src={profile}
            alt='profile'
            className='hover:opacity-80'
          />
        </Link>
        <Link
          href='./login-register'
          className='text-sm sm:text-base md:text-lg hover:text-primary'
        >
          <span>ورود / ثبت نام</span>
        </Link>
        <Link href='' className='hover:opacity-80'>
          <Image
            priority={true}
            width={32}
            height={32}
            src={enter}
            alt='enter'
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
