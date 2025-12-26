'use client'
import React, { useState, useMemo } from 'react';
import {
    Box,
    Typography,
    Checkbox,
    FormControlLabel,
    Drawer,
    IconButton,
    Button,
    Chip,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import styles from './filterSidebar.module.scss';

// Price ranges
const priceRanges = [
    { label: 'Below ₹10,000', value: '0-10000' },
    { label: '₹10,000 - ₹20,000', value: '10000-20000' },
    { label: '₹20,000 - ₹30,000', value: '20000-30000' },
    { label: '₹30,000 - ₹40,000', value: '30000-40000' },
    { label: '₹40,000 - ₹50,000', value: '40000-50000' },
    { label: '₹50,000 and Above', value: '50000-999999' },
];

function FilterSidebar({ products = [] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [expandedPanels, setExpandedPanels] = useState(['categories', 'collections']);
    const constants = useSelector(state => state.constantTypes?.data || []);
    
    // Transform API constants into a map
    const constantsMap = useMemo(() => {
        const map = {};
        if (Array.isArray(constants)) {
            constants.forEach(constant => {
                if (constant && constant.cname) {
                    map[constant.cname] = constant.cvalue || [];
                }
            });
        }
        return map;
    }, [constants]);
    
    // Get filter options from API constants
    const categoryOptions = constantsMap['Categories'] || [];
    const metalColourOptions = constantsMap['Metal_Colour'] || [];
    const solitaireSizeOptions = constantsMap['Solitaire_Size'] || [];
    const collectionOptions = constantsMap['Collections'] || [];
    
    // Get active filters from URL params
    const activeCategories = searchParams.get('categories')?.split(',').filter(Boolean) || [];
    const activePrice = searchParams.get('price')?.split(',').filter(Boolean) || [];
    const activeMetalColour = searchParams.get('metalColour')?.split(',').filter(Boolean) || [];
    const activeSolitaireSize = searchParams.get('solitaireSize')?.split(',').filter(Boolean) || [];
    const activeSolitaireShape = searchParams.get('solitaireShape')?.split(',').filter(Boolean) || [];
    const activeCollection = searchParams.get('collections')?.split(',').filter(Boolean) || [];

    // Helper function to extract values
    const extractValues = (value) => {
        if (!value) return [];
        if (Array.isArray(value)) return value;
        if (typeof value === 'string') return value.split(',').map(v => v.trim()).filter(Boolean);
        return [value];
    };

    // Calculate counts for each filter type
    const calculateMetalColourOptions = () => {
        if (!metalColourOptions || metalColourOptions.length === 0) return [];
        const metalColourMap = {};
        products.forEach(p => {
            const metalColours = extractValues(p.metalColour);
            metalColours.forEach(mc => {
                if (mc) metalColourMap[mc] = (metalColourMap[mc] || 0) + 1;
            });
        });
        return metalColourOptions.map(option => ({
            label: option,
            value: option,
            count: metalColourMap[option] || 0
        }));
    };

    const calculateSolitaireSizeOptions = () => {
        if (!solitaireSizeOptions || solitaireSizeOptions.length === 0) return [];
        const sizeMap = {};
        products.forEach(p => {
            const sizes = extractValues(p.solitaireSize);
            sizes.forEach(s => {
                if (s) sizeMap[s] = (sizeMap[s] || 0) + 1;
            });
        });
        return solitaireSizeOptions.map(option => ({
            label: option,
            value: option,
            count: sizeMap[option] || 0
        }));
    };

    const calculateSolitaireShapeOptions = () => {
        const shapeMap = {};
        products.forEach(p => {
            const shape = p.solitaireShape?.trim();
            if (shape) shapeMap[shape] = (shapeMap[shape] || 0) + 1;
        });
        return Object.entries(shapeMap)
            .map(([value, count]) => ({ label: value, value, count }))
            .sort((a, b) => b.count - a.count)
            .filter(option => option.count > 0);
    };

    const calculateCollectionOptions = () => {
        if (!collectionOptions || collectionOptions.length === 0) return [];
        const collectionMap = {};
        products.forEach(p => {
            const collection = p.collection?.trim();
            if (collection) collectionMap[collection] = (collectionMap[collection] || 0) + 1;
        });
        return collectionOptions.map(option => ({
            label: option,
            value: option,
            count: collectionMap[option] || 0
        }));
    };

    const calculateCategoryOptions = () => {
        if (!categoryOptions || categoryOptions.length === 0) return [];
        const categoryMap = {};
        products.forEach(p => {
            const category = p.category?.trim();
            if (category) categoryMap[category] = (categoryMap[category] || 0) + 1;
        });
        return categoryOptions.map(option => ({
            label: option,
            value: option,
            count: categoryMap[option] || 0
        }));
    };

    // Get available filters with counts
    const availableMetalColourOptions = calculateMetalColourOptions();
    const availableSolitaireSizeOptions = calculateSolitaireSizeOptions();
    const availableSolitaireShapeOptions = calculateSolitaireShapeOptions();
    const availableCollectionOptions = calculateCollectionOptions();
    const availableCategoryOptions = calculateCategoryOptions();

    // Filter configurations
    const filterConfigs = [
        {
            id: 'categories',
            title: 'Category',
            apiOptions: categoryOptions,
            availableOptions: availableCategoryOptions,
            activeValues: activeCategories,
        },
        {
            id: 'collections',
            title: 'Collection',
            apiOptions: collectionOptions,
            availableOptions: availableCollectionOptions,
            activeValues: activeCollection,
        },
        {
            id: 'metalColour',
            title: 'Metal Color',
            apiOptions: metalColourOptions,
            availableOptions: availableMetalColourOptions,
            activeValues: activeMetalColour,
        },
        {
            id: 'solitaireSize',
            title: 'Solitaire Size',
            apiOptions: solitaireSizeOptions,
            availableOptions: availableSolitaireSizeOptions,
            activeValues: activeSolitaireSize,
        }
    ];

    const handlePanelChange = (panel) => (event, isExpanded) => {
        setExpandedPanels(prev => 
            isExpanded 
                ? [...prev, panel]
                : prev.filter(p => p !== panel)
        );
    };

    const handleFilterChange = (filterType, value) => {
        const params = new URLSearchParams(searchParams.toString());
        
        let currentValues = [];
        if (filterType === 'price') currentValues = [...activePrice];
        else if (filterType === 'metalColour') currentValues = [...activeMetalColour];
        else if (filterType === 'solitaireSize') currentValues = [...activeSolitaireSize];
        else if (filterType === 'solitaireShape') currentValues = [...activeSolitaireShape];
        else if (filterType === 'collections') currentValues = [...activeCollection];
        else if (filterType === 'categories') currentValues = [...activeCategories];

        const index = currentValues.indexOf(value);
        if (index > -1) {
            currentValues.splice(index, 1);
        } else {
            currentValues.push(value);
        }

        if (currentValues.length > 0) {
            params.set(filterType, currentValues.join(','));
        } else {
            params.delete(filterType);
        }

        router.push(`/products?${params.toString()}`);
    };

    const handleRemoveFilter = (filterType, value) => {
        const params = new URLSearchParams(searchParams.toString());
        let currentValues = [];
        
        if (filterType === 'price') currentValues = [...activePrice];
        else if (filterType === 'metalColour') currentValues = [...activeMetalColour];
        else if (filterType === 'solitaireSize') currentValues = [...activeSolitaireSize];
        else if (filterType === 'solitaireShape') currentValues = [...activeSolitaireShape];
        else if (filterType === 'collections') currentValues = [...activeCollection];
        else if (filterType === 'categories') currentValues = [...activeCategories];

        const filtered = currentValues.filter(v => v !== value);
        
        if (filtered.length > 0) {
            params.set(filterType, filtered.join(','));
        } else {
            params.delete(filterType);
        }

        router.push(`/products?${params.toString()}`);
    };

    const handleClearAll = () => {
        router.push('/products');
    };

    const getActiveFilters = () => {
        const filters = [];
        activeCategories.forEach(c => filters.push({ type: 'categories', value: c, label: c }));
        activePrice.forEach(p => {
            const range = priceRanges.find(r => r.value === p);
            if (range) filters.push({ type: 'price', value: p, label: range.label });
        });
        activeMetalColour.forEach(m => {
            filters.push({ type: 'metalColour', value: m, label: m });
        });
        activeSolitaireSize.forEach(s => {
            filters.push({ type: 'solitaireSize', value: s, label: s });
        });
        activeSolitaireShape.forEach(sh => {
            filters.push({ type: 'solitaireShape', value: sh, label: sh });
        });
        activeCollection.forEach(c => {
            filters.push({ type: 'collections', value: c, label: c });
        });
        return filters;
    };

    const activeFilters = getActiveFilters();

    const FilterContent = ({ isMobile = false }) => (
        <Box className={styles.filterSidebar}>
            {/* Active Filters Section */}
            {activeFilters.length > 0 && (
                <Box className={styles.filteredBy}>
                    <Box className={styles.filteredByHeader}>
                        <Typography className={styles.filteredByTitle}>
                            Active Filters
                        </Typography>
                        <Button 
                            className={styles.clearAllBtn}
                            onClick={handleClearAll}
                        >
                            Clear All
                        </Button>
                    </Box>
                    <Box className={styles.filterChips}>
                        {activeFilters.map((filter, index) => (
                            <Chip
                                key={`${filter.type}-${filter.value}-${index}`}
                                label={filter.label}
                                onDelete={() => handleRemoveFilter(filter.type, filter.value)}
                                className={styles.filterChip}
                                size="small"
                            />
                        ))}
                    </Box>
                </Box>
            )}

            {/* Filters Header */}
            {!isMobile && (
                <Box className={styles.filtersHeader}>
                    <TuneIcon className={styles.filtersIcon} />
                    <Typography className={styles.filtersTitle}>
                        Filters
                    </Typography>
                </Box>
            )}

            {/* Results Count for Mobile */}
            {isMobile && products.length > 0 && (
                <Box className={styles.resultsCount}>
                    <strong>{products.length}</strong> products found
                </Box>
            )}

            {/* Dynamic Filter Sections */}
            {filterConfigs.map((filterConfig) => {
                if (!filterConfig.apiOptions || filterConfig.apiOptions.length === 0) {
                    return null;
                }

                const isExpanded = expandedPanels.includes(filterConfig.id);

                return (
                    <Accordion 
                        key={filterConfig.id}
                        expanded={isExpanded}
                        onChange={handlePanelChange(filterConfig.id)}
                        className={styles.accordion}
                        disableGutters
                        elevation={0}
                    >
                        <AccordionSummary
                            expandIcon={isExpanded ? <RemoveIcon /> : <AddIcon />}
                            className={styles.accordionSummary}
                        >
                            <Typography className={styles.filterSectionTitle}>
                                {filterConfig.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>
                            {filterConfig.availableOptions.length > 0 
                                ? filterConfig.availableOptions.map((option) => (
                                    <FormControlLabel
                                        key={option.value}
                                        control={
                                            <Checkbox
                                                checked={filterConfig.activeValues.includes(option.value)}
                                                onChange={() => handleFilterChange(filterConfig.id, option.value)}
                                                size="small"
                                                className={styles.checkbox}
                                                disableRipple
                                            />
                                        }
                                        label={
                                            <Typography className={styles.filterLabel}>
                                                {option.label}
                                                <span className={styles.count}> ({option.count})</span>
                                            </Typography>
                                        }
                                        className={styles.filterOption}
                                    />
                                ))
                                : filterConfig.apiOptions.map((option) => (
                                    <FormControlLabel
                                        key={option}
                                        control={
                                            <Checkbox
                                                checked={filterConfig.activeValues.includes(option)}
                                                onChange={() => handleFilterChange(filterConfig.id, option)}
                                                size="small"
                                                className={styles.checkbox}
                                                disableRipple
                                            />
                                        }
                                        label={
                                            <Typography className={styles.filterLabel}>
                                                {option}
                                                <span className={styles.count}> (0)</span>
                                            </Typography>
                                        }
                                        className={styles.filterOption}
                                    />
                                ))
                            }
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </Box>
    );

    return (
        <>
            {/* Mobile Filter Button */}
            <Box className={styles.mobileFilterButton}>
                <Button
                    variant="outlined"
                    startIcon={<TuneIcon />}
                    onClick={() => setMobileOpen(true)}
                    className={styles.filterButton}
                >
                    Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
                </Button>
            </Box>

            {/* Desktop Sidebar */}
            <Box className={styles.desktopSidebar}>
                <FilterContent />
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                className={styles.mobileDrawer}
            >
                <Box className={styles.drawerHeader}>
                    <Typography className={styles.drawerTitle}>
                        Filters
                    </Typography>
                    <IconButton 
                        onClick={() => setMobileOpen(false)}
                        className={styles.closeButton}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box className={styles.drawerContent}>
                    <FilterContent isMobile={true} />
                </Box>
                {activeFilters.length > 0 && (
                    <Box className={styles.drawerFooter}>
                        <Button 
                            className={styles.clearButton}
                            onClick={handleClearAll}
                        >
                            Clear All
                        </Button>
                        <Button 
                            className={styles.applyButton}
                            onClick={() => setMobileOpen(false)}
                        >
                            View Results
                        </Button>
                    </Box>
                )}
            </Drawer>
        </>
    );
}

export default FilterSidebar;
