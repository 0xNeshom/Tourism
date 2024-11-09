
import Header from '@/components/modules/Header';
import Category from '@/components/modules/Category';
import PopularDestinations from '@/components/modules/PopularDestinations';
import CategoryOptions from '@/components/modules/CategoryOptions';
import TourMostSeller from '@/components/modules/TourMostSeller';
import Advertising from '@/components/modules/Advertising';
import FavoriteDestination from '@/components/modules/FavoriteDestination';
import FavoriteLocations from '@/components/modules/FavoriteLocations';
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
