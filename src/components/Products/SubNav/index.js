'use client'
import React from 'react'
import { Box, Typography, Breadcrumbs,Button } from '@mui/material';
import { productsCategory } from '../../../constants/productsType'
import {useRouter} from 'next/navigation';
function Filter() {
    const router = useRouter();
    return (
        <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',mt:4}}>
            <Typography variant='h2'>Products</Typography>
            <Breadcrumbs separator="|" id="productSubnav">
                {productsCategory.map(item => {
                    return (<Button
                        underline="hover"
                        color="inherit"
                        key={item.id}
                        onClick={() => router.push(item.path)}
                    >
                        {item.title}
                    </Button>)
                })}
            </Breadcrumbs>
        </Box>
    )
}

export default Filter