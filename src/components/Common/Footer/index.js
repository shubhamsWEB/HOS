import React from 'react';
import { Grid, Box, Typography, TextField, Divider, Container, Button, IconButton, InputAdornment } from '@mui/material';
import styles from './style.module.scss';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <Box className={styles.footerWrapper}>
            {/* Newsletter Section */}
            <Container maxWidth="xl">
                <Box className={styles.newsletterSection}>
                    <Box className={styles.newsletterContent}>
                        <Box className={styles.decorativeElement}></Box>
                        <Typography variant='subtitle1' className={styles.newsletterSubtitle}>SUBSCRIBE TO OUR NEWSLETTER</Typography>
                        <Typography variant='h4' className={styles.newsletterTitle}>Receive Updates & Exclusive Offers</Typography>
                        <Box className={styles.subscribeForm}>
                            <TextField
                                placeholder="Your email address"
                                variant="outlined"
                                fullWidth
                                className={styles.subscribeInput}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button className={styles.subscribeButton} endIcon={<KeyboardArrowRightIcon />}>
                                                Subscribe
                                            </Button>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
                
                <Divider className={styles.footerDivider} />
                
                {/* Main Footer */}
                <Grid container spacing={4} className={styles.mainFooter}>
                    <Grid item xs={12} md={4} lg={5}>
                        <Box className={styles.footerBrandSection}>
                            <Typography variant='h5' className={styles.footerLogo}>
                                HOUSE OF SANSA
                            </Typography>
                            <Typography variant='body2' className={styles.footerDescription}>
                                Discover our exquisite collection of fine jewelry crafted with the highest quality materials and exceptional attention to detail. Each piece tells a unique story of elegance and sophistication.
                            </Typography>
                            
                            <Box className={styles.contactInfo}>
                                <Box className={styles.contactItem}>
                                    <PlaceIcon className={styles.contactIcon} />
                                    <Box>
                                        <Typography variant='subtitle2' className={styles.contactLabel}>Location</Typography>
                                        <Typography variant='body2' className={styles.contactText}>123 Main Street Chicago, IL 60601 United States</Typography>
                                    </Box>
                                </Box>
                                
                                <Box className={styles.contactItem}>
                                    <PhoneIcon className={styles.contactIcon} />
                                    <Box>
                                        <Typography variant='subtitle2' className={styles.contactLabel}>Phone</Typography>
                                        <Typography variant='body2' className={styles.contactText}>+1 (312) 555-0123</Typography>
                                    </Box>
                                </Box>
                                
                                <Box className={styles.contactItem}>
                                    <EmailIcon className={styles.contactIcon} />
                                    <Box>
                                        <Typography variant='subtitle2' className={styles.contactLabel}>E-mail</Typography>
                                        <Typography variant='body2' className={styles.contactText}>contact@houseofsansa.com</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={6} sm={4} md={2} lg={2} className={styles.footerLinksColumn}>
                        <Typography variant='h6' className={styles.footerColumnTitle}>Products</Typography>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/jewelry/earrings" className={styles.footerLink}>Earrings</Link></li>
                            <li><Link href="/jewelry/necklaces" className={styles.footerLink}>Necklaces</Link></li>
                            <li><Link href="/jewelry/bracelets" className={styles.footerLink}>Bracelets</Link></li>
                            <li><Link href="/jewelry/rings" className={styles.footerLink}>Rings</Link></li>
                            <li><Link href="/jewelry/brooches" className={styles.footerLink}>Brooches</Link></li>
                            <li><Link href="/collections/men" className={styles.footerLink}>Men&apos;s Jewelry</Link></li>
                        </ul>
                    </Grid>
                    
                    <Grid item xs={6} sm={4} md={2} lg={2} className={styles.footerLinksColumn}>
                        <Typography variant='h6' className={styles.footerColumnTitle}>Company</Typography>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/about-us" className={styles.footerLink}>About Us</Link></li>
                            <li><Link href="/testimonials" className={styles.footerLink}>Testimonials</Link></li>
                            <li><Link href="/best-sellers" className={styles.footerLink}>Best Sellers</Link></li>
                            <li><Link href="/new-arrivals" className={styles.footerLink}>New Arrivals</Link></li>
                            <li><Link href="/terms-conditions" className={styles.footerLink}>Terms & Conditions</Link></li>
                            <li><Link href="/blog" className={styles.footerLink}>Blog</Link></li>
                        </ul>
                    </Grid>
                    
                    <Grid item xs={6} sm={4} md={2} lg={2} className={styles.footerLinksColumn}>
                        <Typography variant='h6' className={styles.footerColumnTitle}>Support</Typography>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/size-guide" className={styles.footerLink}>Size Guide</Link></li>
                            <li><Link href="/payment-guide" className={styles.footerLink}>Payment Guide</Link></li>
                            <li><Link href="/help-center" className={styles.footerLink}>Help Center</Link></li>
                            <li><Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link></li>
                            <li><Link href="/return-policy" className={styles.footerLink}>Return Policy</Link></li>
                            <li><Link href="/faqs" className={styles.footerLink}>FAQs</Link></li>
                        </ul>
                    </Grid>
                    
                    <Grid item xs={6} sm={12} md={2} lg={1} className={styles.footerSocialColumn}>
                        <Typography variant='h6' className={styles.footerColumnTitle}>Follow Us</Typography>
                        <Box className={styles.socialIcons}>
                            <IconButton aria-label="facebook" className={styles.socialIcon}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="instagram" className={styles.socialIcon}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton aria-label="pinterest" className={styles.socialIcon}>
                                <PinterestIcon />
                            </IconButton>
                            <IconButton aria-label="twitter" className={styles.socialIcon}>
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                        
                        <Box className={styles.paymentMethods}>
                            <Typography variant='subtitle2' className={styles.paymentTitle}>Payment Methods</Typography>
                            <Box className={styles.paymentIcons}>
                                <Image src="/assets/visa.svg" alt="Visa" width={40} height={25} />
                                <Image src="/assets/mastercard.svg" alt="Mastercard" width={40} height={25} />
                                <Image src="/assets/amex.svg" alt="American Express" width={40} height={25} />
                                <Image src="/assets/paypal.svg" alt="PayPal" width={40} height={25} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                
                <Divider className={styles.footerDivider} />
                
                {/* Copyright Section */}
                <Box className={styles.copyrightSection}>
                    <Typography variant='body2' className={styles.copyright}>
                        © {new Date().getFullYear()} House of Sansa. All rights reserved. Crafted with love in India&apos;s heart.
                    </Typography>
                    <Typography variant='body2' className={styles.designedBy}>
                        Designed with <span className={styles.heart}>♥</span> for Elegance
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;