import React, { useState, useEffect } from 'react';
import { 
  ChevronUp, 
  Download, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code, 
  Server, 
  Brain, 
  Award, 
  Book 
} from 'lucide-react';


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
    const link = document.createElement('a');
    link.href = 'assets/Kamlesh_Kumar_Resume.pdf';
    link.download = 'Kamlesh_Kumar_Resume.pdf';
    link.click();
  };

  const skills = {
    technical: [
      { 
        title: 'Front-End Development', 
        description: 'React.js, JavaScript, HTML5, CSS, API Integrations, Headless CMS, Serverless Functions',
        icon: <Code className="text-blue-600 w-10 h-10" />
      },
      { 
        title: 'Back-End Development', 
        description: 'Node.js, Express.js, MongoDB, SQL, Git, Version Control',
        icon: <Server className="text-green-600 w-10 h-10" />
      },
      { 
        title: 'AI/ML Expertise', 
        description: 'Generative AI, RAG Methodologies, Embeddings, Fine-tuning, LLM Models, Hugging Face',
        icon: <Brain className="text-purple-600 w-10 h-10" />
      }
    ],
    coreCompetencies: [
      { 
        title: 'Sales & Marketing', 
        description: 'B2B Sales, Lead Generation, Digital Marketing, Sales Planning, Merchant Partnerships, SEO' 
      },
      { 
        title: 'Operations', 
        description: 'Hotel Operations, Budgeting, Preopening, Operational Planning, Procurement, Project Management' 
      },
      { 
        title: 'General Management', 
        description: 'Team Leadership, Recruitment & Training, Franchising, Partnerships, P&L, Legal Knowledge' 
      }
    ]
  };
  const professionalExperience = [
    {
      title: 'Sales and Marketing Consultant',
      company: 'iRasus Technologies Pvt Ltd and Others',
      period: 'Remote | Part Time | May 2020 - Present',
      responsibilities: [
        'Provided consulting services into lead generation, sales planning, digital marketing and social media management',
        'Developed marketing collateral, including corporate presentations, pitch decks, brochures, and newsletters',
        'Created static posts, infographics, and blogs across LinkedIn, Twitter, Facebook, Instagram, Medium, and Quora',
        'Enhanced SEO and executed multi-channel digital marketing campaigns',
        'Clients included start-ups in Electric Vehicle Battery Analytics, POSH Law Consulting, Social Media Scheduling, Fuel Delivery, and Cleantech hardware space'
      ]
    },
    {
      title: 'Program Manager',
      company: 'TLC Relationship Management P Ltd',
      period: 'Bangalore & Kolkata | Dec 2018 - Apr 2020',
      responsibilities: [
        'Led profit centre team, overseeing Inside Sales Executives and operations staff',
        'Acquired new customers via lead generation, inside sales, and corporate partnerships',
        'Led recruitment, training, and team events while handling P&L and payroll',
        'Developed and tracked monthly and annual budgets',
        'Managed P&L responsibility with $2M+ annual revenue oversight'
      ]
    },
    {
      title: 'Senior Manager - Inside Sales, Activations & Online Hotel Booking Operations',
      company: 'Little Internet Pvt Ltd',
      period: 'Bangalore | May 2015 - Sep 2018',
      responsibilities: [
        'Led a 24-member inside sales team, achieving 150% of sales targets',
        'Managed inventory and rate optimization for over 10,000 hotels',
        'Implemented backend AWS operations for data uploads and report generation',
        'Conducted BTL campaigns across six major cities to drive brand visibility'
      ]
    },
    {
      title: 'Business Partner',
      company: 'Route Infinity (Travel Startup)',
      period: 'Chandigarh | Nov 2011 - Nov 2014',
      responsibilities: [
        'Managed hotel contracting, bookings, conferences, and group tours',
        'Oversaw sales outsourcing for 2 five-star hotels',
        'Consulted for multiple startups in hotel and restaurant operations',
        'Led hotel and restaurant consulting, including pre-opening, SOPs, and workflow optimization'
      ]
    },
    {
      title: 'Assistant Manager - Marketing and Sales',
      company: 'Mars Restaurants Pvt Ltd',
      period: 'Mumbai | Jan 2008 - Oct 2011',
      responsibilities: [
        'Designed marketing and BTL promotion strategies, generating annual revenue growth',
        'Managed revenue streams through sponsorships, tie-ups, and franchise expansions',
        'Oversaw all social media pages, advertorials, and advertisements for the brand'
      ]
    }
  ];

  const education = [
    {
      degree: 'BSc Hotel Management',
      institution: 'IHMCTAN Mumbai',
      period: '2002-05'
    },
    {
      degree: 'LLB (Hons)',
      institution: 'Dhanbad Law College (BBMKU)',
      period: '2021-24'
    }
  ];

  const technicalCertifications = [
    {
        name: 'CS50x Certificate - Introduction to Computer Science',
        institution: 'Harvard University & edX',
        year: '2021-2022',
        icon: <Award className="text-red-600 w-8 h-8" />
      },
      {
        name: 'Certificate in AI Engineering',
        institution: 'Scrimba',
        year: '2023',
        icon: <Award className="text-blue-600 w-8 h-8" />
      },
      {
        name: 'Certificate in Front-End Development',
        institution: 'Scrimba',
        year: '2021-2023',
        icon: <Book className="text-purple-600 w-8 h-8" />
      },
      {
        name: 'Certificate in Advanced React JS',
        institution: 'Scrimba',
        year: '2021-2023',
        icon: <Book className="text-purple-600 w-8 h-8" />
      },
      {
        name: 'Certificate in Marketing Management',
        institution: 'IIM Bangalore (edX)',
        year: '2017',
        icon: <Award className="text-yellow-600 w-8 h-8" />
      },
      {
        name: 'Certificate in Google AdWord Basics',
        institution: 'Academy for Ads by Google, Google AdWords',
        year: '2017',
        icon: <Award className="text-blue-500 w-8 h-8" />
      }
  ];

  const projects = [
    {
      id: 1,
      image: '../img/travel-app.jpg',
      name: 'Full-Stack Travel Recommendation App',
      intro: 'MERN stack travel application with headless CMS integration',
      description: 'Comprehensive travel recommendation platform',
      techStack: 'MongoDB, Express, React, Node.js, JotForm, Contentful',
      liveLink: 'https://yatramaker.com',
      githubLink: 'https://github.com/kamlesh-21/travel-app'
    },
    {
      id: 2,
      image: '../img/ai-image-gen.jpg',
      name: 'AI Image Generation App',
      intro: 'Web app for AI-based image generation',
      description: 'Utilized Hugging Face models for text and image generation',
      techStack: 'React, Hugging Face, AI Models',
      liveLink: 'https://tryphoto.netlify.app',
      githubLink: 'https://github.com/kamlesh-21/ai-image-gen'
    },
    {
      id: 3,
      image: '../img/rag-hotel-system.jpg',
      name: 'RAG-Based Hotel System',
      intro: 'Conversational chatbot using generative AI and RAG methodologies',
      description: 'AI-powered hotel management conversational interface',
      techStack: 'Generative AI, RAG, Embeddings',
      liveLink: 'https://ihobo.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/hotel-ai-system'
    },
    {
      id: 4,
      image: '../img/hotel-consulting.jpg',
      name: 'Hotel Consulting Website',
      intro: 'React-based website for hotel consulting services',
      description: 'Implemented context-based catalogue and headless CMS-based blog',
      techStack: 'React, Headless CMS, Context API',
      liveLink: 'https://bhargavihospitality.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/hotel-consulting-site'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <header className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Kamlesh Kumar</div>

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
          <ul
            className={`md:flex space-x-4 ${
              isMobileMenuOpen
                ? 'absolute top-full left-0 w-full bg-blue-900 flex flex-col items-center py-4'
                : 'hidden md:flex'
            }`}
          >
          {['Education', 'Skills', 'Experience', 'Projects', 'Contact'].map((section) => (
            <li key={section} className="hover:text-yellow-400 transition">
              <button
                onClick={() => {
                  const element = document.getElementById(section.toLowerCase());
                  const offset = 150; // Adjust this for eye-level alignment
                  const top = element.offsetTop - offset;

                  window.scrollTo({
                    top,
                    behavior: 'smooth',
                  });
                }}
                className="focus:outline-none"
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>

      <main className="container mx-auto mt-20 p-4">
        {/* About Section */}
        <section id="about" className="text-center bg-blue-700 text-white p-12 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-2">Kamlesh Kumar</h1>
          <h2 className="text-xl mb-4 text-yellow-300">Sales & Operations Leader | Full Stack Developer</h2>
          <p className="max-w-xl mx-auto mb-6">
            Accomplished professional with 18+ years of experience in driving P&L growth, client onboarding, and B2B sales across multiple sectors, with technical expertise in MERN stack and generative AI.
          </p>

          <div className="flex justify-center space-x-4 mb-4">
            {/* Download Resume Button */}
            <button
                onClick={downloadResume}
                className="bg-yellow-500 text-blue-900 px-4 py-2 rounded flex items-center hover:bg-yellow-600"
            >
                <Download className="mr-2" /> Download Resume
            </button>

            {/* LinkedIn Link */}
            <a
                href="https://linkedin.com/in/your-linkedin-id"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 px-4 py-2 rounded flex items-center hover:bg-blue-700"
            >
                <Linkedin className="mr-2" /> LinkedIn
            </a>

            {/* GitHub Link */}
            <a
                href="https://github.com/kamlesh-21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-4 py-2 rounded flex items-center hover:bg-gray-700"
            >
                <Github className="mr-2" /> GitHub
            </a>
            </div>

        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Skills & Competencies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Technical Skills</h3>
              {skills.technical.map((skill, index) => (
                <div key={index} className="flex items-center mb-4">
                  {skill.icon}
                  <div className="ml-4">
                    <h4 className="font-bold">{skill.title}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Competencies */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Core Competencies</h3>
              {skills.coreCompetencies.map((competency, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-bold">{competency.title}</h4>
                  <p className="text-gray-600">{competency.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Professional Experience</h2>
          {professionalExperience.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{job.title}</h3>
              <p className="mb-2">
                <span className="text-lg font-medium text-gray-800">{job.company}</span> 
                <span className="text-gray-600"> | {job.period}</span>
            </p>
            <ul className="list-disc list-inside text-gray-700">
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section id="education" className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-800">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalCertifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                {cert.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-blue-800">{cert.name}</h3>
                  <p className="text-gray-600">{cert.institution}</p>
                  <p className="text-gray-500">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                <img
                src={project.image}
                alt={project.name}
                className="rounded-t-lg object-cover w-full h-40 mb-4"
                />
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-2">{project.intro}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="font-medium mb-2">Tech Stack: {project.techStack}</p>
                <div className="flex space-x-4">
                {project.liveLink && (
                    <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded flex items-center hover:bg-green-600"
                    >
                    <ExternalLink className="mr-2" /> Live Demo
                    </a>
                )}
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded flex items-center hover:bg-gray-700"
                >
                    <Github className="mr-2" /> GitHub
                </a>
                </div>
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

      <footer className="text-center py-4 bg-blue-900 text-white">
        <p>&copy; 2024 Kamlesh Kumar | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;