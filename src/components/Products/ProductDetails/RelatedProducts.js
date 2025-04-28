'use client'
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent, Skeleton } from '@mui/material';
import { getAllProducts } from '@/services/apiHelperClient';
import styles from './style.module.scss';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RelatedProducts = ({ category, currentProductId }) => {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRelatedProducts = async () => {
      try {
        setLoading(true);
        const response = await getAllProducts({ categories: category });
        if (response && response.content) {
          // Filter out the current product and limit to 4 items
          const filteredProducts = response.content
            .filter(product => product.id !== currentProductId)
            .slice(0, 4);
          setProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      getRelatedProducts();
    }
  }, [category, currentProductId]);

  if (!loading && products.length === 0) {
    return null; // Don't render anything if no related products
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          className={styles.main}
          sx={{ fontWeight: 600 }}
        >
          You May Also Like
        </Typography>
        
        <Link href={`/products?categories=${category}`} style={{ textDecoration: 'none' }}>
          <Button 
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: 'rgba(212, 175, 55, 0.08)'
              }
            }}
          >
            View All
          </Button>
        </Link>
      </Box>

      <Grid container spacing={3}>
        {loading ? (
          // Skeleton loaders while loading
          Array.from(new Array(4)).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={`skeleton-${index}`}>
              <Card 
                elevation={0}
                sx={{ 
                  borderRadius: 2,
                  overflow: 'hidden',
                  height: '100%',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <Skeleton variant="rectangular" height={200} />
                <CardContent>
                  <Skeleton variant="text" width="70%" height={30} />
                  <Skeleton variant="text" width="40%" height={20} />
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          // Actual products
          products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Link href={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <Card 
                  elevation={0}
                  sx={{ 
                    borderRadius: 2,
                    overflow: 'hidden',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0,0,0,0.05)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.media && product.media.length > 0 
                      ? product.media[0] 
                      : 'https://via.placeholder.com/300x300?text=No+Image'}
                    alt={product.productName}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography 
                      variant="subtitle1" 
                      component="div"
                      className={styles.subMain}
                      sx={{ fontWeight: 500 }}
                    >
                      {product.productName}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      className={styles.sub}
                    >
                      {product.category}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default RelatedProducts; 