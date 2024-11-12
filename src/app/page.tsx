import Header from '@/components/Header';
import Category from '@/components/Category';
import PopularDestinations from '@/components/PopularDestinations';
import CategoryOptions from '@/components/CategoryOptions';
import TourMostSeller from '@/components/modules/TourMostSeller';
import Advertising from '@/components/Advertising';
import FavoriteDestination from '@/components/FavoriteDestination';
import FavoriteLocations from '@/components/FavoriteLocations';
import TourSlider from '@/components/templates/TourSlider';

export default function Home() {
  
  return (
    <>
      
      <Header />
      <CategoryOptions />
      <Category />
      <PopularDestinations />
      {/* <TourMostSeller/> */}
      <Advertising />
      <FavoriteDestination />
      <TourSlider />
      <FavoriteLocations />
    </>
  );
}
