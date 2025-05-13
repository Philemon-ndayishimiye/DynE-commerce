import React from 'react'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-[800px] h-[450px] bg-white shadow-lg flex rounded-lg overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">simplify</h1>
          <p className="text-sm leading-relaxed">
            simplify your e-commerce management with friendly admin dashboard
          </p>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">
              E
            </div>
            <h2 className="text-xl font-semibold">Name</h2>
          </div>

          <h3 className="text-lg font-bold">Welcome Back</h3>
          <p className="text-sm text-gray-500 mb-4">Please login to your account</p>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-2 px-4 py-2 border border-gray-300 rounded bg-gray-100"
          />
          <div className="text-right text-sm text-blue-600 mb-4 cursor-pointer">
            forgot password
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded mb-3">
            Login
          </button>

          <div className="text-center text-sm text-gray-500 mb-3">or log with</div>

          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 border px-3 py-1 rounded">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
              google
            </button>
            <button className="flex items-center gap-2 border px-3 py-1 rounded">
              <img src="https://img.icons8.com/color/16/000000/facebook-new.png" alt="Facebook" />
              facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
