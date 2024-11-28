import DashboardHeader from '@/components/pannel/DashboardHeader';
import SideBar from '@/components/pannel/SideBar';
import React from 'react';
SideBar;
const page = () => {
  return (
    <div className='flex w-full gap-8'>
      <SideBar />
      <DashboardHeader />
    </div>
  );
};

export default page;
