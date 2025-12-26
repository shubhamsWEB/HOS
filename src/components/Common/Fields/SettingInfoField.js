import React from 'react'
import { Field } from 'react-final-form';
import { TextField } from '@mui/material';
function settingInfo() {
    return (
        <Field name="setting">
            {({ input, meta }) => (
                <TextField
                    id="setting-info"
                    placeholder="Enter Setting Info"
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

export default settingInfo