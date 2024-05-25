import React from 'react'
import { Field } from 'react-final-form';
import { TextareaAutosize } from '@mui/material'
function cutInfo() {
    return (
        <Field name="cut">
            {({ input, meta }) => (
                <TextareaAutosize id="outlined-basic" placeholder="Enter Cut Info" variant="outlined" {...input} minRows={4} />
            )}
        </Field>
    )
}

export default cutInfo