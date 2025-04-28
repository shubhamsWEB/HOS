'use client'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../Products/Listing/card1';
import { Grid, Box, Pagination } from '@mui/material';

function Products() {
    const dispatch = useDispatch();
    const { readytoshipData } = useSelector(state => state.products);
    const [page, setPage] = useState(1);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const productsPerPage = 4;
    
    // Get total number of featured products
    const totalFeaturedProducts = readytoshipData?.paginator?.total_count || 0;
    const totalPages = Math.ceil(totalFeaturedProducts / productsPerPage);
    
    // Load products with pagination
    useEffect(() => {
        dispatch({ 
            type: "FETCH_READY_TO_SHIP_PRODUCTS", 
            payload: {
                page: page,
                limit_per_page: productsPerPage,
                featured: true
            }
        });
    }, [dispatch, page]);
    
    // Handle page change
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };
    
    return (
        <>
            {readytoshipData?.data?.length > 0 ? (
                <>
                    <Grid container spacing={4}>
                        {readytoshipData.data.map(item => (
                            <Grid item xs={12} sm={6} key={item.id}>
                                <ProductCard data={item}/>
                            </Grid>
                        ))}
                    </Grid>
                    
                    {totalPages > 1 && (
                        <Box display="flex" justifyContent="center" mt={4}>
                            <Pagination 
                                count={totalPages}
                                page={page}
                                onChange={handlePageChange}
                                color="primary"
                                size="medium"
                            />
                        </Box>
                    )}
                </>
            ) : null}
        </>
    );
}

export default Products;