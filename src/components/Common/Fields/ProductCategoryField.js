import React from 'react'
import { Field } from 'react-final-form';
import { Select, MenuItem, Typography } from '@mui/material'
function metalCategory({options}) {
    const required = value => (value ? undefined : 'Required')
    return (
        <Field name="category" validate={required}>
            {({ input, meta }) => (
                <>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Product Category"
                        // onChange={handleChange}
                        {...input}
                        fullWidth
                        sx={{ border: (meta.error && meta.touched) ? '1px solid red' : '', borderRadius: '6px' }}
                    >
                        {options.data.filter((item) => item.cname === 'Categories')[0]?.cvalue.map(cat => {
                            return <MenuItem value={cat} key={cat}>{cat}</MenuItem>
                        })}
                    </Select>
                    {meta.error && meta.touched && <Typography variant='caption' color='error'>{meta.error}</Typography>}
                </>
            )}
        </Field>
    )
}

export default metalCategory