import React from 'react';
import { Grid, Box, Typography, Container, Button } from '@mui/material';
import Slider from './slider';
import Image from 'next/image';
import styles from './style.module.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function TrendingProducts() {
    return (
        <Box className={styles.trendingSection}>
            <Container maxWidth="xl">
                <Box className={styles.sectionHeader}>
                    <Box className={styles.decorativeLine}></Box>
                    <Typography variant='subtitle1' className={styles.sub}>DISCOVER OUR COLLECTION</Typography>
                    <Box className={styles.decorativeLine}></Box>
                </Box>
                
                <Typography variant='h2' className={styles.mainTitle}>Trending Products</Typography>
                
                <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Box className={styles.infoBox}>
                            <Box className={styles.imageWrapper}>
                                <Image 
                                    src="/assets/Vector.png" 
                                    width={60} 
                                    height={60} 
                                    alt="Elegance symbol" 
                                    className={styles.decorativeImage}
                                />
                            </Box>
                            
                            <Typography variant='body1' className={styles.desc}>
                                Experience our curated selection of exquisite jewelry pieces that blend timeless elegance with contemporary design. Each creation reflects our commitment to exceptional craftsmanship and attention to detail.
                            </Typography>
                            
                            <Button 
                                variant="outlined" 
                                className={styles.viewAllButton}
                                endIcon={<ArrowForwardIcon />}
                            >
                                View All Collection
                            </Button>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={8}>
                        <Box className={styles.sliderContainer}>
                            <Slider />
                            
                            <Box className={styles.trendingLabel}>
                                <Typography variant="h6" className={styles.labelText}>Bestsellers</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default TrendingProducts;