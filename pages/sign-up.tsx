import Navbar from '@/components/navbar';
import { useState } from 'react';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    // You can use the entered username, email, and password for registration
  };

  return (
    <div className="bg-blue-200 flex min-h-screen justify-center items-center">
      <header className="absolute inset-x-0 top-0 z-50 mb-20">
        <Navbar />
      </header>
      <div className="bg-blue-500 mt-20 p-8 px-16 border border-gray-300 rounded-md shadow-lg max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-500"
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <p className="p-2">Already have an account?<a className="text-blue-900 font-bold" href="/log-in"> Log in</a></p>
      </div>
    </div>
  );
};

export default Signup;
