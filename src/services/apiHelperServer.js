import HandleRequest from "./requestsHandler";
import { cookies } from "next/headers";
import {fetchTypes} from '../services/apiRequests/types';
import {fetchProducts,fetchProductsForAdmin} from '../services/apiRequests/products';
function parseJwt(token) {
  return JSON.parse(Buffer.from(token?.split(".")?.[1], "base64").toString());
}
const authenticationInfo = () => {
  const authKey = cookies().get("hos_abc")?.value;
  const parseJwttoken = parseJwt(authKey);

  return { Authorization: `Bearer ${authKey}` };
};

export const getTypes = async(params) => {
  HandleRequest.setHeader(authenticationInfo());
  const response = await fetchTypes(params);
  return response;
}

export const fetchPublicProductsData = async(params) => {
  // HandleRequest.setHeader(authenticationInfo());
  const response = await fetchProducts(params);
  return response;
}
export const fetchAdminProductsData = async(params) => {
  HandleRequest.setHeader(authenticationInfo());
  const response = await fetchProductsForAdmin(params);
  return response;
}



export const fetchProfile = async () => {
  HandleRequest.setHeader(authenticationInfo());
  const response = await fetchCommerceCampaignList();
  return response;
};
export const fetchSelfProfile = async () => {
  const headers =authenticationInfo() 
  HandleRequest.setHeader(headers);
  const response = await fetchSelfProfileDetails({ email: headers.email });
  return response;
};
