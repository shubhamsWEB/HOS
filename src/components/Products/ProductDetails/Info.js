"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import styles from './style.module.scss';
export default function AccordionTransition(props) {
  const [expanded, setExpanded] = React.useState(false);
  console.log("🚀 ~ handleExpansion ~ props:", props);
  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className={styles.sub} fontWeight={"bold"} sx={{textTransform:'capitalize'}}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='p' sx={{color:'darkgray'}}>
            {props.data}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}