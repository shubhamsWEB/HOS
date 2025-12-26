'use client'
import React from 'react'
import { Grid, Typography, Box, Button } from '@mui/material';
import styles from './style.module.scss';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Products from './Products';

function ReadToShip() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch({ type: "FETCH_READY_TO_SHIP_PRODUCTS", payload: { size: 4, page: 0, inStock: true } });
    }, [])

    return (
        <Box className={styles.readyToShipWrapper}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={8}>
                    <Box className={styles.headerSection}>
                        <Typography variant='h3' className={styles.title}>Ready to Ship</Typography>
                        <Link href={`/products`} className={styles.exploreLink}>
                            <span>Explore All</span>
                            <span className={styles.linkLine} />
                        </Link>
                    </Box>
                    <Products />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={styles.imageSection}>
                        <Box className={styles.imageContainer}>
                            <Image
                                width={0}
                                height={0}
                                sizes={"100vw"}
                                alt="House of Sansa"
                                src='/assets/HOS.webp'
                                className={styles.brandImage}
                            />
                            <Box className={styles.imageOverlay}>
                                <Box className={styles.overlayContent}>
                                    <Typography variant='h5' className={styles.overlayTitle}>
                                        Discover Sparkel With Style and Luxury
                                    </Typography>
                                    <Typography variant='body2' className={styles.overlaySubtitle}>
                                        Whether casual or formal, find the perfect jewelry for every occasion with us.
                                    </Typography>
                                    <Link href='/products'>
                                        <Button
                                            variant='outlined'
                                            className={styles.shopButton}
                                        >
                                            Shop Now
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ReadToShip
