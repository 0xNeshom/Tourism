'use client';
import { toPersianDigits } from '@/utilities/persianNumber/persian';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'فروردین', value: 10 },
  { name: 'ارد', value: 5 },
  { name: 'خرداد', value: 20 },
  { name: 'تیر', value: 5 },
  { name: 'مرداد', value: 10 },
  { name: 'شهریور', value: 5 },
  { name: 'مهر', value: 10 },
  { name: 'آبان', value: 5 },
  { name: 'آذر', value: 10 },
  { name: 'دی', value: 15 },
  { name: 'بهمن', value: 5 },
  { name: 'اسفند', value: 10 },
];

const ReservationChart = () => {
  return (
    
    <div className='w-[700px] p-5 h-[400px] rounded-2xl flex flex-col justify-center bg-white shadow-md'>
      <p className='text-sm' style={{fontWeight:"500"}}>میزان استرداد سالانه</p>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: 20, bottom: 10 }}
        >
          <XAxis
            dataKey='name'
            tick={{ fill: '#333', fontSize: 14, fontWeight: '400' }}
            tickLine={false}
            axisLine={false}
            dy={12}
          />
          <YAxis
            tickFormatter={(value) => `${toPersianDigits(value)} میلیون`}
            tick={{ fill: '#333', fontSize: 14, fontWeight: 'bold' }}
            tickLine={false}
            axisLine={false}
            dx={-40}
            tickMargin={16}
          />
          <Tooltip
            formatter={(value) => `${toPersianDigits(value)} میلیون`}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '12px',
              boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            }}
          />
          <Bar
            dataKey='value'
            fill='#7B4794'
            barSize={35}
            radius={[100, 100, 100, 0]}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className='justify-center flex mt-8 text-sm' style={{ fontWeight: 500 }}>
        <p>مجموع استرداد تا به امروز : {toPersianDigits(32100000)} میلیون تومان</p>
      </div>
    </div>
  );
};

export default ReservationChart;
