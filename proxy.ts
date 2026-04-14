import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  if (!req.auth?.user) {
    const loginUrl = new URL("/login", req.url)
    console.log(loginUrl)
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }
})

export const config = {
  matcher: ["/admin/:path*", "/employee/:path*"],
}