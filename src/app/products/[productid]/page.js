import React from 'react';
import { Box, Grid } from '@mui/material';
import ProductDetail from '@/components/Products/ProductDetails/Details';
import ProductInfo from '@/components/Products/ProductDetails/Info';
import ImageViewer from '@/components/Products/ProductDetails/ImageViewer';
import { productDetailsMap } from '@/constants/productInfo';
function ProductDetails(props) {
    const product = productDetailsMap[props.params.productid - 1];
    return (
        <Box mt={8} mb={2} p={2} px={{ xs: 2, sm: 14 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <ImageViewer images={product.images} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ProductDetail data={product} />
                </Grid>
            </Grid>
            <Grid container spacing={3} mt={3}>
                {Object.keys(product.info).map(function (key, index) {
                    return (
                        <Grid item xs={12} sm={6} key={key}>
                            <ProductInfo data={product.info[key]} title={key} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    )
}

export default ProductDetails