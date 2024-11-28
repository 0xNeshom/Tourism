// /pages/tour-list.tsx
import React from 'react';
import TourCard from '@/components/TourCard';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
const TourList: React.FC = () => {
  return (
    <div>
      <Navbar />
      <TourCard params={{ id: '' }} />
      <Footer />
    </div>
  );
};

export default TourList;
