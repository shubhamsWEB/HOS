'use client'
import React, { useState } from 'react'
import { Typography, Box, Divider, Rating, Chip, IconButton, Tooltip, Grid } from '@mui/material';
import styles from './style.module.scss';
import ButtonGroup from './ButtonGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EnquireBtn from '@/components/Common/EnquireBtn';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';

function Details({ data }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const trustBadges = [
        { icon: <DiamondOutlinedIcon sx={{ fontSize: 18 }} />, label: 'IGI Certified' },
        { icon: <VerifiedIcon sx={{ fontSize: 18 }} />, label: '100% Authentic' },
        { icon: <LocalShippingOutlinedIcon sx={{ fontSize: 18 }} />, label: 'Free Shipping' },
        { icon: <AutorenewOutlinedIcon sx={{ fontSize: 18 }} />, label: 'Lifetime Buyback' },
    ];

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: data.productName,
                    text: data.productDescription,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <Box sx={{ height: '100%' }}>
            {/* Category Badge */}
            {data.category && (
                <Chip
                    label={data.category}
                    size="small"
                    sx={{
                        backgroundColor: 'transparent',
                        border: '1px solid #D8C29D',
                        color: '#D8C29D',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        mb: 2,
                        '& .MuiChip-label': {
                            px: 2,
                        },
                    }}
                />
            )}

            {/* Product Name */}
            <Typography
                variant="h2"
                sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 500,
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                    color: '#1A1A1A',
                    lineHeight: 1.2,
                    letterSpacing: '-0.5px',
                }}
            >
                {data.productName}
            </Typography>

            {/* Product Code */}
            <Typography
                variant="caption"
                sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    color: '#999',
                    fontSize: '0.75rem',
                    letterSpacing: '1px',
                    display: 'block',
                    mt: 1,
                }}
            >
                SKU: {data.productCode}
            </Typography>

            {/* Rating & Actions */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: 2,
                    pb: 3,
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Rating
                        value={4.5}
                        precision={0.5}
                        size="small"
                        readOnly
                        sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#D8C29D',
                            },
                        }}
                    />
                    <Typography
                        variant="caption"
                        sx={{
                            fontFamily: '"DM Sans", sans-serif',
                            color: '#666',
                            fontSize: '0.8rem',
                        }}
                    >
                        (64 Reviews)
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Tooltip title={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}>
                        <IconButton
                            onClick={() => setIsFavorite(!isFavorite)}
                            sx={{
                                border: '1px solid #E8E8E8',
                                borderRadius: '50%',
                                p: 1,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#D8C29D',
                                    backgroundColor: 'rgba(216, 194, 157, 0.08)',
                                },
                            }}
                        >
                            {isFavorite ? (
                                <FavoriteIcon sx={{ fontSize: 18, color: '#E57373' }} />
                            ) : (
                                <FavoriteBorderIcon sx={{ fontSize: 18, color: '#666' }} />
                            )}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Share this product">
                        <IconButton
                            onClick={handleShare}
                            sx={{
                                border: '1px solid #E8E8E8',
                                borderRadius: '50%',
                                p: 1,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#D8C29D',
                                    backgroundColor: 'rgba(216, 194, 157, 0.08)',
                                },
                            }}
                        >
                            <ShareOutlinedIcon sx={{ fontSize: 18, color: '#666' }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

            {/* Description */}
            <Box sx={{ py: 3, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: '"DM Sans", sans-serif',
                        color: '#666',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        lineHeight: 1.8,
                    }}
                >
                    {data.productDescription}
                </Typography>
            </Box>

            {/* Options Section */}
            <Box sx={{ py: 3 }}>
                {/* Metal Purity */}
                {data.metalPurity && (
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontWeight: 600,
                                color: '#333',
                                fontSize: '0.85rem',
                                letterSpacing: '0.5px',
                                mb: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 4,
                                    height: 16,
                                    backgroundColor: '#D8C29D',
                                    borderRadius: 4,
                                }}
                            />
                            Metal Purity
                        </Typography>
                        <ButtonGroup options={data.metalPurity?.split(',').map(s => s.trim()) || []} />
                    </Box>
                )}

                {/* Metal Color */}
                {data.metalColour && (
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontWeight: 600,
                                color: '#333',
                                fontSize: '0.85rem',
                                letterSpacing: '0.5px',
                                mb: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 4,
                                    height: 16,
                                    backgroundColor: '#D8C29D',
                                    borderRadius: 4,
                                }}
                            />
                            Metal Color
                        </Typography>
                        <ButtonGroup options={data.metalColour?.split(',').map(s => s.trim()) || []} isColor />
                    </Box>
                )}

                {/* Solitaire Size */}
                {data.solitaireSize && (
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontWeight: 600,
                                color: '#333',
                                fontSize: '0.85rem',
                                letterSpacing: '0.5px',
                                mb: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 4,
                                    height: 16,
                                    backgroundColor: '#D8C29D',
                                    borderRadius: 4,
                                }}
                            />
                            Solitaire Size
                        </Typography>
                        <ButtonGroup options={data.solitaireSize?.split(',').map(s => s.trim()) || []} />
                    </Box>
                )}

                {/* Ring Size (if applicable) */}
                {data.category === 'Rings' && data.sizeOptions && (
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontWeight: 600,
                                color: '#333',
                                fontSize: '0.85rem',
                                letterSpacing: '0.5px',
                                mb: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 4,
                                    height: 16,
                                    backgroundColor: '#D8C29D',
                                    borderRadius: 4,
                                }}
                            />
                            Ring Size
                        </Typography>
                        <ButtonGroup options={data.sizeOptions?.split(',').map(s => s.trim()) || []} />
                    </Box>
                )}
            </Box>

            {/* Enquire Button */}
            <Box>
                <EnquireBtn
                    data={data}
                    style={{
                        background: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
                        color: '#FFFFFF',
                        py: 2,
                        px: 4,
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #333333 0%, #1A1A1A 100%)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 25px rgba(0,0,0,0.2)',
                        },
                    }}
                />
            </Box>

            {/* Trust Badges - Below Enquire Button */}
            <Box
                sx={{
                    mt: 3,
                    py: 2,
                    px: 2,
                    backgroundColor: 'rgba(216, 194, 157, 0.06)',
                    borderRadius: '12px',
                    border: '1px solid rgba(216, 194, 157, 0.15)',
                }}
            >
                <Grid container spacing={1}>
                    {trustBadges.map((badge, index) => (
                        <Grid item xs={6} sm={3} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: 0.5,
                                    py: 1,
                                }}
                            >
                                <Box sx={{ color: '#D8C29D' }}>
                                    {badge.icon}
                                </Box>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        fontFamily: '"DM Sans", sans-serif',
                                        fontSize: '0.65rem',
                                        color: '#666',
                                        fontWeight: 500,
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {badge.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Offer Badge */}
            {data.offer && (
                <Box
                    sx={{
                        mt: 3,
                        p: 2,
                        backgroundColor: 'rgba(216, 194, 157, 0.1)',
                        borderRadius: '12px',
                        border: '1px dashed #D8C29D',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                    }}
                >
                    <LocalOfferOutlinedIcon sx={{ color: '#D8C29D', fontSize: 20 }} />
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: '"DM Sans", sans-serif',
                            color: '#333',
                            fontWeight: 500,
                        }}
                    >
                        Special Offer: <span style={{ color: '#D8C29D' }}>{data.offer}</span>
                    </Typography>
                </Box>
            )}

            {/* Stock Status */}
            {data.inStock !== undefined && (
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: data.inStock ? '#4CAF50' : '#FF9800',
                        }}
                    />
                    <Typography
                        variant="caption"
                        sx={{
                            fontFamily: '"DM Sans", sans-serif',
                            color: '#666',
                            fontSize: '0.8rem',
                        }}
                    >
                        {data.inStock ? 'Ready to Ship' : 'Made to Order (7-10 days)'}
                    </Typography>
                </Box>
            )}
        </Box>
    )
}

export default Details
