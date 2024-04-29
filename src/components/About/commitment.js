import React from 'react'
import { Grid, Typography } from '@mui/material';
import styles from './style.module.scss';

function Commitment() {
    return (
        <Grid container spacing={4} p={4}>
            <Grid item xs={12} sm={6}>
                <Typography variant='h3' className={styles.mainTitle}>⁠Our Promise & Commitment </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant='subtitle1' className={styles.content} mb={2}>
                    At House of Sansa, craftsmanship is not just a skill; it's an art form. We believe that every piece of jewelry should be a masterpiece, meticulously crafted to stand the test of time and capture the essence of its wearer. Our commitment to excellence in craftsmanship is at the heart of everything we do.                </Typography>
                <Typography variant='subtitle1' className={styles.content}>
                    <b>The Artisans:</b><br />
                    Our artisans are the true guardians of our craft. With years of experience and a
                    profound passion for their work, they bring each design to life with precision and
                    artistry. From the moment a concept takes shape to the final finishing touches,
                    our artisans pour their heart and soul into every piece. Their attention to detail
                    ensures that every facet of a diamond sparkles brilliantly, and every curve of a
                    metal setting is flawless.                </Typography>
                <Typography variant='subtitle1' className={styles.content}>
                    <b>Uncompromising Quality:</b><br />
                    We source only the finest materials to create our jewelry. From the ethically-
                    sourced diamonds and gemstones to the high-quality metals, we spare no effort
                    in ensuring that each component meets the highest standards of quality. Our
                    commitment to ethical sourcing and sustainability extends to every facet of our
                    creations, so you can wear our jewelry with pride, knowing it aligns with your
                    values.
                </Typography>
                <Typography variant='subtitle1' className={styles.content}>
                    <b>Time-Honored Techniques:</b><br />
                    While we embrace innovation and contemporary design, we also hold onto time-
                    honored jewelry-making techniques. Our ateliers blend modern technology with
                    traditional craftsmanship, resulting in pieces that marry the best of both worlds.
                    It's this blend of old and new that gives our jewelry a timeless quality, making it
                    relevant and cherished for generations.
                </Typography>
                <Typography variant='subtitle1' className={styles.content}>
                    <b>Customization and Personalization:</b><br />
                    We understand that jewelry is an intimate form of self-expression. That's why we
                    offer customization and personalization options, allowing you to create a piece
                    that is uniquely yours. Whether it's engraving a special date, selecting your
                    preferred metal, or choosing a specific gemstone, our artisans are here to bring
                    your vision to life.
                </Typography>
                <Typography variant='subtitle1' className={styles.content}>
                    <b>Quality Assurance:</b><br />
                    Before each piece leaves our workshop, it undergoes rigorous quality control. We
                    ensure that it not only meets our exacting standards but also exceeds your
                    expectations. Our dedication to quality assurance means that when you wear
                    House of Sansa jewelry, you wear the mark of craftsmanship at its finest.
                </Typography>
                <Typography variant='subtitle1' className={styles.content}>
                    At House of Sansa, we believe that craftsmanship is not just a process; it's a labor of love.
                    We are proud to share our artistry with you, to be a part of your life's most
                    significant moments, and to create jewelry that embodies the spirit of elegance
                    and enduring beauty. Explore our collections, and experience the craftsmanship
                    that defines House of Sansa.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Commitment