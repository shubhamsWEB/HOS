import React from 'react'
import {Field} from 'react-final-form';
import {TextareaAutosize} from '@mui/material';
function metalInfo() {
    return (
        <Field name="metal">
            {({ input, meta }) => (
                <TextareaAutosize id="outlined-basic" placeholder="Enter Metal Info" variant="outlined" {...input} minRows={4} />
            )}
        </Field>
    )
}

export default metalInfo