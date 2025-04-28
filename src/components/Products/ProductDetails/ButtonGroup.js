'use client'
import React, { useState } from 'react';
import { Stack, ToggleButton, ToggleButtonGroup, useTheme } from '@mui/material';
import styles from './style.module.scss';

export default function ButtonGroup({ options, color = "primary" }) {
  const theme = useTheme();
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setSelected(newValue);
    }
  };

  return (
    <Stack spacing={2} alignItems="flex-start">
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleChange}
        aria-label="option selection"
        sx={{
          gap: '10px',
          flexWrap: 'wrap',
          '& .MuiToggleButtonGroup-grouped': {
            margin: 0,
            border: `1px solid ${theme.palette[color].main} !important`,
            '&.Mui-selected': {
              backgroundColor: `${theme.palette[color].main} !important`,
              color: `${theme.palette[color].contrastText} !important`,
            },
            '&:not(:first-of-type)': {
              borderRadius: 0,
              borderLeft: `1px solid ${theme.palette[color].main} !important`,
            },
            '&:first-of-type': {
              borderRadius: 0,
            },
          }
        }}
      >
        {options.map((opt) => (
          <ToggleButton
            key={opt}
            value={opt}
            aria-label={opt}
            className={styles.sub}
            sx={{
              minWidth: '40px',
              px: 2, 
              py: 0.7,
              fontSize: '0.85rem',
              textTransform: 'none',
              borderRadius: '0 !important',
              transition: 'all 0.2s ease',
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'rgba(212, 175, 55, 0.08)',
              },
              '&.Mui-selected': {
                fontWeight: 600
              }
            }}
          >
            {opt}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}
