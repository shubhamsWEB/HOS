'use client'
import React from 'react'
import { CircularProgress, Box } from '@mui/material';
import { useSelector } from 'react-redux';
function Loader() {
    const { loading } = useSelector((state) => state.loader)
    return (
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', display: loading ? 'block' : 'none', background: 'rgba(255,255,255,.8)',zIndex:999 }}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                <CircularProgress />
            </Box>
        </Box>
    )
}

export default Loader