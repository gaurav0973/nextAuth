/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
function ProfilePage() {

    const router = useRouter();
    const [data , setData] = useState("nothing")

    const handleLogout = async () => {
        try {
            const response = await axios.get("/api/users/logout");
            console.log("Logout response:", response.data);
            router.push("/login");

        } catch (error: any) {
            console.error("Error during logout:", error.message);
        }
    };

    const getUserDetails = async () => {
        try {
            const res = await axios.get("/api/users/me");
            console.log("User details:", res.data);
            setData(res.data.data._id);
        } catch (error: any) {
            console.log("Error fetching user details:", error.message);
        }
    }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Profile Page</h1>
        
        <p className="text-3xl font-bold text-center text-purple-700 mb-6 ">
            {data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}
            </Link>}
        </p>
        
        


       
        



        {/* User Details */}
        <button onClick={getUserDetails} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Get User Details
        </button>


        {/* Handle Logout */}
        <button onClick={handleLogout} className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Logout
        </button>
    </div>
  )
}
export default ProfilePage