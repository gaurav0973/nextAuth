/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
export async function GET() {
  try {
    // Clear the session cookie
    const response = NextResponse.json({ message: "Logged out successfully" });
    response.cookies.set("token", "", {
      httpOnly: true,
        expires: new Date(0), // Set the cookie to expire immediately
    });
    return response;
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error in logging out the user" },
      { status: 500 }
    );
  }
}
