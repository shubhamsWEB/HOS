import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import Component from '@/components/Dashboard/Category';
import {getTypes} from '@/services/apiHelperServer';
async function categories() {
const caterogies = await getTypes({type:'categories'})
  return (
    <Box>
      <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}>
        <Typography variant='h5'>Product Categories</Typography>
        <Button variant='contained'>+ Add New Category</Button>
      </Box>
      <Box mt={2}>
        <Component data={caterogies}/>
      </Box>
    </Box>
  )
}

export default categories