'use client'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Typography, MenuItem, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import classes from './style.module.scss';

// Category sub-types mapping
const categorySubTypes = {
  Rings: ['Engagement Rings', 'Wedding Rings', 'Solitaire Rings', 'Diamond Rings', 'Gold Rings'],
  Necklaces: ['Pendant Necklaces', 'Choker Necklaces', 'Long Necklaces', 'Statement Necklaces', 'Chain Necklaces'],
  Earrings: ['Stud Earrings', 'Drop Earrings', 'Hoop Earrings', 'Chandelier Earrings', 'Jhumka Earrings'],
  Bracelets: ['Chain Bracelets', 'Bangle Bracelets', 'Cuff Bracelets', 'Charm Bracelets', 'Tennis Bracelets'],
  Pendants: ['Diamond Pendants', 'Gold Pendants', 'Solitaire Pendants', 'Designer Pendants', 'Traditional Pendants']
};

function CategoryMenu({ title, category }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const subTypes = categorySubTypes[category] || [];

  return (
    <div>
      <span
        aria-label="more"
        id={`${category}-button`}
        aria-controls={open ? `${category}-menu` : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      >
        {title} <KeyboardArrowDownIcon fontSize='small' />
      </span>
      <Menu
        id={`${category}-menu`}
        MenuListProps={{
          'aria-labelledby': `${category}-button`,
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
          {subTypes.map((subType, index) => (
            <MenuItem 
              key={index}
              dense
              onClick={handleClose}
              component={Link}
              href={`/products?categories=${category}&type=${encodeURIComponent(subType)}`}
            >
              <Typography variant='subtitle2' className={classes.links}>
                {subType}
              </Typography>
            </MenuItem>
          ))}
          <MenuItem 
            dense
            onClick={handleClose}
            component={Link}
            href={`/products?categories=${category}`}
            className={classes.viewMoreMenuItem}
          >
            <Typography variant='subtitle2' className={classes.viewMore}>
              View All {category}
              <ArrowRightAltIcon fontSize='small' sx={{ color: '#D8C29D', ml: 0.5 }} />
            </Typography>
          </MenuItem>
        </Box>
      </Menu>
    </div>
  );
}

export default CategoryMenu;
