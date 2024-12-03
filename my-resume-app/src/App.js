import React, { useState, useEffect } from 'react';
import { ChevronUp, Download, Github, Linkedin } from 'lucide-react';

const App = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    alert('Resume download functionality to be implemented');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">John Doe</div>
          
          {/* Mobile Menu Toggle */}
          <div 
            className="md:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className={`md:flex space-x-4 ${isMobileMenuOpen ? 'absolute top-full left-0 w-full bg-blue-900 flex flex-col items-center py-4' : 'hidden md:flex'}`}>
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(section => (
              <li key={section} className="hover:text-yellow-400 transition">
                <a href={`#${section.toLowerCase()}`}>{section}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-20 p-4">
        {/* Hero Section */}
        <section 
          id="about" 
          className="text-center bg-blue-700 text-white p-12 rounded-lg shadow-lg mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <h2 className="text-xl mb-4 text-yellow-300">Full Stack Developer</h2>
          <p className="max-w-xl mx-auto mb-6">
            Passionate about building scalable web applications and solving real-world problems with technology.
          </p>

          <div className="flex justify-center space-x-4 mb-4">
            <button 
              onClick={downloadResume} 
              className="bg-yellow-500 text-blue-900 px-4 py-2 rounded flex items-center hover:bg-yellow-600"
            >
              <Download className="mr-2" /> Download Resume
            </button>
            <button 
              onClick={() => window.open('https://linkedin.com/in/johndoe', '_blank')}
              className="bg-blue-800 px-4 py-2 rounded flex items-center hover:bg-blue-700"
            >
              <Linkedin className="mr-2" /> LinkedIn
            </button>
            <button 
              onClick={() => window.open('https://github.com/johndoe', '_blank')}
              className="bg-gray-800 px-4 py-2 rounded flex items-center hover:bg-gray-700"
            >
              <Github className="mr-2" /> GitHub
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Skills</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Technical Skills', description: 'React, Node.js, Express, MongoDB' },
              { title: 'Soft Skills', description: 'Problem Solving, Team Collaboration, Communication' },
              { title: 'Domain Expertise', description: 'Web Development, API Integration, Cloud Services' }
            ].map(skill => (
              <div 
                key={skill.title} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl text-blue-700 mb-2">{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Go to Top Button */}
      {showGoToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-900 text-white w-12 h-12 rounded-full 
                     flex items-center justify-center hover:bg-blue-700 transition z-50"
        >
          <ChevronUp />
        </button>
      )}

      {/* Footer */}
      <footer className="text-center py-4 bg-blue-900 text-white">
        <p>&copy; 2024 John Doe | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
