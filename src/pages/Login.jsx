import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="phone-card bg-gray-150 border border-gray-200 shadow-sm rounded-sm p-6">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2 font-rubik leading-tight">
          <span className="block">Signin to your</span>
          <span className="block">PopX account</span>
        </h2>

        <p className="text-gray-500 mb-0">Lorem ipsum dolor sit amet,</p>
        <p className="text-gray-500 mb-4">consectetur adipiscing elit,</p>

        <form className="space-y-4">
          <div className="relative">
            <label className="input-label-overlay">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="mt-1 block form-input placeholder-bold"
            />
          </div>

          <div className="relative">
            <label className="input-label-overlay">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 block form-input placeholder-bold"
            />
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-md bg-gray-300 text-white font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
