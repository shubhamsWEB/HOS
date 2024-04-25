'use client'
import React from 'react';
import { Box, Grid } from '@mui/material';
import { useParams } from 'next/navigation';
import ProductDetail from '@/components/Products/ProductDetails/Details';
import ProductInfo from '@/components/Products/ProductDetails/Accordian';
import ImageViewer from '@/components/Products/ProductDetails/ImageViewer';
function ProductDetails() {
    const params = useParams();
    return (
        <Box mt={8} mb={2} p={2} px={{ xs: 2, sm: 14 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <ImageViewer/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ProductDetail data={{ id: params.productid }} />
                </Grid>
            </Grid>
            <Grid container spacing={3} mt={3}>
                {[1, 2, 3, 4].map(item => {
                    return (
                        <Grid item xs={6} key={item}>
                            <ProductInfo />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default ProductDetails