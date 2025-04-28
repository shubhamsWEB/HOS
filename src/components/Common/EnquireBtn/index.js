'use client'
import React from 'react'
import styles from '../../Products/Listing/style.module.scss';
import withDuck from '@/components/HOC/withDuck';
import {enquireInjectible} from '../../../appStore/saga/enquire';
import {useDispatch} from 'react-redux';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StyledButton from '@/components/Common/StyledButton';

function EnquireBtn({data, style, className}) {
  const dispatch = useDispatch();
  
  const handleOnClick = () => {
    dispatch({
      type:'POST_ENQUIRE',
      payload:{
        p_id: data.id,
        u_id: 1,
        message: `I'm interested in ${data.productName}`
      }
    });
    window.open(`https://wa.me/919617874449?text=I'm interested in this product from House of Sansa: https://houseofsansa.vercel.app/products/${data.id}`, '_blank');
  };
  
  return (
    <StyledButton
      variant="contained"
      startIcon={<WhatsAppIcon fontSize="small" />}
      className={className}
      onClick={handleOnClick}
      sx={{
        ...style,
        boxShadow: 2,
        '&:hover': {
          boxShadow: 3
        }
      }}
    >
      <span>Enquire Now</span>
    </StyledButton>
  );
}

export default withDuck([enquireInjectible])(EnquireBtn);