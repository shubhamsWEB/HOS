import React from 'react'
import { Field } from 'react-final-form';
import { Select, MenuItem, Typography } from '@mui/material'
function metalColour({options}) {
    const required = value => (value ? undefined : 'Required')
    return (
        <Field name="metalPurity" validate={required}>
            {({ input, meta }) => (
                <>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Metal Purity"
                        // onChange={handleChange}
                        {...input}
                        fullWidth
                        sx={{ border: (meta.error && meta.touched) ? '1px solid red' : '', borderRadius: '6px' }}
                    >
                        {options.data.filter((item) => item.cname === 'metal_purity')[0]?.cvalue.map(cat => {
                            return <MenuItem value={cat} key={cat}>{cat}</MenuItem>
                        })}
                    </Select>
                    {meta.error && meta.touched && <Typography variant='caption' color='error'>{meta.error}</Typography>}

                </>
            )}
        </Field>
    )
}

export default metalColour