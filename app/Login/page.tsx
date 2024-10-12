/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation'
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: any) {
    e.preventDefault();
    if (email === 'prithvibose@gmail.com' || password === 'ABab12$') {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        router.push('/dashboard')
      }, 2000)
    }
    else {
      alert("invalid credentials")
    }
  }

  function handleEmail(e: any) {
    setEmail(e.target.value);
    console.log(email);
  }

  function handlePassword(p: any) {
    setPassword(p.target.value);
    console.log(password);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-300 to-blue-500">



        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-4">Please login to your account</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmail}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePassword}
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all"
            >
              Login
            </button>

            <div className="text-center">
              <a href="/ForgotPassword" className="text-sm text-indigo-500 hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">Don&apos;t have an account?
              <a href="/SignUp" className="ml-1 text-indigo-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
            {loading ? (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent border-double rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-semibold text-white">Loading, please wait...</p>
          </div>
        </div>
      ):(
        <div></div>
      )}
    </div>

  );

}