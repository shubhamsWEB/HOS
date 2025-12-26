'use client'
import React from 'react'
import DashboardComponent from '../../../components/Dashboard';
import withDuck from '@/components/HOC/withDuck';
import {productsInjectible} from '../../../appStore/saga/products';
import {loaderInjectible} from '../../../appStore/saga/loader';
import {useDispatch} from 'react-redux'

function Dashboard() {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch({type:'FETCH_PRODUCTS_IN_DASHBOARD',payload:{}});
  }, [dispatch]);

  return (
    <DashboardComponent/>
  )
}

const sagaInjectables = [loaderInjectible, productsInjectible]
export default withDuck(sagaInjectables)(Dashboard);