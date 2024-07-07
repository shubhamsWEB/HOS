import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../../Products/Listing/card1';
import { Grid } from '@mui/material';
function Products() {
    const {readytoshipData} = useSelector(state => state.products);
    return readytoshipData?.data?.length > 0 ? (
        <Grid container spacing={4}>
            {readytoshipData?.data?.map(item => {
                return (<Grid item xs={12} sm={6} key={item.id}>
                    <ProductCard data={item}/>
                </Grid>)
            })}
        </Grid>
    ) : null
}

export default Products;