'use client'
import React, { useState } from 'react';
import { Box, Typography, Grid, Avatar, Paper, Rating, Button, useTheme, useMediaQuery } from '@mui/material';
import styles from './style.module.scss';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sophia Johnson",
      location: "New York, NY",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 5,
      text: "I received my engagement ring from House of Sansa and couldn't be happier! The craftsmanship is impeccable, and the diamonds sparkle beautifully. Customer service was exceptional from start to finish."
    },
    {
      id: 2,
      name: "Michael Reynolds",
      location: "Los Angeles, CA",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 5,
      text: "My wife absolutely loves the lab-grown diamond necklace I purchased for our anniversary. The quality is outstanding, and knowing it's ethically sourced makes it even more special. Will definitely purchase from House of Sansa again!"
    },
    {
      id: 3,
      name: "Olivia Chen",
      location: "Chicago, IL",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 5,
      text: "House of Sansa's customer service is incredible! They helped me design a custom bracelet that perfectly matched what I had in mind. The finished piece exceeded my expectations, and I've received countless compliments."
    }
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box>
      <Box mb={6} textAlign="center">
        <Typography 
          variant="overline" 
          component="div" 
          sx={{ 
            color: theme.palette.primary.main, 
            letterSpacing: '3px',
            mb: 1,
            fontWeight: 500
          }}
          className={styles.sub}
        >
          CUSTOMER STORIES
        </Typography>
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom
          sx={{ fontWeight: 600 }}
          className={styles.main}
        >
          What Our Clients Say
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            maxWidth: '700px', 
            margin: '0 auto', 
            color: 'text.secondary',
            mb: 4
          }}
          className={styles.sub}
        >
          Discover why our clients choose House of Sansa for their most cherished moments.
        </Typography>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <Grid container spacing={4} justifyContent="center">
          {isMobile ? (
            // Mobile view - show one testimonial at a time
            <Grid item xs={12} sm={10} md={8}>
              <TestimonialCard testimonial={testimonials[activeSlide]} />
            </Grid>
          ) : (
            // Desktop view - show three testimonials
            testimonials.map((testimonial) => (
              <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </Grid>
            ))
          )}
        </Grid>

        {isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              onClick={handlePrevSlide}
              sx={{
                minWidth: '40px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                p: 0,
                mr: 2,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.divider}`
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </Button>
            <Button
              onClick={handleNextSlide}
              sx={{
                minWidth: '40px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                p: 0,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.divider}`
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const theme = useTheme();
  
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
        },
        position: 'relative',
        overflow: 'hidden'
      }}
      className={styles.testimonialCard}
    >
      <Box sx={{ position: 'absolute', top: 12, right: 12, opacity: 0.1, transform: 'rotate(180deg)' }}>
        <FormatQuoteIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar
          src={testimonial.avatar}
          alt={testimonial.name}
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Box>
          <Typography variant="h6" className={styles.main}>
            {testimonial.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.sub}>
            {testimonial.location}
          </Typography>
        </Box>
      </Box>
      
      <Rating value={testimonial.rating} readOnly precision={0.5} sx={{ mb: 2 }} />
      
      <Typography
        variant="body1"
        className={styles.sub}
        sx={{
          fontStyle: 'italic',
          color: 'text.secondary',
          lineHeight: 1.6,
          mb: 2,
          flexGrow: 1
        }}
      >
        "{testimonial.text}"
      </Typography>
    </Paper>
  );
};

export default Testimonials; 