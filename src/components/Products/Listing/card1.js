"use client"
import React, { useRef, useState } from 'react';
import { 
  Box, 
  Typography, 
  Card as MuiCard, 
  CardContent, 
  CardMedia, 
  Chip, 
  IconButton,
  Fade,
  Backdrop
} from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from './style.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/navigation';
import EnduireBtn from '@/components/Common/EnquireBtn';
import { RWebShare } from "react-web-share";
import { formatPrice } from '@/utils/productUtils';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledButton from '@/components/Common/StyledButton';

function Card({ data }) {
    const sliderRef = useRef(null);
    const [showIcons, setShowIcons] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();

    const imageUrls = data?.media?.filter(url => !url.includes('.mp4')) || [];

    const handleMouseEnter = () => {
        setShowIcons(true);
    };

    const handleMouseLeave = () => {
        setShowIcons(false);
    };

    const nextSlide = (e) => {
        e.stopPropagation();
        sliderRef.current.slickNext();
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        sliderRef.current.slickPrev();
    };

    const settings = {
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
        autoplay: false,
        infinite: true,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        beforeChange: (current, next) => setCurrentSlide(next)
    };

    const navigateToProduct = () => {
        router.push(`/products/${data.id}`);
    };

    const BadgeComponent = ({ product }) => {
        if (product.new) {
            return (
                <div className={styles.badgeContainer}>
                    <div className={styles.newBadge}>New</div>
                </div>
            );
        } else if (product.sale) {
            return (
                <div className={styles.badgeContainer}>
                    <div className={styles.newBadge}>Sale</div>
                </div>
            );
        }
        return null;
    };

    const ActionsContainer = ({ onFavClick, onCartClick }) => (
        <div className={styles.actionsContainer}>
            <IconButton className={styles.actionButton} onClick={onFavClick} size="small">
                <FavoriteBorderIcon fontSize="small" />
            </IconButton>
            <IconButton className={styles.actionButton} onClick={onCartClick} size="small">
                <ShoppingCartIcon fontSize="small" />
            </IconButton>
        </div>
    );

    return (
        <MuiCard 
            elevation={0}
            className={styles.luxuryProductCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Product Badge */}
            {data.offer && (
                <BadgeComponent product={data} />
            )}
            
            {/* Product Image */}
            <div className={styles.productImageContainer} onClick={navigateToProduct}>
                <Slider 
                    ref={sliderRef} 
                    {...settings} 
                    className={styles.productSlider}
                >
                    {imageUrls.map((img, index) => (
                        <div key={index} className={styles.slideWrapper}>
                            <Image 
                                src={img} 
                                alt={data.productName || 'Product image'} 
                                width={0} 
                                height={0} 
                                sizes="100vw" 
                                className={styles.productImage} 
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </Slider>
                
                {/* Overlay Elements - Only Show on Hover */}
                <Fade in={showIcons} timeout={400}>
                    <div>
                        {/* Image Navigation Arrows */}
                        {imageUrls.length > 1 && (
                            <div className={styles.sliderNavigation}>
                                <IconButton 
                                    className={styles.sliderArrow}
                                    onClick={prevSlide}
                                    size="medium"
                                    aria-label="previous slide"
                                >
                                    <ArrowBackIosNewIcon fontSize="small" sx={{ marginLeft: "3px" }} />
                                </IconButton>
                                <IconButton 
                                    className={styles.sliderArrow}
                                    onClick={nextSlide}
                                    size="medium"
                                    aria-label="next slide"
                                >
                                    <ArrowForwardIosIcon fontSize="small" />
                                </IconButton>
                            </div>
                        )}
                        
                        {/* Image Pagination Dots */}
                        {imageUrls.length > 1 && (
                            <div className={styles.sliderPagination}>
                                {imageUrls.map((_, index) => (
                                    <div 
                                        key={index} 
                                        className={`${styles.paginationDot} ${currentSlide === index ? styles.activeDot : ''}`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Action Buttons */}
                        <ActionsContainer onFavClick={() => {}} onCartClick={() => {}} />
                        
                        {/* Enquire Button */}
                        <div className={styles.enquireButtonContainer}>
                            <EnduireBtn data={data} className={styles.enquireButton} />
                        </div>
                    </div>
                </Fade>
            </div>
            
            {/* Product Info */}
            <div className={styles.productInfo}>
                <Typography variant="h3" className={styles.productName}>
                    {data?.productName || 'Product Name'}
                </Typography>
                
                {data.price && (
                    <Typography variant="body1" className={styles.productPrice}>
                        {formatPrice(data.price)}
                    </Typography>
                )}
                
                <div className={styles.productLine}></div>
                
                <div className={styles.viewDetailsButtonContainer}>
                    <StyledButton
                        variant="text"
                        onClick={navigateToProduct}
                    >
                        View Details
                    </StyledButton>
                </div>
            </div>
        </MuiCard>
    );
}

export default Card;
