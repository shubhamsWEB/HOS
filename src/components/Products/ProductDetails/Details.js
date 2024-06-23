'use client'
import React from 'react'
import { Typography, Box, Divider, Rating, Button } from '@mui/material';
import Breadcrumb from '@/components/Common/Breadcrumbs';
import styles from './style.module.scss';
import ButtonGroup from './ButtonGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EnquireBtn from '@/components/Common/EnquireBtn';
function Details({ data }) {
    return (
        <Box>
            <Breadcrumb data={[{ title: 'Home', path: '/' }, { title: 'Products', path: '/products' }, { title: 'Details', path: `/products/${data.id}` }]} />
            <Box mt={2}>
                <Typography variant='h3'>{data.productName}</Typography>
                <Typography variant='subtitle1' sx={{ color: '#909090' }} className={styles.sub}>{data.productDescription}</Typography>
                <Divider sx={{ marginTop: '10px' }} />
                <Box mt={3} sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                    <Box>
                        <Typography variant='subtitle1' className={styles.subMain}>Metal Purity</Typography>
                        <ButtonGroup options={data.metalPurity?.split(',') || [data.metalPurity]} />
                    </Box>
                    <Box>
                        <Typography variant='subtitle1' className={styles.subMain}>Metal Color</Typography>
                        <ButtonGroup options={data.metalColour?.split(',') || [data.metalColour]} />
                    </Box>
                    <Box>
                        <Typography variant='subtitle1' className={styles.subMain}>Solitaire Size</Typography>
                        <ButtonGroup options={data.solitaireSize?.split(',') || [data.solitaireSize]} />
                    </Box>
                    {data.category === 'Rings' &&
                        <>
                            <Typography variant='subtitle1' className={styles.subMain}>Ring Size</Typography>
                            <ButtonGroup options={data.sizeOptions?.split(',')|| [data.sizeOptions]} />
                        </>
                    }
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', mt: 2 }}>
                    <Rating value={4} size='small' readOnly />
                    <Typography variant='subtitle2'>(64 Reviews)</Typography>
                    <FavoriteBorderIcon />
                    <ShareOutlinedIcon />
                </Box>
                <EnquireBtn data={data} style={{ background: '#222222', color: '#FFFFFF', mt: 3, p: 2 }}/>
                <Box mt={2}>
                    <Typography variant='subtitle1' className={styles.sub}><b>Product Number: </b> {data.productCode}</Typography>
                    <Typography variant='subtitle1' className={styles.sub}><b>Category: </b> {data.category}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Details