/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"


export default function verifyEmail(){

    const [token, setToken] = useState("")
    const [verify, setVerify] = useState(false)
    const [error, setError] = useState(false)
    
    const verifyUserEmail = async () => {
        try {

           await axios.post("/api/users/verifyemail", {token})
           setVerify(true)
            
        } catch (error : any) {
            setError(true)
            console.log(error.response.data)
        }
    }


    useEffect(()=>{
        const urlToken = window.location.search.split("=")[1]
        setToken(urlToken || "")
    }, [])


    useEffect(()=>{
        if(token.length)
            verifyUserEmail()
    }, [token])



    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className = "text-4xl">
                Verify Email
            </h1>
            <h2>
                {token ? `${token}` : "No token"}
            </h2>
            {
                verify && (
                    <div>
                        <h2>Email Verified</h2>
                        <Link href="/login">
                            Login Page
                        </Link>
                    </div>
                )
            }

            {
                error && (
                    <div>
                        <h2>Error hai bhai</h2>
                    </div>
                )
            }

        </div>
    )
}