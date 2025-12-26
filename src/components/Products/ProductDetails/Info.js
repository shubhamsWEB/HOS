"use client"
import * as React from 'react';
import { Box, Typography, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Icon mapping based on info type
const iconMap = {
    setting: <SettingsOutlinedIcon sx={{ fontSize: 24 }} />,
    metal: <DiamondOutlinedIcon sx={{ fontSize: 24 }} />,
    size: <StraightenOutlinedIcon sx={{ fontSize: 24 }} />,
    cut: <ContentCutOutlinedIcon sx={{ fontSize: 24 }} />,
    details: <InfoOutlinedIcon sx={{ fontSize: 24 }} />,
};

// Title formatting
const titleMap = {
    setting: 'Setting Information',
    metal: 'Metal Details',
    size: 'Size Guide',
    cut: 'Cut & Clarity',
    details: 'Additional Details',
};

export default function ProductInfoCard({ data, title, index = 0 }) {
    const [expanded, setExpanded] = React.useState(true);

    if (!data) return null;

    const formattedTitle = titleMap[title?.toLowerCase()] || title;
    const icon = iconMap[title?.toLowerCase()] || <InfoOutlinedIcon sx={{ fontSize: 24 }} />;

    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid rgba(216, 194, 157, 0.2)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                '&:hover': {
                    boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                    borderColor: 'rgba(216, 194, 157, 0.4)',
                },
            }}
        >
            {/* Header */}
            <Box
                onClick={() => setExpanded(!expanded)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 3,
                    cursor: 'pointer',
                    background: expanded
                        ? 'linear-gradient(135deg, rgba(216, 194, 157, 0.08) 0%, rgba(216, 194, 157, 0.02) 100%)'
                        : 'transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: 'linear-gradient(135deg, rgba(216, 194, 157, 0.12) 0%, rgba(216, 194, 157, 0.04) 100%)',
                    },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {/* Icon Container */}
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '12px',
                            backgroundColor: 'rgba(216, 194, 157, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#D8C29D',
                        }}
                    >
                        {icon}
                    </Box>
                    
                    {/* Title */}
                    <Box>
                        <Typography
                            variant="overline"
                            sx={{
                                color: '#D8C29D',
                                fontSize: '0.65rem',
                                letterSpacing: '2px',
                                fontFamily: '"DM Sans", sans-serif',
                                display: 'block',
                                lineHeight: 1,
                            }}
                        >
                            SPECIFICATION {String(index + 1).padStart(2, '0')}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: '"Playfair Display", serif',
                                fontWeight: 500,
                                color: '#1A1A1A',
                                fontSize: '1.1rem',
                                mt: 0.5,
                                textTransform: 'capitalize',
                            }}
                        >
                            {formattedTitle}
                        </Typography>
                    </Box>
                </Box>

                {/* Expand Icon */}
                <IconButton
                    size="small"
                    sx={{
                        transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        backgroundColor: 'rgba(0,0,0,0.03)',
                        '&:hover': {
                            backgroundColor: 'rgba(216, 194, 157, 0.2)',
                        },
                    }}
                >
                    <ExpandMoreIcon sx={{ color: '#666' }} />
                </IconButton>
            </Box>

            {/* Content */}
            <Collapse in={expanded} timeout={400}>
                <Box
                    sx={{
                        px: 3,
                        pb: 3,
                        pt: 0,
                    }}
                >
                    {/* Decorative line */}
                    <Box
                        sx={{
                            width: '40px',
                            height: '2px',
                            backgroundColor: '#D8C29D',
                            mb: 2,
                            borderRadius: 4,
                        }}
                    />
                    
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: '"DM Sans", sans-serif',
                            color: '#666',
                            lineHeight: 1.9,
                            fontSize: '0.9rem',
                        }}
                    >
                        {data}
                    </Typography>
                </Box>
            </Collapse>
        </Box>
    );
}
