import React from 'react'
import { Field } from 'react-final-form';
import { TextField,Typography } from '@mui/material';
function productCode() {
    const required = value => (value ? undefined : 'Required')
    return (
        <Field name="productCode" validate={required} >
            {({ input, meta }) => (
                <>
                    <TextField id="outlined-basic" label="Product Code" variant="outlined" {...input} fullWidth sx={{ border: (meta.error && meta.touched) ? '1px solid red' : '', borderRadius: '6px' }} />
                    {meta.error && meta.touched && <Typography variant='caption' color='error'>{meta.error}</Typography>}
                </>
            )
            }
        </Field >
    )
}

export default productCode