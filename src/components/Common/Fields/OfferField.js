import React from 'react'
import { Field } from 'react-final-form';
import { TextField } from '@mui/material';
function offer() {
    return (
        <Field name="offer">
            {({ input, meta }) => (
                <TextField id="outlined-basic" label="Offer" variant="outlined" {...input} fullWidth />
            )}
        </Field>
    )
}

export default offer