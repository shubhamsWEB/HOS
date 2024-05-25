import { getProductsData,getAdminProductsData,addNewProductData } from "../config/products";
import RequestHandler from "../requestsHandler";

const fetchProducts = (params) =>
  new RequestHandler("apiUrl", getProductsData(params))
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      throw error;
    });

const fetchProductsForAdmin = (params) =>
  new RequestHandler("apiUrl", getAdminProductsData(params))
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      throw error;
    });
const addNewProduct = (params) =>
  new RequestHandler("apiUrl", addNewProductData(params))
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      throw error;
    });

export { fetchProducts,fetchProductsForAdmin,addNewProduct };