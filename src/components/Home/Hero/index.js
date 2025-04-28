import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import StyledButton from '@/components/Common/StyledButton';

function Hero() {
  return (
    <Box className={styles.videoContainer}>
      <video autoPlay muted loop>
        <source src='./assets/banner.mp4' type='video/mp4' />
      </video>
      <Box className={styles.contentWrapper}>
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", textAlign: 'center' }} px={{xs:2,sm:32}}>
          <Typography variant='h1' sx={{ color: '#fff', textShadow: '0px 2px 4px rgba(0,0,0,0.3)' }} className={styles.main}>Discover Sparkel With Style and Luxury</Typography>
          <Typography variant='p' sx={{ color: '#fff', textShadow: '0px 1px 2px rgba(0,0,0,0.3)' }} className={styles.sub}>Whether casual or formal, find the perfect jewelry for every occasion with us.</Typography>
          <StyledButton 
            variant="outlined" 
            className="onDark"
            href="/products"
          >
            Shop Now
          </StyledButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero