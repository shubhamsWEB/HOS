import React from 'react'
import { Grid, Typography, Box } from '@mui/material';
import styles from './style.module.scss';

function Journey() {
    return (
        <Grid container spacing={4} p={4}>
            <Grid item xs={12} sm={6}>
                <Typography variant='h3' className={styles.mainTitle}>⁠Our Values </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box mt={2}>
                    <Typography variant='h6' fontWeight={'bold'} sx={{ borderLeft: '3px solid #B59A6C', pl: 1 }} className={styles.sub}>Excellence</Typography>
                    <Typography variant='subtitle1' className={styles.content}>
                        We are committed to the relentless pursuit of excellence in everything we do.
                        From the craftsmanship of our jewelry to the service we provide, we strive for
                        perfection, knowing that excellence is the foundation of enduring beauty.
                    </Typography>
                </Box>
                <Box mt={3}>
                    <Typography variant='h6' fontWeight={'bold'} sx={{ borderLeft: '3px solid #B59A6C', pl: 1 }} className={styles.sub}>Integrity</Typography>
                    <Typography variant='subtitle1' className={styles.content}>
                        Integrity is the cornerstone of our business. We operate with transparency,
                        honesty, and fairness in all our interactions—with our customers, partners, and
                        within our team. Trust is the bedrock of our relationships.
                    </Typography>
                </Box>
                <Box mt={3}>
                    <Typography variant='h6' fontWeight={'bold'} sx={{ borderLeft: '3px solid #B59A6C', pl: 1 }} className={styles.sub}>Artistry</Typography>
                    <Typography variant='subtitle1' className={styles.content}>
                        We celebrate the artistry of fine jewelry. Our creations are not just accessories;
                        they are works of art that embody creativity and passion. We believe that every
                        piece should tell a unique story.
                    </Typography>
                </Box>
                <Box mt={3}>
                    <Typography variant='h6' fontWeight={'bold'} sx={{ borderLeft: '3px solid #B59A6C', pl: 1 }} className={styles.sub}>Customer-Centric</Typography>
                    <Typography variant='subtitle1' className={styles.content}>
                        Our customers are at the heart of everything we do. We listen to your needs,
                        understand your desires, and strive to exceed your expectations. Your
                        satisfaction is our ultimate goal.
                    </Typography>
                </Box>
                <Box mt={3}>
                    <Typography variant='h6' fontWeight={'bold'} sx={{ borderLeft: '3px solid #B59A6C', pl: 1 }} className={styles.sub}>Ethical Sourcing</Typography>
                    <Typography variant='subtitle1' className={styles.content}>
                        We are committed to responsible and ethical sourcing of materials. Our
                        dedication to sustainability and ethical practices ensures that our jewelry not
                        only reflects beauty but also respect for our planet and its people.
                    </Typography>
                </Box>
                <Box mt={3}>
                    <Typography variant='h6' fontWeight={'bold'} sx={{ borderLeft: '3px solid #B59A6C', pl: 1 }} className={styles.sub}>Personalization</Typography>
                    <Typography variant='subtitle1' className={styles.content}>
                        We understand that jewelry is deeply personal. We embrace customization and
                        personalization, allowing you to create pieces that reflect your individuality and
                        commemorate your most cherished moments.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Journey