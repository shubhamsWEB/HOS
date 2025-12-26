'use client'
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Grid, Typography, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import ImageUpload from './ImageUpload';

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
import SaveIcon from '@mui/icons-material/Save';

const SectionHeader = ({ title }) => (
  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5, mt: 2, color: '#666' }}>
    {title}
  </Typography>
);

const FieldLabel = ({ children, required }) => (
  <Typography 
    variant="caption" 
    sx={{ 
      mb: 0.5, 
      display: 'block',
      fontWeight: 500, 
      color: '#666',
      '&::after': required ? { content: '"*"', color: '#d32f2f', ml: 0.5 } : {}
    }}
  >
    {children}
  </Typography>
);

function FormComponent() {
    const options = useSelector(state => state.constantTypes);
    const [uploadedMediaYG, setUploadedMediaYG] = useState([]);
    const [uploadedMediaWG, setUploadedMediaWG] = useState([]);
    const [uploadedMediaRG, setUploadedMediaRG] = useState([]);
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        console.log('Form submission - values:', values);
        const productData = {
            ...values,
            mediaNew: [...uploadedMediaYG, ...uploadedMediaRG, ...uploadedMediaWG],
            metalColour:values.metalColour.join(','),
            metalPurity: values.metalPurity.join(','),
            solitaireSize:values.solitaireSize.join(',')
        }
        // Debug: Verify metalColour and metalPurity are different
        console.log('Form submission - metalColour:', productData.metalColour);
        console.log('Form submission - metalPurity:', productData.metalPurity);
        const finalData = createData(productData);
        console.log('Final payload - metalColour:', finalData.metalColour);
        console.log('Final payload - metalPurity:', finalData.metalPurity);
        dispatch({type:'ADD_NEW_PRODUCT',payload:finalData})
    }
    return (
        <>
            <Form
                onSubmit={onSubmit}
                initialValues={{ inStock: true }} initialValuesEqual={() => true}
                render={({ handleSubmit, invalid, values }) => (
                    <>
                        {/* Basic Information Section */}
                        <SectionHeader title="Basic Information" />
                        <Grid container spacing={2} sx={{ mb: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <FieldLabel required>Product Name</FieldLabel>
                                <ProductNameFiled />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FieldLabel required>Product Description</FieldLabel>
                                <ProductDescriptionField />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FieldLabel required>Product Code</FieldLabel>
                                <ProductCodeField />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FieldLabel>Offer</FieldLabel>
                                <OfferField />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FieldLabel required>Item Ready to Dispatch</FieldLabel>
                                <InStockField />
                            </Grid>
                        </Grid>

                        {/* Category & Collection Section */}
                        <SectionHeader title="Category & Collection" />
                        <Grid container spacing={2} sx={{ mb: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <FieldLabel required>Product Category</FieldLabel>
                                <ProductCategoryField options={options} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FieldLabel required>Product Collection</FieldLabel>
                                <ProductCollectionField options={options} />
                            </Grid>
                        </Grid>

                        {/* Metal & Solitaire Details Section */}
                        <SectionHeader title="Metal & Solitaire Details" />
                        <Grid container spacing={2} sx={{ mb: 2 }}>
                            <Grid item xs={12} sm={4}>
                                <FieldLabel required>Metal Colour</FieldLabel>
                                <MetalColorField options={options} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FieldLabel required>Metal Purity</FieldLabel>
                                <MetalPurityField options={options} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FieldLabel>Solitaire Size</FieldLabel>
                                <SolitaireSizeFiled options={options} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FieldLabel>Solitaire Shape</FieldLabel>
                                <SolitaireShapeField />
                            </Grid>
                        </Grid>

                        {/* Additional Information Section */}
                        <SectionHeader title="Additional Information" />
                        <Grid container spacing={2} sx={{ mb: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <FieldLabel>Product Setting Info</FieldLabel>
                                <SettingInfoField />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FieldLabel>Metal Info</FieldLabel>
                                <MetalInfoField />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FieldLabel>Size Info</FieldLabel>
                                <SizeInfoField />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FieldLabel>Cut Info</FieldLabel>
                                <CutInfoField />
                            </Grid>
                            <Grid item xs={12}>
                                <FieldLabel>Details</FieldLabel>
                                <DetailsField />
                            </Grid>
                        </Grid>

                        {/* Image Upload Section */}
                        <SectionHeader title="Product Media" />
                        <Field name="images">
                            {({ input, meta }) => (
                                <Grid container spacing={2} sx={{ mb: 2 }}>
                                    <Grid item xs={12} md={4}>
                                        <Box
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 1,
                                                backgroundColor: 'rgba(255, 215, 0, 0.05)',
                                                border: '1px solid rgba(255, 215, 0, 0.2)'
                                            }}
                                        >
                                            <Typography 
                                                variant="caption" 
                                                align='center' 
                                                sx={{ 
                                                    fontWeight: 600, 
                                                    color: '#b8860b',
                                                    mb: 1,
                                                    display: 'block'
                                                }}
                                            >
                                                Yellow Gold
                                            </Typography>
                                            <ImageUpload 
                                                inputProps={input} 
                                                uploadedMedia={uploadedMediaYG} 
                                                setUploadedMedia={setUploadedMediaYG} 
                                                color="yellow gold" 
                                                values={values} 
                                                backgroundC={"rgba(255, 215, 0, 0.05)"}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 1,
                                                backgroundColor: 'rgba(183, 110, 121, 0.05)',
                                                border: '1px solid rgba(183, 110, 121, 0.2)'
                                            }}
                                        >
                                            <Typography 
                                                variant="caption" 
                                                align='center' 
                                                sx={{ 
                                                    fontWeight: 600, 
                                                    color: '#b76e79',
                                                    mb: 1,
                                                    display: 'block'
                                                }}
                                            >
                                                Rose Gold
                                            </Typography>
                                            <ImageUpload 
                                                inputProps={input} 
                                                uploadedMedia={uploadedMediaRG} 
                                                setUploadedMedia={setUploadedMediaRG} 
                                                color="rose gold" 
                                                values={values}  
                                                backgroundC={"rgba(183, 110, 121, 0.05)"}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Box
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 1,
                                                backgroundColor: 'rgba(192, 192, 192, 0.05)',
                                                border: '1px solid rgba(192, 192, 192, 0.2)'
                                            }}
                                        >
                                            <Typography 
                                                variant="caption" 
                                                align='center' 
                                                sx={{ 
                                                    fontWeight: 600, 
                                                    color: '#808080',
                                                    mb: 1,
                                                    display: 'block'
                                                }}
                                            >
                                                White Gold
                                            </Typography>
                                            <ImageUpload 
                                                inputProps={input} 
                                                uploadedMedia={uploadedMediaWG} 
                                                setUploadedMedia={setUploadedMediaWG} 
                                                color="white gold" 
                                                values={values} 
                                                backgroundC={"rgba(192, 192, 192, 0.05)"}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            )}
                        </Field>

                        {/* Submit Button */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
                            <Button 
                                variant="outlined" 
                                size="small"
                                onClick={() => window.history.back()}
                                sx={{ textTransform: 'none' }}
                            >
                                Cancel
                            </Button>
                            <Button 
                                variant='contained' 
                                size="small"
                                startIcon={<SaveIcon />}
                                onClick={handleSubmit} 
                                disabled={invalid}
                                sx={{ textTransform: 'none' }}
                            >
                                Save Product
                            </Button>
                        </Box>
                    </>
                )}
            />
        </>
    )
}
const sagainjectibels = [productsInjectible,loaderInjectible]
export default withDuck(sagainjectibels)(FormComponent);