// /pages/tour-list.tsx
import React from 'react';
import TourCard from '@/components/modules/TourCard';
import Gisoom from '@/components/Gisoom';
import { GetStaticProps } from 'next';

interface StaticTour {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  image: string;
}


const TourList: React.FC = () => {
  return (
    <div>
      <Gisoom />
      <TourCard />
    </div>
  );
};



export default TourList;
