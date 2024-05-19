import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import Component from '@/components/Dashboard/Collection';
import {getTypes} from '@/services/apiHelperServer';
async function collections() {
  const collections = await getTypes({type:'collections'})
  return (
    <Box>
    <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}>
      <Typography variant='h5'>HOS Collections</Typography>
      <Button variant='contained'>+ Add New Collection</Button>
    </Box>
    <Box mt={2}>
      <Component data={collections}/>
    </Box>
  </Box>
  )
}

export default collections