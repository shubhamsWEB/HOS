import HeroComponent from '@/components/Home/Hero';
import Collection from '@/components/Home/Collections';
import NewArrival from '@/components/Home/NewArrival';
import Faq from '@/components/Home/Faq';
import Banner from '@/components/Home/Banner';
import TrendingProducts from '@/components/Home/TrendingProducts';
import ReadToShip from '@/components/Home/ReadyToShip';
import LabGrownSection from '@/components/Home/LabGrownSection';
import Testimonials from '@/components/Home/Testimonials';
import { Box, Container, Divider } from '@mui/material';

export default function Home() {
  return (
    <Box>
      {/* Hero Banner */}
      <HeroComponent />
      
      {/* Trust Indicators */}
      <Box py={5} sx={{ background: '#fafafa' }}>
        <Container maxWidth="lg">
          <Banner />
        </Container>
      </Box>
      
      {/* Lab Grown Diamonds Section - New Component */}
      <Box py={8}>
        <Container maxWidth="lg">
          <LabGrownSection />
        </Container>
      </Box>
      
      <Divider />
      
      {/* Collections */}
      <Box py={8}>
        <Container maxWidth="lg">
          <Collection />
        </Container>
      </Box>
      
      {/* New Arrivals with Full Width Background */}
      <Box py={8} sx={{ background: 'linear-gradient(to right, #f9f2ea, #ffffff)' }}>
        <Container maxWidth="lg">
          <NewArrival />
        </Container>
      </Box>
      
      {/* Ready to Ship */}
      <Box py={8}>
        <Container maxWidth="lg">
          <ReadToShip />
        </Container>
      </Box>
      
      {/* Testimonials - New Component */}
      <Box py={8} sx={{ background: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Testimonials />
        </Container>
      </Box>
      
      {/* Trending Products */}
      <Box py={8}>
        <Container maxWidth="lg">
          <TrendingProducts />
        </Container>
      </Box>
      
      {/* FAQ Section */}
      <Box py={8} sx={{ background: '#fbfbfb' }}>
        <Container maxWidth="lg">
          <Faq />
        </Container>
      </Box>
    </Box>
  );
}
