'use client'
import React from 'react'
import { Grid, Box, Typography, Divider, IconButton } from '@mui/material';
import styles from './style.module.scss';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter } from 'next/navigation';

function Footer() {
    const router = useRouter();
    
    const productLinks = [
        { label: 'Earrings', path: '/products?categories=Earrings' },
        { label: 'Necklace', path: '/products?categories=Necklaces' },
        { label: 'Bracelet', path: '/products?categories=Bracelets' },
        { label: 'Ring', path: '/products?categories=Rings' },
        { label: 'Pendant', path: '/products?categories=Pendants' },
        { label: 'Bangle', path: '/products?categories=Bangles' },
    ];

    const companyLinks = [
        { label: 'About Us', path: '/about-us' },
        { label: 'Testimonials', path: '#' },
        { label: 'Best Seller', path: '#' },
        { label: 'New Arrival', path: '#' },
        { label: 'Terms & Conditions', path: '#' },
        { label: 'Latest Updates', path: '#' },
    ];

    const supportLinks = [
        { label: 'Size Charts', path: '#' },
        { label: 'Payment Guide', path: '#' },
        { label: 'Help Center', path: '#' },
        { label: 'Privacy Policy', path: '#' },
        { label: 'Return Policy', path: '#' },
        { label: 'FAQs', path: '#' },
    ];

    return (
        <Box className={styles.footer}>
            {/* Main Footer Content */}
            <Box className={styles.mainFooter}>
                <Grid container spacing={{ xs: 4, md: 6 }} className={styles.footerGrid}>
                    {/* Company Info */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className={styles.companySection}>
                            <Typography variant='h5' className={styles.companyTitle}>
                                HOUSE OF SANSA
                            </Typography>
                            <Typography variant='body2' className={styles.companyDescription}>
                                Crafting timeless elegance with exquisite jewelry that reflects your unique style and sophistication.
                            </Typography>
                            
                            <Box className={styles.contactInfo}>
                                <Box className={styles.contactItem}>
                                    <Box className={styles.contactIcon}>
                                        <PlaceIcon />
                                    </Box>
                                    <Box className={styles.contactDetails}>
                                        <Typography variant='subtitle2' className={styles.contactLabel}>Location</Typography>
                                        <Typography variant='body2' className={styles.contactValue}>
                                            123 Main Street Chicago, IL<br />
                                            60601 United States
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Box className={styles.contactItem}>
                                    <Box className={styles.contactIcon}>
                                        <PhoneIcon />
                                    </Box>
                                    <Box className={styles.contactDetails}>
                                        <Typography variant='subtitle2' className={styles.contactLabel}>Phone</Typography>
                                        <Typography variant='body2' className={styles.contactValue}>
                                            +91-999999999
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Box className={styles.contactItem}>
                                    <Box className={styles.contactIcon}>
                                        <EmailIcon />
                                    </Box>
                                    <Box className={styles.contactDetails}>
                                        <Typography variant='subtitle2' className={styles.contactLabel}>E-mail</Typography>
                                        <Typography variant='body2' className={styles.contactValue}>
                                            hosraipur@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Products Links */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Box className={styles.linksSection}>
                            <Typography variant='h6' className={styles.sectionTitle}>Products</Typography>
                            <Box className={styles.linksList}>
                                {productLinks.map((link, index) => (
                                    <Typography 
                                        key={index}
                                        variant='body2' 
                                        className={styles.footerLink}
                                        onClick={() => router.push(link.path)}
                                    >
                                        {link.label}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Company Links */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Box className={styles.linksSection}>
                            <Typography variant='h6' className={styles.sectionTitle}>Company</Typography>
                            <Box className={styles.linksList}>
                                {companyLinks.map((link, index) => (
                                    <Typography 
                                        key={index}
                                        variant='body2' 
                                        className={styles.footerLink}
                                        onClick={() => router.push(link.path)}
                                    >
                                        {link.label}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Support Links */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Box className={styles.linksSection}>
                            <Typography variant='h6' className={styles.sectionTitle}>Support</Typography>
                            <Box className={styles.linksList}>
                                {supportLinks.map((link, index) => (
                                    <Typography 
                                        key={index}
                                        variant='body2' 
                                        className={styles.footerLink}
                                        onClick={() => router.push(link.path)}
                                    >
                                        {link.label}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Social Media */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Box className={styles.socialSection}>
                            <Typography variant='h6' className={styles.sectionTitle}>Follow Us</Typography>
                            <Box className={styles.socialIcons}>
                                <IconButton className={styles.socialIcon} aria-label="Facebook">
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton className={styles.socialIcon} aria-label="Instagram">
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton className={styles.socialIcon} aria-label="Twitter">
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton className={styles.socialIcon} aria-label="LinkedIn">
                                    <LinkedInIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Footer Bottom */}
            <Box className={styles.footerBottom}>
                <Divider className={styles.divider} />
                <Box className={styles.bottomContent}>
                    <Typography variant='body2' className={styles.copyright}>
                        © {new Date().getFullYear()} House of Sansa. All rights reserved.
                    </Typography>
                    <Box className={styles.bottomLinks}>
                        <Typography variant='body2' className={styles.bottomLink}>Privacy Policy</Typography>
                        <Typography variant='body2' className={styles.bottomLink}>Terms of Service</Typography>
                        <Typography variant='body2' className={styles.bottomLink}>Cookie Policy</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer