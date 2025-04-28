import React from 'react'
import { Box, Container, Grid, Hidden, IconButton, Drawer, useMediaQuery } from '@mui/material';
import TopNav from '@/components/Common/Breadcrumbs';
import Subnav from '@/components/Products/SubNav';
import ProductFilter from '@/components/Products/ProductFilter';
import Listing from '@/components/Products/Listing';
import styles from './products.module.scss';

export const metadata = {
  title: 'Products | House of Sansa',
  description: 'Explore our exquisite collection of premium jewelry for all occasions.',
};

function Products(props) {
    return (
        <>
            <Box className={styles.productsPage}>
                {/* Top Navigation Breadcrumbs */}
                <Box className={styles.breadcrumbWrapper}>
                    <Container maxWidth="xl">
                        <TopNav 
                            data={[{title:'Home',path:'/'},{title:'Products',path:'/products'}]} 
                        />
                    </Container>
                </Box>
                
                {/* Main Collection Header */}
                <Subnav searchParams={props?.searchParams}/>
                
                {/* Main Content Area */}
                <Container maxWidth="xl" className={styles.mainContent}>
                    <Grid container spacing={3}>
                        {/* Left Sidebar for Desktop */}
                        <Hidden smDown>
                            <Grid item md={3} lg={2.5} className={styles.sidebarWrapper}>
                                <Box className={styles.stickyFilters}>
                                    <ProductFilter compact={true} />
                                </Box>
                            </Grid>
                        </Hidden>
                        
                        {/* Product Listing */}
                        <Grid item xs={12} sm={12} md={9} lg={9.5}>
                            {/* Mobile Filter Bar - Only Visible on Mobile */}
                            <Hidden mdUp>
                                <Box className={styles.mobileFilterBar}>
                                    <ProductFilter />
                                </Box>
                            </Hidden>
                            
                            {/* Product Grid */}
                            <Listing />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Products