'use client'
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import styles from './style.module.scss';
import withDuck from '@/components/HOC/withDuck';
import {enquireInjectible} from '../../../appStore/saga/enquire';
import {customerAuthInjectible} from '../../../appStore/saga/customerAuth';
import {useDispatch, useSelector} from 'react-redux';
import CustomerLoginModal from '../CustomerLoginModal';
import Cookies from 'universal-cookie';

function EnquireBtn({data,style}) {
  const dispatch = useDispatch();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const customerAuth = useSelector((state) => state.customerAuth);
  const cookies = new Cookies();

    const handelOnClick = () => {
    const customerToken = cookies.get('hos_customer_token');
    const isAuthenticated = customerAuth?.isAuthenticated || customerToken;
    
    if (!isAuthenticated) {
      // Show login modal
      setShowLoginModal(true);
      return;
    }
    
    // User is authenticated, proceed with enquiry
    dispatch({type:'POST_ENQUIRE',payload:{p_id:data.id,u_id:customerAuth?.user?.id || 1,message:'1'}})
        window.open(`https://wa.me/919617874449?text=https://houseofsansa.vercel.app/products/${data.id}`, '_blank');
    }

  return (
    <>
      <Button 
        sx={style} 
        variant="contained" 
        fullWidth 
        className={styles.btn} 
        onClick={handelOnClick}
      >
        Enquire Now
      </Button>
      <CustomerLoginModal 
        open={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
      />
    </>
  )
}

export default withDuck([enquireInjectible, customerAuthInjectible])(EnquireBtn);