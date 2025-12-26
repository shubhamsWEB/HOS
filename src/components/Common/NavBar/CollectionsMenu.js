'use client'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Typography, MenuItem, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import classes from './style.module.scss';

const collections = [
  { name: 'Sansa Diamonds', path: '/products?collections=Sansa Diamonds' },
  { name: 'Sansa Polki', path: '/products?collections=Sansa Polki' },
  { name: 'Sansa Gold', path: '/products?collections=Sansa Gold' },
  { name: 'Sansa Gems', path: '/products?collections=Sansa Gems' },
  { name: 'Sansa Accessories', path: '/products?collections=Sansa Accessories' }
];

function CollectionsMenu({ title }) {
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
        id="collections-button"
        aria-controls={open ? 'collections-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      >
        {title} <KeyboardArrowDownIcon fontSize='small' />
      </span>
      <Menu
        id="collections-menu"
        MenuListProps={{
          'aria-labelledby': 'collections-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            minWidth: '250px',
            maxHeight: '400px',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{ mt: 1 }}
      >
        <Box p={1}>
          {collections.map((collection, index) => (
            <MenuItem 
              key={index}
              dense
              onClick={handleClose}
              component={Link}
              href={collection.path}
            >
              <Typography variant='subtitle2' className={classes.links}>
                {collection.name}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </div>
  );
}

export default CollectionsMenu;

