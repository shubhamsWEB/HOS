import dummyProducts from '@/constants/dummyProducts';

/**
 * Service to handle dummy product data for testing purposes
 * This simulates API responses without requiring a backend
 */

/**
 * Get all products with optional filtering
 */
export const getAllDummyProducts = (params = {}) => {
  let filteredProducts = [...dummyProducts];
  
  // Apply filters if provided
  if (params.categories) {
    const categories = params.categories.split(',');
    filteredProducts = filteredProducts.filter(product => 
      product.categories.some(cat => categories.includes(cat))
    );
  }
  
  if (params.collections) {
    const collections = params.collections.split(',');
    filteredProducts = filteredProducts.filter(product => 
      product.collections.some(col => collections.includes(col))
    );
  }
  
  // Calculate pagination
  const page = params.page || 1;
  const limit = params.limit_per_page || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  
  // Return in the same format as the API would
  return {
    content: paginatedProducts,
    page: page,
    limit_per_page: limit,
    total_count: filteredProducts.length
  };
};

/**
 * Get a single product by ID
 */
export const getDummyProductById = (id) => {
  const product = dummyProducts.find(p => p.id === id);
  return product || null;
};

/**
 * Get featured products (for trending or ready to ship)
 */
export const getFeaturedDummyProducts = (limit = 4, page = 1) => {
  const featuredProducts = dummyProducts.filter(p => p.featured);
  
  // Apply pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  // Get the slice of products for the current page
  const paginatedProducts = featuredProducts.slice(startIndex, endIndex);
  
  return {
    content: paginatedProducts,
    page: page,
    limit_per_page: limit,
    total_count: featuredProducts.length
  };
};

/**
 * Search products by name
 */
export const searchDummyProducts = (query) => {
  if (!query) return [];
  
  const searchTerm = query.toLowerCase();
  return dummyProducts.filter(product => 
    product.productName.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
}; 