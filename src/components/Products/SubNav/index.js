import React from 'react'
import { Box, Typography, Breadcrumbs,Link } from '@mui/material';
import { productsCategory } from '../../../constants/productsType'
// import Link from 'next/link';
import styles from './style.module.scss';
function Filter() {
    return (
        <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',mt:4}}>
            <Typography variant='h2'>Products</Typography>
            <Breadcrumbs separator="|" id="productSubnav">
                {productsCategory.map(item => {
                    return (<Link
                        underline="hover"
                        color="inherit"
                        href={item.path}
                        key={item.id}
                    >
                        {item.title}
                    </Link>)
                })}
            </Breadcrumbs>
        </Box>
    )
}

export default Filter