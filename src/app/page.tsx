'use client';
import Navbar from '@/components/navbar/Navbar';
import Header from '@/components/main/Header';
import Category from '@/components/main/Category';
import PopularDestinations from '@/public/popularDestinations/PopularDestinations';
import CategoryOptions from '@/components/main/Search';
import Advertising from '@/public/advertising/Advertising';
import FavoriteDestination from '@/components/main/FavoriteDestination';
import FavoriteLocations from '@/components/main/FavoriteLocations';
import Footer from '@/components/footer/Footer';
import SpecialOffers from '@/components/main/SpecialOffers';
import AbroadTourSlider from '@/components/main/AbroadTourSlider';
import { useSelector } from 'react-redux';
import Search from '@/components/main/Search';
export default function Home() {
  const userState = useSelector((state: any) => state.user || {});
  const { user = null, role = null } =
    useSelector((state: any) => state.user) || {};
  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <Category />
      {/* <PopularDestinations /> */}
      <SpecialOffers />
      <Advertising />
      <FavoriteDestination />
      <AbroadTourSlider />
      <FavoriteLocations />
      <Footer />
    </>
  );
}
