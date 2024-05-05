"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from '@mui/material';
import Card from './card';
import { products } from '../../../constants/products';
function SliderComp() {
    var settings = {
        // dots: true,
        infinite: true,
        // centerMode: true,
        centerPadding: "60px",
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 2,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
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
        <Box px={{ xs: 2, sm: 4 }}>
            <Slider {...settings}>
                {products.map(item => {
                    return (<Box key={item.id} sx={{p:{xs:0,sm:1}}}>
                        <Card data={item} />
                    </Box>)
                })}
            </Slider>
        </Box>
    )
}

export default SliderComp