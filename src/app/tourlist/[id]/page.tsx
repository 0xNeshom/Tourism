import Gisoom from '@/components/tourList/Gisoom';
import Navbar from '@/components/navbar/Navbar';
import PhotoLayout from '@/components/tourList/PhotoLayout';
import React from 'react';
import TourDetails from '@/components/tourList/TourDetails';
import Footer from '@/components/footer/Footer';

const page = () => {
  return (
    <div>
      <Navbar />
      <div className='mx-[85px]'>
        <Gisoom />
        <TourDetails />
      </div>
      <Footer />
    </div>
  );
};

export default page;
