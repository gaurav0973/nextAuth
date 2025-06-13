/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel"



connect()


export async function POST(request : NextRequest){
    console.log("Inside the verify email function ")
    try {
        const reqBody = await  request.json()
        const {token} = reqBody
        console.log("Token : ", token)

        const user = await User.findOne({
            verifyToken:token,
            verifyTokenExpiry:{$gt: Date.now()}
        })
        console.log("User Data  :", user)

        user.isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined
        await user.save()
        
        return NextResponse.json({
            message : "Email Verified",
            Success : true
        })


    } catch (error:any) {
        console.log("Error while verifying the mail", error)
        return NextResponse.json({
            error : error.message,
            status : 500
        })
    }

}