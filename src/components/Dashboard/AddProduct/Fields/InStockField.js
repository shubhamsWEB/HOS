import React from 'react'
import {Field} from 'react-final-form';
import {Select,MenuItem} from '@mui/material'
function inStock() {
    return (
        <Field name="inStock">
            {({ input, meta }) => (
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Metal Colour"
                    // onChange={handleChange}
                    {...input}
                    fullWidth
                >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select>
            )}
        </Field>
    )
}

export default inStock