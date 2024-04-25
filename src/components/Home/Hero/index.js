import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import styles from './style.module.scss';
function Hero() {
  return (
    //   <Box
    //   component="div"
    //   sx={{
    //     height: '100vh',
    //     width: '100vw',
    //     maxHeight: '100%',
    //     maxWidth: '100%',
    //     backgroundAttachment:'fixed',
    //     backgroundPosition:'center',
    //     backgroundRepeat:'no-repeat',
    //     backgroundSize:'cover',
    //     backgroundImage:'url("./assets/main.mp4")',
    //     textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',
    //     flexDirection:'column'
    //   }}
    //   alt="The house from the offer."
    //   // src="./assets/banner.png"
    // >
    //      <Typography variant='h1' px={30} sx={{color:'#fff'}}>Discover Sparkel With Style and Luxury</Typography>
    //      <Typography variant='p' px={30} sx={{color:'#fff'}}>Discover Sparkel With Style and Luxury</Typography>
    //      <Button variant="outlined" sx={{marginTop:2}}>Shop Now</Button>
    // </Box>
    <Box className="video-container" sx={{ position: 'relative' }}>
      <video className='videoTag' autoPlay muted loop style={{ width: "100vw", height: '100vh', objectFit: 'cover' }}>
        <source src='./assets/main.mp4' type='video/mp4' />
      </video>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width:'100%' }}>
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", textAlign: 'center' }}>
          <Typography variant='h1' px={30} sx={{ color: '#fff' }} className={styles.main}>Discover Sparkel With Style and Luxury</Typography>
          <Typography variant='p' px={30} sx={{ color: '#fff' }} className={styles.sub}>Whether casual or formal, find the perfect jewelry for every occasion with us.</Typography>
          <Button variant="outlined" sx={{ marginTop: 2,border:'1px solid black',color:'#fff' }}>Shop Now</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero