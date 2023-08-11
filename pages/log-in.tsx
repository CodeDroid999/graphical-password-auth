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

interface SignupFormProps {
  onSubmit: (username: string, email: string, pin: string) => void;
}


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [selectedPin, setSelectedPin] = useState<string[]>([]);
  const availablePins = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const handlePinSelect = (pin: string) => {
    if (selectedPin.length < 4) {
      setSelectedPin([...selectedPin, pin]);
    }
  };

  const handlePinRemove = (index: number) => {
    const updatedPins = [...selectedPin];
    updatedPins.splice(index, 1);
    setSelectedPin(updatedPins);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSignup(username, email, pin); // Use handleSignup instead of onSubmit
  };



  const [selectedGrid, setSelectedGrid] = useState('cats'); // Default to cats


  const [selectedImage, setSelectedImage] = useState<string | null>('dogs/dog1.jpg');




  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const getGridStyle = () => {
    if (selectedImage) {
      return {
        backgroundImage: `url(${selectedImage})`,
      };
    }
    return {};
  };

  const handleSignup = (username: string, email: string, pin: string) => {
    // Handle form submission here (e.g., send data to server)
    console.log('Submitted:', username, email, pin);
  };

  return (
    <div className="bg-blue-200 flex min-h-screen justify-center items-center">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <div className="bg-blue-500 p-8 px-16 border border-gray-300 rounded-md shadow-lg max-w-md">
        <h2 className="text-2xl font-semibold mb-4 mt-20">Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
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
              <ImageGrid images={images} handleImageClick={handleImageClick} />
            </div>
          )}
          {selectedGrid === 'dogs' && (
            <div className="container mx-auto px-2 py-8">
              <h1 className="text-xl font-semibold mb-4">Choose one dog</h1>
              <DogImageGrid images={dogImages} handleImageClick={handleImageClick} />
            </div>
          )}
          {selectedGrid === 'cars' && (
            <div className="container mx-auto px-2 py-2">
              <h1 className="text-xl font-semibold mb-4">Choose one car</h1>
              <CarImageGrid images={carImages} handleImageClick={handleImageClick} />
            </div>
          )}
          <div className="mb-4 img-grid">
            <label className="block mb-2 font-semibold">Choose 4 image sections as your password</label>
            <div className="grid grid-cols-3 gap-1 w-full h-auto bg-cover bg-center  overflow-hidden relative"
              style={{
                backgroundImage: `url(${selectedImage})`,
              }}>
              {availablePins.map((pin) => (
               <button
               key={pin}
               type="button"
               onClick={() => handlePinSelect(pin)}
               className={`py-8 px-8 border border-black  border-[2px] ${selectedPin.includes(pin)
                   ? 'bg-opacity-0 text-opacity-0 text-white'
                   : 'bg-opacity-100 text-opacity-100 text-gray-500'
                 } hover:bg-opacity-50 hover:text-opacity-0 focus:bg-opacity-0 focus:text-opacity-0 active:bg-opacity-0 active:text-opacity-0`}
               style={{
                 strokeLinecap: 'round', // Add this line
                 strokeLinejoin: 'round', // Add this line
                 strokeWidth: 2, // Add this line
               }}
             >
              0
             </button>
             

              ))}
            </div>
            <div className="mt-2">
              <p className="pt-2">Tap to reset</p>
              {selectedPin.map((pin, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handlePinRemove(index)}
                  className="py-2 px-2 border rounded bg-red-700 text-white ml-1"
                >
                  0
                </button>
              ))}
            </div>
          </div>


          <button
            type="submit"
            className="w-full py-2 bg-blue-900 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Log in
          </button>

          <p className="p-2">Don't have an account?<a className="text-blue-900 font-bold" href="/sign-up"> Sign up </a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
