'use client'
import React, { useState } from 'react'
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';

const blogData = [
    {
        id: 1,
        category: 'TIPS',
        title: 'What are Lab-Grown Diamonds and how are they made?',
        description: 'Unlock the secrets to finding the perfect symbol of everlasting love with our informative article where we guide you through our lens.',
        author: 'Shubham Agarwal',
        date: 'May 10, 2023',
        image: '/assets/ring.webp',
        hasButton: true,
        slug: 'lab-grown-diamonds-guide'
    },
    {
        id: 2,
        category: 'GUIDE',
        title: 'Caring for Your Jewelry: Maintenance and Cleaning Complete Guide',
        description: 'Discover the essential maintenance and cleaning techniques to keep your cherished jewelry sparkling.',
        author: 'Shivangi Sipani',
        date: 'February 5, 2023',
        image: '/assets/ring.webp',
        hasButton: false,
        slug: 'jewelry-care-guide'
    },
    {
        id: 3,
        category: 'TIPS',
        title: 'How to Choose the Perfect Engagement Ring',
        description: 'A comprehensive guide to selecting the ideal engagement ring that reflects your unique love story.',
        author: 'Shubham Agarwal',
        date: 'April 15, 2023',
        image: '/assets/ring.webp',
        hasButton: true,
        slug: 'engagement-ring-guide'
    },
    {
        id: 4,
        category: 'GUIDE',
        title: 'Understanding Diamond Certifications and Quality',
        description: 'Learn about diamond grading systems and how to read certification reports to make informed purchases.',
        author: 'Shivangi Sipani',
        date: 'March 20, 2023',
        image: '/assets/ring.webp',
        hasButton: false,
        slug: 'diamond-certifications'
    }
];

function Blog() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const itemsPerPage = 2;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBlogs = blogData.slice(startIndex, startIndex + itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <Box className={styles.blogWrapper}>
            <Box className={styles.blogHeader}>
                <Typography variant='h2' className={styles.blogTitle}>
                    Lab Grown Diamonds
                </Typography>
                <Box className={styles.pagination}>
                    <IconButton 
                        onClick={handlePrevPage} 
                        disabled={currentPage === 1}
                        className={styles.paginationButton}
                    >
                        <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <Typography variant='body2' className={styles.pageInfo}>
                        {currentPage}/{totalPages}
                    </Typography>
                    <IconButton 
                        onClick={handleNextPage} 
                        disabled={currentPage === totalPages}
                        className={styles.paginationButton}
                    >
                        <ArrowForwardIosRoundedIcon />
                    </IconButton>
                </Box>
            </Box>

            <Box className={styles.blogGrid}>
                {currentBlogs.map((blog) => (
                    <Link href={`/blog/${blog.slug}`} key={blog.id} className={styles.blogCard}>
                        <Box className={styles.imageContainer}>
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={280}
                                height={200}
                                className={styles.blogImage}
                            />
                            {blog.hasButton && (
                                <Box className={styles.readButton}>
                                    <Typography variant='button' className={styles.readButtonText}>
                                        READ NOW
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                        <Box className={styles.blogContent}>
                            <Typography variant='overline' className={styles.category}>
                                {blog.category}
                            </Typography>
                            <Typography variant='h5' className={styles.cardTitle}>
                                {blog.title}
                            </Typography>
                            <Typography variant='body2' className={styles.description}>
                                {blog.description}
                            </Typography>
                            <Box className={styles.meta}>
                                <Typography variant='caption' className={styles.author}>
                                    {blog.author}
                                </Typography>
                                <Typography variant='caption' className={styles.date}>
                                    {blog.date}
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                ))}
            </Box>
        </Box>
    )
}

export default Blog

