"use client"
import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import styles from './style.module.scss';
import Badge from './badge';
function Card({ data }) {
    const sliderRef = useRef(null);
    const [showIcons, setIcons] = React.useState(false);
    const handleMouseEnter = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
            setIcons(true)
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
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        autoplay: false,
        autoplaySpeed: 200,
        infinite: false,
        fade: true
    };

    return (
        <Box>
            <Box
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{ marginBottom: '-40%', position: 'relative' }}
            >
                <Badge text={'-20%'}/>
                <Slider ref={sliderRef} {...settings} style={{ width: '100%' }}>
                    {data?.images.map(img => {
                        return (<div key={img}>
                            <Image src={`${img}`} alt="Ring 1" width={0} height={300} sizes="100vw" style={{ width: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                        </div>)
                    })}

                </Slider>
                {showIcons && (
                    <Box sx={{ position: 'absolute', top: 20, right: 8, display: 'flex', gap: '15px', flexDirection: 'column' }}>
                        <Box className={`${styles.icons} ${styles.selected}`}><FavoriteBorderIcon fontSize='small' className={styles.selectedIcon} /></Box>
                        <Box className={styles.icons}><ShareOutlinedIcon fontSize='12px' sx={{ color: "black" }} /></Box>
                        <Box className={styles.icons}><UnfoldMoreRoundedIcon fontSize='12px' sx={{ transform: 'rotate(45deg)', color: "black" }} /></Box>
                    </Box>
                )}
            </Box>
            <Box boxShadow={2} p={2} pt={'40%'} sx={{ borderRadius: 2 }}>
                <Box>
                    <Typography variant='h6'>Diamond Ring</Typography>
                    <Button variant="contained" fullWidth className={styles.btn}>Enquire Now</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Card;