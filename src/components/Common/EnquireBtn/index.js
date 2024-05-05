import React from 'react'
import Button from '@mui/material/Button';
import styles from './style.module.scss';
function EnquireBtn({data}) {
    const handelOnClick = () => {
        window.open(`https://wa.me/919617874449?text=https://houseofsansa.vercel.app/products/${data.id}`, '_blank');
    }
  return (
    <Button variant="contained" fullWidth className={styles.btn} onClick={handelOnClick}>Enquire Now</Button>

  )
}

export default EnquireBtn