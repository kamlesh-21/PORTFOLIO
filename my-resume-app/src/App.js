import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
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

  // const downloadResume = () => {
  //   const link = document.createElement('a');
  //   link.href = 'assets/Kamlesh_Kumar_Resume.pdf';
  //   link.download = 'Kamlesh_Kumar_Resume.pdf';
  //   link.click();
  // };

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
      image:'./img/logos/irasus.jpg',
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
      image:'./img/logos/tlc.jpg',
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
      image:'./img/logos/little.jpg',
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
      image:'./img/logos/route.jpg',
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
      image:'./img/logos/mars.jpg',
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
      image: '../img/yatramaker promo 2.jpg',
      name: "Full-Stack Travel Recommendation App",
      intro: "YatraMaker revolutionizes travel planning by recommending destinations and itineraries based on user budgets and preferences.",
      description: "A full-stack platform leveraging React for dynamic interfaces and Node.js for server-side operations. MongoDB handles scalable data management, while RESTful APIs ensure seamless client-server communication. Advanced algorithms optimize trip durations, estimate costs, and enhance user experiences.",
      techStack: "React, Node.js, Express, MongoDB, JotForm, Contentful",
      liveLink: 'https://yatramaker.com',
      githubLink: 'https://github.com/kamlesh-21/travel-app'
    },
    {
      id: 2,
      image: '../img/mid3a.png',
      name: "AI Image Generation App",
      intro: "A text-to-image generation app that turns creative ideas into visually stunning outputs using advanced AI models.",
      description: "Built with React for interactive UI, the app integrates Hugging Face models for high-quality image generation. AI pipelines process inputs efficiently, ensuring scalability and reliability for creative users. Ideal for transforming text prompts into visuals seamlessly.",
      techStack: "React, Hugging Face, AI Models",
      liveLink: 'https://tryphoto.netlify.app',
      githubLink: 'https://github.com/kamlesh-21/ai-image-gen'
    },
    {
      id: 3,
      image: '../img/mid3a.png',
      name: "RAG-Based Hotel AI Chatbot",
      intro: "AI chatbot offering multilingual conversations, handling reservations, and providing personalized services for hotels.",
      description: "Combines retrieval augmentation, generative AI, and fine-tuned LLMs for tailored responses. Built with Hugging Face, LangChain, and Supabase, the system uses vector embeddings to enhance precision and streamline hotel operations.",
      techStack: "Generative AI, Hugging Face, LangChain, OpenAI, Supabase",
      liveLink: 'https://ihobo.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/hotel-ai-system'
    },
    {
      id: 4,
      image: '../img/bhh1.jpg',
      name: "Hotel Consulting Website",
      intro: "A consulting website designed to showcase hotel services and publish industry insights dynamically.",
      description: "Developed using React, the platform offers a responsive interface, integrates a headless CMS for seamless updates, and uses Context API for state management. Scalable architecture ensures future growth and easy navigation.",
      techStack: "React, Headless CMS, Context API",
      liveLink: 'https://bhargavihospitality.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/hotel-consulting-site'
    },
    {
      id: 5,
      image: '../img/oldagram-square.png',
      name: "Oldagram",
      intro: "A compact Instagram clone replicating the layout and interactive functionality of the original platform.",
      description: "Displays posts with user details, avatars, images, and likes. Interactive features include dynamic like counts updated via event listeners, creating a real-time experience for users.",
      techStack: "JavaScript, HTML, CSS, DOM Manipulation",
      liveLink: 'https://oldogram.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Oldagram',
    },
    {
      id: 6,
      image: '../img/tenzies.jpg',
      name: "Tenzies",
      intro: "A fun dice game where players aim to roll all dice to the same number with minimal attempts.",
      description: "Features a dynamic UI to hold or release dice, tracking rolls and scores. Confetti animations celebrate wins, and users can clear previous scores for new challenges.",
      techStack: "React, React Hooks, nanoid, react-confetti",
      liveLink: 'https://sweet-belekoy-83486a.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Tenzies_Game',
    },
    {
      id: 7,
      image: '../img/password-generator.jpg',
      name: "Password Generator",
      intro: "A tool to generate secure, random passwords using a mix of letters, numbers, and symbols.",
      description: "Users can create two passwords of 15 characters each simultaneously. The interface dynamically displays results, ensuring convenience for creating strong credentials.",
      techStack: "JavaScript, HTML, CSS",
      liveLink: 'https://sage-kleicha-673556.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Random_Password_Generator_2',
    },
    {
      id: 8,
      image: '../img/meme-generator.jpg',
      name: "Meme Generator",
      intro: "Create custom memes by adding text to random images fetched from the Imgflip API.",
      description: "Users enter top and bottom text, and the app fetches a random image to overlay the text. Memes update interactively with every input or click, encouraging creativity and humor.",
      techStack: "React, Imgflip API, JavaScript, HTML, CSS",
      liveLink: 'https://vermillion-souffle-8b93ed.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Meme-Generator',
    },
    {
      id: 9,
      image: '../img/personal_dashboard.jpg',
      name: "Personal Dashboard",
      intro: "A customizable dashboard displaying weather, crypto data, images, and time based on user preferences.",
      description: "Fetches data from APIs like Unsplash, CoinGecko, and OpenWeatherMap. The app updates content dynamically and handles API errors gracefully, offering a seamless user experience.",
      techStack: "JavaScript, Fetch API, HTML, CSS",
      liveLink: 'https://fluffy-clafoutis-cf081f.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/dashboard',
    },
    {
      id: 10,
      image: '../img/xpace.jpg',
      name: "Corp Tech Consulting Site",
      intro: "A modern site for showcasing IT and business consulting services, designed for scalability and engagement.",
      description: "Developed with React and react-router-dom for smooth navigation, featuring pages like Home, Services, and Tech Talks. The site integrates dynamic elements like product catalogs and AI-powered chatbots for enhanced user interaction.",
      techStack: "React, JavaScript, HTML, CSS",
      liveLink: 'https://xpace.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Corporate_Website',
    },
    {
      id: 11,
      image: '../img/color-picker.jpg',
      name: "Color Scheme Generator",
      intro: "Generate color schemes based on user-selected colors and scheme types using API integrations.",
      description: "The app uses a color picker and dropdown to fetch matching color schemes from thecolorapi.com. Results display dynamically as colored shapes with hexadecimal values for easy reference.",
      techStack: "JavaScript, HTML, CSS, Fetch API, thecolorapi.com",
      liveLink: 'https://rainbow-biscuit-c760c0.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Color-Scheme-Generator',
    },
    {
      id: 12,
      image: '../img/restaurant-menu.jpg',
      name: "Food Ordering Site",
      intro: "An online platform for browsing menus, ordering food, and tracking orders with ease.",
      description: "Users can add or remove items from their cart, with real-time order total updates. The platform provides a smooth checkout experience and confirms delivery times.",
      techStack: "JavaScript, HTML, CSS, DOM Manipulation, Fetch API",
      liveLink: 'https://order-food-items.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Food-Ordering-Site',
    },
    {
      id: 13,
      image: '../img/twitter.jpg',
      name: "Twitter Frontend Clone",
      intro: "A frontend replica of Twitter allowing users to view, post, and interact with tweets.",
      description: "Mimics Twitter functionality, including liking, retweeting, and replying. Features a clean interface for seamless navigation and engaging user experiences.",
      techStack: "JavaScript, React, HTML, CSS",
      liveLink: 'https://helpful-panda-1d5db6.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/twitter_clone',
    },
    {
      id: 14,
      image: '../img/tagurl.png',
      name: "TagURL - Browser Extension",
      intro: "A browser extension to save and organize favorite website URLs with associated tags for better accessibility.",
      description: "Built as a browser extension using HTML, CSS, and JavaScript, this tool leverages the Chrome Extension API (chrome.tabs.query) to capture active tab URLs and user inputs for tags. Saved URLs and tags are stored as objects in an array and managed through local storage. Users can view, delete individual entries, or clear all saved data through a user-friendly interface.",
      techStack: "JavaScript, HTML, CSS, Chrome Extension API",
      liveLink: 'https://helpful-panda-1d5db6.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/TagURL',
    },
    {
      id: 15,
      image: '../img/movie_watchlist.jpg',
      name: "Movie Watchlist",
      intro: "A tool for creating a personalized watchlist by searching and saving movies from the OMDb API.",
      description: "This project enables users to search for movies via the OMDb API and add them to their watchlist. Movie details such as title, poster, IMDb rating, runtime, genre, and plot are displayed dynamically. Users can manage their watchlist, with options to add, remove, or alert duplicates, all while leveraging local storage for persistence.",
      "techStack": "JavaScript, HTML, CSS, OMDb API",
      liveLink: 'https://remarkable-7d47ea.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Movie_Watchlist',
    },
    {
      id: 16,
      image: '../img/learning_journal.jpg',
      name: "Learning Journal",
      intro: "A portfolio-styled journal combining blogs and project showcases.",
      description: "The static website structure includes a header with navigation, a featured article, and a main section displaying recent articles and a sidebar. Widgets showcase author information and projects, while a footer provides copyright details. Styled with CSS and Google Fonts, it offers a clean, professional look.",
      techStack: "HTML, CSS, Google Fonts (Quicksand)",
      liveLink: 'https://learning-journal-aside.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/my-learning-journal',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <header className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
        <div 
          className="text-2xl font-bold cursor-pointer hover:text-yellow-400 transition duration-300"
          onClick={scrollToTop}
        >
          Kamlesh Kumar
          {/* Uncomment if you want to use an image */}
          {/* <img
              src="./img/kamnlesh2.png"
              alt="Kamlesh Kumar"
              className="h-18 object-fill group-hover:opacity-80 group-hover:scale-105 transition duration-300"
            /> */}
        </div>

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
    <section id="about" className="flex items-center bg-blue-700 text-white p-12 rounded-lg shadow-lg mb-8">
        {/* Left Side: Image */}
        <div className="w-1/4 flex justify-center">
            <img
                src="./img/kamleshkumar_three.png" // Replace with your image path
                alt="Kamlesh Kumar"
                className="rounded-full w-42 h-48 object-fill shadow-lg border-4 border-yellow-300"
            />
        </div>

        {/* Right Side: Content */}
        <div className="w-3/4 text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-2">Kamlesh Kumar</h1>
            <h2 className="text-xl mb-4 text-yellow-300">Sales & Operations Leader | Full Stack Developer</h2>
            <p className="max-w-xl mx-auto lg:mx-0 mb-6">
                Accomplished professional with 18+ years of experience in driving P&L growth, client onboarding, and B2B sales across multiple sectors, with technical expertise in MERN stack and generative AI.
            </p>

            <div className="flex justify-center lg:justify-start space-x-4">
                {/* Download Resume Button */}
                <a
                  href="/Kamlesh_Kumar_Resume1.docx" // Replace "resume.docx" with the actual name of your resume file in the public folder
                  download
                  className="bg-yellow-500 text-blue-900 px-4 py-2 rounded flex items-center hover:bg-yellow-600"
                >
                  <Download className="mr-2" /> Download Resume
                </a>

                {/* LinkedIn Link */}
                <a
                    href="https://www.linkedin.com/in/kamlesh21/"
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
      <p className="mb-2 flex items-center">
        {/* Add company logo if available */}
        <img src={job.image} alt={job.company} className="w-6 h-6 mr-2" />
        <span className="text-lg font-medium text-gray-800 mr-2">{job.company}</span>
        <span className="text-gray-600"> | {job.period}</span>
      </p>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {job.responsibilities.map((task, i) => (
          <li key={i}>{task}</li>
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
                className="rounded-t-lg object-cover w-auto h-60 mb-4"
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
        <section id="contact">
          <ContactForm />
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