import React from 'react'
import { Field } from 'react-final-form';
import { TextField } from '@mui/material';
function sizeInfo() {
    return (
        <Field name="size">
            {({ input, meta }) => (
                <TextField
                    id="size-info"
                    placeholder="Enter Size Info"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    {...input}
                />
            )}
        </Field>
    )
}

export default sizeInfo