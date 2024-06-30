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
    const imageUrls = data?.media?.filter(url => !url.includes('.mp4'));

    return (
        <Box sx={{ position: 'relative' }} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                {data.offer && <Badge text={data.offer}/>}
            <Box
                boxShadow={2}
                onClick={() => router.push(`/products/${data.id}`)}
            >
                <Slider ref={sliderRef} {...settings} style={{ width: '100%' }}>
                    {imageUrls.map(img => {
                        return (
                            <Image src={img} alt="Ring 1" width={0} height={0} sizes="100vw" className={styles.productImgNew} />
                        )
                    })}

                </Slider>
            </Box>
            {showIcons && (
                <>
                    <Box sx={{ position: 'absolute', bottom: '8%', width: '100%' }}>
                        <EnduireBtn data={data} />
                    </Box>
                    <Box sx={{ position: 'absolute', top: 20, right: 8, display: 'flex', gap: '15px', flexDirection: 'column' }}>
                        <Box sx={{ padding: '5px', background: "black", borderRadius: '50%', margin: 'auto', width: '30px', height: '30px', cursor: 'pointer' }}><FavoriteBorderIcon fontSize='small' sx={{ color: "#fff" }} /></Box>
                        <RWebShare data={{
                            text: "House of Sansa",
                            url: `${ window.location.origin}/products/${data.id}`,
                            title: "House of Sansa",
                        }}
                            onClick={() => console.log("shared successfully!")}>

                            <Box sx={{ padding: '5px', background: "black", borderRadius: '50%', margin: 'auto', width: '30px', height: '30px' }}><ShareOutlinedIcon fontSize='small' sx={{ color: "#fff" }} /></Box>
                        </RWebShare>
                        <Box sx={{ padding: '5px', background: "black", borderRadius: '50%', margin: 'auto', width: '30px', height: '30px' }}><UnfoldMoreRoundedIcon fontSize='small' sx={{ transform: 'rotate(45deg)', color: "#fff" }} /></Box>
                    </Box>
                </>
            )}
            <Typography variant='h6' className={styles.productName}>{data?.productName}</Typography>
        </Box>
    );
}

export default Card;
