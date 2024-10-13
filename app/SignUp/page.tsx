/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from "react";
import { createUser} from "../api/users"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function Page() {
  // const [toaster, setToaster] = useState(false)
  function handleSubmit(e: any) {
    callCreateUser(e)
    e.preventDefault()
  }

  async function callCreateUser(e: any){
    const resp = await createUser({ email: e.target.email.value, password: e.target.password.value ,action:'create-user'})
    console.log(resp)
    if(resp.success === true){
      toast.success('Sign Up Successful')
    }
    else{
      toast.error('Sign Up Failed')
    }
  }
    return (
<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-600">
  <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
    <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>
    <p className="text-center text-gray-500 mb-4">Create your account</p>
    {/* {toaster && showMessage()} */}
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 text-gray-700 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
          placeholder="Enter your password"
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          className="w-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all"
      >
        Sign Up
      </button>
    </form>

    <div className="text-center">
      <p className="text-sm text-gray-600">
        Already have an account?
        <a href="/" className="ml-1 text-indigo-500 hover:underline">
          Login here
        </a>
      </p>
    </div>
  </div>
  <ToastContainer 
        position="top-right"          // Position of the toast
        autoClose={4000}              // Auto close after 5 seconds
        hideProgressBar={false}       // Show or hide the progress bar
        newestOnTop={false}           // Stack newest toasts on top
        closeOnClick                  // Close the toast when clicked                   // Pause timer on hover
        draggable                      // Allow dragging toasts to dismiss
      />
</div>

    )
    
}

// const showMessage = () =>{
//   // const notify = () => {
//     // Basic example of a toast message
//     toast('This is a toast message!');
//   // };

//   return (
//     <div>
//       {/* <h1>React Toastify Example</h1>
//       <button onClick={notify}>Show Toast</button> */}

//       {/* Toast Container to render all toasts */}
//       <ToastContainer 
//         position="top-right"          // Position of the toast
//         autoClose={5000}              // Auto close after 5 seconds
//         hideProgressBar={false}       // Show or hide the progress bar
//         newestOnTop={false}           // Stack newest toasts on top
//         closeOnClick                  // Close the toast when clicked
//         pauseOnHover                   // Pause timer on hover
//         draggable                      // Allow dragging toasts to dismiss
//       />
//     </div>
//   );
// }