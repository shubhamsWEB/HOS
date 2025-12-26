import HeroComponent from '@/components/Home/Hero';
import Collection from '@/components/Home/Collections';
import NewArrival from '@/components/Home/NewArrival';
import Faq from '@/components/Home/Faq';
import Banner from '@/components/Home/Banner'
import TrendingProducts from '@/components/Home/TrendingProducts';
import ReadToShip from '@/components/Home/ReadyToShip';
import Blog from '@/components/Home/Blog';
import { Box } from '@mui/material'
export default function Home() {
  return (
    <>
      <HeroComponent />
      <Collection />
      <NewArrival />
      <Banner />
      <ReadToShip />
      <TrendingProducts />
      <Blog />
      <Faq />
    </>
  );
}
