"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import styles from './style.module.scss';
import { useTheme } from '@mui/material/styles';

export default function ProductInfo({ data, title }) {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleExpansion}
      slots={{ transition: Fade }}
      slotProps={{ transition: { timeout: 400 } }}
      sx={{
        '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
        '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '4px !important',
        overflow: 'hidden',
        '&:before': {
          display: 'none',
        },
        '&.Mui-expanded': {
          margin: 0,
        }
      }}
      className={styles.infoAccordion}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon 
            sx={{ 
              color: expanded ? theme.palette.primary.main : 'inherit' 
            }} 
          />
        }
        aria-controls={`panel-${title}-content`}
        id={`panel-${title}-header`}
        sx={{
          padding: '12px 16px',
          backgroundColor: expanded ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
          '&:hover': {
            backgroundColor: expanded 
              ? 'rgba(212, 175, 55, 0.08)' 
              : 'rgba(0, 0, 0, 0.02)'
          }
        }}
      >
        <Typography 
          className={styles.main} 
          sx={{
            textTransform: 'capitalize',
            fontWeight: 600,
            color: expanded ? theme.palette.primary.main : 'inherit'
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: '16px',
          backgroundColor: 'rgba(250, 250, 250, 0.4)'
        }}
      >
        <Typography 
          variant="body2" 
          className={styles.sub}
          sx={{
            color: 'text.secondary',
            lineHeight: 1.7
          }}
        >
          {data}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
