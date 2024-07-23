import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Make sure to import the CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Sign In</h2>
        <p className="text-sm text-center text-gray-600">
          Welcome back! Please enter your credentials to access your account.
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
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
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline" onClick={() => navigate('/register')}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
