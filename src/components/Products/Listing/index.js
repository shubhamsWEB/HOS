'use client'
import React, { useEffect, Suspense } from 'react';
import { Box, Grid, Typography, Container, Divider, Pagination } from '@mui/material';
import Card from './card1';
import { useDispatch, useSelector } from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import { productsInjectible } from '@/appStore/saga/products';
import { loaderInjectible } from '@/appStore/saga/loader';
import { useSearchParams, useRouter } from 'next/navigation';
import Skeleton from '@mui/material/Skeleton';

function Listing() {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const categories = searchParams.get('categories') || '';
    const collections = searchParams.get('collections') || '';
    const page = parseInt(searchParams.get('page') || '1');
    
    useEffect(() => {
        let payload = {
            page: page,
            limit_per_page: 8
        };
        if (categories) payload.categories = categories;
        if (collections) payload.collections = collections;
        dispatch({ type: "FETCH_PRODUCTS", payload });
    }, [dispatch, searchParams, page, categories, collections]);
    
    const { products, loading } = useSelector(state => ({
        products: state.products,
        loading: state.loader.loading
    }));

    const handlePageChange = (event, value) => {
        // Construct new URL with updated page parameter
        let currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('page', value);
        router.push(`?${currentParams.toString()}`);
    };

    return (
        <Container maxWidth="lg">
            <Suspense fallback={<LoadingSkeletons />}>
                {!loading ? (
                    <Box my={5}>
                        {/* <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
                            Our Collection
                        </Typography>
                        <Divider sx={{ mb: 4 }} /> */}
                        
                        {products?.data?.length > 0 ? (
                            <>
                                <Grid container spacing={3}>
                                    {products?.data?.map(item => (
                                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                                            <Card data={item} />
                                        </Grid>
                                    ))}
                                </Grid>
                                
                                {products.paginator && products.paginator.total_count > products.paginator.limit_per_page && (
                                    <Box display="flex" justifyContent="center" mt={6} mb={4}>
                                        <Pagination 
                                            count={Math.ceil(products.paginator.total_count / products.paginator.limit_per_page)} 
                                            page={page}
                                            onChange={handlePageChange}
                                            color="primary"
                                            size="large"
                                        />
                                    </Box>
                                )}
                            </>
                        ) : (
                            <Box textAlign="center" py={8}>
                                <Typography variant='h6'>No Products Available</Typography>
                                <Typography color="text.secondary" sx={{ mt: 1 }}>
                                    Please try a different category or check back later.
                                </Typography>
                            </Box>
                        )}
                    </Box>
                ) : (
                    <LoadingSkeletons />
                )}
            </Suspense>
        </Container>
    );
}

function LoadingSkeletons() {
    return (
        <Box my={5}>
            <Skeleton variant="text" width={300} height={60} sx={{ mx: 'auto', mb: 3 }} />
            <Skeleton variant="rectangular" width="100%" height={4} sx={{ mb: 4 }} />
            
            <Grid container spacing={3}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item}>
                        <Skeleton variant="rectangular" width="100%" height={280} sx={{ mb: 1 }} />
                        <Skeleton variant="text" width="70%" height={30} sx={{ mb: 0.5 }} />
                        <Skeleton variant="text" width="40%" height={24} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default withDuck([productsInjectible, loaderInjectible])(Listing);
