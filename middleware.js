import { NextRequest, NextResponse } from "next/server";

export async function middleware(NextRequest) {
  const path = NextRequest.nextUrl.pathname;
  const isProtected =
    path === "/create-prompt" ||
    path === "/update-prompt" ||
    path === "/profile";

  const token =
    NextRequest.cookies.get("next-auth.session-token")?.value || null;

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/", NextRequest.nextUrl));
  }
}

export const config = {
  matcher: ["/create-prompt", "/update-prompt", "/profile"],
};
