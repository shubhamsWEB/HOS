import React from 'react'
import { Field } from 'react-final-form';
import { TextField, Typography } from '@mui/material';
function productDescription() {
    const required = value => (value ? undefined : 'Required')
    return (
        <Field name="productDescription" validate={required}>
            {({ input, meta }) => (
                <>
                    <TextField
                        id="product-description"
                        label="Product Description"
                        variant="outlined"
                        multiline
                        rows={1}
                        fullWidth
                        error={meta.error && meta.touched}
                        {...input}
                    />
                    {meta.error && meta.touched && <Typography variant='caption' color='error' sx={{ mt: 0.5 }}>{meta.error}</Typography>}
                </>
            )}
        </Field>
    )
}

export default productDescription