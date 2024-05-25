import React from 'react'
import Table from '../../Common/CollapsibleTable';
import {useSelector} from 'react-redux';
function Products() {
  const products = useSelector(state => state.products);
  return (
    <div>
        <Table data={products?.data}/>
    </div>
  )
}

export default Products