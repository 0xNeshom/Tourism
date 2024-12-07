import DashboardHeader from '@/components/pannel/DashboardHeader';
import Incomes from '@/components/pannel/Incomes';
import InformatioCards from '@/components/pannel/InformatioCards';
import RefundChart from '@/components/pannel/RefundChart';
import ReservationChart from '@/components/pannel/ReservationChart';
import SideBar from '@/components/pannel/SideBar';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col w-full  mx-auto'>
      <DashboardHeader />
      <div className='flex mx-auto gap-6 h-[400px]'>
        <InformatioCards />
        <ReservationChart />
      </div>
      <div className='mt-6 flex justify-center gap-6'>
        <Incomes />
        <RefundChart />
      </div>
    </div>
  );
};

export default page;
