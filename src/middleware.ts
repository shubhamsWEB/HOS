import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import HandleRequest from "./services/requestsHandler";

const unAuthenticatedRoutesMap = ['/welcome','/logout'];
function parseJwt(token:any) {
  return JSON.parse(Buffer?.from(token?.split(".")?.[1], "base64").toString());
}
function handleAPIRoute(authToken, request) {

  if (!authToken) {
    return NextResponse.json({ message: "Not Authorized " }, { status: 401 });
  } else {
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
}
function handlePublicAPIRoute(authToken, request) {

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
function handleAdminPageRoute(authToken:any, request:any) {
  if (!authToken) {
    return NextResponse.redirect(new URL("/adminlogin", request.url));
  }
 const [header, payload, signature] = authToken.split('.');
const decodedPayload = JSON.parse(atob(payload));
  if (decodedPayload.role!=='ROLE_ADMIN') {
    return NextResponse.redirect(new URL("/adminlogin", request.url));
  }
}
function unAuthenticatedRoutes(authToken:any, request:any) {
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
