import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import styles from './style.module.scss'
function Banner() {
    return (
        <Box className="video-container" sx={{ position: 'relative' }}>
            <video className='videoTag' autoPlay muted loop style={{ width: "100%", height: '500px', objectFit: 'cover' }}>
                <source src='./assets/main.mp4' type='video/mp4' />
            </video>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width:'100%' }}>
                <Box sx={{display:'flex',flexDirection:"column",alignItems:"center",textAlign:'center'}}>
                <Typography variant='h1' sx={{color:'#fff'}} className={styles.title}>Crafting our identity</Typography>
                <Button variant="outlined" sx={{ marginTop: 2,color:'#fff',border:'1px solid black' }}>Shop Now</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Banner