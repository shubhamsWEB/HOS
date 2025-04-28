"use client"
import React, { useRef } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from './style.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useRouter } from 'next/navigation';

function Card({ data }) {
    const sliderRef = useRef(null);
    const router = useRouter();
    const [showIcons, setIcons] = React.useState(false);
    
    const handleMouseEnter = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
            setIcons(true);
        }
    };

    const handleMouseLeave = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPause();
            sliderRef.current.slickGoTo(0);
            setIcons(false);
        }
    };

    const settings = {
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        autoplay: false,
        autoplaySpeed: 1500,
        infinite: true,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
    };

    return (
        <Box className={styles.productCard}>
            <Box
                className={styles.productImageContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Box className={styles.productImage} onClick={() => router.push(`/products/${data.id}`)}>
                    <Slider ref={sliderRef} {...settings}>
                        {data?.images.map(img => (
                            <div key={img} className={styles.sliderImageWrapper}>
                                <Image 
                                    src={`${img}`} 
                                    alt={data.title} 
                                    width={0} 
                                    height={0} 
                                    sizes="100vw" 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%',
                                        objectFit: 'cover'
                                    }} 
                                />
                            </div>
                        ))}
                    </Slider>
                </Box>
                
                {showIcons && (
                    <>
                        <Box className={styles.productActions}>
                            <Button variant="contained" className={styles.btn}>
                                Discover
                            </Button>
                        </Box>
                        
                        <Box className={styles.quickActions}>
                            <IconButton className={styles.icons}><FavoriteBorderIcon fontSize='small' /></IconButton>
                            <IconButton className={styles.icons}><ShareOutlinedIcon fontSize='small' /></IconButton>
                            <IconButton className={styles.icons}><VisibilityOutlinedIcon fontSize='small' /></IconButton>
                        </Box>
                    </>
                )}
                
                {data.isNew && (
                    <Box className={styles.newLabel}>New</Box>
                )}
                
                {data.discount && (
                    <Box className={styles.discountLabel}>-{data.discount}%</Box>
                )}
            </Box>
            
            <Box className={styles.productInfo}>
                <Typography variant='h4' className={styles.productName}>
                    {data.title}
                </Typography>
                
                <Box className={styles.productPrice}>
                    {data.originalPrice && (
                        <Typography variant="body2" className={styles.originalPrice}>
                            ${data.originalPrice}
                        </Typography>
                    )}
                    <Typography variant="body1" className={styles.currentPrice}>
                        ${data.price}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Card;
