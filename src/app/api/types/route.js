import { NextResponse } from "next/server";
import HandleRequest from "@/services/requestsHandler";
import {fetchTypes} from '@/services/apiRequests/constantTypes';

const setRequestHeader = (request) => {
  const requestHeader = {
    Authorization: request.headers.get("Authorization"),
  };
  HandleRequest.setHeader(requestHeader);
};

export async function POST(request) {
    const data = await request.json()
  setRequestHeader(request);
  const response = await fetchTypes(data);
  return NextResponse.json(response?.data);
}
