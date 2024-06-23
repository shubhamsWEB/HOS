'use client'
import React from 'react'
import Table from '../../Common/CollapsibleTable';
import {useSelector,useDispatch} from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import {productsInjectible} from '../../../appStore/saga/products';
import Modal from './EditProduct';
function Products() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [open,setOpen] = React.useState(false);
  const [productData,setData] = React.useState({});
  const handleOnDeleteProduct = (id) => {
    dispatch({type:'DELETE_PRODUCT',payload:{id}})
  }
  const handleOnEditProduct = (data) => {
    setData(data);
    setOpen(true);
  }
  return (
    <div>
        <Table data={products?.data} handleOnDeleteProduct={handleOnDeleteProduct} handleOnEditProduct={handleOnEditProduct}/>
        <Modal open={open} setOpen={setOpen} productData={productData}/>
    </div>
  )
}
const sagaInjectible = [productsInjectible]
export default withDuck(sagaInjectible)(Products);