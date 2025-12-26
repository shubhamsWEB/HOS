"use client"
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './style.module.scss';

export default function AccordionTransition({ question, answer, initialExpanded = false }) {
  const [expanded, setExpanded] = React.useState(initialExpanded);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box 
      className={`${styles.faqItem} ${expanded ? styles.faqItemExpanded : ''}`}
      onClick={handleExpansion}
    >
      <Box className={styles.faqQuestion}>
        <Box className={styles.iconWrapper}>
          {expanded ? (
            <RemoveIcon className={styles.icon} />
          ) : (
            <AddIcon className={styles.icon} />
          )}
        </Box>
        <Typography className={styles.questionText}>
          {question}
        </Typography>
      </Box>
      {expanded && (
        <Box className={styles.faqAnswer}>
          <Typography className={styles.answerText}>
            {answer}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
