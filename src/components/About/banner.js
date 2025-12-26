import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import styles from './style.module.scss'
function Banner() {
    return (
        <Box className="video-container" sx={{ position: 'relative',mt:4 }}>
            <video className='videoTag' autoPlay muted loop style={{ width: "100%", height: '600px', objectFit: 'cover' }} 
                sx={{ height: {xs: '400px', sm: '500px', md: '600px'} }}>
                <source src='./assets/aboutus.mp4' type='video/mp4' />
            </video>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width:'100%', px: {xs: 2, sm: 4} }}>
                <Box sx={{display:'flex',flexDirection:"column",alignItems:"center",textAlign:'center'}}>
                <Typography variant='h1' sx={{color:'#fff', fontSize: {xs: '1.75rem', sm: '2.5rem', md: '3rem'}}} className={styles.title}>Crafting our identity</Typography>
                <Button variant="outlined" sx={{ marginTop: 2,color:'#fff',border:'1px solid black', fontSize: {xs: '0.75rem', sm: '0.875rem'}, padding: {xs: '0.5rem 1.5rem', sm: '0.75rem 2rem'} }}>Shop Now</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Banner