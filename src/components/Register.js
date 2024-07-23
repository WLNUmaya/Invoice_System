import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Make sure to import the CSS file

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Here you would normally handle registration logic (e.g., save to database)
    // For this example, we'll just navigate to the login page
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Register</h2>
        <p className="text-sm text-center text-gray-600">
          Create your account by filling out the form below.
        </p>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Confirm your password"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account? 
          <button 
            onClick={() => navigate("/")} 
            className="text-blue-500 hover:underline ml-1">
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
