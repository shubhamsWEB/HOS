import React from 'react'
import styles from './style.module.scss';
function Badge({text}) {
  return (
    <div className={styles.appdownload}>
      <label id="first-title">{text}</label>
  </div>  
  )
}

export default Badge