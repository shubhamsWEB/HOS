import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../../Products/Listing/card1';
import { Grid } from '@mui/material';
function Products() {
    const products = useSelector(state => state.products);
    return products?.data?.length > 0 ? (
        <Grid container spacing={4}>
            {products?.data?.map(item => {
                return (<Grid item xs={12} sm={4} key={item.id}>
                    <ProductCard data={item}/>
                </Grid>)
            })}
        </Grid>
    ) : null
}

export default Products;