'use client'
import * as React from 'react';
import { Box, Chip } from '@mui/material';

// Color mapping for metal colors
const colorMap = {
    'yellow gold': { bg: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', border: '#DAA520' },
    'white gold': { bg: 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)', border: '#C0C0C0' },
    'rose gold': { bg: 'linear-gradient(135deg, #E8B4B8 0%, #D4A5A5 100%)', border: '#B76E79' },
    'platinum': { bg: 'linear-gradient(135deg, #E5E4E2 0%, #D3D3D3 100%)', border: '#A9A9A9' },
    'yg': { bg: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', border: '#DAA520' },
    'wg': { bg: 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)', border: '#C0C0C0' },
    'rg': { bg: 'linear-gradient(135deg, #E8B4B8 0%, #D4A5A5 100%)', border: '#B76E79' },
};

export default function ToggleButtonSizes({ options, isColor = false }) {
    const [selected, setSelected] = React.useState(options?.[0] || '');

    const handleSelect = (value) => {
        setSelected(value);
    };

    if (!options || options.length === 0) return null;

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
            }}
        >
            {options.map((opt) => {
                const isSelected = selected === opt;
                const optLower = opt?.toLowerCase() || '';
                const colorInfo = colorMap[optLower];

                if (isColor && colorInfo) {
                    // Render color swatch for metal colors
                    return (
                        <Box
                            key={opt}
                            onClick={() => handleSelect(opt)}
                            sx={{
                                position: 'relative',
                                cursor: 'pointer',
                                p: 0.5,
                                borderRadius: '50%',
                                border: isSelected ? '2px solid #333' : '2px solid transparent',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    background: colorInfo.bg,
                                    border: `2px solid ${colorInfo.border}`,
                                    boxShadow: isSelected
                                        ? '0 4px 12px rgba(0,0,0,0.2)'
                                        : '0 2px 6px rgba(0,0,0,0.1)',
                                }}
                                title={opt}
                            />
                            {isSelected && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: -20,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        fontSize: '0.6rem',
                                        fontFamily: '"DM Sans", sans-serif',
                                        color: '#666',
                                        whiteSpace: 'nowrap',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {opt}
                                </Box>
                            )}
                        </Box>
                    );
                }

                // Render regular option chip
                return (
                    <Chip
                        key={opt}
                        label={opt}
                        onClick={() => handleSelect(opt)}
                        sx={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            px: 1,
                            py: 2.5,
                            borderRadius: '8px',
                            border: isSelected ? '2px solid #333' : '1px solid #E0E0E0',
                            backgroundColor: isSelected ? '#FAFAFA' : 'transparent',
                            color: isSelected ? '#333' : '#666',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#FAFAFA',
                                borderColor: '#D8C29D',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            },
                            '& .MuiChip-label': {
                                px: 1.5,
                            },
                        }}
                    />
                );
            })}
        </Box>
    );
}
