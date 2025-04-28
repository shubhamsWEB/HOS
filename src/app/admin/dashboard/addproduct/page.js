'use client'
import React, { useEffect } from 'react'
import { Box, Typography, Paper } from '@mui/material';
import Component from '@/components/Dashboard/AddProduct';
import { useRouter } from 'next/navigation'
import withDuck from '@/components/HOC/withDuck';
import {typesInjectible} from '../../../../appStore/saga/constantTypes';
import {loaderInjectible} from '../../../../appStore/saga/loader';
import {useDispatch,useSelector} from 'react-redux'

function AddProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCollections());
  }, [dispatch]);
  return (
    <Box>
    <Paper mt={2} sx={{p:2,borderRadius:'8px',mt:2}}>
      <Component/>
    </Paper>
  </Box>
  )
}
const sagaInjectables = [loaderInjectible,typesInjectible]
export default withDuck(sagaInjectables)(AddProducts);