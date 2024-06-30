'use client'
import React from 'react'
import ModalComponent from '../../Common/Modal';
import { Box, Typography } from '@mui/material';
import {useDispatch} from 'react-redux';
import Form from './Form';
import withDuck from '@/components/HOC/withDuck';
import {typesInjectible} from '../../../appStore/saga/constantTypes';
function Modal({ open, setOpen, productData }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    // dispatch({type:'FETCH_TYPES',payload:{type:'all'}});
  },[]);
  return (
    <>
      <ModalComponent open={open} setOpen={setOpen}>
        <Typography variant='h5' color="gray">Edit Product Details</Typography>
        <Form data={productData}/>
      </ModalComponent>
    </>
  )
}

export default withDuck([typesInjectible])(Modal);