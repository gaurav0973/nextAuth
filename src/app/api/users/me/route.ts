/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse , NextRequest} from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import getDataFromToken from '@/helpers/getDataFromToken';

connect();


export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        if(!userId) {
            return NextResponse.json(
                { error: "Unauthorized access" },
                { status: 401 }
            );
        }

        const user = await User.findById({_id : userId}).select("-password")
        if(!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "User data fetched successfully",
            data: user  
        }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Error in fetching user data" },
            { status: 500 }
        );
        
    }
}