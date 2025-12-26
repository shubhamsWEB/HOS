'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import Accordian from './accordian';
import styles from './style.module.scss';

const faqData = [
    {
        question: "Are your products certified and of high quality?",
        answer: "Yes, all of our products are crafted with the highest quality materials and undergo thorough quality checks. We also provide certificates of authenticity for our diamond and gemstone jewelry."
    },
    {
        question: "How do I determine my ring size for online purchases?",
        answer: "We provide a comprehensive ring sizing guide on our website. You can also visit our showroom for a professional fitting, or use our printable ring sizer available for download."
    },
    {
        question: "Are your materials ethically sourced?",
        answer: "Absolutely. We are committed to ethical sourcing and only work with suppliers who meet our strict standards for environmental responsibility and fair labor practices."
    },
    {
        question: "What is your return and exchange policy?",
        answer: "We offer a 30-day return policy for unworn items in their original packaging. Exchanges can be made within 60 days of purchase. Please refer to our returns page for detailed information."
    },
    {
        question: "Do you offer custom jewelry design services?",
        answer: "Yes, we have a team of expert designers who can create custom pieces tailored to your preferences. Contact us to schedule a consultation and discuss your vision."
    },
    {
        question: "How long does shipping take?",
        answer: "Standard shipping takes 5-7 business days. We also offer express shipping options (2-3 business days) and overnight delivery for urgent orders. International shipping times vary by location."
    },
    {
        question: "Do you provide warranty on your jewelry?",
        answer: "Yes, all our jewelry comes with a comprehensive warranty covering manufacturing defects. We also offer lifetime maintenance services to keep your pieces in pristine condition."
    },
    {
        question: "Can I visit your showroom?",
        answer: "Absolutely! We welcome visitors to our showroom where you can view our collections in person and receive personalized assistance from our jewelry experts. Please check our website for hours and location."
    }
];

function Faq() {
  // Split FAQ data into two columns
  const leftColumn = faqData.filter((_, index) => index % 2 === 0);
  const rightColumn = faqData.filter((_, index) => index % 2 === 1);

  return (
    <Box className={styles.faqWrapper}>
      <Typography variant='h2' className={styles.mainTitle}>Questions</Typography>
      <Box className={styles.faqContainer}>
        <Box className={styles.faqColumn}>
          {leftColumn.map((item, index) => (
            <Accordian 
              key={index} 
              question={item.question} 
              answer={item.answer} 
              initialExpanded={index === 0}
            />
          ))}
        </Box>
        <Box className={styles.faqColumn}>
          {rightColumn.map((item, index) => (
            <Accordian 
              key={index} 
              question={item.question} 
              answer={item.answer} 
              initialExpanded={index === 0}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Faq
