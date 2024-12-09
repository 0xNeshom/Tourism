import Image from 'next/image';
import profile from '@/public/dashboard/users/Profile.svg';
import iconly from '@/public/dashboard/users/Iconly.svg';
import block from '@/public/dashboard/users/block-2-svgrepo-com (1) 1.svg';
import { toPersianDigits } from '@/utilities/persianNumber/persian';

function User() {
  return (
    <div className='w-[80%] flex justify-between bg-white rounded-md mx-auto py-3 border-r-primary border-r-[1px]'>
      <div className='flex gap-5 mx-4 items-center'>
        <div className=''>
          <Image src={profile} alt='' />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-base' style={{ fontWeight: 600 }}>
            الهه علی‌نیا
          </p>
          <p className='text-xs' style={{ fontWeight: 300 }}>
            {toPersianDigits('تاریخ عضویت : 1403.02.16')}
          </p>
        </div>
      </div>
      <div className='flex mx-4 gap-3'>
        <Image src={block} alt='' width={24} height={24} />
        <Image src={iconly} alt='' width={24} height={24} />
      </div>
    </div>
  );
}

export default User;
