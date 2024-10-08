'use client';

export default function Page() {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-600">
  <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
    <h2 className="text-3xl font-bold text-center text-gray-800">Forgot Password</h2>
    <p className="text-center text-gray-500 mb-4">Enter your email to reset your password</p>
    <form className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all"
      >
        Reset Password
      </button>
    </form>

    <div className="text-center">
      <a href="/" className="text-sm text-indigo-500 hover:underline">
        Back to Login
      </a>
    </div>
  </div>
</div>
    )
}
