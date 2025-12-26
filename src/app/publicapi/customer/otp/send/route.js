import { NextResponse } from "next/server";
import HandleRequest from "@/services/requestsHandler";
import { doSendOTP } from '@/services/apiRequests/customerAuth';

const setRequestHeader = (request) => {
  const authToken = process.env.ADMIN_AUTH_TOKEN || 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5NjE3ODAwMDAxIiwicm9sZSI6IlJPTEVfQURNSU4iLCJpYXQiOjE3NjY4MjU4NDAsImV4cCI6MTc2NjkxMjI0MH0.InCLjFd3KZguiWs9roPIHKtTtz8x_j9HIbJSPCKf3Ck';
  const requestHeader = {
    Authorization: `Bearer ${authToken}`,
  };
  HandleRequest.setHeader(requestHeader);
};

export async function POST(request) {
  try {
    setRequestHeader(request);
    const data = await request.json();
    console.log("Send OTP request data:", data);
    const response = await doSendOTP(data);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Send OTP API error:", error);
    console.error("Error response:", error?.response?.data);
    // Extract error message from axios error response
    let errorMessage = "Failed to send OTP";
    let statusCode = 500;
    
    if (error?.response) {
      statusCode = error.response.status || 500;
      const responseData = error.response.data;
      console.log("Response data type:", typeof responseData, responseData);
      
      if (typeof responseData === 'string') {
        errorMessage = responseData;
      } else if (responseData?.message) {
        errorMessage = responseData.message;
      } else if (responseData?.error) {
        errorMessage = typeof responseData.error === 'string' ? responseData.error : JSON.stringify(responseData.error);
      } else if (Array.isArray(responseData)) {
        errorMessage = responseData.join(', ');
      } else if (responseData && typeof responseData === 'object') {
        // Try to extract any error message from the object
        errorMessage = responseData.message || responseData.error || JSON.stringify(responseData);
      }
    } else if (error?.message) {
      errorMessage = error.message;
    }
    
    console.log("Returning error:", errorMessage, "Status:", statusCode);
    return NextResponse.json(
      { error: errorMessage, success: false },
      { status: statusCode }
    );
  }
}

