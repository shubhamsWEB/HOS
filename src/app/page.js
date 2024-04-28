import HeroComponent from '../components/Home/Hero';
import NavBar from '../components/Common/NavBar';
import Collection from '../components/Home/Collections';
import NewArrival from '../components/Home/NewArrival';
import Faq from '../components/Home/Faq';
import Banner from '../components/Home/Banner'
import TrendingProducts from '../components/Home/TrendingProducts';
import { Box } from '@mui/material'
export default function Home() {
  return (
    <>
      <HeroComponent />
      <Box p={5} px={{ xs: 2, sm: 20 }}>
        <Collection />
      </Box>
      <NewArrival />
      <Box p={5} px={{ xs: 2, sm: 20 }}>
        <Banner />
      </Box>
      <Box p={5} px={{ xs: 2, sm: 20 }} sx={{ background: '#FAF9F7' }}>
        <TrendingProducts />
      </Box>
      <Box p={5} px={{ xs: 2, sm: 20 }}>
        <Faq />
      </Box>
    </>
  );
}
