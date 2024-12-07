
import TourCard from '@/components/tourList/TourCard';
import TourCardMock from '@/components/tourList/TourCardMock';

import Filter from '@/components/tourList/Filter';
const TourList: React.FC = () => {
  return (
    <div className='flex bg-stone-50 justify-center'>
      <Filter/>
      <TourCard />
    </div>
  );
};

export default TourList;
