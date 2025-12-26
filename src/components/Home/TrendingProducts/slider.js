"use client"
import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton } from '@mui/material';
import Card from '../../Products/Listing/card1';
import { products } from '../../../constants/products';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styles from './style.module.scss';

function SliderComp() {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 600,
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: true,
        cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '24px',
                }
            }
        ]
    };

    const handlePrev = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current?.slickNext();
    };

    return (
        <Box className={styles.sliderWrapper}>
            <Box className={styles.sliderContainer}>
                <Slider ref={sliderRef} {...settings}>
                    {products.map(item => {
                        const transformedData = {
                            ...item,
                            media: item.images || [],
                            productName: item.title || item.productName,
                        };
                        return (
                            <Box key={item.id} className={styles.slideItem}>
                                <Card data={transformedData} />
                            </Box>
                        )
                    })}
                </Slider>
            </Box>
            
            {/* Navigation Arrows */}
            <Box className={styles.navigationWrapper}>
                <IconButton 
                    onClick={handlePrev} 
                    className={styles.navButton}
                    aria-label="Previous"
                >
                    <ArrowBackIosNewRoundedIcon />
                </IconButton>
                <IconButton 
                    onClick={handleNext} 
                    className={styles.navButton}
                    aria-label="Next"
                >
                    <ArrowForwardIosRoundedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default SliderComp
