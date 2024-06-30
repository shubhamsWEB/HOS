import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import styles from './style.module.scss'
function NewArrival() {
    return (
        // <Box sx={{
        //     textAlign: 'center', minHeight: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundAttachment: 'fixed',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //     backgroundImage: 'url("./assets/banner.png")',
        //     flexDirection:'column'
        // }}>
        //     <Typography variant='h2'>New Arrival</Typography>
        //     <Typography variant='p' px={30}>Discover Sparkel With Style and Luxury</Typography>
        //     <Button variant="outlined" sx={{ marginTop: 2 }}>Shop Now</Button>
        // </Box>
        <Box className="video-container" sx={{ position: 'relative' }}>
            <video className='videoTag' autoPlay muted loop style={{ width: "100%", height: '650px', objectFit: 'cover' }}>
                <source src='./assets/main.mp4' type='video/mp4' />
            </video>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Box sx={{display:'flex',flexDirection:"column",alignItems:"center",textAlign:'center'}}>
                <Typography variant='h1' sx={{color:'#fff',fontSize:'6rem'}} className={styles.main}>New Arrival</Typography>
                <Typography variant='p' px={{xs:2,sm:30}} sx={{color:'#fff'}} className={styles.sub}>Discover Sparkel With Style and Luxury</Typography>
                <Button variant="outlined" sx={{ marginTop: 2,color:'#fff',border:'1px solid black' }}>Shop Now</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default NewArrival