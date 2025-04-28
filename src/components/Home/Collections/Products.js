import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../../Products/Listing/card1';
import { Grid, Box, Skeleton, Card, CardContent, CardMedia } from '@mui/material';
import styles from './style.module.scss';

function Products() {
    const { data: products, loading } = useSelector(state => state.products);
    
    if (loading) {
        return (
            <Grid container spacing={3}>
                {[1, 2, 3, 4].map(index => (
                    <Grid item xs={12} sm={4} key={`skeleton-${index}`}>
                        <Card sx={{ height: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                            <Skeleton variant="rectangular" height={200} animation="wave" />
                            <CardContent>
                                <Skeleton height={24} width="80%" animation="wave" />
                                <Skeleton height={20} width="50%" animation="wave" />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    }
    
    if (!products?.length) {
        return (
            <Box 
                sx={{ 
                    textAlign: 'center', 
                    py: 4, 
                    fontFamily: '"DM Sans", sans-serif',
                    color: 'text.secondary'
                }}
            >
                No products found in this collection
            </Box>
        );
    }
    
    return (
        <Grid container spacing={3} className={styles.productsGrid}>
            {products.slice(0, 4).map(item => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <ProductCard data={item} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Products;