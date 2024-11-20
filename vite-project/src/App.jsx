import React from 'react';
import { BrowserRouter as Router, Routes,  Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Home from './components/Home';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Work from './components/work';
import PortfolioItem from './components/portfolioItem';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <header className="bg-gray-800 text-white py-4 px-6 shadow-lg">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <Link to="/">Kamlesh Kumar</Link>
            </div>
            <ul className="flex space-x-6">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work-experience">Work Experience</Link></li>
              <li><Link to="/work">My Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-1 py-12 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<PortfolioItem />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-4 px-6 text-center shadow-inner">
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/kamlesh-21" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kamlesh-kumar-2a403321b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:kamlesh.kumar21@gmail.com">
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="mt-2">© 2023 Kamlesh Kumar. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;