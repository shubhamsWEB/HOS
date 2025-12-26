import { NextResponse } from "next/server";

const API_BASE_URL = 'https://sansa-app-backend-b4dba8d66c20.herokuapp.com';
const CONSTANTS_ENDPOINT = `${API_BASE_URL}/public/constants/get/`;

export async function GET(request) {
  try {
    const response = await fetch(CONSTANTS_ENDPOINT, {
      method: 'GET',
      headers: {
        'accept': '*/*',
      },
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    
    // Check if response has data
    if (!data || !Array.isArray(data)) {
      return NextResponse.json(
        { error: 'No data received from API', data: [] },
        { status: 200, headers: { "Cache-Control": "public, max-age=3600" } }
      );
    }
    
    const cacheControl = "public, max-age=3600"; // Cache for 1 hour
    return NextResponse.json(data, { headers: { "Cache-Control": cacheControl } });
  } catch (error) {
    console.error('Error fetching constants:', error);
    
    // Return a proper error response instead of crashing
    const errorMessage = error?.message || 'Failed to fetch constants';
    
    return NextResponse.json(
      { 
        error: errorMessage,
        data: [] // Return empty array so frontend doesn't break
      },
      { 
        status: 500,
        headers: { "Cache-Control": "no-cache" }
      }
    );
  }
}

