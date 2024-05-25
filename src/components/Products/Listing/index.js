'use client'
import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Card from './card';
import { useDispatch, useSelector } from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import { productsInjectible } from '../../../appStore/saga/products';
import { useSearchParams } from 'next/navigation';

function Listing() {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();

    useEffect(() => {
        const categories = searchParams.get('categories') || '';
        const payload = categories ? { categories } : {};
        dispatch({ type: "FETCH_PRODUCTS", payload});
    }, [searchParams.toString()]); // Include searchParams.toString() as a dependency

    const products = useSelector(state => state.products);

    return (
        <Box mt={2} p={1}>
            {products?.data?.length > 0 ?
                <Grid container spacing={4}>
                    {products?.data?.map(item => {
                        return (
                            <Grid item xs={12} sm={3} key={item.id}>
                                <Card data={item} />
                            </Grid>
                        )
                    })}
                </Grid> : <Typography variant='h6' textAlign={'center'}>No Products Available</Typography>
            }
        </Box>
    )
}

export default withDuck([productsInjectible])(Listing);
