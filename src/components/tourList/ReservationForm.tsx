'use client';
import { toPersianDigits } from '@/utilities/persianNumber/persian';
import { useState } from 'react';

const ReservationForm = () => {
  const [month, setMonth] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(2370000);

  const handlePriceUpdate = (selectedQuantity: number) => {
    const basePrice = 2370000;
    const updatedPrice = basePrice * selectedQuantity;
    setPrice(updatedPrice);
  };

  return (
    <div className='bg-white shadow-md p-6 rounded-lg w-[445px]  max-w-md mx-auto'>
      <div className='mb-[43px]'>
        <label className='block  font-medium mb-4'>انتخاب ماه سفر:</label>
        <div className='flex gap-2'>
          {['خرداد', 'تیر', 'مرداد'].map((m) => (
            <button
              key={m}
              onClick={() => setMonth(m)}
              className={`py-2 px-4 rounded-lg border w-[120px] h-[42px] ${
                month === m ? 'bg-primary text-white' : 'bg-gray-100 '
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <label className='block  font-medium mb-4 '>انتخاب بازه زمانی:</label>
        <select
          className='w-full p-2 border rounded-lg  bg-gray-100 text-[#707070] text-xs' style={{fontWeight:400,minHeight:'42px' }}
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
        >
          <option >بازه زمانی دلخواه را مشخص کنید</option>
          <option value='morning'>صبح</option>
          <option value='afternoon'>عصر</option>
          <option value='night'>شب</option>
        </select>
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700 font-medium mb-4'>
          انتخاب تعداد:
        </label>
        <select
          className='w-full p-2 border rounded-lg bg-gray-100 text-[#707070] text-xs'
          style={{fontWeight:400, minHeight:'42px'}}
          value={quantity}
          onChange={(e) => {
            const selectedQuantity = parseInt(e.target.value, 10);
            setQuantity(selectedQuantity);
            handlePriceUpdate(selectedQuantity);
          }}
        >
          <option value='1'>1 نفر</option>
          <option value='2'>2 نفر</option>
          <option value='3'>3 نفر</option>
        </select>
        <p className='text-sm text-gray-500 mt-4 text-center'>
          *کودکان زیر ۵ سال نیم‌بها محسوب می‌شوند
        </p>
      </div>

      <div className='mb-[51px] mt-[51px] flex justify-between'>
        <p className='text-lg font-medium text-gray-700'>
          مجموع قیمت: 
        </p>
        <p>
        {toPersianDigits(price.toLocaleString())} تومان
        </p>
      </div>

      <button className='w-full bg-primary text-white py-2 rounded-lg mb-[51px]'>
        تأیید و ادامه
      </button>
    </div>
  );
};

export default ReservationForm;
