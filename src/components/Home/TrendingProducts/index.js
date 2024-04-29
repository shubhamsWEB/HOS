import React from 'react'
import SpaIcon from '@mui/icons-material/Spa';
import { Grid, Box, Typography } from '@mui/material';
import Slider from './slider';
import Image from 'next/image';
import styles from './style.module.scss';
function TrendingProducts() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        {/* <SpaIcon /> */}
                        <Image src="/assets/Vector.png" width={80} height={80} alt="image" />
                        <Typography variant='subtitle1' className={styles.sub}>SHOP</Typography>
                        <Typography variant='h3' className={styles.main}>Our Trending Products</Typography>
                        <Typography variant='subtitle1' className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} px={{ xs: 2,sm: 10 }}>
                    <Slider />
                </Grid>
            </Grid>
        </Box>
    )
}

export default TrendingProducts