import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import styles from './style.module.scss';
import FaqAccordion from './accordion';

const faqData = [
  {
    question: "How do I determine my ring size?",
    answer: "We offer a comprehensive size guide in our Help Center. You can also request a free ring sizer to be mailed to your address. For the most accurate sizing, we recommend visiting our showroom for a professional fitting."
  },
  {
    question: "What materials do you use in your jewelry?",
    answer: "We use only the finest materials including 18k gold, platinum, and ethically sourced gemstones. All our diamonds are conflict-free and certified for clarity and quality."
  },
  {
    question: "Do you offer customization services?",
    answer: "Yes, we offer bespoke jewelry design services. Our master craftsmen can create custom pieces based on your preferences. Please contact our customer service for more information about our customization process."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all regular-priced items in their original condition with all accompanying documentation and packaging. Custom pieces are non-returnable."
  },
  {
    question: "How do I care for my jewelry?",
    answer: "We recommend cleaning your jewelry regularly with a soft cloth. Avoid exposing your pieces to harsh chemicals, perfumes, or lotions. For more detailed care instructions, please refer to our Jewelry Care Guide."
  }
];

const FAQ = () => {
  return (
    <section className={styles.faqSection}>
      <Container maxWidth="lg">
        <div className={styles.decorativeLine}></div>
        <Typography variant="subtitle1" className={styles.sectionSubtitle}>
          QUESTIONS & ANSWERS
        </Typography>
        <Typography variant="h2" className={styles.sectionTitle}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" className={styles.sectionDescription}>
          Discover answers to common questions about our collections, services, and policies. If you have additional questions, please don't hesitate to contact us.
        </Typography>
        
        <Grid container spacing={4} className={styles.faqGrid}>
          <Grid item xs={12} md={10} lg={8} sx={{ margin: "0 auto" }}>
            {faqData.map((faq, index) => (
              <FaqAccordion 
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FAQ;