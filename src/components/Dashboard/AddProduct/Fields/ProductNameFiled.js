import React from 'react'
import { Field } from 'react-final-form';
import { TextField, Typography } from '@mui/material';
function productName() {
    const required = value => (value ? undefined : 'Required')
    return (
        <Field name="productName" validate={required}>
            {({ input, meta }) => (
                <>
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" {...input} fullWidth sx={{ border: (meta.error && meta.touched) ? '1px solid red' : '', borderRadius: '6px' }} />
                    {meta.error && meta.touched && <Typography variant='caption' color='error'>{meta.error}</Typography>}
                </>
            )}
        </Field>
    )
}

export default productName