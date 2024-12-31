import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "./utils/auth.server";

const protectedRoutes = ["/dashboard", "/anki"];
const publicRoutes = ["/login", "/register", "/"];




export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(path);
  const isPublic = publicRoutes.includes(path);

  const cookie = await getCookie("userToken");
  if (isProtected && !cookie) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublic && cookie) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }


  return NextResponse.next();
}