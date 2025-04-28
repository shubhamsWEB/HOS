import dummyProducts from '@/constants/dummyProducts';

/**
 * Utility functions for managing product data
 */

/**
 * Get filtered products based on search parameters
 * @param {Object} searchParams - URL search parameters
 * @returns {Array} - Filtered product list
 */
export const getFilteredProducts = (searchParams = {}) => {
  let filteredProducts = [...dummyProducts];
  
  // Apply category filter
  if (searchParams.categories) {
    filteredProducts = filteredProducts.filter(product => 
      product.categories.includes(searchParams.categories)
    );
  }
  
  // Apply collection filter
  if (searchParams.collections) {
    const collectionsArray = searchParams.collections.split(',');
    filteredProducts = filteredProducts.filter(product => 
      collectionsArray.some(collection => product.collections.includes(collection))
    );
  }
  
  // Apply featured filter
  if (searchParams.featured === true || searchParams.featured === 'true') {
    filteredProducts = filteredProducts.filter(product => product.featured);
  }
  
  // Apply price filter
  if (searchParams.price) {
    switch(searchParams.price) {
      case 'under-50000':
        filteredProducts = filteredProducts.filter(product => product.price < 50000);
        break;
      case '50000-100000':
        filteredProducts = filteredProducts.filter(product => 
          product.price >= 50000 && product.price < 100000
        );
        break;
      case '100000-200000':
        filteredProducts = filteredProducts.filter(product => 
          product.price >= 100000 && product.price < 200000
        );
        break;
      case 'above-200000':
        filteredProducts = filteredProducts.filter(product => product.price >= 200000);
        break;
    }
  }
  
  return filteredProducts;
};

/**
 * Format the price with the currency symbol
 * @param {number} price - The price to format
 * @returns {string} - Formatted price
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * Get featured products (for homepage, etc.)
 * @param {number} limit - Maximum number of products to return
 * @returns {Array} - Featured products
 */
export const getFeaturedProducts = (limit = 4) => {
  return dummyProducts
    .filter(product => product.featured)
    .slice(0, limit);
};

/**
 * Get products by category
 * @param {string} category - Category to filter by
 * @param {number} limit - Maximum number of products to return
 * @returns {Array} - Products in the specified category
 */
export const getProductsByCategory = (category, limit = 10) => {
  return dummyProducts
    .filter(product => product.categories.includes(category))
    .slice(0, limit);
};

/**
 * Enhance product data with additional fields needed by the UI
 * @param {Object} product - Basic product data
 * @returns {Object} - Enhanced product with UI-friendly fields
 */
export const enhanceProductData = (product) => {
  if (!product) return null;
  
  return {
    ...product,
    productDescription: product.description,
    productCode: `HOS-${product.id}`,
    category: product.categories[0]?.charAt(0).toUpperCase() + product.categories[0]?.slice(1) || 'Rings',
    collections: product.collections,
    metalPurity: "14K,18K",
    metalColour: "Rose Gold,Yellow Gold,White Gold",
    solitaireSize: "0.5ct,1.0ct,1.5ct",
    sizeOptions: "5,6,7,8,9",
    info: {
      "details": "This exquisite piece features high-quality materials and expert craftsmanship. Each detail has been carefully considered to create a piece that is both beautiful and durable.",
      "metal information": "Made with the finest gold, this piece combines durability with timeless beauty. The gold provides a rich color that won't fade over time.",
      "diamond information": "Our diamonds are ethically sourced and graded for exceptional quality. Each stone is carefully selected for its brilliance, clarity, and cut.",
      "size information": "Available in multiple sizes to ensure the perfect fit. Please consult our size guide or contact us for assistance in selecting the right size."
    }
  };
}; 