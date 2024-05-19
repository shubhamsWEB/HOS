import { NextResponse } from "next/server";
import HandleRequest from "@/services/requestsHandler";
import {fetchProducts} from '@/services/apiRequests/products';

const setRequestHeader = (request) => {
  const requestHeader = {
    Authorization: request.headers.get("Authorization"),
  };
  HandleRequest.setHeader(requestHeader);
};

export async function POST(request) {
    const data = await request.json()
  setRequestHeader(request);
  const response = await fetchProducts(data);
  return NextResponse.json(response?.data);
}
