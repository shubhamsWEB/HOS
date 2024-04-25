import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
function Breadcrumb({data,style={}}) {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator="|" sx={style}>
      {data.map(item => {
        return (
          <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href={item.path}
          key={item.title}
        >
         {item.title}
        </Link>
        )
      })}
    </Breadcrumbs>
  )
}

export default Breadcrumb;