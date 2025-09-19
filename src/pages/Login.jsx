import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const canSubmit = email.trim().length > 0 && password.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      setError("Please fill both email and password.");
      return;
    }

    navigate("/account");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="phone-card bg-white border border-gray-200 shadow-sm rounded-sm p-6">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2 font-rubik leading-tight">
          <span className="block">Signin to your</span>
          <span className="block">PopX account</span>
        </h2>

        <p className="text-gray-500 mb-0">Lorem ipsum dolor sit amet,</p>
        <p className="text-gray-500 mb-4">consectetur adipiscing elit,</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="input-label-overlay">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block form-input placeholder-bold"
            />
          </div>

          <div className="relative">
            <label className="input-label-overlay">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block form-input placeholder-bold"
            />
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <button
            type="submit"
            disabled={!canSubmit}
            className={
              "w-full py-3 rounded-md text-white font-semibold " +
              (canSubmit
                ? "bg-violet-600 hover:opacity-95"
                : "bg-gray-300 cursor-not-allowed")
            }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
