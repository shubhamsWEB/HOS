'use client'
import React, { useState } from 'react';
import { Box, Typography, Divider, Chip, Container, IconButton, Tooltip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Dropdown from '../../Common/Dropdown';
import { priceOptions, materialOptions, categoryOptions, collectionOptions, sizeOptions, cutOptions } from '../../../constants/filterOptions';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter, useSearchParams } from 'next/navigation';
import StyledButton from '@/components/Common/StyledButton';
import styles from './style.module.scss';

function ProductFilter({ compact = false }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [filterVisible, setFilterVisible] = useState(false);
    const [viewMode, setViewMode] = useState('grid');
    
    const currentPage = searchParams.get('page') || '1';
    const selectedCategory = searchParams.get('categories');
    const selectedCollection = searchParams.get('collections');
    const selectedPrice = searchParams.get('price');
    const selectedMetal = searchParams.get('metal');
    
    // Function to update URL with filter parameters
    const handleFilterChange = (filterType, value) => {
        const newParams = new URLSearchParams(searchParams.toString());
        
        if (value) {
            newParams.set(filterType, value);
        } else {
            newParams.delete(filterType);
        }
        
        // Reset to page 1 when filters change
        newParams.set('page', '1');
        
        router.push(`/products?${newParams.toString()}`);
    };
    
    const toggleFilterVisibility = () => {
        setFilterVisible(!filterVisible);
    };
    
    const toggleViewMode = () => {
        setViewMode(viewMode === 'grid' ? 'list' : 'grid');
    };
    
    const clearAllFilters = () => {
        router.push('/products');
    };
    
    const getFilterCount = () => {
        let count = 0;
        if (selectedCategory) count++;
        if (selectedCollection) count++;
        if (selectedPrice) count++;
        if (selectedMetal) count++;
        return count;
    };
    
    const filterCount = getFilterCount();
    
    if (compact) {
        return (
            <Box className={styles.compactFilter}>
                <Typography variant="h6" className={styles.compactTitle}>
                    Refine Your Selection
                </Typography>
                
                {filterCount > 0 && (
                    <StyledButton 
                        variant="text" 
                        onClick={clearAllFilters}
                        className={styles.clearButton}
                        startIcon={<CloseIcon />}
                        fullWidth
                    >
                        Clear All Filters
                    </StyledButton>
                )}
                
                <Accordion className={styles.filterAccordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={styles.filterGroupTitle}>Price Range</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box className={styles.filterOptions}>
                            {priceOptions.map(option => (
                                <Box 
                                    key={option.value}
                                    className={`${styles.filterOption} ${selectedPrice === option.value ? styles.active : ''}`}
                                    onClick={() => handleFilterChange('price', option.value === selectedPrice ? null : option.value)}
                                >
                                    {option.name}
                                </Box>
                            ))}
                        </Box>
                    </AccordionDetails>
                </Accordion>
                
                <Accordion className={styles.filterAccordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={styles.filterGroupTitle}>Categories</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box className={styles.filterOptions}>
                            {categoryOptions.map(option => (
                                <Box 
                                    key={option.value}
                                    className={`${styles.filterOption} ${selectedCategory === option.value ? styles.active : ''}`}
                                    onClick={() => handleFilterChange('categories', option.value === selectedCategory ? null : option.value)}
                                >
                                    {option.name}
                                </Box>
                            ))}
                        </Box>
                    </AccordionDetails>
                </Accordion>
                
                <Accordion className={styles.filterAccordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={styles.filterGroupTitle}>Collections</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box className={styles.filterOptions}>
                            {collectionOptions.map(option => (
                                <Box 
                                    key={option.value}
                                    className={`${styles.filterOption} ${selectedCollection === option.value ? styles.active : ''}`}
                                    onClick={() => handleFilterChange('collections', option.value === selectedCollection ? null : option.value)}
                                >
                                    {option.name}
                                </Box>
                            ))}
                        </Box>
                    </AccordionDetails>
                </Accordion>
                
                <Accordion className={styles.filterAccordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={styles.filterGroupTitle}>Metal Type</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box className={styles.filterOptions}>
                            {materialOptions.map(option => (
                                <Box 
                                    key={option.value}
                                    className={`${styles.filterOption} ${selectedMetal === option.value ? styles.active : ''}`}
                                    onClick={() => handleFilterChange('metal', option.value === selectedMetal ? null : option.value)}
                                >
                                    {option.name}
                                </Box>
                            ))}
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        );
    }
    
    return (
        <Box className={styles.filterContainer}>
            <Container maxWidth="lg">
                <Box className={styles.filterHeader}>
                    <Box className={styles.resultsInfo}>
                        <Typography variant='body2' className={styles.pageInfo}>
                            Page {currentPage}
                        </Typography>
                        
                        {filterCount > 0 && (
                            <Typography variant='body2' className={styles.activeFilterCount}>
                                {filterCount} {filterCount === 1 ? 'filter' : 'filters'} applied
                            </Typography>
                        )}
                    </Box>
                    
                    <Box className={styles.actions}>
                        <Tooltip title={filterVisible ? "Hide filters" : "Show filters"}>
                            <IconButton 
                                className={`${styles.actionButton} ${filterVisible ? styles.active : ''}`}
                                onClick={toggleFilterVisibility}
                                size="small"
                            >
                                <FilterListIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        
                        <Divider orientation="vertical" flexItem className={styles.divider} />
                        
                        <Tooltip title={viewMode === 'grid' ? "List view" : "Grid view"}>
                            <IconButton 
                                className={styles.actionButton}
                                onClick={toggleViewMode}
                                size="small"
                            >
                                {viewMode === 'grid' ? (
                                    <ViewListIcon fontSize="small" />
                                ) : (
                                    <GridViewIcon fontSize="small" />
                                )}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                
                {filterVisible && (
                    <Box className={styles.filterOptions}>
                        <Dropdown 
                            title="Price" 
                            options={priceOptions} 
                            onChange={(value) => handleFilterChange('price', value)}
                            value={selectedPrice}
                            className={styles.dropdown}
                        />
                        <Dropdown 
                            title="Category" 
                            options={categoryOptions} 
                            onChange={(value) => handleFilterChange('categories', value)}
                            value={selectedCategory}
                            className={styles.dropdown}
                        />
                        <Dropdown 
                            title="Collection" 
                            options={collectionOptions}
                            onChange={(value) => handleFilterChange('collections', value)}
                            value={selectedCollection}
                            className={styles.dropdown}
                        />
                        <Dropdown 
                            title="Metal" 
                            options={materialOptions}
                            onChange={(value) => handleFilterChange('metal', value)}
                            value={selectedMetal}
                            className={styles.dropdown}
                        />
                    </Box>
                )}
                
                {/* Active filters display */}
                {filterCount > 0 && (
                    <Box className={styles.activeFilters}>
                        {selectedCategory && (
                            <Chip 
                                label={getCategoryLabel(selectedCategory)}
                                onDelete={() => handleFilterChange('categories', null)}
                                className={styles.filterChip}
                            />
                        )}
                        
                        {selectedCollection && (
                            <Chip 
                                label={selectedCollection}
                                onDelete={() => handleFilterChange('collections', null)}
                                className={styles.filterChip}
                            />
                        )}
                        
                        {selectedPrice && (
                            <Chip 
                                label={getPriceLabel(selectedPrice)}
                                onDelete={() => handleFilterChange('price', null)}
                                className={styles.filterChip}
                            />
                        )}
                        
                        {selectedMetal && (
                            <Chip 
                                label={selectedMetal}
                                onDelete={() => handleFilterChange('metal', null)}
                                className={styles.filterChip}
                            />
                        )}
                        
                        {filterCount > 0 && (
                            <StyledButton 
                                variant="text" 
                                onClick={clearAllFilters}
                                className={styles.clearButton}
                                startIcon={<CloseIcon fontSize="small" />}
                            >
                                Clear all
                            </StyledButton>
                        )}
                    </Box>
                )}
            </Container>
        </Box>
    );
}

// Helper functions for labels
function getCategoryLabel(value) {
    const category = categoryOptions.find(opt => opt.value === value);
    return category ? category.label : value;
}

function getPriceLabel(value) {
    const price = priceOptions.find(opt => opt.value === value);
    return price ? price.label : value;
}

export default ProductFilter;