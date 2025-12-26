import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import HandleRequest from "./services/requestsHandler";

/**
 * Authentication Cookie Separation:
 * - Customer pages (homepage, products, etc.): Use 'hos_customer_token' cookie
 * - Admin pages (/admin/*): Use 'hos_abc' cookie
 * These must remain strictly separated - customers cannot access admin areas and vice versa.
 */

const unAuthenticatedRoutesMap = ['/welcome','/logout'];
function parseJwt(token:any) {
  return JSON.parse(Buffer?.from(token?.split(".")?.[1], "base64").toString());
}
function handleAPIRoute(authToken, request) {
  // Admin API routes - only accept admin tokens
  const customerToken = request.cookies.get("hos_customer_token")?.value;
  
  // Reject if customer token is present (customers cannot access admin APIs)
  if (customerToken && !authToken) {
    return NextResponse.json({ message: "Access Denied: Customer accounts cannot access admin resources" }, { status: 403 });
  }

  if (!authToken) {
    return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
  }
  
  // Verify the token is an admin token
  try {
    const [header, payload, signature] = authToken.split('.');
    const decodedPayload = JSON.parse(atob(payload));
    if (decodedPayload.role !== 'ROLE_ADMIN') {
      return NextResponse.json({ message: "Access Denied: Admin access required" }, { status: 403 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
  
    const headers = new Headers(request.headers);
    headers.set("Authorization", `Bearer ${authToken}`);
    const requestHeader = {
      Authorization: `Bearer ${authToken}`,
    };
    HandleRequest.setHeader(requestHeader);
    const resp = NextResponse.next({
      request: { headers },
    });
    return resp;
}
function handlePublicAPIRoute(authToken, request) {
    // Public API routes can accept both admin and customer tokens
    // But we need to determine which one to use based on the route
    const customerToken = request.cookies.get("hos_customer_token")?.value;
    
    // For customer-specific routes, prefer customer token
    const isCustomerRoute = request.nextUrl.pathname.includes('/customer/');
    const tokenToUse = isCustomerRoute ? (customerToken || authToken) : (authToken || customerToken);

    const headers = new Headers(request.headers);
    if (tokenToUse) {
      headers.set("Authorization", `Bearer ${tokenToUse}`);
    const requestHeader = {
        Authorization: `Bearer ${tokenToUse}`,
    };
    HandleRequest.setHeader(requestHeader);
    }
    const resp = NextResponse.next({
      request: { headers },
    });
    return resp;
}
function handleAdminPageRoute(authToken:any, request:any) {
  /**
   * Admin pages ONLY use 'hos_abc' cookie (admin token)
   * Customer token 'hos_customer_token' is strictly rejected
   */
  
  // Check for customer token first - reject immediately if present
  const customerToken = request.cookies.get("hos_customer_token")?.value;
  if (customerToken) {
    // Customer trying to access admin area - redirect to home
    return NextResponse.redirect(new URL("/", request.url));
  }
  
  // Admin pages require 'hos_abc' cookie
  if (!authToken) {
    return NextResponse.redirect(new URL("/adminlogin", request.url));
  }
  
  // Verify the token is valid and has admin role
  try {
 const [header, payload, signature] = authToken.split('.');
const decodedPayload = JSON.parse(atob(payload));
    if (decodedPayload.role !== 'ROLE_ADMIN') {
      // Not an admin token - redirect to login
      return NextResponse.redirect(new URL("/adminlogin", request.url));
    }
    // Token is valid admin token - allow access
    return NextResponse.next();
  } catch (error) {
    // Invalid token format - redirect to login
    return NextResponse.redirect(new URL("/adminlogin", request.url));
  }
}
function unAuthenticatedRoutes(authToken:any, request:any) {
  /**
   * User-facing pages (homepage, products, about, etc.)
   * These pages use 'hos_customer_token' cookie for customer authentication
   * Admin token 'hos_abc' is ignored on these pages
   */
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url-pathname', 'unAuthenticatedRoute');
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  });
}
export function middleware(request: NextRequest) {
  let authToken = request.cookies.get("hos_abc")?.value;
  const { pathname } = request.nextUrl;
  const routeType = pathname.startsWith("/admin") ? "admin" :pathname.startsWith("/api") ? 'api' : pathname.startsWith("/publicapi")? 'publicapi': "unAuthenticatedPage";
  switch (routeType) {
    case "admin": {
      return handleAdminPageRoute(authToken, request);
      // break;
    }
    case "unAuthenticatedPage": {
      return unAuthenticatedRoutes(authToken, request);
    }
    case "api": {
      return handleAPIRoute(authToken, request);
    }
    case "publicapi": {
      return handlePublicAPIRoute(authToken, request);
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!_next/static|_next/image|audio|favicon.ico|login|adminlogin).*)"],
};
