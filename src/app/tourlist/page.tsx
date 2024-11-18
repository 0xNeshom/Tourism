// /pages/tour-list.tsx
import React from 'react';
import TourCard from '@/components/templates/TourCard';

const TourList: React.FC = () => {
  return (
    <div>
      <TourCard params={{ id: '' }} />
    </div>
  );
};

export default TourList;
