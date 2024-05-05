'use client'
import React from 'react'
import {Box,Grid,Typography} from '@mui/material';
import Card from './card';
import {products} from '../../../constants/products';
function Listing({data}) {
  return (
    <Box mt={2} p={3}>
        <Grid container spacing={4}>
            {products.map(item => {
                return (
                    <Grid item xs={12} sm={3} key={item.id}>
                        <Card data={item}/>
                    </Grid>
                )
            })}
        </Grid>
    </Box>
  )
}

export default Listing