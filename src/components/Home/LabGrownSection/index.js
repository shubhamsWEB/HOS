'use client'
import React from 'react';
import { Box, Grid, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';
import DiamondIcon from '@mui/icons-material/Diamond';
import SpaIcon from '@mui/icons-material/Spa';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const LabGrownSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const benefits = [
    {
      icon: <DiamondIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'Same Brilliance',
      description: 'Lab-grown diamonds possess the same physical, chemical, and optical properties as mined diamonds.'
    },
    {
      icon: <SpaIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'Eco-Friendly',
      description: 'Lab grown diamonds require less water and land disturbance than mined diamonds, reducing environmental impact.'
    },
    {
      icon: <AttachMoneyIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'Better Value',
      description: 'Get 20-40% more diamond for your budget compared to traditional mined diamonds.'
    },
    {
      icon: <CheckCircleOutlineIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'Ethical Sourcing',
      description: 'Our lab-grown diamonds are ethically produced with fair labor practices and transparent supply chains.'
    }
  ];

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
        >
          THE FUTURE OF DIAMONDS
        </Typography>
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom
          sx={{ fontWeight: 600 }}
          className={styles.main}
        >
          Lab-Grown Diamonds
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            color: 'text.secondary',
            mb: 4
          }}
          className={styles.sub}
        >
          Discover exquisite, sustainable diamonds crafted with cutting-edge technology and ethical practices.
          Identical to mined diamonds in every way, but with a story you can be proud of.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box>
            {benefits.map((benefit, index) => (
              <Box 
                key={index} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  mb: 3,
                  p: 2,
                  borderRadius: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(212, 175, 55, 0.05)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <Box sx={{ mr: 2, mt: 1 }}>
                  {benefit.icon}
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom className={styles.main}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className={styles.sub}>
                    {benefit.description}
                  </Typography>
                </Box>
              </Box>
            ))}
            
            <Box mt={4}>
              <Link href="/products?categories=diamond" style={{ textDecoration: 'none' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  sx={{ 
                    borderRadius: '0',
                    px: 4,
                    py: 1.5
                  }}
                >
                  Explore Lab-Grown Diamonds
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Box 
            sx={{ 
              position: 'relative',
              height: isMobile ? '300px' : '500px',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <Image
              src="https://images.pexels.com/photos/11638881/pexels-photo-11638881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Lab-grown diamond close-up"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <Box 
              sx={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                p: 3,
                color: 'white'
              }}
            >
              <Typography variant="h6" className={styles.main}>
                Sustainable Luxury
              </Typography>
              <Typography variant="body2" className={styles.sub}>
                Lab-grown diamonds represent the perfect blend of modern science and timeless beauty.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LabGrownSection; 