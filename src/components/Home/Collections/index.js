import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import './style.css';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
function Collection() {
    return (
        <Grid container className="collections-grid">
            <Grid item xs={12} sm={4}>
                <Box className="grid">
                    <Typography variant='subtitle2' className='main' sx={{ letterSpacing: '2px', mb: 4 }}>COLLECTION</Typography>
                    <Image src="/assets/Vector1.png" width={65} height={65} alt="Sansa Diamonds" className='img' />
                    <Typography variant='h4' className='main'>Sansa Diamonds</Typography>
                    <Typography variant='caption' className='sub'>Introducing our new mesmerizing jewelry collection. Embrace your inner allure with the timeless elegance and radiant beauty of ancient Egypt, now available exclusively on AXELS Jewelry.</Typography>
                    <Link href={'/products'} style={{textDecoration:'none'}}>
                        <Typography variant='caption' fontWeight={'bold'} mt={2} className='sub' sx={{ display: 'flex', alignItems: 'center', gap: 1 ,color:'#222222'}}>View Products <ArrowRightAltIcon sx={{ color: '#D8C29D' }} /></Typography>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Box className="grid">
                    <Typography variant='subtitle2' className='main' sx={{ letterSpacing: '2px', mb: 4 }}>COLLECTION</Typography>
                    <Image src="/assets/Vector1.png" width={65} height={65} alt="Sansa Polki" className='img' />
                    <Typography variant='h4' className='main'>Sansa Polki</Typography>
                    <Typography variant='caption' className='sub'>Introducing our new mesmerizing jewelry collection. Embrace your inner allure with the timeless elegance and radiant beauty of ancient Egypt, now available exclusively on AXELS Jewelry.</Typography>
                    <Typography variant='caption' fontWeight={'bold'} mt={2} className='sub' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>View Products <ArrowRightAltIcon sx={{ color: '#D8C29D' }} /></Typography>

                </Box></Grid>
            <Grid item xs={12} sm={4}>
                <Box className="grid">
                    <Typography variant='subtitle2' className='main' sx={{ letterSpacing: '2px', mb: 4 }}>COLLECTION</Typography>
                    <Image src="/assets/Vector1.png" width={65} height={65} alt="Sansa Gold" className='img' />
                    <Typography variant='h4' className='main'>Sansa Gold</Typography>
                    <Typography variant='caption' className='sub'>Introducing our new mesmerizing jewelry collection. Embrace your inner allure with the timeless elegance and radiant beauty of ancient Egypt, now available exclusively on AXELS Jewelry.</Typography>
                    <Typography variant='caption' fontWeight={'bold'} mt={2} className='sub' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>View Products <ArrowRightAltIcon sx={{ color: '#D8C29D' }} /></Typography>

                </Box></Grid>
            <Grid item xs={12} sm={6}>
                <Box className="grid">
                    <Typography variant='subtitle2' className='main' sx={{ letterSpacing: '2px', mb: 4 }}>COLLECTION</Typography>
                    <Image src="/assets/Vector1.png" width={65} height={65} alt="Sansa Gems" />
                    <Typography variant='h4' className='main'>Sansa Gems</Typography>
                    <Typography variant='caption' className='sub'>Get 20% off with our code: LUXE20.</Typography>
                    <Typography variant='caption' fontWeight={'bold'} mt={2} className='sub' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>View Products <ArrowRightAltIcon sx={{ color: '#D8C29D' }} /></Typography>
                </Box></Grid>
            <Grid item xs={12} sm={6}><Box className="grid">
                <Typography variant='subtitle2' className='main' sx={{ letterSpacing: '2px', mb: 4 }}>COLLECTION</Typography>
                <Image src="/assets/Vector1.png" width={65} height={65} alt="Sansa Accessories" />
                <Typography variant='h4' className='main'>Sansa Accessories</Typography>
                <Typography variant='caption' className='sub'>Get 20% off with our code: LUXE20.</Typography>
                <Typography variant='caption' fontWeight={'bold'} mt={2} className='sub' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>View Products <ArrowRightAltIcon sx={{ color: '#D8C29D' }} /></Typography>

            </Box></Grid>
        </Grid>
    )
}

export default Collection