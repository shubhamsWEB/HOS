import { NextResponse } from "next/server";
import HandleRequest from "@/services/requestsHandler";
import { doUserLogin } from '@/services/apiRequests/login';

const setRequestHeader = (request) => {
  const requestHeader = {
    Authorization: request.headers.get("Authorization"),
  };
  HandleRequest.setHeader(requestHeader);
};

export async function POST(request) {
  try {
    const data = await request.json()
    //   setRequestHeader(request);
    const response = await doUserLogin(data);
    return NextResponse.json(response?.data);
  } catch (error) {
    // Log detailed error information
    console.error("=== Login API Error Details ===");
    console.error("Error object:", error);
    console.error("Error message:", error?.message);
    console.error("Error response:", error?.response);
    console.error("Error response data:", error?.response?.data);
    console.error("Error response status:", error?.response?.status);
    console.error("Error response statusText:", error?.response?.statusText);
    console.error("Error config:", error?.config);
    console.error("Full error JSON:", JSON.stringify(error, null, 2));
    console.error("===============================");
    
    // Extract the actual error message from API response
    let errorMessage = "API is failing: Request failed with status code 500";
    let statusCode = 500;
    
    if (error?.response) {
      statusCode = error.response.status || 500;
      const responseData = error.response.data;
      
      // Try different possible error message fields
      if (responseData) {
        errorMessage = responseData.message 
          || responseData.error 
          || responseData.detail
          || (typeof responseData === 'string' ? responseData : JSON.stringify(responseData))
          || `Request failed with status ${statusCode}`;
      } else {
        errorMessage = error.response.statusText || `Request failed with status ${statusCode}`;
      }
    } else if (error?.message) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { 
        error: errorMessage, 
        success: false,
        details: error?.response?.data || null,
        status: statusCode
      },
      { status: statusCode }
    );
  }
}
