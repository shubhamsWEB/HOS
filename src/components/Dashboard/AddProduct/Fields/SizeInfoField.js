import React from 'react'
import { Field } from 'react-final-form';
import { TextareaAutosize, Typography } from '@mui/material';
function sizeInfo() {
    return (
        <Field name="size">
            {({ input, meta }) => (
                <TextareaAutosize id="outlined-basic" placeholder="Enter Size Info" variant="outlined" {...input} minRows={4} />
            )}
        </Field>
    )
}

export default sizeInfo