import React from 'react'
import { Box, Divider } from '@mui/material';
import TopNav from '@/components/Common/Breadcrumbs';
import Subnav from '@/components/Products/SubNav';
import Filter from '@/components/Products/ProductFilter';
import Listing from '@/components/Products/Listing';
function Products(props) {
    return (
        <>
            <Box mt={8} sx={{paddingTop:"3%"}}>
                <TopNav data={[{title:'Home',path:'/'},{title:'Products',path:'/products'}]} style={{ background: 'lightgray',p:2,px:14}} />
                <Subnav searchParams={props?.searchParams}/>
                <Box p={2} px={{xs:2,sm:10}}>
                    <Divider sx={{ marginTop: '30px', marginBottom: '10px' }} />
                    <Filter/>
                    <Listing/>
                </Box>
            </Box>
        </>
    )
}

export default Products