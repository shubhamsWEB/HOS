"use client"
import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Badge from './badge';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from './style.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import { useRouter } from 'next/navigation';
import EnduireBtn from '@/components/Common/EnquireBtn';
import { RWebShare } from "react-web-share";

function Card({ data }) {
    const sliderRef = useRef(null);
    const [showIcons, setIcons] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const router = useRouter();

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
            setIcons(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
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
        autoplaySpeed: 300,
        infinite: false,
        fade: true,
        cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)'
    };
    
    const imageUrls = data?.media?.filter(url => !url.includes('.mp4'));

    return (
        <Box 
            className={styles.luxuryCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {data.offer && (
                <Box className={styles.badgeWrapper}>
                    <Badge text={data.offer}/>
                </Box>
            )}
            
            <Box 
                className={`${styles.imageWrapper} ${isHovered ? styles.imageWrapperHovered : ''}`}
                onClick={() => router.push(`/products/${data.id}`)}
            >
                <div className={styles.overlay} />
                <Slider ref={sliderRef} {...settings} className={styles.slider}>
                    {imageUrls.map((img, key) => (
                        <div key={key} className={styles.slideWrapper}>
                            <Image 
                                src={img} 
                                alt={data?.productName || "Product"} 
                                width={0} 
                                height={0} 
                                sizes="100vw" 
                                className={styles.productImgNew}
                                priority={key === 0}
                            />
                        </div>
                    ))}
                </Slider>
            </Box>

            <Box 
                className={`${styles.actionButtons} ${showIcons ? styles.actionButtonsVisible : ''}`}
            >
                <Box 
                    className={styles.iconButton}
                    onClick={(e) => {
                        e.stopPropagation();
                        // Handle favorite logic here
                    }}
                >
                    <FavoriteBorderIcon className={styles.icon} />
                    </Box>
                
                <RWebShare 
                    data={{
                            text: "House of Sansa",
                        url: `${typeof window !== 'undefined' ? window.location.origin : ''}/products/${data.id}`,
                            title: "House of Sansa",
                        }}
                    onClick={() => console.log("shared successfully!")}
                >
                    <Box className={styles.iconButton}>
                        <ShareOutlinedIcon className={styles.icon} />
                    </Box>
                </RWebShare>
                
                <Box 
                    className={styles.iconButton}
                    onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/products/${data.id}`);
                    }}
                >
                    <UnfoldMoreRoundedIcon className={`${styles.icon} ${styles.expandIcon}`} />
                </Box>
            </Box>

            <Box 
                className={`${styles.enquireButtonWrapper} ${showIcons ? styles.enquireButtonVisible : ''}`}
            >
                <EnduireBtn 
                    data={data} 
                    style={{
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '14px',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        padding: '14px 28px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(212, 175, 55, 0.15)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontFamily: '"DM Sans", sans-serif',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(212, 175, 55, 0.3)',
                        },
                        '&:active': {
                            transform: 'translateY(0)',
                        }
                    }}
                />
            </Box>

            <Typography variant='h6' className={styles.productName}>
                {data?.productName}
            </Typography>
        </Box>
    );
}

export default Card;
