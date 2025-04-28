"use client"
import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton } from '@mui/material';
import Card from './card';
import { products } from '../../../constants/products';
import styles from './style.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function SliderComp() {
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };
    
    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box className={styles.sliderWrapper}>
            <Slider ref={sliderRef} {...settings}>
                {products.map(item => (
                    <Box key={item.id} sx={{ p: 2 }}>
                        <Card data={item} />
                    </Box>
                ))}
            </Slider>
            
            <Box className={styles.sliderControls}>
                <IconButton 
                    onClick={previous} 
                    className={styles.sliderArrow}
                >
                    <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
                
                <IconButton 
                    onClick={next} 
                    className={styles.sliderArrow}
                >
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    );
}

export default SliderComp;