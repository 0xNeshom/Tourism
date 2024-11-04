import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/Logo.svg';
import Logo1 from '@/public/سفرجو.svg';
import notif from '@/public/Iconly.svg';
import alarm from '@/public/alarm.svg';
import enter from '@/public/enter.svg';
import profile from '@/public/profile.svg'
const Navbar : React.FC =()=> {
  return (
    <>
      <nav className='h-[80px] mx-12 my-4 flex items-center justify-between'>
        <div className='flex gap-7 items-center '>
          <ul className='flex gap-2 items-center '>
            <li>
              <Link href=''>
                <Image width={50} height={50} src={Logo} alt='Logo' />
              </Link>
            </li>
            <li>
              <Link href=''>
                <Image src={Logo1} alt='Logo' />
              </Link>
            </li>
          </ul>
          <div className='flex w-20 text-lg font-medium justify-between items-center'>
            <Link href=''>
              <Image src={notif} alt='notif' />
            </Link>
            <Link href=''>
              <span>پیام ها</span>
            </Link>
          </div>
          <div className='flex w-24 text-lg font-medium justify-between items-center '>
            <Link href=''>
              <Image src={alarm} alt='alarm' />
            </Link>
            <Link href=''>
              <span className='text-lg'>پشتیبانی</span>
            </Link>
          </div>
        </div>
        <div className='flex gap-7 items-center'>
          <Link href=''>
            <Image src={profile} alt='profile'/>
          </Link>
          <div className='flex items-center text-lg'>
            <span>ورود /ثبت نام</span>
          </div>
          <div className='flex items-center'>
            <Link href=''>
              <Image src={enter} alt='enter'/>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
