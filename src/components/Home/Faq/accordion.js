import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './style.module.scss';

const FaqAccordion = ({ question, answer }) => {
  return (
    <Accordion className={styles.faqAccordion} elevation={0} disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
        aria-controls="faq-content"
        id="faq-header"
        className={styles.accordionSummary}
      >
        <Typography variant="subtitle1" className={styles.questionText}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.accordionDetails}>
        <Typography variant="body1" className={styles.answerText}>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordion; 