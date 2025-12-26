'use client'
import React from 'react'
import { Box, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';
import styles from './breadcrumb.module.scss';

function Breadcrumb({ data, style = {} }) {
    if (!data || data.length === 0) return null;

    return (
        <Box className={styles.breadcrumbContainer} sx={style}>
            <Breadcrumbs
                aria-label="breadcrumb"
                separator={<NavigateNextIcon className={styles.separator} />}
                className={styles.breadcrumbs}
            >
                {data.map((item, index) => {
                    const isLast = index === data.length - 1;
                    
                    if (isLast) {
                        return (
                            <Typography
                                key={item.title}
                                className={styles.breadcrumbItem}
                                component="span"
                            >
                                {item.title}
                            </Typography>
                        );
                    }

                    return (
                        <Link
                            key={item.title}
                            href={item.path}
                            className={styles.breadcrumbLink}
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </Box>
    );
}

export default Breadcrumb;
