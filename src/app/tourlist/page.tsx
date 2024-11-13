import React from 'react';
import TourCard from '@/components/modules/TourCard';
import Gisoom from '@/components/Gisoom';
const TourList: React.FC = () => {

  return (
    <div>
      <Gisoom/>
      <TourCard />
    </div>
  );
};

export default TourList;
