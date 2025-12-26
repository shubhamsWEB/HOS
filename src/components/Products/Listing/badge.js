import React from 'react'
import styles from './style.module.scss';

function Badge({ text }) {
  return (
    <div className={styles.discountBadgeContainer}>
      <label className={styles.badgeText}>{text}</label>
  </div>  
  );
}

export default Badge;