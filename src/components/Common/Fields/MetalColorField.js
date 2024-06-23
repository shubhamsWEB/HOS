import React from 'react'
import { Field } from 'react-final-form';
import { Select, MenuItem,Typography } from '@mui/material'
function metalColour({options}) {
    const required = value => (value ? undefined : 'Required')
    return (
        <Field name="metalColour" validate={required}>
            {({ input, meta }) => (
                <>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Metal Colour"
                        // onChange={handleChange}
                        {...input}
                        fullWidth
                        multiple
                        value={input.value || []}
                        sx={{ border: (meta.error && meta.touched) ? '1px solid red' : '', borderRadius: '6px' }}
                    >
                        {options.data.filter((item) => item.cname === 'Metal_Colour')[0]?.cvalue.map(cat => {
                            return <MenuItem value={cat} key={cat} sx={{textTransform:'capitalize'}}>{cat}</MenuItem>
                        })}
                    </Select>
                    {meta.error && meta.touched && <Typography variant='caption' color='error'>{meta.error}</Typography>}

                </>
            )}
        </Field>
    )
}

export default metalColour