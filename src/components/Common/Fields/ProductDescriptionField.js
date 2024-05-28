import React from 'react'
import { Field } from 'react-final-form';
import { TextareaAutosize, Typography } from '@mui/material';
function productDescription() {
    const required = value => (value ? undefined : 'Required')
    return (
        <Field name="productDescription" validate={required}>
            {({ input, meta }) => (
                <>
                    <TextareaAutosize id="outlined-basic" label="Product Description" variant="outlined" {...input} minRows={3} sx={{ border: (meta.error && meta.touched) ? '1px solid red' : '', borderRadius: '6px' }} />
                    {meta.error && meta.touched && <Typography variant='caption' color='error'>{meta.error}</Typography>}
                </>
            )}
        </Field>
    )
}

export default productDescription