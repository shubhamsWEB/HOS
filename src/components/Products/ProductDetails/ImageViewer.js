'use client'
import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Box, Grid, useTheme, useMediaQuery, IconButton } from '@mui/material';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import styles from './style.module.scss';
import Image from 'next/image';

import {advancedSlides,slides} from '../../../constants/slides';

function ImageViewer({ images }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Open fullscreen lightbox
  const openLightbox = (index) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };
  
  // Select a thumbnail
  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };
  
  return (
    <Box sx={{ position: 'relative' }}>
      {/* Main Inline Lightbox */}
      <Box 
        sx={{ 
          position: 'relative',
          borderRadius: '4px',
          overflow: 'hidden',
          backgroundColor: '#fff',
          mb: 2
        }}
      >
        <Lightbox
          open={true}
          close={() => {}}
          slides={images}
          plugins={[Inline]}
          controller={{ closeOnBackdropClick: false }}
          carousel={{ finite: true }}
          inline={{
            style: {
              width: "100%",
              maxWidth: "900px",
              height: isMobile ? '300px' : '500px',
              margin: "0 auto",
            },
            thumbnails: { 
              enabled: false 
            }
          }}
          index={selectedImage}
        >
          <Image
            src={images[selectedImage].src}
            alt="Product"
            width={500}
            height={500}
            className={styles.mainImage}
            priority
          />
        </Lightbox>
        
        {/* Fullscreen button */}
        <IconButton
          onClick={() => openLightbox(selectedImage)}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            zIndex: 9
          }}
          size="small"
        >
          <ZoomOutMapIcon fontSize="small" />
        </IconButton>
      </Box>
      
      {/* Thumbnails */}
      <Box sx={{ mt: 1 }}>
        <Grid container spacing={1}>
          {images.map((image, index) => (
            <Grid item xs={3} sm={2} key={index}>
              <Box
                onClick={() => handleThumbnailClick(index)}
                sx={{
                  height: '70px',
                  width: '100%',
                  overflow: 'hidden',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  border: selectedImage === index 
                    ? `2px solid ${theme.palette.primary.main}` 
                    : '2px solid transparent',
                  '&:hover': {
                    border: `2px solid ${theme.palette.primary.light}`
                  }
                }}
                className={`${styles.productImageThumbnail} ${selectedImage === index ? styles.active : ''}`}
              >
                <Image
                  src={image.src}
                  alt={`Product thumbnail ${index + 1}`}
                  width={100}
                  height={70}
                  className={styles.productImageThumbnail}
                  priority
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Fullscreen Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images}
        plugins={[Fullscreen, Thumbnails, Video, Zoom, Slideshow, Captions]}
        index={selectedImage}
      >
        <Image
          src={images[selectedImage].src}
          alt="Product"
          width={500}
          height={500}
          className={styles.mainImage}
          priority
        />
      </Lightbox>
    </Box>
  );
}

export default ImageViewer;