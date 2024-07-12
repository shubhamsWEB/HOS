import React from 'react'
import { Box, Divider, Typography } from '@mui/material';
import Header from '@/components/About/header';
import Banner from '@/components/About/banner';
import OurJourney from '@/components/About/journey';
import OurPromise from '@/components/About/commitment';
import OurValues from '@/components/About/values';
import OurTeam from '@/components/About/team';
// import styles from '@/components/About/style.module.scss';
function page() {
  return (
    <>
    <Box mt={8} p={{xs:2,sm:6}} sx={{ position: 'relative' }}>
      <Header />
      <Banner />
      <OurJourney />
      <Divider />
      <OurPromise />
      <Box sx={{ background: 'url(/assets/about.png)', height: '600px',backgroundPosition:'center',backgroundSize:'fill' }} />
      <OurValues/>
      <Divider />
      <OurTeam/>
    </Box>
    </>
  )
}

export default page