import { toPersianDigits } from '@/utilities/persianNumber/persian';
import React from 'react';
import ReservationForm from '@/components/tourList/ReservationForm';
const info = [
  { id: 0, description: 'اقامت', location: 'چادر' },
  { id: 1, description: 'نوع سفر', location: 'چادر' },
  { id: 2, description: 'مدت', location: 'چادر' },
  { id: 3, description: 'غذا', location: 'چادر' },
];
const TourDetails = () => {
  return (
    <div className='flex justify-between '>
      <div className='right '>
        <div className='flex flex-col mt-[25px]'>
          <div className='flex items-center justify-center gap-[15px]'>
            <h1 className='text-2xl' style={{ fontWeight: 500 }}>
              تور و کمپ جنگل گیسوم
            </h1>
            <p className='text-sm' style={{ fontWeight: 200 }}>
              (اسکان به صورت چادر در دل جنگل های گیسوم)
            </p>
            <span className='mr-[82px]'>{`${toPersianDigits(
              '2,370,000'
            )}`}</span>
          </div>
          <div className='flex gap-5 mt-[77px]'>
            {info.map((e: any) => (
              <div
                id={e.id}
                className='w-[150px] h-[120px] border-[1px] flex items-center justify-center flex-col gap-4 rounded-xl border-primary'
              >
                <span>{e.description}</span>
                <span> {e.location}</span>
              </div>
            ))}
          </div>
          <div className='mt-[78px]'>
            <h3 className='text-2xl' style={{ fontWeight: 500 }}>
              جزئیات اقامت :
            </h3>
            <ul className='list-disc mt-[32px] list-inside space-y-2'>
              <li>
                1 روز در مسیر و توقف در اماکن گردشگردی در مسیر 1 روز جنگل گردی 2
                روز کمپ و چادر
              </li>
              <li>1 روز جنگل گردی</li>
              <li>2 روز کمپ و چادر</li>
            </ul>
          </div>
          <div className='mt-[78px]'>
            <h3 className='text-2xl' style={{ fontWeight: 500 }}>
              خدمات تور
            </h3>
            <ul className='list-disc list-inside mt-[32px] space-y-2'>
              <li>
                تمام وعده‌های غذایی شما حتی تا یک وعده اضافه با تور می‌باشد
              </li>
              <li>همراهی بومیان آن منطقه جهت کشف مناطق بکر و دست نخورده</li>
              <li>همراهی عکاس گروهی برای ثبت لحظات ناب شما</li>
              <li>تورلیدر با تجربه برای امنیت خاطر شما</li>
              <li>گشت و گذار آزادانه در مناطق مشخص شده طبق نظر تورلیدر شما</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='left mt-[43px]'>
        <ReservationForm />
      </div>
    </div>
  );
};

export default TourDetails;
