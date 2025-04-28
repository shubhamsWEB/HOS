'use client'
import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid, Button, useTheme, useMediaQuery, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import { productsInjectible } from '../../../appStore/saga/products';
import Products from './Products';
import { collections } from './constants';
import styles from './style.module.scss';

// Function to capitalize first letter of each word
const formatCollectionName = (name) => {
    return name.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

function Collection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selected, setSelected] = useState(collections[0].title);
    const [hoveredCollection, setHoveredCollection] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({ type: "FETCH_PRODUCTS", payload: { collections: selected } });
    }, [selected, dispatch]);
    
    return (
        <Box className={styles.collectionSection} py={8}>
            <Container maxWidth="lg">
                {/* Section Title */}
                <Box textAlign="center" mb={5}>
                    <Typography 
                        variant="overline" 
                        component="div" 
                        className={styles.overline}
                        sx={{ 
                            color: theme.palette.primary.main, 
                            letterSpacing: '3px',
                            fontWeight: 500,
                            mb: 1
                        }}
                    >
                        EXPLORE OUR COLLECTIONS
                    </Typography>
                    <Typography 
                        variant="h3" 
                        component="h2" 
                        className={styles.sectionTitle}
                        sx={{ fontWeight: 600, mb: 2 }}
                    >
                        Curated for Every Occasion
                    </Typography>
                    <Typography 
                        variant="body1" 
                        className={styles.sectionDescription}
                        sx={{ 
                            maxWidth: '700px', 
                            mx: 'auto',
                            color: 'text.secondary',
                            mb: 6
                        }}
                    >
                        Discover our carefully curated collections designed to celebrate every moment in your life, 
                        from casual elegance to timeless luxury.
                    </Typography>
                </Box>

                {/* Collection Cards Grid */}
                <Grid container spacing={3} className={styles.collectionsGrid}>
                    {collections.map(item => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Box 
                                className={styles.collectionCard}
                                sx={{
                                    position: 'relative',
                                    height: { xs: '250px', md: '320px' },
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s ease'
                                }}
                                onMouseEnter={() => {
                                    setSelected(item.title);
                                    setHoveredCollection(item.id);
                                }}
                                onMouseLeave={() => setHoveredCollection(null)}
                                onClick={() => window.location.href = item.path}
                            >
                                {/* Background Image */}
                                <Box 
                                    sx={{ 
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundImage: `url(${item.media})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'all 0.6s ease',
                                        transform: hoveredCollection === item.id ? 'scale(1.1)' : 'scale(1)',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)',
                                            zIndex: 1
                                        }
                                    }}
                                />
                                
                                {/* Content */}
                                <Box 
                                    sx={{ 
                                        position: 'relative',
                                        zIndex: 2,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        padding: '30px 25px'
                                    }}
                                >
                                    <Typography 
                                        variant="overline" 
                                        sx={{ 
                                            color: 'rgba(255,255,255,0.9)',
                                            letterSpacing: '2px',
                                            mb: 1
                                        }}
                                        className={styles.cardOverline}
                                    >
                                        COLLECTION
                                    </Typography>
                                    <Typography 
                                        variant="h5" 
                                        className={styles.cardTitle}
                                        sx={{ 
                                            color: '#fff',
                                            fontWeight: 600,
                                            mb: 1,
                                            transition: 'all 0.3s ease',
                                            transform: hoveredCollection === item.id ? 'translateY(-8px)' : 'translateY(0)'
                                        }}
                                    >
                                        {formatCollectionName(item.title)}
                                    </Typography>
                                    
                                    <Box 
                                        sx={{ 
                                            height: hoveredCollection === item.id ? 'auto' : '0px',
                                            overflow: 'hidden',
                                            transition: 'all 0.4s ease',
                                            opacity: hoveredCollection === item.id ? 1 : 0
                                        }}
                                    >
                                        <Typography 
                                            variant="body2" 
                                            className={styles.cardDescription}
                                            sx={{ 
                                                color: 'rgba(255,255,255,0.85)',
                                                mb: 2,
                                                lineHeight: 1.5
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                        
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            endIcon={<ArrowForwardIcon />}
                                            component={Link}
                                            href={item.path}
                                            sx={{
                                                color: '#fff',
                                                borderColor: 'rgba(255,255,255,0.5)',
                                                '&:hover': {
                                                    borderColor: '#fff',
                                                    backgroundColor: 'rgba(255,255,255,0.1)'
                                                }
                                            }}
                                            className={styles.cardButton}
                                        >
                                            View Collection
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                
                {/* Featured Products from Selected Collection */}
                <Box mt={10}>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'flex-start', sm: 'center' }, 
                            justifyContent: 'space-between', 
                            mb: 4 
                        }}
                    >
                        <Box>
                            <Typography 
                                variant="h4" 
                                className={styles.featuredTitle}
                                sx={{ 
                                    fontWeight: 600,
                                    position: 'relative',
                                    pb: 1,
                                    mb: 1,
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '40px',
                                        height: '2px',
                                        backgroundColor: theme.palette.primary.main
                                    }
                                }}
                            >
                                {formatCollectionName(selected)} Collection
                            </Typography>
                            <Typography 
                                variant="body1" 
                                color="text.secondary"
                                className={styles.featuredSubtitle}
                            >
                                Featured pieces from our {formatCollectionName(selected)} line
                            </Typography>
                        </Box>
                        
                        <Button
                            component={Link}
                            href={`/products?collections=${selected}`}
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                mt: { xs: 2, sm: 0 },
                                color: theme.palette.primary.main,
                                '&:hover': {
                                    backgroundColor: 'rgba(212, 175, 55, 0.08)'
                                }
                            }}
                            className={styles.viewAllButton}
                        >
                            View All Products
                        </Button>
                    </Box>
                    
                    <Products />
                </Box>
            </Container>
        </Box>
    );
}

export default withDuck([productsInjectible])(Collection);