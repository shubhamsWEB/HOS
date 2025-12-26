'use client'
import React, { useEffect, useMemo } from 'react'
import { Box, Grid } from '@mui/material';
import ProductNav from '@/components/Products/ProductNav';
import FilterSidebar from '@/components/Products/ProductFilter/FilterSidebar';
import Listing from '@/components/Products/Listing';
import { useSelector, useDispatch } from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import { typesInjectible } from '@/appStore/saga/constantTypes';
import { usePathname, useSearchParams } from 'next/navigation';

function Products(props) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products?.data || []);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    // Build breadcrumb dynamically based on URL
    const breadcrumbData = useMemo(() => {
        const breadcrumbs = [{ title: 'Home', path: '/' }];
        
        // Add Products if we're on products page
        if (pathname === '/products') {
            const collections = searchParams.get('collections');
            const categories = searchParams.get('categories');
            
            // Always add Products (will be link if filters exist, otherwise last item)
            // Products link should remove all filters
            const hasFilters = collections || categories;
            breadcrumbs.push({ 
                title: 'Products', 
                path: '/products',
                isLast: !hasFilters
            });
            
            // Add Collection if exists
            // Collection link should only include collections param, removing categories
            if (collections) {
                const collectionPath = `/products?collections=${encodeURIComponent(collections)}`;
                breadcrumbs.push({ 
                    title: collections, 
                    path: collectionPath,
                    isLast: !categories
                });
            }
            
            // Add Category if exists (always last item, so non-clickable)
            if (categories) {
                const categoryPath = collections
                    ? `/products?collections=${encodeURIComponent(collections)}&categories=${encodeURIComponent(categories)}`
                    : `/products?categories=${encodeURIComponent(categories)}`;
                breadcrumbs.push({ 
                    title: categories, 
                    path: categoryPath,
                    isLast: true
                });
            }
        }
        
        return breadcrumbs;
    }, [pathname, searchParams]);
    
    useEffect(() => {
        // Fetch constants when component mounts
        dispatch({ type: "FETCH_CONSTANTS" });
    }, [dispatch]);
    
    return (
        <>
            <Box>
                <ProductNav breadcrumbData={breadcrumbData} />
                <Box p={{xs:1.5, sm:2}} px={{xs:1.5, sm:3, md:4, lg:10}}>
                    {/* Mobile Filter Button */}
                    <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 2 }}>
                        <FilterSidebar products={products} />
                    </Box>
                    <Grid container spacing={3}>
                        {/* Filter Sidebar - Desktop */}
                        <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <FilterSidebar products={products} />
                        </Grid>
                        {/* Products Listing */}
                        <Grid item xs={12} md={9}>
                            <Listing/>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

const sagaInjectible = [typesInjectible];
export default withDuck(sagaInjectible)(Products);