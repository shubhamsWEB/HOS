import React from 'react'
import { Typography, Box, Divider, Rating,Button } from '@mui/material';
import Breadcrumb from '@/components/Common/Breadcrumbs';
import styles from './style.module.scss';
import ButtonGroup from './ButtonGroup';
import { sizeOptions, colorOptions, goldOptions } from '../../../constants/productDetails';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function Details({ data }) {
    return (
        <Box>
            <Breadcrumb data={[{ title: 'Home', path: '/' }, { title: 'Products', path: '/products' }, { title: 'Details', path: `/products/${data.id}` }]} />
            <Box>
                <Typography variant='h3'>Rhea Gold Earrings</Typography>
                <Typography variant='subtitle1' sx={{ color: '#909090' }} className={styles.sub}>Introducing the Rhea Gold Earrings, a captivating blend of luxury and sophistication. Crafted with gleaming gold, these long, drop-down </Typography>
                <Divider sx={{ marginTop: '10px' }} />
                <Box mt={3} sx={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                    <Typography variant='h6' className={styles.subMain}>Gold Karat</Typography>
                    <ButtonGroup options={goldOptions} />
                    <Typography variant='h6' className={styles.subMain}>Color</Typography>
                    <ButtonGroup options={colorOptions} />
                    <Typography variant='h6' className={styles.subMain}>Size</Typography>
                    <ButtonGroup options={sizeOptions} />
                </Box>
                <Box sx={{display:'flex',gap:'10px',alignItems:'center',mt:2}}>
                    <Rating value={4} size='small' readOnly />
                    <Typography variant='subtitle2'>(64 Reviews)</Typography>
                    <FavoriteBorderIcon />
                    <ShareOutlinedIcon />
                </Box>
                <Button fullWidth sx={{background:'#222222', color:'#FFFFFF',mt:3,p:2}} className={styles.btn}>ENQUIRE NOW</Button>
                <Box mt={2}>
                    <Typography variant='subtitle1' className={styles.sub}><b>Product Number: </b> 9248-1753-6392</Typography>
                    <Typography variant='subtitle1' className={styles.sub}><b>Category: </b> Earrings</Typography>
                    <Typography variant='subtitle1' className={styles.sub}><b>Tags: </b> Earrings, Gold, Golden, Drop Earrings</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Details