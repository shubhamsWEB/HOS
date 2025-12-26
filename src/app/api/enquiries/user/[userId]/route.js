import { NextResponse } from "next/server";
import HandleRequest from "@/services/requestsHandler";
import {fetchUserEnquiries} from '@/services/apiRequests/enquire';

const setRequestHeader = (request) => {
  const requestHeader = {
    Authorization: request.headers.get("Authorization"),
  };
  HandleRequest.setHeader(requestHeader);
};

export async function GET(request, { params }) {
  try {
    const { userId } = await params;
    setRequestHeader(request);
    const response = await fetchUserEnquiries(userId);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("User Enquiries API error:", error);
    const errorMessage = error?.response?.data?.message || error?.message || "Failed to fetch user enquiries";
    return NextResponse.json(
      { error: errorMessage, success: false },
      { status: error?.response?.status || 500 }
    );
  }
}

