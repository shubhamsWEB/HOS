import { NextResponse } from "next/server";
import HandleRequest from "@/services/requestsHandler";
import {doProductEnquire } from '../../../services/apiRequests/enquire';

const setRequestHeader = (request) => {
  const requestHeader = {
    Authorization: request.headers.get("Authorization"),
  };
  HandleRequest.setHeader(requestHeader);
};

export async function POST(request) {
    const data = await request.json()
//   setRequestHeader(request);
  const response = await doProductEnquire(data);
  return NextResponse.json(response?.data);

}
