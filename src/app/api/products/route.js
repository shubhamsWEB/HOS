import { NextResponse } from "next/server";
import HandleRequest from "@/services/requestsHandler";
import {fetchProductsForAdmin,deleteProduct} from '@/services/apiRequests/products';

const setRequestHeader = (request) => {
  const requestHeader = {
    Authorization: request.headers.get("Authorization"),
  };
  HandleRequest.setHeader(requestHeader);
};

export async function POST(request) {
    const data = await request.json()
  setRequestHeader(request);
  const response = await fetchProductsForAdmin(data);
  return NextResponse.json(response?.data);

}
export async function DELETE(request) {
    const data = await request.json()
  setRequestHeader(request);
  const response = await deleteProduct(data);
  return NextResponse.json(response?.data);
}
