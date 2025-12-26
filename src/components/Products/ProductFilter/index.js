'use client'
import React from 'react'
import { Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

const sortOptions = [
    { id: 1, title: 'Newest First', value: 'newest' },
    { id: 2, title: 'Price: Low to High', value: 'price-asc' },
    { id: 3, title: 'Price: High to Low', value: 'price-desc' },
    { id: 4, title: 'Name: A to Z', value: 'name-asc' },
];

function Filter({ totalProducts = 0 }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedSort, setSelectedSort] = React.useState(null);
    const [viewMode, setViewMode] = React.useState('grid');
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (option) => {
        setSelectedSort(option);
        handleClose();
    };

    return (
        <Box 
            sx={{ 
                display: { xs: 'none', sm: 'flex' }, 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                marginBottom: '16px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
            }}
        >
            {/* Results Count */}
            <Typography 
                sx={{ 
                    fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                    fontSize: '13px',
                    color: '#888',
                    letterSpacing: '0.3px'
                }}
            >
                Showing <strong style={{ color: '#1a1a1a', fontWeight: 500 }}>{totalProducts}</strong> products
            </Typography>

            {/* Sort and View Options */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {/* Sort Dropdown */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography
                        sx={{
                            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                            fontSize: '12px',
                            color: '#888',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        Sort by:
                    </Typography>
                    <Button
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon sx={{ fontSize: '18px !important' }} />}
                        sx={{
                            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                            fontSize: '13px',
                            color: '#1a1a1a',
                            textTransform: 'none',
                            padding: '6px 12px',
                            minWidth: 'auto',
                            fontWeight: 500,
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: '#c9a962'
                            }
                        }}
                    >
                        {selectedSort ? selectedSort.title : 'Newest First'}
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            sx: {
                                mt: 1,
                                minWidth: 180,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(0,0,0,0.06)',
                                borderRadius: 0,
                                '& .MuiMenuItem-root': {
                                    fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                                    fontSize: '13px',
                                    padding: '10px 16px',
                                    color: '#666',
                                    '&:hover': {
                                        backgroundColor: '#faf9f7',
                                        color: '#1a1a1a'
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: '#faf9f7',
                                        color: '#1a1a1a',
                                        fontWeight: 500,
                                        '&:hover': {
                                            backgroundColor: '#f0efed'
                                        }
                                    }
                                }
                            }
                        }}
                    >
                        {sortOptions.map(option => (
                            <MenuItem 
                                key={option.id}
                                onClick={() => handleSelect(option)}
                                selected={selectedSort?.id === option.id}
                            >
                                {option.title}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/* View Mode Toggle */}
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 0.5,
                        borderLeft: '1px solid rgba(0,0,0,0.08)',
                        paddingLeft: 2
                    }}
                >
                    <Box
                        onClick={() => setViewMode('grid')}
                        sx={{
                            width: 32,
                            height: 32,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: viewMode === 'grid' ? '#1a1a1a' : '#ccc',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: '#1a1a1a'
                            }
                        }}
                    >
                        <GridViewIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Box
                        onClick={() => setViewMode('list')}
                        sx={{
                            width: 32,
                            height: 32,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: viewMode === 'list' ? '#1a1a1a' : '#ccc',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: '#1a1a1a'
                            }
                        }}
                    >
                        <ViewListIcon sx={{ fontSize: 20 }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Filter
