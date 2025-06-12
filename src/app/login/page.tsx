"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

function LoginPage() {

    const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading , setLoading] = useState(false)


  const onLogin = async (e: any) => {
    e.preventDefault();
    try {
        setLoading(true);
        const response = await axios.post("/api/users/login", user);
        console.log("Login response:", response.data);
        if (response.data.success) {
            router.push("/profile");
        }
    } catch (error: any) {
        console.error("Login error:", error);
    } finally {
        setLoading(false);
    }
};


  useEffect(()=> {
    if(user.email.length > 0 && user.password.length > 0)
    {
      setButtonDisabled(false);
    }
    else
    {
        setButtonDisabled(true);
    }
  }, [user])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            {loading ? "Logging you in..." : "Welcome Back! 👋"}
          </h2>
          <form>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
                value={user.email}
                onChange={(e)=> setUser({ ...user, email : e.target.value})}
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter a password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
                value={user.password}
                onChange={(e)=> setUser({ ...user, password : e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              onClick={onLogin}
            >
              {buttonDisabled ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="../signup" className="text-purple-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
    </div>
  );
}
export default LoginPage;
