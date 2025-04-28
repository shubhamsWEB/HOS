import React from 'react';
import { Box, Grid, Container, Divider } from '@mui/material';
import ProductDetail from '@/components/Products/ProductDetails/Details';
import ProductInfo from '@/components/Products/ProductDetails/Info';
import ImageViewer from '@/components/Products/ProductDetails/ImageViewer';
import RelatedProducts from '@/components/Products/ProductDetails/RelatedProducts';
import ProductMetaInfo from '@/components/Products/ProductDetails/MetaInfo';
import {fetchProduct} from '../../../../services/apiHelperServer';
import {images} from '../../../../utils/decoratedImageData';

export const metadata = {
  title: 'Product Details | House of Sansa',
  description: 'Explore our exquisite jewelry collections with detailed information about craftsmanship, materials, and design.',
};

async function ProductDetails(props) {
    const product = await fetchProduct({id:props.params.productid})
    
    return (
        <Box sx={{ 
            paddingTop: { xs: 8, sm: 12 } // Add padding to account for fixed navbar
        }}>
            {/* Product Hero Section */}
            <Box 
                sx={{ 
                    backgroundColor: '#f9f2ea', 
                    pt: { xs: 2, md: 4 },
                    pb: { xs: 3, md: 6 }
                }}
            >
                <Container maxWidth="lg">
                    {/* Main Product Section */}
                    <Grid container spacing={{ xs: 3, md: 6 }}>
                        {/* Product Images */}
                        <Grid item xs={12} md={7} lg={8}>
                            <Box 
                                sx={{ 
                                    backgroundColor: '#fff',
                                    borderRadius: '4px',
                                    overflow: 'hidden',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                                }}
                            >
                                <ImageViewer images={images(product.data.media)} />
                            </Box>
                        </Grid>
                        
                        {/* Product Details */}
                        <Grid item xs={12} md={5} lg={4}>
                            <Box 
                                sx={{ 
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <ProductDetail data={product.data} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            
            {/* Product Information Tabs Section */}
            <Container maxWidth="lg">
                <Box py={{ xs: 4, md: 8 }}>
                    <Grid container spacing={4}>
                        {/* Product Information */}
                        <Grid item xs={12} md={8}>
                            <Box sx={{ mb: 4 }}>
                                <Box sx={{ mb: 4 }}>
                                    {Object.keys(product.data.info).map((key, index) => (
                                        <Box mb={2} key={key}>
                                            <ProductInfo data={product.data.info[key]} title={key} />
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                        
                        {/* Meta Information */}
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    backgroundColor: '#fafafa',
                                    p: 3,
                                    borderRadius: '4px',
                                    border: '1px solid #f0f0f0',
                                }}
                            >
                                <ProductMetaInfo data={product.data} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                
                {/* Related Products Section */}
                <Box pb={8}>
                    <Divider sx={{ mb: 6 }} />
                    <RelatedProducts category={product.data.category} currentProductId={product.data.id} />
                </Box>
            </Container>
        </Box>
    )
}

export default ProductDetails