import React from 'react'
import { Field } from 'react-final-form';
import {TextareaAutosize} from '@mui/material';
function details() {
    return (
        <Field name="details">
            {({ input, meta }) => (
                <TextareaAutosize id="outlined-basic" placeholder="Enter Details" variant="outlined" {...input} minRows={4} />
            )}
        </Field>
    )
}

export default details