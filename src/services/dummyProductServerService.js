import dummyProducts from '@/constants/dummyProducts';
import { enhanceProductData, getFilteredProducts } from '@/utils/productUtils';

/**
 * Server-side functions to handle product data without API calls
 */

export const fetchProduct = async (params) => {
  // Find the product by ID
  const product = dummyProducts.find(p => p.id === params.id);
  
  if (!product) {
    return { 
      data: null,
      error: "Product not found"  
    };
  }
  
  // Enhance the product data with additional fields needed by the UI
  const enhancedProduct = enhanceProductData(product);

  return { 
    data: enhancedProduct
  };
};

export const fetchPublicProductsData = async (params) => {
  // Get filtered products based on search parameters
  let filteredProducts = getFilteredProducts({
    categories: params.categories,
    collections: params.collections,
    price: params.price,
    featured: params.featured
  });
  
  // Calculate pagination
  const page = parseInt(params.page) || 1;
  const limit = parseInt(params.limit_per_page) || 8;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  
  return {
    data: {
      content: paginatedProducts,
      page: page,
      limit_per_page: limit,
      total_count: filteredProducts.length
    }
  };
};

export const fetchAdminProductsData = async (params) => {
  // For admin, we return all products without pagination
  return {
    data: dummyProducts
  };
}; 