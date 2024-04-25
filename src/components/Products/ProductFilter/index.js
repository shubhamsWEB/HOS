import React from 'react'
import { Box, Typography, Divider } from '@mui/material';
import Dropdown from '../../Common/Dropdown';
import { priceOptions, materialOptions, brandOptions, sizeOptions } from '../../../constants/filterOptions';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import AppsIcon from '@mui/icons-material/Apps';
function Filter() {
    return (
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant='subtitle2' sx={{ fontSize: '12px' }}>Showing 1 - 20 of 160 results</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                {/* <Dropdown title="Price" options={priceOptions} /> */}
                <Dropdown title="Material" options={materialOptions} />
                <Dropdown title="Brand" options={brandOptions} />
                <Dropdown title="Size" options={sizeOptions} />
                <Divider orientation="vertical" flexItem />
                <ViewHeadlineIcon fontSize='small' />
                <AppsIcon fontSize='small' />
            </Box>
        </Box>
    )
}

export default Filter