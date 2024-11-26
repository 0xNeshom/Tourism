// /pages/tour-list.tsx
import React from 'react';
import TourCard from '@/components/templates/TourCard';
import Footer from '@/components/templates/footer/Footer';
import Navbar from '@/components/modules/Navbar';
const TourList: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <TourCard params={{ id: '' }} />
      <Footer/>
    </div>
  );
};

export default TourList;
