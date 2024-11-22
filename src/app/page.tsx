import Navbar from '@/components/modules/Navbar';
import Header from '@/components/modules/Header';
import Category from '@/components/modules/Category';
import PopularDestinations from '@/components/modules/PopularDestinations';
import CategoryOptions from '@/components/modules/CategoryOptions';
import Advertising from '@/components/modules/Advertising';
import FavoriteDestination from '@/components/modules/FavoriteDestination';
import FavoriteLocations from '@/components/modules/FavoriteLocations';
import Footer from '@/components/modules/Footer';
import TourSlider from '@/components/templates/AbroadTourSlider';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CategoryOptions />
      <Category />
      <PopularDestinations />
      
      <Advertising />
      <FavoriteDestination />
      <TourSlider />
      <FavoriteLocations />
      <Footer />
    </>
  );
}
