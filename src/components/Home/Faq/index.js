import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Accordian from './accordian';
import styles from './style.module.scss';
function Faq() {
  return (
    <Box>
      <Typography variant='h2' sx={{ textAlign: 'center', padding: 4 }} className={styles.main}>Questions</Typography>
      <Grid container spacing={2} sx={{ textAlign: 'center' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => {
          return (
            <Grid item sm={6} key={item}><Accordian /></Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Faq