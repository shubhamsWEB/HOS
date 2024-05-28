'use client'
import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import Component from '@/components/Dashboard/Products';
import { useRouter } from 'next/navigation'
import withDuck from '@/components/HOC/withDuck';
import {productsInjectible} from '../../../../appStore/saga/products';
import {loaderInjectible} from '../../../../appStore/saga/loader';
import {useDispatch,useSelector} from 'react-redux'
function Products() {
  const dispatch = useDispatch();
  const router = useRouter();
  const products = useSelector(state => state.products);
  React.useEffect(() => {
    dispatch({type:'FETCH_PRODUCTS_IN_DASHBOARD',payload:{}});
  },[]);
  return (
    <Box>
    <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}>
      <Typography variant='h5'>Products</Typography>
      <Button variant='contained' onClick={() => router.replace('/admin/dashboard/addproduct')}>+ Add New Product</Button>
    </Box>
    <Box mt={2}>
      <Component/>
    </Box>
  </Box>
  )
}
const sagaInjectables = [loaderInjectible,productsInjectible]
export default withDuck(sagaInjectables)(Products);