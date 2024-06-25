'use client'
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Grid, Select, MenuItem, TextareaAutosize, Typography, Button, Box, FormControlLabel, Checkbox } from '@mui/material';
import { useSelector } from 'react-redux';

import CutInfoField from '../../Common/Fields/CutInfoField';
import DetailsField from '../../Common/Fields/DetailsField';
import InStockField from '../../Common/Fields/InStockField';
import ProductCategoryField from '../../Common/Fields/ProductCategoryField';
import MetalColorField from '../../Common/Fields/MetalColorField';
import MetalPurityField from '../../Common/Fields/MetalPurityField';
import MetalInfoField from '../../Common/Fields/MetalInfoField';
import OfferField from '../../Common/Fields/OfferField';
import ProductCodeField from '../../Common/Fields/ProductCodeField';
import ProductCollectionField from '../../Common/Fields/ProductCollectionField';
import ProductDescriptionField from '../../Common/Fields/ProductDescriptionField';
import ProductNameFiled from '../../Common/Fields/ProductNameFiled';
import SettingInfoField from '../../Common/Fields/SettingInfoField';
import SizeInfoField from '../../Common/Fields/SizeInfoField';
import SolitaireShapeField from '../../Common/Fields/SolitaireShapeField';
import SolitaireSizeFiled from '../../Common/Fields/SolitaireSizeFiled';
import {useDispatch} from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import {productsInjectible} from '../../../appStore/saga/products';
import {loaderInjectible} from '../../../appStore/saga/loader';
import {createData} from '../../../utils/createNewProductData';
function FormComponent({data}) {
    const options = useSelector(state => state.constantTypes);
    const [productData,setPData] = React.useState(data);
    const [uploadedMediaYG, setUploadedMediaYG] = useState([]);
    const [uploadedMediaWG, setUploadedMediaWG] = useState([]);
    const [uploadedMediaRG, setUploadedMediaRG] = useState([]);
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        const productData = {
            ...values,
            mediaNew: [...uploadedMediaYG, ...uploadedMediaRG, ...uploadedMediaWG]
        }
        dispatch({type:'EDIT_PRODUCT',payload:createData(productData)})
    }
    return (
        <>
            <Form
                onSubmit={onSubmit}
                initialValues={{ ...productData,category:[productData.category],collection:[productData.collection],solitaireSize:productData.solitaireSize.split(',').map(size => size.trim()),metalColour:productData.metalColour.split(',').map(size => size.trim()),metalPurity:productData.metalPurity.split(',').map(size => size.trim())}} initialValuesEqual={() => true}
                render={({ handleSubmit, invalid }) => (
                    <>
                        <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between', mb: 2 ,mt:2}}>
                            <Typography variant='h5'>{data.productName} ({data.productCode})</Typography>
                            <Button variant='contained' color='success' onClick={handleSubmit} disabled={invalid}>SAVE</Button>
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
                                {/* <Grid item xs={12} sm={12} sx={{ display: 'flex', flexDirection: 'column' }}>
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
                                </Grid> */}
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