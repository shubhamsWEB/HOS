import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import styles from './style.module.scss';
function Team() {
    return (
        <Box textAlign='center' mt={4}>
            <Typography variant='h2' textAlign={'center'}>Our Founders</Typography>
            <Typography variant='subtitle1' textAlign={'center'} className={styles.sub} mt={2}>
                We are not just a jewelry brand; we are the storytellers of your most cherished moments,<br />
                the keepers of your milestones, and the creators of enduring beauty. Welcome to HOS,
            </Typography>
            <Grid container spacing={4} p={{xs:2,sm:6}} px={{xs:2,sm:24}}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ background: "#D9D9D9", height: '500px' }}>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ background: "#D9D9D9", height: '500px' }}>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Team