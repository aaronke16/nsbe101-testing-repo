// src/pages/ForgotPassword.js
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    // Call forgot password API here
    alert("If this email is registered, a reset link will be sent.");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-80 space-y-3">
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" required />
        <button type="submit" className="bg-orange-500 text-white p-2 rounded">Reset Password</button>
      </form>
      <p className="mt-2"><Link to="/login" className="text-blue-600">Back to Login</Link></p>
    </div>
  );
};

export default ForgotPassword;
