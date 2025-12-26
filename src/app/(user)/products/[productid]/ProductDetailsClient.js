'use client'
import React from 'react';
import { Box, Grid, Typography, Divider, IconButton } from '@mui/material';
import ProductDetail from '@/components/Products/ProductDetails/Details';
import ProductInfo from '@/components/Products/ProductDetails/Info';
import ImageViewer from '@/components/Products/ProductDetails/ImageViewer';
import Breadcrumb from '@/components/Common/Breadcrumbs';
import { images } from '../../../../utils/decoratedImageData';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

export default function ProductDetailsClient({ product, productid }) {
    const router = useRouter();
    const data = product?.data || {};
    const infoKeys = Object.keys(data?.info || {}).filter(key => data.info[key]);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #FDFBF7 0%, #FFFFFF 50%, #FAF8F5 100%)',
            }}
        >
            {/* Decorative top border */}
            <Box
                sx={{
                    height: '4px',
                    background: 'linear-gradient(90deg, #D8C29D 0%, #E8D9B5 50%, #D8C29D 100%)',
                }}
            />

            {/* Main Container */}
            <Box
                sx={{
                    maxWidth: '1600px',
                    mx: 'auto',
                    px: { xs: 2, sm: 4, md: 6, lg: 10 },
                    py: { xs: 3, md: 5 },
                }}
            >
                {/* Navigation & Breadcrumb */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                    <IconButton
                        onClick={() => router.back()}
                        sx={{
                            border: '1px solid #E0E0E0',
                            borderRadius: '50%',
                            p: 1,
                            '&:hover': {
                                backgroundColor: '#F5F5F5',
                                borderColor: '#D8C29D',
                            },
                        }}
                    >
                        <ArrowBackIcon sx={{ fontSize: 20, color: '#333' }} />
                    </IconButton>
                    <Breadcrumb
                        data={[
                            { title: 'Home', path: '/' },
                            { title: 'Collection', path: '/products' },
                            { title: data.productName || 'Product', path: `/products/${productid}` },
                        ]}
                    />
                </Box>

                {/* Hero Product Section */}
                <Grid container spacing={{ xs: 3, md: 6 }}>
                    {/* Left: Image Gallery */}
                    <Grid item xs={12} lg={7}>
                        <Box
                            sx={{
                                position: 'sticky',
                                top: 100,
                                backgroundColor: '#FFFFFF',
                                borderRadius: '24px',
                                p: { xs: 2, md: 3 },
                                boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
                                border: '1px solid rgba(216, 194, 157, 0.2)',
                            }}
                        >
                            <ImageViewer images={images(data.media)} />
                        </Box>
                    </Grid>

                    {/* Right: Product Details */}
                    <Grid item xs={12} lg={5}>
                        <ProductDetail data={data} />
                    </Grid>
                </Grid>

                {/* Product Information Section */}
                {infoKeys.length > 0 && (
                    <Box sx={{ mt: { xs: 6, md: 10 } }}>
                        {/* Section Header */}
                        <Box sx={{ textAlign: 'center', mb: 5 }}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: '#D8C29D',
                                    letterSpacing: '4px',
                                    fontFamily: '"DM Sans", sans-serif',
                                    fontSize: '0.75rem',
                                }}
                            >
                                CRAFTSMANSHIP & DETAILS
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: '"Playfair Display", serif',
                                    fontWeight: 500,
                                    color: '#1A1A1A',
                                    mt: 1,
                                }}
                            >
                                Everything You Need to Know
                            </Typography>
                            <Divider
                                sx={{
                                    width: '80px',
                                    mx: 'auto',
                                    mt: 2,
                                    borderColor: '#D8C29D',
                                    borderWidth: '2px',
                                }}
                            />
                        </Box>

                        {/* Info Cards */}
                        <Grid container spacing={3}>
                            {infoKeys.map((key, index) => (
                                <Grid item xs={12} md={6} key={key}>
                                    <ProductInfo data={data.info[key]} title={key} index={index} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}

                {/* Bottom decorative element */}
                <Box
                    sx={{
                        mt: 8,
                        pt: 6,
                        borderTop: '1px solid rgba(216, 194, 157, 0.3)',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: '"Playfair Display", serif',
                            fontStyle: 'italic',
                            color: '#999',
                            fontSize: '0.9rem',
                        }}
                    >
                        &ldquo;Crafted with passion, worn with pride&rdquo;
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
