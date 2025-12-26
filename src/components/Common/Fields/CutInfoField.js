import React from 'react'
import { Field } from 'react-final-form';
import { TextField } from '@mui/material'
function cutInfo() {
    return (
        <Field name="cut">
            {({ input, meta }) => (
                <TextField
                    id="cut-info"
                    placeholder="Enter Cut Info"
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

export default cutInfo