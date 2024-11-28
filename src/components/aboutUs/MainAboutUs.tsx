import Image from 'next/image';
import title from '@/public/Title.svg';
import About from '@/public/About us.svg';
import img1 from '@/public/Illastration.svg';
import img2 from '@/public/Illastration (1).svg';
import img3 from '@/public/Illastration (2).svg';
import img4 from '@/public/Illastration (3).svg';
const MainAboutUs = () => {
  return (
    <div className='flex justify-center md:mt-10 w-[1000px]'>
      <div className=' shadow-xl flex flex-col justify-center'>
        <div className='flex justify-center items-center w-full'>
          <Image src={title} alt='title' className='mx-auto' />
        </div>
        <div className='flex mx-10 md:mr-10 relative'>
          <div className='mt-6 md:mt-24 flex flex-col'>
            <h2 className='md:text-xl text-sm font-medium'>
              ما کی هستیم و چیکار میکنیم؟
            </h2>
            <p className='w-full md:w-3/4 leading-7 text-[#333333] md:text-lg text-xs font-light mt-6'>
              سلام خدمت تمام کاربران سفرجو، عرضم به خدمت شما که سفرجو یک تیم
              بزرگ تهیه تورهای داخلی و خارجی برای مردم عزیز کشورمونه. ما سعی
              کردیم هر توری که فکر میکنیم میتونه برای شما جذاب باشه رو جمع آوری
              کنیم و اینجا در اختیارتون بذاریم. تنها دلخوشی تیم سفرجو رضایت
              شماست. امیدوارم بتونیم با بهترین خدمات و امکانات خاطره‌های خوبی
              براتون به یادگار بذاریم.
            </p>
          </div>
          <div className='absolute left-0 top-32'>
            <Image
              src={About}
              alt=''
              width={366}
              height={264.34}
              className='hidden md:block'
            />
          </div>
        </div>
        <div className='mt-44 mr-10'>
          <h2 className='md:mb-28 text-xl'>حالا چرا سفرجو؟</h2>
          <div className=' relative mb-20'>
            <p className='text-lg md:mb-12 mb-6'>قیمت‌های به‌صرفه</p>
            <p className='text-lg font-light md:w-[546px] text-[#333333]'>
              دیگه اگه جزو کاربرای ثابت ما هستین که میدونین چقدر به فکرتونیم،
              اگرم اومدین سری به سایت ما بزنین باید بگم که قیمت‌های سفرجو تو هیچ
              سایت دیگه‌ای پیدا نمیشه. وقتشه اینجا موندگار شی رفیق!
            </p>
            <div className='absolute left-0 -top-10 mx-10'>
              <Image src={img1} alt='' width={244} height={244} />
            </div>
          </div>
        </div>
        <div className='flex mr-10 justify-between'>
          <div className='w-[268px]'>
            <Image src={img2} alt='' width={268} height={268} />
          </div>
          <div className='flex flex-col gap-16 w-[528px] mt-16 ml-6'>
            <p className='text-lg'>تنوع زیاد</p>
            <p className='text-[#333333]'>
              ما اینجا هم داخلی داریم هم خارجی، از شمال و جنوب بگیر تا غرب و
              شرق، از تفریحی تا زیارتی. دیگه تاریخی و بومگردی رو محاله بتونی
              جایی غیر از سفرجو ببینی!
            </p>
          </div>
        </div>
        <div className='flex mx-10 mt-16 text-lg justify-between'>
          <div className='flex flex-col gap-14 w-1/2'>
            <p>امکانات کافی</p>
            <p className='text-[#333333]'>
              سفر با سفر فرق داره ، ولی بدون امکانات مورد نظر هر توری که بری
              برات فراهمه ، در ضمن سفرجو عکاس اختصاصی ام داره تا بتونی لحظات ناب
              سفرت رو همیشه به یاد بیاری !
            </p>
          </div>
          <div className='w-[357px]'>
            <Image src={img3} alt='' width={357} height={238} />
          </div>
        </div>
        <div className='flex mr-10 relative'>
          <div className=''>
            <Image src={img4} alt='' />
          </div>
          <div className='flex flex-col gap-14 w-1/2 absolute left-0 top-24 ml-6'>
            <p className='text-lg '>سلامت تور</p>
            <p className='text-lg text-[#333333] font-normal'>
              خیالت از بابت جو و فضای تورها راحت باشه ، ما حواسمون به همه چی هست
              ، برای حریم خصوصیت ارزش قائلیم ، کمپ های سفرجو با رعایت تمام ارزش
              های اخلاقی برگزار میشه!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAboutUs;
