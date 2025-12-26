import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import styles from './style.module.scss';

const trustFeatures = [
    {
        icon: DiamondOutlinedIcon,
        title: 'Quality Certified',
        description: 'Available certificates of authenticity.'
    },
    {
        icon: AssuredWorkloadRoundedIcon,
        title: 'Secure Transaction',
        description: 'Certified marketplace since 2017'
    },
    {
        icon: LocalShippingOutlinedIcon,
        title: 'Delivery Shipping',
        description: 'Free, fast, and reliable worldwide'
    },
    {
        icon: DesignServicesRoundedIcon,
        title: 'Transparent Services',
        description: 'Available certificates of authenticity.'
    }
];

function Banner() {
    return (
        <Box className={styles.trustBannerWrapper}>
            <Grid container spacing={4}>
                {trustFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <Grid item xs={6} sm={3} key={index}>
                            <Box className={styles.featureCard}>
                                <Box className={styles.iconWrapper}>
                                    <IconComponent className={styles.icon} />
                                </Box>
                                <Typography variant='h6' className={styles.title}>
                                    {feature.title}
                                </Typography>
                                <Typography variant='body2' className={styles.description}>
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    )
}

export default Banner
