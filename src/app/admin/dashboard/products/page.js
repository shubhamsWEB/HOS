'use client'
import React from 'react'
import { Box, Typography, Button, Paper, Chip } from '@mui/material';
import Component from '@/components/Dashboard/Products';
import { useRouter } from 'next/navigation'
import withDuck from '@/components/HOC/withDuck';
import {productsInjectible} from '../../../../appStore/saga/products';
import {loaderInjectible} from '../../../../appStore/saga/loader';
import {useDispatch,useSelector} from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import InventoryIcon from '@mui/icons-material/Inventory';

function Products() {
  const dispatch = useDispatch();
  const router = useRouter();
  const products = useSelector(state => state.products);
  
  React.useEffect(() => {
    dispatch({type:'FETCH_PRODUCTS_IN_DASHBOARD',payload:{}});
  },[]);

  const totalProducts = products?.data?.length || 0;

  return (
    <Box>
      {/* Header Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          mb: 3, 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 2,
          color: '#fff'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant='h4' sx={{ fontWeight: 700, mb: 1, color: '#fff' }}>
              Products Management
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
              <Chip 
                icon={<InventoryIcon sx={{ color: '#fff !important' }} />}
                label={`${totalProducts} Total Products`}
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  color: '#fff',
                  fontWeight: 500
                }}
              />
            </Box>
          </Box>
          <Button 
            variant='contained' 
            startIcon={<AddIcon />}
            onClick={() => router.replace('/admin/dashboard/addproduct')}
            sx={{
              backgroundColor: '#fff',
              color: '#667eea',
              fontWeight: 600,
              px: 3,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            Add New Product
          </Button>
        </Box>
      </Paper>

      {/* Products Table */}
      <Paper 
        elevation={0}
        sx={{ 
          borderRadius: 2,
          border: '1px solid rgba(0,0,0,0.08)',
          overflow: 'hidden'
        }}
      >
        <Component/>
      </Paper>
    </Box>
  )
}
const sagaInjectables = [loaderInjectible,productsInjectible]
export default withDuck(sagaInjectables)(Products);