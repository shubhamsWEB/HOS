'use client'
import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Box, Typography } from '@mui/material';

function ImageViewer({ images }) {
    const [advancedExampleOpen, setAdvancedExampleOpen] = React.useState(true);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const totalImages = images?.length || 0;

    return (
        <Box sx={{ position: 'relative' }}>
            {/* Image Counter Badge */}
            {totalImages > 1 && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        zIndex: 10,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '20px',
                        px: 1.5,
                        py: 0.5,
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            fontFamily: '"DM Sans", sans-serif',
                            color: '#fff',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                        }}
                    >
                        {currentIndex + 1} / {totalImages}
                    </Typography>
                </Box>
            )}

            {/* Main Lightbox */}
            <Box
                sx={{
                    '& .yarl__container': {
                        backgroundColor: '#FFFFFF !important',
                        borderRadius: '16px',
                    },
                    '& .yarl__thumbnails_container': {
                        backgroundColor: 'transparent !important',
                        padding: '16px 0 0 0 !important',
                    },
                    '& .yarl__thumbnails_thumbnail': {
                        backgroundColor: '#F8F8F8 !important',
                        borderRadius: '10px !important',
                        border: '2px solid transparent !important',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease !important',
                        '&:hover': {
                            borderColor: '#D8C29D !important',
                        },
                    },
                    '& .yarl__thumbnails_thumbnail_active': {
                        borderColor: '#D8C29D !important',
                    },
                    '& .yarl__thumbnails_vignette': {
                        background: 'transparent !important',
                        boxShadow: 'none !important',
                    },
                    // Clean navigation arrow styling - transparent background, only arrow visible
                    '& .yarl__navigation_prev, & .yarl__navigation_next': {
                        backgroundColor: 'transparent !important',
                        border: 'none !important',
                        boxShadow: 'none !important',
                        width: '48px !important',
                        height: '48px !important',
                        transition: 'all 0.3s ease !important',
                        display: 'flex !important',
                        alignItems: 'center !important',
                        justifyContent: 'center !important',
                        '&:hover': {
                            backgroundColor: 'transparent !important',
                        },
                        '& svg': {
                            color: '#333 !important',
                            width: '28px !important',
                            height: '28px !important',
                            transition: 'all 0.3s ease !important',
                        },
                        '&:hover svg': {
                            color: '#D8C29D !important',
                            transform: 'scale(1.1)',
                        },
                    },
                    '& .yarl__navigation_prev': {
                        left: '8px !important',
                    },
                    '& .yarl__navigation_next': {
                        right: '8px !important',
                    },
                    // Hide only zoom and fullscreen toolbar buttons
                    '& .yarl__toolbar': {
                        display: 'none !important',
                    },
                    '& .yarl__slide_image': {
                        borderRadius: '12px',
                        cursor: 'zoom-in',
                    },
                }}
            >
                <Lightbox
                    open={advancedExampleOpen}
                    close={() => setAdvancedExampleOpen(false)}
                    slides={images}
                    plugins={[Inline, Thumbnails, Video, Zoom]}
                    on={{
                        view: ({ index }) => setCurrentIndex(index),
                    }}
                    carousel={{
                        finite: false,
                        preload: 2,
                    }}
                    thumbnails={{
                        position: 'bottom',
                        width: 70,
                        height: 70,
                        gap: 10,
                        borderRadius: 10,
                        padding: 4,
                    }}
                    zoom={{
                        maxZoomPixelRatio: 3,
                        zoomInMultiplier: 2,
                        doubleTapDelay: 300,
                        doubleClickDelay: 300,
                        scrollToZoom: true,
                    }}
                    inline={{
                        style: {
                            width: "100%",
                            maxWidth: "100%",
                            height: '100%',
                            minHeight: '480px',
                            aspectRatio: "1 / 1",
                            margin: "0 auto",
                            borderRadius: '16px',
                            overflow: 'hidden',
                        },
                    }}
                />
            </Box>
        </Box>
    )
}

export default ImageViewer
