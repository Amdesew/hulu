import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  // Convert NextRequest headers to a plain object
  const headers: Record<string, string> = {};
  req.headers.forEach((value, key) => {
    headers[key] = value;
  });

  // Create a custom request object compatible with getSession
  const customReq = {
    headers,
    cookies: req.cookies,
  };
  
  console.log("Middleware executed");
  const session = await getSession({ req: customReq as any });
  if (!session) {
    console.log("No session found, redirecting to sign-in");
    return NextResponse.redirect(new URL("/app/pages/Auth/SignIn", req.url));
  }
  console.log("Session found, proceeding to next");
  return NextResponse.next();
}

export const config = {
  matcher: ['/app/pages/Auth/Dashboard/page/:path*',
            '/app/pages/Profile/page/:path*'        
  ],
};
