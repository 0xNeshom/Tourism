'use client'
import { toPersianDigits } from '@/utilities/persianNumber/persian';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'فروردین', revenue: 70 },
  { month: 'اردیبهشت', revenue: 55 },
  { month: 'خرداد', revenue: 10 },
  { month: 'تیر', revenue: 12 },
  { month: 'مرداد', revenue: 10 },
  { month: 'شهریور', revenue: 20 },
  { month: 'مهر', revenue: 15 },
  { month: 'آبان', revenue: 8 },
  { month: 'آذر', revenue: 5 },
  { month: 'دی', revenue: 7 },
  { month: 'بهمن', revenue: 25 },
  { month: 'اسفند', revenue: 40 }
];

const Incomes = () => {
  return (
    <div dir="rtl" className="w-[675px] max-w-4xl shadow-md p-4 bg-white rounded-xl">
      <h2 className="text-sm mb-8 mt-9 mr-6 text-right" style={{fontWeight:600}}>وضعیت درآمد سالانه</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 15, right: 30, left: 30, bottom: 15 }}
        >
          <CartesianGrid 
            vertical={false}  // حذف خطوط عمودی
            strokeDasharray="none"  // حذف دشد از خطوط افقی
          />
             <XAxis
            dataKey='month'
            tick={{ fill: '#333', fontSize: 14, fontWeight: 500 }}
            tickLine={false}
            axisLine={false}
            dy={20}
          />
          <YAxis
            tickFormatter={(value) => `${toPersianDigits(value)} میلیون`}
            tick={{ fill: '#333', fontSize: 14, fontWeight: 500 }}
            tickLine={false}
            axisLine={false}
            dx={-60}
            tickMargin={16}
          />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#8844d8" 
            strokeWidth={2}
            dot={{ fill: '#8844d8' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-right mt-9 flex justify-center">
        <p className='text-sm ' style={{fontWeight:600}}>مجموع درآمد تا به امروز: ۵۲۵,۴۰۰,۰۰۰ تومان</p>
      </div>
    </div>
  );
};

export default Incomes;
