import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import styles from './style.module.scss';
function Banner() {
    return (
        <Grid container>
            <Grid item sm={3} sx={{ textAlign: 'center' }}>
                <Box>
                <Box className={`${styles.icons}`}><DiamondOutlinedIcon fontSize='large' sx={{color:"#D8B985"}}/></Box>
                    <Typography variant='subtitle1' className={styles.title}>Quality Certified</Typography>
                    <Typography variant='caption' color={'gray'} className={styles.subtitle}>Available certificates of authenticity.</Typography>
                </Box>
            </Grid>
            <Grid item sm={3} sx={{ textAlign: 'center' }}>
                <Box>
                <Box className={`${styles.icons}`}><AssuredWorkloadRoundedIcon fontSize='large' sx={{color:"#D8B985"}}/></Box>
                    <Typography variant='subtitle1' className={styles.title}>Secure Transection</Typography>
                    <Typography variant='caption' color={'gray'} className={styles.subtitle}>Certified marketplace since 2017</Typography>
                </Box>
            </Grid>
            <Grid item sm={3} sx={{ textAlign: 'center' }}>
                <Box>
                <Box className={`${styles.icons}`}><LocalShippingOutlinedIcon fontSize='large' sx={{color:"#D8B985"}}/></Box>
                    <Typography variant='subtitle1' className={styles.title}>Delivery Shipping</Typography>
                    <Typography variant='caption' color={'gray'} className={styles.subtitle}>Free, fast, and reliable worldwide</Typography>
                </Box>
            </Grid>
            <Grid item sm={3} sx={{ textAlign: 'center' }}>
                <Box>
                <Box className={`${styles.icons}`}><DesignServicesRoundedIcon fontSize='large' sx={{color:"#D8B985"}}/></Box>
                    <Typography variant='subtitle1' className={styles.title}>Transparent Services</Typography>
                    <Typography variant='caption' color={'gray'} className={styles.subtitle}>Available certificates of authenticity.</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Banner