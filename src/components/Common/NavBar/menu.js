'use client'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Grid, Typography, MenuItem, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import styles from 'yet-another-react-lightbox/styles.css';
import classes from './style.module.scss';
import Image from 'next/image';
const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

const ITEM_HEIGHT = 300;

function LongMenu(props) {
    const { title } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <span
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                style={{ display: 'flex', alignItems: 'center' }}
            >
                {title} <KeyboardArrowDownIcon fontSize='small' />
            </span>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 'auto',
                        px: 0
                    },
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                slotProps={{
                    root: { sx: { '.MuiList-root': { padding: 0, paddingLeft: 4} } },
                }}
                sx={{ mt: 3 }}
            >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box p={2}>
                        <Typography variant='subtitle1' sx={{ px: 2, fontWeight: 'bold' }} className={classes.links}>Rings</Typography>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Rings</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Earrings</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Bracelets</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Bangles</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Pendants</Typography></MenuItem>
                        <MenuItem dense><Link href={'/products?categories=Ring'} className={classes.viewMore}>View All<ArrowRightAltIcon fontSize='small' sx={{ color: '#D8C29D' }} /></Link></MenuItem>
                    </Box>
                    <Box p={2}>
                        <Typography variant='subtitle1' sx={{ px: 2, fontWeight: 'bold' }} className={classes.links}>Earrings</Typography>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Rings</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Earrings</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Bracelets</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Bangles</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Pendants</Typography></MenuItem>
                        <MenuItem dense><Link href={'/products?categories=Ring'} className={classes.viewMore}>View All<ArrowRightAltIcon fontSize='small' sx={{ color: '#D8C29D' }} /></Link></MenuItem>
                    </Box>
                    <Box p={2}>
                        <Typography variant='subtitle1' sx={{ px: 2, fontWeight: 'bold' }} className={classes.links}>Pendants</Typography>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Rings</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Earrings</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Bracelets</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Bangles</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Pendants</Typography></MenuItem>
                        <MenuItem dense><Link href={'/products?categories=Ring'} className={classes.viewMore}>View All<ArrowRightAltIcon fontSize='small' sx={{ color: '#D8C29D' }} /></Link></MenuItem>
                    </Box>
                    <Box p={2}>
                        <Typography variant='subtitle1' sx={{ px: 2, fontWeight: 'bold' }} className={classes.links}>Necklaces</Typography>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Rings</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Earrings</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Bracelets</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Bangles</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Pendants</Typography></MenuItem>
                        <MenuItem dense><Link href={'/products?categories=Ring'} className={classes.viewMore}>View All<ArrowRightAltIcon fontSize='small' sx={{ color: '#D8C29D' }} /></Link></MenuItem>
                    </Box>
                    <Box p={2}>
                        <Typography variant='subtitle1' sx={{ px: 2, fontWeight: 'bold' }} className={classes.links}>By Categories</Typography>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Bracelets</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Rings</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Bangles</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Pendants</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Accessories</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Necklaces</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Earrings</Typography></MenuItem>
                    </Box>
                    <Box p={2}>
                        <Typography variant='subtitle1' sx={{ px: 2, fontWeight: 'bold' }} className={classes.links}>By Collection</Typography>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Sansa Gold</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Sansa Polki</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Sansa Gems</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Sansa Accessories</Typography></MenuItem>
                        <MenuItem dense><Typography variant='subtitle2' className={classes.links}>Sansa Diamonds</Typography></MenuItem>
                        {/* <Image src='/assets/ring1.jpg' width={0} height={0} sizes={'100vw'} style={{ width: '100%', height: 300,margin:'auto' }} alt='banner' /> */}
                    </Box>
                    <Box sx={{height:300,overflow:'hidden'}}>
                        <Image src='/assets/ring1.jpg' width={0} height={0} sizes={'100vw'} style={{ width: '101%', height: 300 }} alt='banner' />
                    </Box>
                </Box>
            </Menu>
        </div>
    );
}
export default LongMenu