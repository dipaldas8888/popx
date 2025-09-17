import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="flex flex-col justify-end phone-card bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex flex-col justify-end px-6 pb-6 ">
          <h2 className="font-rubik w-[231px] h-[33px] text-[#1D2226] mb-2 font-medium text-[28px] ">
            Welcome to PopX
          </h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <Link
            to="/signup"
            className="block w-full text-center py-3 rounded-md bg-violet-600 text-white font-semibold mb-3 shadow-sm"
          >
            Create Account
          </Link>

          <Link
            to="/login"
            className="block w-full text-center py-3 rounded-md bg-violet-200 text-gray-900 font-semibold"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
