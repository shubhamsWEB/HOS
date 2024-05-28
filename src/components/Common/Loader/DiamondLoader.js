'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import {Box} from '@mui/material'
function DiamondLoader() {
    const { loading } = useSelector((state) => state.loader)

  return loading ? (
      null
    // <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', display: loading ? 'block' : 'none', background: 'rgba(255,255,255,.8)',zIndex:999 }}>
    //         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
    //            Loading.....
    //         </Box>
    //     </Box>
  ) : null
}

export default DiamondLoader