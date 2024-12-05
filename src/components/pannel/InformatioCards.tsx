import Image from 'next/image';
import icon1 from '@/public/dashboard/informaitionCards/transaction-money-svgrepo-com.svg';
const InformatioCards = () => {
  return (
    <div className='w-[300px] h-full flex flex-col  justify-between'>
      <div className='flex bg-white w-full  rounded-2xl shadow-md gap-7 py-8  justify-center'>
        <div className='icon '>
          <Image src={icon1} alt='' />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-sm' style={{ fontWeight: 400 }}>
            استرداد ها
          </p>
          <span className='text-sm text-[#707070]' style={{ fontWeight: 400 }}>
            12 نفر کنسلی‌های این هفته
          </span>
        </div>
      </div>
      <div className='flex bg-white w-full  rounded-md shadow-md gap-7 py-8  justify-center'>
        <div className='icon '>
          <Image src={icon1} alt='' />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-sm' style={{ fontWeight: 400 }}>
            استرداد ها
          </p>
          <span className='text-sm text-[#707070]' style={{ fontWeight: 300 }}>
            12 نفر کنسلی‌های این هفته
          </span>
        </div>
      </div>
      <div className='flex bg-white w-full  rounded-md shadow-md gap-7 py-8  justify-center'>
        <div className='icon '>
          <Image src={icon1} alt='' />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-sm' style={{ fontWeight: 400 }}>
            استرداد ها
          </p>
          <span className='text-sm text-[#707070]' style={{ fontWeight: 300 }}>
            12 نفر کنسلی‌های این هفته
          </span>
        </div>
      </div>
    </div>
  );
};

export default InformatioCards;
