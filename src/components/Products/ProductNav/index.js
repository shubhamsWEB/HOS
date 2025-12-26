'use client'
import React, { Suspense } from 'react';
import { Box, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './productNav.module.scss';

function ProductNav({ breadcrumbData = [] }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const collections = searchParams.get('collections');
    const categories = searchParams.get('categories');

    const handleBreadcrumbClick = (e, path) => {
        e.preventDefault();
        router.push(path);
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Box className={styles.productNavContainer}>
                {/* Breadcrumb Section */}
                {breadcrumbData.length > 0 && (
                    <Box className={styles.breadcrumbSection}>
                        {breadcrumbData.map((item, index) => {
                            const isLast = index === breadcrumbData.length - 1 || item.isLast;
                            
                            return (
                                <React.Fragment key={`${item.title}-${index}`}>
                                    {isLast ? (
                                        <Typography className={styles.breadcrumbItem}>
                                            {item.title}
                                        </Typography>
                                    ) : (
                                        <Link 
                                            href={item.path} 
                                            className={styles.breadcrumbLink}
                                            onClick={(e) => handleBreadcrumbClick(e, item.path)}
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                    {!isLast && (
                                        <NavigateNextIcon className={styles.breadcrumbSeparator} />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </Box>
                )}

                {/* Title Section */}
                <Typography variant='h2' className={styles.pageTitle}>
                    {collections || categories || 'Products'}
                </Typography>
            </Box>
        </Suspense>
    );
}

export default ProductNav;

