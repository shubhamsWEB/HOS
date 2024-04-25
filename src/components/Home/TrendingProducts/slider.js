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
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...settings}>
            {[0, 1, 2, 3, 4, 5].map(item => {
                return (<Box p={2} key={item}>
                    <Card data={products[item]} />
                </Box>)
            })}
        </Slider>
    )
}

export default SliderComp