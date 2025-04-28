'use client'
import React, { Suspense, useState, useEffect } from 'react';
import { Box, Typography, Container, Chip } from '@mui/material';
import { productsCategory } from '../../../constants/productsType';
import { useRouter } from 'next/navigation';
import StyledButton from '@/components/Common/StyledButton';
import styles from './style.module.scss';

function SubNav({ searchParams }) {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState('All');
    
    const collections = searchParams?.collections;
    const categories = searchParams?.categories;
    
    useEffect(() => {
        // Set active category based on URL params
        if (categories) {
            const matchingCategory = productsCategory.find(item => item.path === categories);
            if (matchingCategory) {
                setActiveCategory(matchingCategory.title);
            }
        } else {
            setActiveCategory('All');
        }
    }, [categories]);

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
                <Container maxWidth="lg">
                    <Box className={styles.categoryNav}>
                        {productsCategory.map(item => (
                            <Chip
                                key={item.id}
                                label={item.title}
                                onClick={() => handleCategoryClick(item)}
                                className={`${styles.categoryChip} ${activeCategory === item.title ? styles.active : ''}`}
                                clickable
                            />
                        ))}
                    </Box>
                </Container>
            </Box>
        </Suspense>
    );
}

export default SubNav;
