'use client'
import React, { Suspense } from 'react';
import { Box, Typography, Breadcrumbs, Button } from '@mui/material';
import { productsCategory } from '../../../constants/productsType';
import { useRouter } from 'next/navigation';

function Filter({searchParams}) {
    const router = useRouter();
    // const searchParams = useSearchParams();

    const collections = searchParams?.collections;

    const handleCategoryClick = (item) => {
        let path = '/products';

        // Build query string based on collections and categories
        const queryParams = [];
        if (collections) {
            queryParams.push(`collections=${collections}`);
        }
        if (item.title !== 'All') {
            if (item.path) {
                queryParams.push(`categories=${item.path}`);
            }
        }

        // If there are query parameters, append them to the path
        if (queryParams.length > 0) {
            path += `?${queryParams.join('&')}`;
        }

        // Push or replace the URL based on conditions
        if (item.title === 'All') {
            router.replace(path);
        } else {
            router.push(path);
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <Typography variant='h2'>{collections || 'Products'}</Typography>
                <Breadcrumbs separator="|" id="productSubnav">
                    {productsCategory.map(item => (
                        <Button
                            key={item.id}
                            onClick={() => handleCategoryClick(item)}
                            underline="hover"
                            color="inherit"
                        >
                            {item.title}
                        </Button>
                    ))}
                </Breadcrumbs>
            </Box>
        </Suspense>
    );
}

export default Filter;
