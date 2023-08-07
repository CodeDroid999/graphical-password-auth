import { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // You can use the entered username and password for authentication
  };

  return (
    <div className="bg-blue-200 flex min-h-screen justify-center items-center">
      <div className="bg-blue-600 p-8 border border-gray-300 rounded-md shadow-lg max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
        <div className="mb-6">
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
        <button
          className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-500"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="p-2">Don't have an account?<a className="text-blue-900 font-bold" href href="/sign-up"> Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
