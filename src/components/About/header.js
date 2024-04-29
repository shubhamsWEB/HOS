import React from 'react'
import { Box, Typography } from '@mui/material';
import styles from './style.module.scss';
function Header() {
    return (
        <Box textAlign='center'>
            <Typography variant='caption' textAlign={'center'} className={styles.intro} mt={2} mb={3}>ABOUT US</Typography>
            <Typography variant='h2' textAlign={'center'}>Craftsmanship Meets <br />Timeless Elegance</Typography>
            <Typography variant='subtitle1' textAlign={'center'} className={styles.sub} mt={2}>We are not just a jewelry brand; we are the storytellers of your most cherished moments,<br />
                the keepers of your milestones, and the creators of enduring beauty. Welcome to HOS,<br /> where exquisite craftsmanship meets timeless elegance.</Typography>
        </Box>
    )
}

export default Header