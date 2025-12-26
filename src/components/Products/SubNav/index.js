'use client'
import React, { Suspense } from 'react';
import { Box, Typography, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { productsCategory } from '../../../constants/productsType';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './style.module.scss';

function Filter() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const collections = searchParams.get('collections');
    const activeCategory = searchParams.get('categories');

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
            <Box className={styles.subNavContainer}>
                <Typography variant='h2' className={styles.title}>
                    {collections || 'Products'}
                </Typography>
                {/* <Breadcrumbs 
                    separator={<NavigateNextIcon className={styles.separator} />} 
                    className={styles.breadcrumbs}
                    id="productSubnav"
                >
                    {productsCategory.map(item => {
                        const isActive = item.title === 'All' 
                            ? !activeCategory 
                            : activeCategory === item.path;
                        
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleCategoryClick(item)}
                                className={`${styles.categoryButton} ${isActive ? styles.active : ''}`}
                            >
                                {item.title}
                            </button>
                        );
                    })}
                </Breadcrumbs> */}
            </Box>
        </Suspense>
    );
}

export default Filter;
