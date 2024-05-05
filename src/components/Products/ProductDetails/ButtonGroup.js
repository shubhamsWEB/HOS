'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonSizes({ options }) {
    const [alignment, setAlignment] = React.useState('left');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true,
    };

    return (
        <Stack spacing={2} alignItems="left">
            <ToggleButtonGroup size="small" {...control} sx={{gap:'10px'}}>
                {options.map(opt => {
                    return (
                        <ToggleButton value={opt} key={opt} sx={{border:'1px solid #D8C29D !important',borderRadius:0,minWidth:'40px'}}>
                            {opt}
                        </ToggleButton>
                    )
                })}
            </ToggleButtonGroup>
        </Stack>
    );
}
