import React from 'react'
import { Field } from 'react-final-form';
import { Select, MenuItem } from '@mui/material';
function solitaireSize({options}) {
    return (
        <Field name="solitaireSize">
            {({ input, meta }) => (
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Solitaire Size"
                    // onChange={handleChange}
                    {...input}
                    fullWidth
                    multiple
                    value={input.value || []}
                >
                    {options.data.filter((item) => item.cname === 'Solitaire_Size')[0]?.cvalue.map(cat => {
                        return <MenuItem value={cat} key={cat}>{cat}</MenuItem>
                    })}
                </Select>
            )}
        </Field>
    )
}

export default solitaireSize