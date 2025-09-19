import React from "react";

const avatar = "/src/assets/Ellipse 114.png";

export default function Account() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="phone-card bg-white border border-gray-100 shadow-sm rounded-sm overflow-hidden flex flex-col">
        <div className="px-6 py-4 bg-gray-100">
          <h3 className="text-lg font-medium">Account Settings</h3>
        </div>

        <div className="p-6 flex-1">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                src={avatar}
                alt="avatar"
                className="w-16 h-16 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b6d7c0b8a3f3b2d2b9f6f3d9b2d9c7f";
                }}
              />

              <div className="absolute -right-1 -bottom-1 w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center shadow-md">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M3 7h3l2-2h8l2 2h3v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="13"
                    r="3"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div>
              <div className="font-semibold">Marry Doe</div>
              <div className="text-sm text-gray-600">Marry@Gmail.Com</div>
            </div>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>

          <div className="border-t border-dashed border-gray-300 mt-6"></div>

          <div className="flex-1 mt-4"></div>
        </div>
      </div>
    </div>
  );
}
