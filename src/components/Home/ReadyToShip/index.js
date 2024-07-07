'use client'
import React from 'react'
import { Grid, Typography, Box, Button } from '@mui/material';
import styles from './style.module.scss';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import Image from 'next/image';
import Products from './Products';
function ReadToShip() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch({ type: "FETCH_READY_TO_SHIP_PRODUCTS",payload:{size:4,page:0,inStock:true} });
    }, [])
    return (
        <Box>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                        <Typography variant='h4' className={styles.main}>Ready to Ship</Typography>
                        <Link variant='caption' href={`/products`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#101010' }}>Explore All <ArrowRightAltIcon sx={{ color: '#D8C29D' }} /></Link>
                    </Box>
                    <Products/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className="video-container" sx={{ position: 'relative' }}>
                        <Image
                            width={0}
                            height={0}
                            sizes={"100vw"}
                            alt="Min banner"
                            src='/assets/HOS.jpg'
                            style={{ width: '100%', height: '50%' }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                bottom: 30,
                                width: '100%',
                                textAlign: 'center'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                <Typography variant='h6' sx={{ color: '#fff' }} className={styles.main}>
                                    Discover Sparkel With Style and Luxury
                                </Typography>
                                <Typography variant='p' sx={{ color: '#fff' }} className={styles.sub}>
                                    Whether casual or formal, find the perfect jewelry for every occasion with us.
                                </Typography>
                                <Link href='/products'>
                                    <Button
                                        variant='outlined'
                                        sx={{
                                            marginTop: 2,
                                            border: '1px solid #fff',
                                            color: '#fff'
                                        }}
                                        className={styles.sub}
                                    >
                                        Shop Now
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ReadToShip