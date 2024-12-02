// /pages/tour-list.tsx
import React from 'react';
import TourCard from '@/components/tourList/TourCard';
import TourCardMock from '@/components/tourList/TourCardMock';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
const TourList: React.FC = () => {
  return (
    <div>
      <Navbar />
      <TourCard />
      <Footer />
    </div>
  );
};

export default TourList;
