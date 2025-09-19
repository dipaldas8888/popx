import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("Marry Doe");
  const [phone, setPhone] = useState("Marry Doe");
  const [email, setEmail] = useState("Marry Doe");
  const [password, setPassword] = useState("Marry Doe");
  const [company, setCompany] = useState("Marry Doe");
  const [agency, setAgency] = useState(false);

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const canSubmit =
    fullName.trim().length > 0 &&
    phone.trim().length > 0 &&
    email.trim().length > 0 &&
    password.trim().length > 0 &&
    !submitting;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      setError("Please fill all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const newUser = {
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        password: password,
        company: company.trim(),
        agency: agency,
        createdAt: new Date().toISOString(),
      };

      const raw = localStorage.getItem("users");
      const users = raw ? JSON.parse(raw) : [];

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      localStorage.setItem("lastSignedUpEmail", newUser.email);

      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Something went wrong — please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="phone-card bg-white border border-gray-200 shadow-sm rounded-sm flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4 font-rubik leading-tight">
            <span className="block">Create your</span>
            <span className="block">PopX account</span>
          </h2>
        </div>

        <div className="p-6 flex-1 overflow-y-auto">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="input-label-overlay">Full Name*</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="form-input input-filled"
                type="text"
                name="fullName"
              />
            </div>

            <div className="relative">
              <label className="input-label-overlay">Phone number*</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-input input-filled"
                type="tel"
                name="phone"
              />
            </div>

            <div className="relative">
              <label className="input-label-overlay">Email address*</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input input-filled"
                type="email"
                name="email"
              />
            </div>

            <div className="relative">
              <label className="input-label-overlay">Password*</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-input input-filled"
                name="password"
              />
            </div>

            <div className="relative">
              <label className="input-label-overlay">Company name</label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="form-input input-filled"
                type="text"
                name="company"
              />
            </div>

            <div>
              <div className="text-sm mb-2">Are you an Agency?*</div>
              <div className="flex gap-6 items-center">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    checked={agency === true}
                    onChange={() => setAgency(true)}
                    className="accent-violet-600"
                  />
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    checked={agency === false}
                    onChange={() => setAgency(false)}
                    className="accent-violet-600"
                  />
                  <span className="text-sm">No</span>
                </label>
              </div>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}
          </form>
        </div>

        <div className="p-6">
          <div className="mx-auto" style={{ width: 335 }}>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={
                "w-full py-3 rounded-md text-white font-semibold " +
                (canSubmit && !submitting
                  ? "bg-violet-600 hover:opacity-95"
                  : "bg-gray-300 cursor-not-allowed")
              }
            >
              {submitting ? "Creating..." : "Create Account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
