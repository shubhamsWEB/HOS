import { postEnquire, getEnquiries, getProductEnquiries, getUserEnquiries } from "../config/enquire";
import RequestHandler from "../requestsHandler";

const doProductEnquire = (params) =>
  new RequestHandler("apiUrl", postEnquire(params))
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      console.log("🚀 ~ error:", error);
      throw error;
    });

const fetchEnquiries = () =>
  new RequestHandler("apiUrl", getEnquiries())
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      console.log("🚀 ~ error:", error);
      throw error;
    });

const fetchProductEnquiries = (productId) =>
  new RequestHandler("apiUrl", getProductEnquiries(productId))
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      console.log("🚀 ~ error:", error);
      throw error;
    });

const fetchUserEnquiries = (userId) =>
  new RequestHandler("apiUrl", getUserEnquiries(userId))
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      console.log("🚀 ~ error:", error);
      throw error;
    });

export { doProductEnquire, fetchEnquiries, fetchProductEnquiries, fetchUserEnquiries };