'use client'
import React, { useState } from 'react'
import { Box, Typography, Container, IconButton } from '@mui/material'
import styles from './style.module.scss'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoIcon from '@mui/icons-material/Photo'
import StyledButton from '@/components/Common/StyledButton'

function NewArrival() {
    const [showVideo, setShowVideo] = useState(true);
    
    const toggleMediaType = () => {
        setShowVideo(!showVideo);
    };
    
    return (
        <Box className={styles.container}>
            <Container maxWidth="lg">
                {/* Decorative elements */}
                <Box className={`${styles.decorationElement} ${styles.topRight}`}></Box>
                <Box className={`${styles.decorationElement} ${styles.bottomLeft}`}></Box>
                
                <Box className={styles.contentWrapper}>
                    {/* Image/Video side */}
                    <Box className={styles.imageContainer}>
                        {showVideo ? (
                            <Box className={styles.videoWrapper}>
                                <video autoPlay muted loop>
                                    <source src='/assets/main.mp4' type='video/mp4' />
                                </video>
                                <IconButton 
                                    onClick={toggleMediaType}
                                    sx={{
                                        position: 'absolute',
                                        bottom: 16,
                                        right: 16,
                                        backgroundColor: 'rgba(255,255,255,0.7)',
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
                                    }}
                                >
                                    <PhotoIcon />
                                </IconButton>
                            </Box>
                        ) : (
                            <>
                                <Image
                                    src="/assets/new-arrival.jpg" // Update with actual image path
                                    alt="New Arrival Collection"
                                    width={600}
                                    height={700}
                                    className={styles.image}
                                    priority
                                />
                                <IconButton 
                                    onClick={toggleMediaType}
                                    sx={{
                                        position: 'absolute',
                                        bottom: 16,
                                        right: 16,
                                        zIndex: 3,
                                        backgroundColor: 'rgba(255,255,255,0.7)',
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
                                    }}
                                >
                                    <VideocamIcon />
                                </IconButton>
                            </>
                        )}
                    </Box>
                    
                    {/* Text content side */}
                    <Box className={styles.textContent}>
                        <Typography variant="subtitle1" className={styles.subtitle}>
                            Just Arrived
                        </Typography>
                        
                        <Typography variant="h2" className={styles.title}>
                            New Arrivals Collection
                        </Typography>
                        
                        <Typography variant="body1" className={styles.description}>
                            Discover our latest arrivals, crafted with exquisite attention to detail. 
                            Each piece reflects our commitment to timeless design and exceptional craftsmanship. 
                            Elevate your style with our luxurious new collection.
                        </Typography>
                        
                        <StyledButton 
                            variant="outlined" 
                            endIcon={<ArrowForwardIcon />}
                            href="/products?new=true"
                        >
                            Explore Collection
                        </StyledButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default NewArrival