import { NextResponse } from "next/server";
import HandleRequest from "@/services/requestsHandler";
import {fetchEnquiries} from '@/services/apiRequests/enquire';

const setRequestHeader = (request) => {
  const requestHeader = {
    Authorization: request.headers.get("Authorization"),
  };
  HandleRequest.setHeader(requestHeader);
};

export async function GET(request) {
  try {
    setRequestHeader(request);
    const response = await fetchEnquiries();
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Enquiries API error:", error);
    const errorMessage = error?.response?.data?.message || error?.message || "Failed to fetch enquiries";
    return NextResponse.json(
      { error: errorMessage, success: false },
      { status: error?.response?.status || 500 }
    );
  }
}

