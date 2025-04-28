"use client"
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        maxHeight: 250,
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function CustomizedMenus({ title, options, onChange, value }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    // Find the selected option based on the value prop
    const selectedOption = React.useMemo(() => {
        if (!value) return null;
        return options.find(option => option.value === value);
    }, [options, value]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleOnSelect = (option) => {
        if (onChange) {
            onChange(option.value);
        }
        handleClose();
    };
    
    const handleClear = () => {
        if (onChange) {
            onChange(null);
        }
        handleClose();
    };
    
    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    border: '1px solid #e0e0e0',
                    color: selectedOption ? 'primary.main' : '#000',
                    fontSize: '12px',
                    px: 2,
                    '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'rgba(212, 175, 55, 0.04)'
                    }
                }}
            >
                {selectedOption ? (
                    <>
                        {title}: <strong>{selectedOption.name}</strong>
                    </>
                ) : (
                    title
                )}
            </Button>
            
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClear} disableRipple sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                    All {title}
                </MenuItem>
                
                {options.map((option, index) => (
                    <MenuItem 
                        onClick={() => handleOnSelect(option)} 
                        disableRipple 
                        key={option.value || index}
                        selected={value === option.value}
                        sx={{ 
                            fontSize: '13px',
                            backgroundColor: value === option.value ? 'rgba(212, 175, 55, 0.1)' : 'inherit' 
                        }}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </StyledMenu>
        </div>
    );
}
