'use client'
import React from 'react'
import { Box, Typography } from '@mui/material';
import './style.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import { productsInjectible } from '../../../appStore/saga/products';
import Products from './Products';
import { collections } from './constants';

function Collection() {
    const [selected, setSelected] = React.useState('Sansa Diamonds');
    const [hoveredId, setHoveredId] = React.useState(null);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        dispatch({ type: "FETCH_PRODUCTS", payload: { collections: selected } });
    }, [selected]);

    return (
        <Box className="collections-wrapper">
            {/* Section Header */}
            <Box className="collections-header">
                <Typography variant="overline" className="collections-label">
                    Curated Collections
                </Typography>
                <Typography variant="h2" className="collections-title">
                    Discover Our World
                </Typography>
            </Box>

            {/* Gallery Grid Layout - Single Row */}
            <Box className="collections-grid">
                {collections.map((item) => {
                    const isHovered = hoveredId === item.id;
                    
                    return (
                        <Link 
                            href={item.path} 
                            key={item.id}
                            className="collection-card"
                            onMouseEnter={() => {
                                setSelected(item.title);
                                setHoveredId(item.id);
                            }}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <Box className="collection-card__border" />
                            <Box 
                                className="collection-card__image"
                                sx={{ backgroundImage: `url(${item.media})` }}
                            />
                            <Box className="collection-card__overlay" />
                            <Box className="collection-card__shine" />
                            <Box className="collection-card__content">
                                <Typography variant="overline" className="collection-card__label">
                                    Collection
                                </Typography>
                                <Typography variant="h4" className="collection-card__title">
                                    {item.title}
                                </Typography>
                                {item.tagline && (
                                    <Typography variant="body2" className="collection-card__tagline">
                                        {item.tagline}
                                    </Typography>
                                )}
                                <Box className={`collection-card__cta ${isHovered ? 'collection-card__cta--visible' : ''}`}>
                                    <span className="collection-card__cta-text">Explore</span>
                                    <span className="collection-card__cta-line" />
                                </Box>
                            </Box>
                        </Link>
                    );
                })}
            </Box>

            {/* Selected Collection Products */}
            <Box className="collections-products">
                <Box className="collections-products__header">
                    <Box>
                        <Typography variant="overline" className="collections-products__label">
                            From the Collection
                        </Typography>
                        <Typography variant="h3" className="collections-products__title">
                            {selected}
                        </Typography>
                    </Box>
                    <Link href="/products" className="collections-products__link">
                        <span>View All</span>
                        <span className="collections-products__link-line" />
                    </Link>
                </Box>
                <Products />
            </Box>
        </Box>
    )
}

export default withDuck([productsInjectible])(Collection);
