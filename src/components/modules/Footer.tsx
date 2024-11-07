import direct from '@/public/Iconlyf.svg';
import Image from 'next/image';
import phone from '@/public/Iconlyt.svg';
import linkedin from '@/public/LinkedIn.svg';
import youtube from '@/public/YouTube.svg';
import twiter from '@/public/Twitter.svg';
import instagram from '@/public/Instagram.svg';
import SVG from '@/public/SVG.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#F8F8F8] w-full relative h-full'>
      <div className='bg-[#F8F8F8] py-12 px-8 flex md:gap-72 md:mt-32'>
        <div className='md:mr-12 md:grid hidden sm:grid-cols-2 md:grid-cols-3 md:gap-24 text-center'>
          {/* Column 1: مقاصد پر تکرار */}
          <div>
            <h3 className='font-medium text-lg md:mb-9'>مقصد های پر تکرار</h3>
            <ul className='space-y-6 text-base font-normal '>
              <li>تورها‌ی شمال</li>
              <li>تورها‌ی خارجی</li>
              <li>تورهای کویر</li>
            </ul>
          </div>

          {/* Column 2: خدمات مشتریان */}
          <div>
            <h3 className='font-medium text-lg md:mb-9'>خدمات مشتریان</h3>
            <ul className='space-y-6 text-base font-normal'>
              <li>سوالات متداول</li>
              <li>مرکز پشتیبانی</li>
              <li>درباره ما</li>
            </ul>
          </div>

          {/* Column 3: ارتباط با ما */}
          <div className='flex flex-col items-center'>
            <h3 className='font-medium text-lg md:mb-9'>ارتباط با ما</h3>
            <ul className='space-y-6 text-base font-normal text-left'>
              <li className='flex items-center'>
                <span>Safarjoo403@gmail.com</span>
                <Image src={direct} alt='direct' />
              </li>
              <li className='flex items-center'>
                <span>(۰۲۱) ۴۶۸ - ۶۸۸۸۸</span>
                <Image src={phone} alt='phone' />
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='text-center md:ml-24 flex flex-col gap-10 '>
          <p className='text-lg mb-4 sm:text-nowrap'>ما را در شبکه های اجتماعی دنبال کنید :</p>
          <div className='flex justify-center text-primary gap-12 text-2xl'>
            {/* Icons */}
            <Link href=''>
              <Image src={linkedin} alt='' />
            </Link>
            <Link href=''>
              <Image src={youtube} alt='' />
            </Link>
            <Link href=''>
              <Image src={twiter} alt='' />
            </Link>
            <Link href=''>
              <Image src={instagram} alt='' />
            </Link>
          </div>
          <p className='mt-4 text-nowrap'>
            تهران · خیابان نلسون ماندلا ساختمان اداری سفرجو · پلاک ۱۲
          </p>
          <p className='text-transparent hidden xs:bloc bg-clip-text bg-gradient-to-r from-[#7B4794] to-[#01A657] mr-10'>
            کلیه حقوق این سرویس (وب‌سایت) محفوظ و متعلق به شرکت سفرهای سفرجو
            می‌باشد.
          </p>
        </div>
      </div>

      {/* SVG Wrapper for Background Color */}
      <div className='flex w-full'>
        <div className='flex flex-col  -bottom-40 w-1/2 absolute xs:z-20    '>
          <p className='text-transparent  bg-clip-text bg-gradient-to-r from-[#7B4794] to-[#01A657] mr-10 hidden md:block'>
            کلیه حقوق این سرویس (وب‌سایت) محفوظ و متعلق به شرکت سفرهای سفرجو
            می‌باشد.
          </p>
        </div>
        <div className='md:absolute md:right-0 md:flex md:justify-end top-36 bg-[#F8F8F8] hidden w-full -z-10'>
          <Image src={SVG} alt='footer' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
