import Navbar from '@/components/navbar/Navbar';
import Header from '@/components/main/Header';
import Category from '@/components/main/Category';
import PopularDestinations from '@/components/main/PopularDestinations';
import CategoryOptions from '@/components/main/CategoryOptions';
import Advertising from '@/components/main/Advertising';
import FavoriteDestination from '@/components/main/FavoriteDestination';
import FavoriteLocations from '@/components/main/FavoriteLocations';
import Footer from '@/components/footer/Footer';
import SpecialOffers from '@/components/main/SpecialOffers';
import AbroadTourSlider from '@/components/main/AbroadTourSlider';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CategoryOptions />
      <Category />
      <PopularDestinations />
      <SpecialOffers />
      <Advertising />
      <FavoriteDestination />
      <AbroadTourSlider />
      <FavoriteLocations />
      <Footer />
    </>
  );
}
