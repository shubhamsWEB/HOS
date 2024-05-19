"use client"
import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import styles from './style.module.scss';
import Badge from './badge';
import {useRouter} from 'next/navigation';
import EnduireBtn from '@/components/Common/EnquireBtn';
function Card({ data }) {
    const sliderRef = useRef(null);
    const router = useRouter()

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
        autoplaySpeed: 800,
        infinite: false,
        fade: true
    };

    return (
        <Box sx={{maxHeight:400}}>
            <Box
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{ marginBottom: '-40%', position: 'relative' }}
                onClick={() => router.push(`/products/${data.id}`)}
            >
                {data.title==='Celestial Sparkle Earrings' && <Badge text={'-20%'}/>}
                <Image src='/assets/ring1.jpg' alt="Ring 1" width={0} height={250} sizes="100vw" className={styles.productImg}/>

                <Slider ref={sliderRef} {...settings} style={{ width: '100%' }}>
                    {data?.medias?.mediaLink.map(img => {
                        return (<div key={img}>
                            <Image src='/assets/ring1.jpg' alt="Ring 1" width={0} height={250} sizes="100vw" className={styles.productImg}/>
                        </div>)
                    })}

                </Slider>
                {showIcons && (
                    <Box sx={{ position: 'absolute', top: 20, right: 8, display: 'flex', gap: '15px', flexDirection: 'column' }}>
                        <Box className={`${styles.icons} ${styles.selected}`}><FavoriteBorderIcon fontSize='small' className={styles.selectedIcon} /></Box>
                        <Box className={styles.icons}><ShareOutlinedIcon fontSize='12px' sx={{ color: "black" }} /></Box>
                        {/* <Box className={styles.icons}><UnfoldMoreRoundedIcon fontSize='12px' sx={{ transform: 'rotate(45deg)', color: "black" }} /></Box> */}
                    </Box>
                )}
            </Box>
            <Box boxShadow={2} p={2} pt={'40%'} sx={{ borderRadius: 2 }}>
                <Box>
                    <Typography variant='h6'>{data.productName}</Typography>
                    <EnduireBtn data={data}/>
                </Box>
            </Box>
        </Box>
    );
}

export default Card;
