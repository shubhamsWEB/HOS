'use client'
import React from 'react'
import Button from '@mui/material/Button';
import styles from './style.module.scss';
import withDuck from '@/components/HOC/withDuck';
import {enquireInjectible} from '../../../appStore/saga/enquire';
import {useDispatch} from 'react-redux';
function EnquireBtn({data,style}) {
  const dispatch = useDispatch();
    const handelOnClick = () => {
        dispatch({type:'POST_ENQUIRE',payload:{p_id:data.id,u_id:1,message:'1'}})
        window.open(`https://wa.me/919617874449?text=https://houseofsansa.vercel.app/products/${data.id}`, '_blank');
    }
  return (
    <Button sx={style} variant="contained" fullWidth className={styles.btn} onClick={handelOnClick}>Enquire Now</Button>

  )
}

export default withDuck([enquireInjectible])(EnquireBtn);