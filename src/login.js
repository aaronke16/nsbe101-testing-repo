// src/pages/Login.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Call authentication API here
    navigate("/dashboard"); // Redirect after successful login
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-80 space-y-3">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
      <Link to="/forgot-password" className="mt-2 text-blue-600">Forgot Password?</Link>
      <p className="mt-2">Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link></p>
    </div>
  );
};

export default Login;
