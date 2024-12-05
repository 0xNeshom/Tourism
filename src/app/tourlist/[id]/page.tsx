import Gisoom from '@/components/tourList/Gisoom';
import Navbar from '@/components/navbar/Navbar';
import PhotoLayout from '@/components/tourList/PhotoLayout';
import React from 'react';
import TourDetails from '@/components/tourList/TourDetails';
import Footer from '@/components/footer/Footer';
import { useRouter } from 'next/navigation';
import { getTourData } from '@/utilities/actions/TourDataFetch';

const page = async ({params}:any) => {
  // const tour =await getTourData(params.id)
  return (
    <div>
      <div className='mx-[85px]'>
        {/* <p>{tour.id}</p> */}
        <Gisoom />
        <TourDetails />
      </div>
    </div>
  );
};

export default page;
