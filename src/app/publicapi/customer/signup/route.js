import { NextResponse } from "next/server";
import HandleRequest from "@/services/requestsHandler";
import { doCustomerSignup } from '@/services/apiRequests/customerAuth';

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
    const response = await doCustomerSignup(data);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Customer Signup API error:", error);
    // Extract error message from axios error response
    let errorMessage = "Failed to create account";
    let statusCode = 500;
    
    if (error?.response) {
      statusCode = error.response.status || 500;
      const responseData = error.response.data;
      if (typeof responseData === 'string') {
        errorMessage = responseData;
      } else if (responseData?.message) {
        errorMessage = responseData.message;
      } else if (responseData?.error) {
        errorMessage = responseData.error;
      } else if (responseData) {
        errorMessage = JSON.stringify(responseData);
      }
    } else if (error?.message) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { error: errorMessage, success: false },
      { status: statusCode }
    );
  }
}

