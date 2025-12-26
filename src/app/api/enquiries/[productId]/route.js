import { NextResponse } from "next/server";
import HandleRequest from "@/services/requestsHandler";
import {fetchProductEnquiries} from '@/services/apiRequests/enquire';

const setRequestHeader = (request) => {
  const requestHeader = {
    Authorization: request.headers.get("Authorization"),
  };
  HandleRequest.setHeader(requestHeader);
};

export async function GET(request, { params }) {
  try {
    const { productId } = await params;
    setRequestHeader(request);
    const response = await fetchProductEnquiries(productId);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Product Enquiries API error:", error);
    const errorMessage = error?.response?.data?.message || error?.message || "Failed to fetch product enquiries";
    return NextResponse.json(
      { error: errorMessage, success: false },
      { status: error?.response?.status || 500 }
    );
  }
}

