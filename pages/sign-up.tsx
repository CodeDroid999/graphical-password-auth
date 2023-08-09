import ImageGrid from '@/components/ImageGrid';
import Navbar from '@/components/navbar';
import { useState } from 'react';
import DogImageGrid from '@/components/DogImageGrid';
import CarImageGrid from '@/components/CarImageGrid'; // Import the new component

const carImages = [
  'cars/car1.jpg',
  'cars/car2.jpg',
  'cars/car3.jpg',
  'cars/car4.jpg',
  'cars/car5.jpg',
  'cars/car6.jpg',
  'cars/car7.jpg',
  'cars/car8.jpg',
  'cars/car9.jpg',
  // Add more car image URLs here
];

const dogImages = [
  'dogs/dog1.jpg',
  'dogs/dog2.jpg',
  'dogs/dog3.jpg',
  'dogs/dog4.jpg',
  'dogs/dog5.jpg',
  'dogs/dog6.jpg',
  'dogs/dog7.jpg',
  'dogs/dog8.jpg',
  'dogs/dog9.jpg',
  // Add more dog image URLs here
];

const images = [
  'cats/download.jpg',
  'cats/cat2.jpg',
  'cats/cat3.jpg',
  'cats/cat4.jpg',
  'cats/cat5.jpg',
  'cats/cat6.jpg',
  'cats/cat7.jpg',
  'cats/cat8.jpg',
  'cats/cat9.jpg',  // Add more image URLs here
];


const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [selectedGrid, setSelectedGrid] = useState('cats'); // Default to cats


  const handleSignup = () => {
    // Implement your signup logic here
    // You can use the entered username, email, and password for registration
  };

  return (
    <div className="bg-blue-200 flex min-h-screen justify-center items-center">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <div className="bg-blue-500 p-8 px-16 border border-gray-300 rounded-md shadow-lg max-w-md">
        <h2 className="text-2xl font-semibold mb-4 mt-20">Sign Up</h2>
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
        <div className="container mx-auto px-2 py-2">
          <h1 className="text-xl font-semibold mb-4">Choose an option</h1>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              value="cats"
              checked={selectedGrid === 'cats'}
              onChange={() => setSelectedGrid('cats')}
            />
            <span className="ml-2">Cats</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              className="form-radio"
              value="dogs"
              checked={selectedGrid === 'dogs'}
              onChange={() => setSelectedGrid('dogs')}
            />
            <span className="ml-2">Dogs</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              className="form-radio"
              value="cars"
              checked={selectedGrid === 'cars'}
              onChange={() => setSelectedGrid('cars')}
            />
            <span className="ml-2">Cars</span>
          </label>
        </div>

        {/* Conditionally render the selected image grid */}
        {selectedGrid === 'cats' && (
          <div className="container mx-auto px-2 py-2">
            <h1 className="text-xl font-semibold mb-4">Choose one cat</h1>
            <ImageGrid images={images} />
          </div>
        )}
        {selectedGrid === 'dogs' && (
          <div className="container mx-auto px-2 py-8">
            <h1 className="text-xl font-semibold mb-4">Choose one dog</h1>
            <DogImageGrid images={dogImages} />
          </div>
        )}
        {selectedGrid === 'cars' && (
          <div className="container mx-auto px-2 py-2">
            <h1 className="text-xl font-semibold mb-4">Choose one car</h1>
            <CarImageGrid images={carImages} />
          </div>
        )}


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
