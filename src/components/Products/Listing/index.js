'use client'
import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Card from './card';
import { useDispatch, useSelector } from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import { productsInjectible } from '@/appStore/saga/products';
import { loaderInjectible } from '@/appStore/saga/loader';
import { useSearchParams } from 'next/navigation';

function Listing() {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();

    useEffect(() => {
        const categories = searchParams.get('categories') || '';
        const collections = searchParams.get('collections') || '';
        let payload = {};
        if(categories) payload.categories = categories;
        if(collections) payload.collections = collections;
        dispatch({ type: "FETCH_PRODUCTS", payload });
    }, [dispatch, searchParams]);

    const {products,loading,state} = useSelector(state => ({products:state.products,loading:state.loader.loading,state}));

    return (
        <Box mt={2} p={1}>
            {products?.data?.length > 0 ?
                <Grid container spacing={4}>
                    {products?.data?.map(item => (
                        <Grid item xs={12} sm={3} key={item.id}>
                            <Card data={item} />
                        </Grid>
                    ))}
                </Grid>
                :
                <Typography variant='h6' textAlign='center'>No Products Available</Typography>
            }
        </Box>
    );
}
export default withDuck([productsInjectible,loaderInjectible])(Listing);
