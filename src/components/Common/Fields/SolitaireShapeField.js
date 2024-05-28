import React from 'react'
import { Field } from 'react-final-form';
import { TextField, Typography } from '@mui/material';
function solitaireShape() {
    return (
        <Field name="solitaireShape">
            {({ input, meta }) => (
                <TextField id="outlined-basic" label="Solitaire Shape" variant="outlined" {...input} fullWidth />
            )}
        </Field>
    )
}

export default solitaireShape