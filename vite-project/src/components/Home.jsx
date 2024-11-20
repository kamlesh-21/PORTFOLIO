import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-4 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Welcome to Kamlesh Kumar's Portfolio</h1>
            <p className="text-gray-600 text-lg mb-6">
              Discover my diverse experience, innovative projects, and passion for technology.
            </p>
            <div className="flex space-x-4">
              <Link to="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                About Me
              </Link>
              <Link to="/projects" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                View Projects
              </Link>
            </div>
          </div>
          <div className="md:w-1/3">
            <img src="avatar.jpg" alt="Kamlesh Kumar" className="rounded-full w-48 h-48 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;