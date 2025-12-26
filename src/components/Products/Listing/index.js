'use client'
import React, { useEffect, Suspense } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Card from './card1';
import { useDispatch, useSelector } from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import { productsInjectible } from '@/appStore/saga/products';
import { loaderInjectible } from '@/appStore/saga/loader';
import { useSearchParams } from 'next/navigation';
import Skeleton from '@mui/material/Skeleton';

function Listing() {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const categories = searchParams.get('categories') || '';
    const collections = searchParams.get('collections') || '';
    const price = searchParams.get('price') || '';
    const metalColour = searchParams.get('metalColour') || '';
    const solitaireSize = searchParams.get('solitaireSize') || '';
    const solitaireShape = searchParams.get('solitaireShape') || '';
    const gender = searchParams.get('gender') || '';
    
    useEffect(() => {
        let payload = {};
        if (categories) payload.categories = categories;
        if (collections) payload.collections = collections;
        if (price) payload.price = price;
        if (metalColour) payload.metalColour = metalColour;
        if (solitaireSize) payload.solitaireSize = solitaireSize;
        if (solitaireShape) payload.solitaireShape = solitaireShape;
        if (gender) payload.gender = gender;
        dispatch({ type: "FETCH_PRODUCTS", payload });
    }, [dispatch, searchParams]);
    
    const { products, loading, state } = useSelector(state => ({
        products: state.products,
        loading: state.loader.loading,
        state
    }));

    return (
        <Suspense fallback={<LoadingSkeletons />}>
            {!loading ? (
                <Box mb={10}>
                    {products?.data?.length > 0 ? (
                        <Grid container spacing={3}>
                            {products?.data?.map(item => (
                                <Grid item xs={12} md={4} key={item.id}>
                                    <Card data={item} />
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <Typography variant='h6' textAlign='center' sx={{ mt: 4 }}>
                            No Products Available
                        </Typography>
                    )}
                </Box>
            ) : (
                <LoadingSkeletons />
            )}
        </Suspense>
    );
}

function LoadingSkeletons() {
    return (
        <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <Grid item xs={12} md={4} key={item}>
                    <Skeleton variant='rectangular' height={400} sx={{ borderRadius: 2 }} />
                </Grid>
            ))}
        </Grid>
    );
}

export default withDuck([productsInjectible, loaderInjectible])(Listing);
