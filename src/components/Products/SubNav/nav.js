import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
function Nav({links}) {
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb" sx={{justifyContent:'center'}} id='sss'>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
         Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/products"
        >
          Product
        </Link>
      </Breadcrumbs>
    </>
  )
}

export default Nav