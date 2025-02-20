import logo from './logo.svg';
import './App.css';
import Home from './page'
import Login from './login';
import Signup from './Signup';
import ForgotPassword from './forgotpassword';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Add a dashboard or home page here later */}
      </Routes>
    </Router>
  );
}

export default App;
