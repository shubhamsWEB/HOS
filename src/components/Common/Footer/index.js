import React from 'react'
import { Grid, Box, Typography, TextField, Divider } from '@mui/material';
import styles from './style.module.scss';
function Footer() {
    return (
        <Box p={4} px={14} sx={{background:'#222222',color:'#fff'}}>
            <Grid container spacing={4} alignItems="center">
                <Grid item sm={6}>
                    <Typography variant='subtitle1' className={styles.subtitle}>NEWSLETTER</Typography>
                    <Typography variant='h4'>Get Monthly Updates</Typography>
                </Grid>
                <Grid item sm={6}>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Enter your email address to get updates directly to your email"
                        variant="standard"
                        fullWidth
                        sx={{border:'#fff'}}
                    />
                </Grid>
            </Grid>
            <Divider sx={{ mt: 4,background:'#fff' }} />
            <Grid container spacing={2} mt={2}>
                <Grid item sm={2}>
                    <Box>
                        <Typography variant='h6' className={styles.title}>Products</Typography>
                        <Box sx={{display:'flex',flexDirection:'column'}}>
                            <Typography variant='subtitle2' className={styles.links}>Earrings</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Necklace</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Bracelet</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Ring</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Brooche</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Men`s Jewelery</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={2}>
                    <Box>
                        <Typography variant='h6' className={styles.title}>Company</Typography>
                        <Box sx={{display:'flex',flexDirection:'column'}}>
                            <Typography variant='subtitle2' className={styles.links}>About us</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Testimonials</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Best Seller</Typography>
                            <Typography variant='subtitle2' className={styles.links}>New Arrival</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Tems&Conditions</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Latest Updates</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={2}>
                    <Box>
                        <Typography variant='h6' className={styles.title}>Account</Typography>
                        <Box sx={{display:'flex',flexDirection:'column'}}>
                            <Typography variant='subtitle2' className={styles.links}>Orders</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Wishlist</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Payment Info</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Addresses</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Personal Info</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={2}>
                    <Box>
                        <Typography variant='h6' className={styles.title}>Support</Typography>
                        <Box sx={{display:'flex',flexDirection:'column'}}>
                            <Typography variant='subtitle2' className={styles.links}>Size Charts</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Payment Guide</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Help Center</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Privecy Policy</Typography>
                            <Typography variant='subtitle2' className={styles.links}>Return Policy</Typography>
                            <Typography variant='subtitle2' className={styles.links}>FAQs</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Box>
                        <Typography variant='h6' className={styles.title}>Social</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer