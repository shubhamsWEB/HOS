import React from 'react'
import { Field } from 'react-final-form';
import { TextareaAutosize, Typography } from '@mui/material';
function settingInfo() {
    return (
        <Field name="setting">
            {({ input, meta }) => (
                <TextareaAutosize id="outlined-basic" placeholder="Enter Setting Info" variant="outlined" {...input} minRows={4} />
            )}
        </Field>
    )
}

export default settingInfo