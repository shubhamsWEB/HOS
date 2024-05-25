'use client'
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Grid, Select, MenuItem, TextareaAutosize, Typography, Button, Box, FormControlLabel, Checkbox } from '@mui/material';
import { useSelector } from 'react-redux';
import ImageUpload from './ImageUpload';

import CutInfoField from './Fields/CutInfoField';
import DetailsField from './Fields/DetailsField';
import InStockField from './Fields/InStockField';
import ProductCategoryField from './Fields/ProductCategoryField';
import MetalColorField from './Fields/MetalColorField';
import MetalPurityField from './Fields/MetalPurityField';
import MetalInfoField from './Fields/MetalInfoField';
import OfferField from './Fields/OfferField';
import ProductCodeField from './Fields/ProductCodeField';
import ProductCollectionField from './Fields/ProductCollectionField';
import ProductDescriptionField from './Fields/ProductDescriptionField';
import ProductNameFiled from './Fields/ProductNameFiled';
import SettingInfoField from './Fields/SettingInfoField';
import SizeInfoField from './Fields/SizeInfoField';
import SolitaireShapeField from './Fields/SolitaireShapeField';
import SolitaireSizeFiled from './Fields/SolitaireSizeFiled';
import {useDispatch} from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import {productsInjectible} from '../../../appStore/saga/products';
import {loaderInjectible} from '../../../appStore/saga/loader';
import {createData} from '../../../utils/createNewProductData';
function FormComponent() {
    const options = useSelector(state => state.constantTypes);
    const [uploadedMediaYG, setUploadedMediaYG] = useState([]);
    const [uploadedMediaWG, setUploadedMediaWG] = useState([]);
    const [uploadedMediaRG, setUploadedMediaRG] = useState([]);
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        const productData = {
            ...values,
            mediaNew: [...uploadedMediaYG, ...uploadedMediaRG, ...uploadedMediaWG]
        }
        dispatch({type:'ADD_NEW_PRODUCT',payload:createData(productData)})
    }
    return (
        <>
            <Form
                onSubmit={onSubmit}
                initialValues={{ inStock: true }} initialValuesEqual={() => true}
                render={({ handleSubmit, invalid }) => (
                    <>
                        <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between', mb: 2 }}>
                            <Typography variant='h5'>Add Product Details</Typography>
                            <Button variant='contained' color='success' onClick={handleSubmit} disabled={invalid}>Add Product</Button>
                        </Box>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <label>Product Name*</label>
                                    <ProductNameFiled />
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <label>Product Description*</label>
                                    <ProductDescriptionField />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <label>Product Code*</label>
                                    <ProductCodeField />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <label>Offer</label>
                                    <OfferField />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <label>Product Category*</label>
                                    <ProductCategoryField options={options} />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <label>Product Collection*</label>
                                    <ProductCollectionField options={options} />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <label>Solitaire Size</label>
                                    <SolitaireSizeFiled options={options} />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <label>Metal Colour*</label>
                                    <MetalColorField options={options} />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <label>Metal Purity*</label>
                                    <MetalPurityField options={options} />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <label>Solitaire Shape</label>
                                    <SolitaireShapeField />
                                </Grid>
                                <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <label>Item Ready to Dispatch</label>
                                    <InStockField />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='h5'>INFO</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <label>Product Setting Info</label>
                                    <SettingInfoField />
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <label>Metal Info</label>
                                    <MetalInfoField />
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <label>Size Info</label>
                                    <SizeInfoField />
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <label>Cut Info</label>
                                    <CutInfoField />
                                </Grid>
                                <Grid item xs={12} sm={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <label>Details</label>
                                    <DetailsField />
                                </Grid>
                                <Grid item xs={12} sm={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant='h5'>Upload Product Images</Typography>
                                    <Field name="images">
                                        {({ input, meta }) => (
                                            <Grid container>
                                                <Grid item xs={4}>
                                                    <ImageUpload inputProps={input} uploadedMedia={uploadedMediaYG} setUploadedMedia={setUploadedMediaYG} color="yellow gold" />
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <ImageUpload inputProps={input} uploadedMedia={uploadedMediaRG} setUploadedMedia={setUploadedMediaRG} color="rose gold" />
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <ImageUpload inputProps={input} uploadedMedia={uploadedMediaWG} setUploadedMedia={setUploadedMediaWG} color="white gold" />
                                                </Grid>
                                            </Grid>
                                        )}
                                    </Field>
                                </Grid>
                            </Grid>
                        </form>
                    </>
                )}
            />
        </>
    )
}
const sagainjectibels = [productsInjectible,loaderInjectible]
export default withDuck(sagainjectibels)(FormComponent);