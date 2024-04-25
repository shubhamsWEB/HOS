'use client'
import React from 'react'
import {Box,Grid,Typography} from '@mui/material';
import Card from './card';
import {products} from '../../../constants/products';
import {useRouter} from 'next/navigation';
function Listing() {
    const router = useRouter()
  return (
    <Box mt={2}>
        <Grid container spacing={{xs:2,sm:4}}>
            {products.map(item => {
                return (
                    <Grid item xs={6} sm={3} key={item.id} onClick={() => router.push(`/products/${item.id}`)}>
                        <Card data={item}/>
                    </Grid>
                )
            })}
        </Grid>
    </Box>
  )
}

export default Listing