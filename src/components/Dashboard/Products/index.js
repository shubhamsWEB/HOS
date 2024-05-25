'use client'
import React from 'react'
import Table from '../../Common/CollapsibleTable';
import {useSelector,useDispatch} from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import {productsInjectible} from '../../../appStore/saga/products';
function Products() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const handleOnDeleteProduct = (id) => {
    dispatch({type:'DELETE_PRODUCT',payload:{id}})
  }
  return (
    <div>
        <Table data={products?.data} handleOnDeleteProduct={handleOnDeleteProduct}/>
    </div>
  )
}
const sagaInjectible = [productsInjectible]
export default withDuck(sagaInjectible)(Products);