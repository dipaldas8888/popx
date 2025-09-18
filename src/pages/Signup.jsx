import React from "react";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="phone-card bg-white border border-gray-200 shadow-sm rounded-sm flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4 font-rubik">
            Create your PopX account
          </h2>
        </div>

        <div className="p-6 flex-1 overflow-y-auto">
          <form className="flex flex-col gap-5">
            <div className="relative">
              <label className="input-label-overlay">Full Name*</label>
              <input
                placeholder="Marry Doe"
                className="form-input"
                type="text"
              />
            </div>

            <div className="relative">
              <label className="input-label-overlay">Phone number*</label>
              <input
                placeholder="Marry Doe"
                className="form-input"
                type="tel"
              />
            </div>

            <div className="relative">
              <label className="input-label-overlay">Email address*</label>
              <input
                placeholder="Marry Doe"
                className="form-input"
                type="email"
              />
            </div>

            <div className="relative">
              <label className="input-label-overlay">Password*</label>
              <input
                type="password"
                placeholder="Mary Doe"
                className="form-input"
              />
            </div>

            <div className="relative">
              <label className="input-label-overlay">Company name</label>
              <input
                placeholder="Marry Doe"
                className="form-input"
                type="text"
              />
            </div>

            <div>
              <div className="text-sm mb-2">Are you an Agency?*</div>
              <div className="flex gap-6 items-center">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    className="accent-violet-600"
                  />
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    className="accent-violet-600"
                    defaultChecked
                  />
                  <span className="text-sm">No</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="p-6">
          <div className="mx-auto" style={{ width: 335 }}>
            <button
              type="button"
              className="w-full py-3 rounded-md bg-violet-600 text-white font-semibold"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
