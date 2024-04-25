'use client'
import React from 'react'
import { Box, Typography, Divider } from '@mui/material';
import TopNav from '../../components/Common/Breadcrumbs';
import Subnav from '../../components/Products/SubNav';
import Filter from '../../components/Products/ProductFilter';
import Listing from '../../components/Products/Listing';
import {getProducts} from '@/redux/features/product-slice';
import {useDispatch} from 'react-redux';
function Products() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getProducts())
    },[])
    return (
        <>
            <Box mt={8}>
                <TopNav data={[{title:'Home',path:'/'},{title:'Products',path:'/products'}]} style={{ background: 'lightgray',p:2,px:14 }} />
                <Subnav />
                <Box p={2} px={{xs:2,sm:14}}>
                    <Divider sx={{ marginTop: '30px', marginBottom: '10px' }} />
                    <Filter/>
                    <Listing/>
                </Box>
            </Box>
        </>
    )
}

export default Products