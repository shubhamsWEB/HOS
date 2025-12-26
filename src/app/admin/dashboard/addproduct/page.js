'use client'
import React from 'react'
import { Box, Typography, Paper, IconButton } from '@mui/material';
import Component from '@/components/Dashboard/AddProduct';
import { useRouter } from 'next/navigation'
import withDuck from '@/components/HOC/withDuck';
import {typesInjectible} from '../../../../appStore/saga/constantTypes';
import {loaderInjectible} from '../../../../appStore/saga/loader';
import {useDispatch,useSelector} from 'react-redux'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function AddProducts() {
  const dispatch = useDispatch();
  const router = useRouter();
  
  React.useEffect(() => {
    dispatch({type:'FETCH_TYPES',payload:{type:'all'}});
  },[]);
  
  return (
    <Box>
      {/* Header Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <IconButton 
            onClick={() => router.back()}
            size="small"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant='h5' sx={{ fontWeight: 600 }}>
            Add New Product
          </Typography>
        </Box>
      </Box>

      {/* Form Section */}
      <Paper 
        elevation={0}
        sx={{
          p: 2,
          borderRadius: 2,
          border: '1px solid rgba(0,0,0,0.08)',
          backgroundColor: '#fff'
        }}
      >
        <Component/>
      </Paper>
    </Box>
  )
}
const sagaInjectables = [loaderInjectible,typesInjectible]
export default withDuck(sagaInjectables)(AddProducts);