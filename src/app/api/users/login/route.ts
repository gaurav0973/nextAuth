import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log("Received request body:", reqBody);
    const { email, password } = await reqBody;

    // check if user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 }
      );
    }
    
    // check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // token data
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    // create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1h",
    });
    console.log("Generated token:", token);

    const response = NextResponse.json({
      message: "User logged in successfully",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } 
  catch (error) {
    console.log("Error during login:", error);
    return NextResponse.json(
      { error: "Error in logging in the user" },
      { status: 500 }
    );
  }
}
