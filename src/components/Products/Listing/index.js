'use client'
import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import Card from './card';
function Listing({ data }) {
    return (
        <Box mt={2} p={1}>
            {data?.data?.content?.length > 0 ?
                <Grid container spacing={4}>
                    {data?.data?.content.map(item => {
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

export default Listing