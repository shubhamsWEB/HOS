import { getProductsData } from "../config/products";
import RequestHandler from "../requestsHandler";

const fetchProducts = (params) =>
  new RequestHandler("apiUrl", getProductsData(params))
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      throw error;
    });

export { fetchProducts };