"use client"
import React, { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Badge from './badge';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from './style.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRouter } from 'next/navigation';

function Card({ data }) {
    const sliderRef = useRef(null);
    const [showIcons, setIcons] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const router = useRouter();

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

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    const handleCardClick = () => {
        router.push(`/products/${data.id}`);
    };

    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        autoplay: false,
        autoplaySpeed: 800,
        infinite: false,
        fade: true
    };

    const imageUrls = data?.media?.filter(url => !url.includes('.mp4')) || [];
    const hasVideo = data?.media?.some(url => url.includes('.mp4')) || false;

    const hasDiscount = !!data.offer;

    return (
            <Box
            className={`${styles.productCard} ${hasDiscount ? styles.hasDiscount : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            onClick={handleCardClick}
        >
            {/* Discount Badge */}
            {data.offer && (
                <Box className={styles.discountBadge}>
                    <Badge text={data.offer} />
                    </Box>
                )}

            {/* Heart Icon - Top Left */}
            <Box 
                className={`${styles.iconButton} ${styles.heartIcon} ${isFavorite ? styles.favorite : ''}`}
                onClick={handleFavoriteClick}
            >
                <FavoriteBorderIcon fontSize="small" />
            </Box>

            {/* Play Button - Top Right (if video exists) */}
            {hasVideo && (
                <Box className={`${styles.iconButton} ${styles.playIcon}`}>
                    <PlayArrowIcon fontSize="small" />
                </Box>
            )}

            {/* Product Image Slider */}
            <Box className={styles.imageContainer}>
                <Slider ref={sliderRef} {...settings} className={styles.slider}>
                    {imageUrls.length > 0 ? (
                        imageUrls.map((img, index) => (
                            <div key={index} className={styles.slide}>
                                <Image 
                                    src={img} 
                                    alt={data.productName || "Product"} 
                                    width={400} 
                                    height={400} 
                                    className={styles.productImage}
                                    priority={index === 0}
                                />
                            </div>
                        ))
                    ) : (
                        <div className={styles.slide}>
                            <Box className={styles.placeholderImage}>
                                <Typography variant="body2">No Image</Typography>
                            </Box>
                        </div>
                    )}
                </Slider>
            </Box>

            {/* Product Name */}
            <Typography variant="h6" className={styles.productName}>
                {data.productName || 'Product Name'}
            </Typography>
        </Box>
    );
}

export default Card;
