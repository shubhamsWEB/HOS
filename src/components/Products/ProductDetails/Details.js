'use client'
import React from 'react'
import { Typography, Box, Divider, Rating, Button, Chip, Stack } from '@mui/material';
import Breadcrumb from '@/components/Common/Breadcrumbs';
import styles from './style.module.scss';
import ButtonGroup from './ButtonGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import EnquireBtn from '@/components/Common/EnquireBtn';
import { useTheme } from '@mui/material/styles';
import { RWebShare } from 'react-web-share';

function Details({ data }) {
    const theme = useTheme();
    const [isFavorite, setIsFavorite] = React.useState(false);
    
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box id="productSubnav">
                <Breadcrumb data={[
                    { title: 'Home', path: '/' }, 
                    { title: 'Products', path: '/products' }, 
                    { title: data.productName, path: `/products/${data.id}` }
                ]} />
            </Box>
            
            <Box mt={2} sx={{ flexGrow: 1 }}>
                {/* Product Title and Rating */}
                <Box mb={3}>
                    <Typography 
                        variant='h3' 
                        className={styles.main}
                        sx={{ 
                            fontWeight: 600,
                            mb: 1,
                            fontSize: { xs: '2rem', md: '2.5rem' }
                        }}
                    >
                        {data.productName}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <Rating value={4} size='small' readOnly precision={0.5} />
                        <Typography variant='body2' sx={{ ml: 1 }} className={styles.sub}>
                            (64 Reviews)
                        </Typography>
                    </Box>
                    
                    <Typography 
                        variant='body1' 
                        sx={{ color: 'text.secondary', lineHeight: 1.6 }} 
                        className={styles.sub}
                    >
                        {data.productDescription}
                    </Typography>
                </Box>
                
                <Divider sx={{ my: 3 }} />
                
                {/* Product Options */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', mb: 4 }}>
                    {data.metalPurity && (
                        <Box>
                            <Typography 
                                variant='subtitle1' 
                                className={styles.subMain} 
                                sx={{ mb: 1, color: 'text.primary' }}
                            >
                                Metal Purity
                            </Typography>
                            <ButtonGroup 
                                options={data.metalPurity?.split(',') || [data.metalPurity]} 
                                color="primary"
                            />
                        </Box>
                    )}
                    
                    {data.metalColour && (
                        <Box>
                            <Typography 
                                variant='subtitle1' 
                                className={styles.subMain} 
                                sx={{ mb: 1, color: 'text.primary' }}
                            >
                                Metal Color
                            </Typography>
                            <ButtonGroup 
                                options={data.metalColour?.split(',') || [data.metalColour]} 
                                color="primary"
                            />
                        </Box>
                    )}
                    
                    {data.solitaireSize && (
                        <Box>
                            <Typography 
                                variant='subtitle1' 
                                className={styles.subMain} 
                                sx={{ mb: 1, color: 'text.primary' }}
                            >
                                Solitaire Size
                            </Typography>
                            <ButtonGroup 
                                options={data.solitaireSize?.split(',') || [data.solitaireSize]} 
                                color="primary"
                            />
                        </Box>
                    )}
                    
                    {data.category === 'Rings' && data.sizeOptions && (
                        <Box>
                            <Typography 
                                variant='subtitle1' 
                                className={styles.subMain} 
                                sx={{ mb: 1, color: 'text.primary' }}
                            >
                                Ring Size
                            </Typography>
                            <ButtonGroup 
                                options={data.sizeOptions?.split(',') || [data.sizeOptions]} 
                                color="primary"
                            />
                        </Box>
                    )}
                </Box>
                
                {/* Trust Badges */}
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 2, 
                        mb: 4,
                        p: 2,
                        backgroundColor: 'rgba(212, 175, 55, 0.05)',
                        borderRadius: '4px'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocalShippingOutlinedIcon 
                            sx={{ color: theme.palette.primary.main, mr: 1 }}
                        />
                        <Typography variant="body2" className={styles.sub}>
                            Free Shipping
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <VerifiedOutlinedIcon 
                            sx={{ color: theme.palette.primary.main, mr: 1 }}
                        />
                        <Typography variant="body2" className={styles.sub}>
                            Authenticity Guaranteed
                        </Typography>
                    </Box>
                </Box>
            </Box>
            
            {/* Action Buttons */}
            <Box>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    <EnquireBtn 
                        data={data} 
                        style={{ 
                            flexGrow: 1,
                            background: theme.palette.primary.main, 
                            color: theme.palette.primary.contrastText,
                            p: 1.5,
                            fontWeight: 500,
                            '&:hover': {
                                background: theme.palette.primary.dark
                            }
                        }}
                    />
                    
                    <Button 
                        variant="outlined" 
                        onClick={toggleFavorite}
                        sx={{ 
                            minWidth: '50px',
                            borderColor: theme.palette.primary.main,
                            color: isFavorite ? '#fff' : theme.palette.primary.main,
                            backgroundColor: isFavorite ? theme.palette.primary.main : 'transparent',
                            '&:hover': {
                                borderColor: theme.palette.primary.dark,
                                backgroundColor: isFavorite ? theme.palette.primary.dark : 'rgba(212, 175, 55, 0.08)'
                            }
                        }}
                    >
                        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    
                    <RWebShare
                        data={{
                            text: data.productDescription,
                            url: `/products/${data.id}`,
                            title: data.productName,
                        }}
                    >
                        <Button 
                            variant="outlined"
                            sx={{ 
                                minWidth: '50px',
                                borderColor: theme.palette.primary.main,
                                color: theme.palette.primary.main,
                                '&:hover': {
                                    borderColor: theme.palette.primary.dark,
                                    backgroundColor: 'rgba(212, 175, 55, 0.08)'
                                }
                            }}
                        >
                            <ShareOutlinedIcon />
                        </Button>
                    </RWebShare>
                </Box>
                
                {/* Product Meta Tags */}
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    <Chip 
                        label={data.category} 
                        size="small" 
                        sx={{ 
                            borderRadius: '4px',
                            bgcolor: 'rgba(212, 175, 55, 0.1)',
                            color: theme.palette.text.primary,
                            fontFamily: '"DM Sans", sans-serif'
                        }} 
                    />
                    {data.collections && data.collections.length > 0 && (
                        <Chip 
                            label={Array.isArray(data.collections) ? data.collections[0] : data.collections}
                            size="small" 
                            sx={{ 
                                borderRadius: '4px',
                                bgcolor: 'rgba(212, 175, 55, 0.1)',
                                color: theme.palette.text.primary,
                                fontFamily: '"DM Sans", sans-serif'
                            }}
                            onClick={() => window.location.href = `/products?collections=${Array.isArray(data.collections) ? data.collections[0] : data.collections}`}
                        />
                    )}
                    {data.metalPurity && (
                        <Chip 
                            label={data.metalPurity.split(',')[0]} 
                            size="small" 
                            sx={{ 
                                borderRadius: '4px',
                                bgcolor: 'rgba(0, 0, 0, 0.05)',
                                color: theme.palette.text.primary,
                                fontFamily: '"DM Sans", sans-serif'
                            }} 
                        />
                    )}
                    <Chip 
                        label={`#${data.productCode}`} 
                        size="small" 
                        sx={{ 
                            borderRadius: '4px',
                            bgcolor: 'rgba(0, 0, 0, 0.05)',
                            color: theme.palette.text.secondary,
                            fontFamily: '"DM Sans", sans-serif'
                        }} 
                    />
                </Stack>
            </Box>
        </Box>
    )
}

export default Details;