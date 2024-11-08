
import Navbar from '@/components/modules/Navbar';
import Header from '@/components/modules/Header';
import Category from '@/components/modules/Category';
import PopularDestinations from '@/components/modules/PopularDestinations';
import CategoryOptions from '@/components/modules/CategoryOptions';
// import TourMostSeller from "@/components/modules/TourMostSeller"
import Advertising from '@/components/modules/Advertising';
import FavoriteDestination from '@/components/modules/FavoriteDestination';
import FavoriteLocations from '@/components/modules/FavoriteLocations';
import Footer from '@/components/modules/Footer';
import TourSlider from '@/components/modules/TourSlider';
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CategoryOptions />
      <Category />
      <PopularDestinations />
      {/* <TourMostSeller/> */}
      <Advertising />
      <FavoriteDestination />
      <TourSlider />
      <FavoriteLocations />
      <Footer />
    </>
  );
}
