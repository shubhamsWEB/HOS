'use client'
import React from 'react'
import { Box, Typography } from '@mui/material';
import Slider from './slider';
import styles from './style.module.scss';
import Link from 'next/link';

function TrendingProducts() {
    return (
        <Box className={styles.trendingWrapper}>
            {/* Section Header */}
            <Box className={styles.headerSection}>
                <Box className={styles.headerContent}>
                    <Box className={styles.titleGroup}>
                        <Typography variant="overline" className={styles.label}>
                            Trending Now
                        </Typography>
                        <Typography variant="h3" className={styles.title}>
                            Our Trending Products
                        </Typography>
                        <Typography variant="body1" className={styles.description}>
                            Discover our most sought-after pieces, handcrafted with precision and designed to make every moment unforgettable.
                        </Typography>
                    </Box>
                    <Link href="/products" className={styles.viewAllLink}>
                        <span>View All</span>
                        <span className={styles.linkLine} />
                    </Link>
                </Box>
            </Box>

            {/* Products Slider */}
            <Box className={styles.sliderSection}>
                <Slider />
            </Box>
        </Box>
    )
}

export default TrendingProducts
