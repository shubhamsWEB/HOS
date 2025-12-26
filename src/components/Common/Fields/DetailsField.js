import React from 'react'
import { Field } from 'react-final-form';
import {TextField} from '@mui/material';
function details() {
    return (
        <Field name="details">
            {({ input, meta }) => (
                <TextField
                    id="details"
                    placeholder="Enter Details"
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

export default details