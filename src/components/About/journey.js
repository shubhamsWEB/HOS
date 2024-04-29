/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Grid, Typography } from '@mui/material';
import styles from './style.module.scss';

function Journey() {
    return (
        <Grid container spacing={4} p={4}>
            <Grid item xs={12} sm={6}>
                <Typography variant='h3' className={styles.mainTitle}>Our Journey</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant='subtitle1' className={styles.content} mb={2}>
                    The journey of House of Sansa is a tale of relentless passion and unwavering dedication. It began with a vision—a vision to redefine luxury, to make it more than just a material possession, but a tangible expression of the heart's deepest emotions.
                </Typography>
                <Typography variant='subtitle1' className={styles.content}>
                    Founded by a team of artisans, designers, and dreamers, House of Sansa came to life as a response to the impersonal nature of mass-produced jewelry. We recognized the need for jewelry that tells a story, jewelry that becomes a part of your life's narrative, jewelry that carries your memories and milestones.
                </Typography>
                <Typography variant='subtitle1' className={styles.content}>
                    From our humble beginnings, we embarked on a path of discovery, craftsmanship,
                    and creativity. Our ateliers became the canvas where ideas turned into reality,
                    where raw materials transformed into treasures, and where every piece was
                    imbued with a touch of artistry.
                </Typography>
                <Typography variant='subtitle1' className={styles.content}>
                    Over the years, House of Sansa has become a name synonymous with grace and
                    sophistication. Our jewelry has graced the most intimate moments in people's
                    lives—engagements, weddings, anniversaries, and more. We've celebrated with
                    you as you marked achievements, milestones, and personal victories.
                </Typography>
                <Typography variant='subtitle1' className={styles.content}>
                    Our journey has been a constant evolution, fueled by the stories you've shared
                    with us. Your trust and loyalty have been our guiding stars, inspiring us to
                    continually push the boundaries of creativity and craftsmanship.
                </Typography>
                <Typography variant='subtitle1' className={styles.content}>
                    Thank you for being a part of the House of Sansa story—a story that weaves together love,
                    art, and timeless elegance.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Journey