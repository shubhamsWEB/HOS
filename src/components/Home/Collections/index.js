'use client'
import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import './style.css';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import { productsInjectible } from '../../../appStore/saga/products';
import Products from './Products';
import { collections } from './constants';
function Collection() {
    const [selected, setSelected] = React.useState('Sansa Diamonds');
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch({ type: "FETCH_PRODUCTS", payload: { collections: selected } });
    }, [selected]);
    return (
        <Box>
            <Grid container className="collections-grid">
                {collections.map(item => {
                    return (
                        <Grid item xs={12} sm={item.id > 3 ? 6 : 4} key={item.id} onMouseEnter ={() => setSelected(item.title)}>
                            <Box className="grid">
                                <Typography variant='subtitle2' className='main' sx={{ letterSpacing: '2px', mb: 4 }}>COLLECTION</Typography>
                                <Image src="/assets/Vector1.png" width={65} height={65} alt="Sansa Diamonds" className='img' />
                                <Typography variant='h4' className='main'>{item.title}</Typography>
                                <Typography variant='caption' className='sub'>Introducing our new mesmerizing jewelry collection. Embrace your inner allure with the timeless elegance and radiant beauty of ancient Egypt, now available exclusively on AXELS Jewelry.</Typography>
                                <Link href={item.path} style={{ textDecoration: 'none' }}>
                                    <Typography variant='caption' fontWeight={'bold'} mt={2} className='sub' sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#222222' }}>View Products <ArrowRightAltIcon sx={{ color: '#D8C29D' }} /></Typography>
                                </Link>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
            <Box sx={{ mt: 10 }}>
                <Box sx={{ display: 'flex', alignItems:'center', justifyContent: 'space-between',mb:4 }}>
                    <Typography variant='h4'>{selected}</Typography>
                    <Link variant='caption' href={`/products`} style={{textDecoration:'none',display:'flex',alignItems:'center',color:'#101010'}}>Explore All <ArrowRightAltIcon sx={{ color: '#D8C29D' }} /></Link>
                </Box>
                <Products />
            </Box>
        </Box>
    )
}

export default withDuck([productsInjectible])(Collection);