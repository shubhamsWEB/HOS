import React from 'react'
import {Field} from 'react-final-form';
import {TextField} from '@mui/material';
function metalInfo() {
    return (
        <Field name="metal">
            {({ input, meta }) => (
                <TextField
                    id="metal-info"
                    placeholder="Enter Metal Info"
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

export default metalInfo