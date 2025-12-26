import React from 'react'
import { Box } from '@mui/material'
import styles from './style.module.scss'

function NewArrival() {
    return (
        <Box className={styles.newArrivalWrapper}>
            <video 
                className={styles.bannerVideo} 
                autoPlay 
                muted 
                loop 
                playsInline
            >
                <source src='./assets/main.mp4' type='video/mp4' />
            </video>
        </Box>
    )
}

export default NewArrival
