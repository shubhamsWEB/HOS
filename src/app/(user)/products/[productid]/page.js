import React from 'react';
import { fetchProduct } from '../../../../services/apiHelperServer';
import ProductDetailsClient from './ProductDetailsClient';

export default async function ProductDetails({ params }) {
    const { productid } = await params;
    const product = await fetchProduct({ id: productid });
    
    return <ProductDetailsClient product={product} productid={productid} />;
}
