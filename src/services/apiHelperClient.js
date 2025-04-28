import { fetchProducts, fetchProductsForAdmin, addNewProduct, deleteProduct as deleteProductRequest, fetchProductData, editProductData } from './apiRequests/products';
import { getAllDummyProducts, getDummyProductById, getFeaturedDummyProducts } from './dummyProductService';

// Use this flag to switch between real API and dummy data
const USE_DUMMY_DATA = true;

// Products
export const getAllProducts = async (params) => {
  if (USE_DUMMY_DATA) {
    return getAllDummyProducts(params);
  }
  const response = await fetchProducts(params);
  return response.data;
};

export const getReadyToShipProducts = async (params) => {
  if (USE_DUMMY_DATA) {
    // Use pagination parameters if provided
    const page = params.page || 1;
    const limit = params.limit_per_page || 4;
    
    // Getting featured products with pagination
    return getFeaturedDummyProducts(limit, page);
  }
  
  // Fall back to normal products if no specific ready-to-ship endpoint
  const response = await fetchProducts(params);
  return response.data;
};

export const getProduct = async (params) => {
  if (USE_DUMMY_DATA) {
    return getDummyProductById(params.id);
  }
  const response = await fetchProductData(params);
  return response.data;
};

// Admin Products
export const getAdminAllProducts = async (params) => {
  if (USE_DUMMY_DATA) {
    return getAllDummyProducts(params);
  }
  const response = await fetchProductsForAdmin(params);
  return response.data;
};

export const addNewPorduct = async (params) => {
  const response = await addNewProduct(params);
  return response.data;
};

export const deleteProduct = async (params) => {
  if (USE_DUMMY_DATA) {
    // Just return a success response for dummy data
    return { success: true, message: 'Product deleted successfully' };
  }
  const response = await deleteProductRequest(params);
  return response.data;
};

export const editPorduct = async (params) => {
  const response = await editProductData(params);
  return response.data;
};

export const getAllTypes = async (data) => {
    return fetch(`/api/types`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };

export const login = async (data) => {
    return fetch(`/publicapi/login`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
  
export const postEnquire = async (data) => {
    return fetch(`/publicapi/enquire`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
  