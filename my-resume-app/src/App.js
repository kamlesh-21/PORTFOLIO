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
      image: '../img/yatramaker promo 2.jpg',
      name: 'Full-Stack Travel Recommendation App',
      intro: 'YatraMaker is an innovative platform that redefines travel planning by focusing on user budgets, offering tailored destination recommendations and comprehensive itineraries.',
      description: 'The platform"s frontend leverages React, ensuring a dynamic and intuitive interface, while the backend, powered by Node.js with Express, facilitates efficient server-side operations. A MongoDB database supports scalable data management for destinations and pricing details. RESTful APIs enable smooth client-server communication, ensuring real-time updates and data synchronization. Advanced algorithms drive key features, such as optimizing trip durations, dynamically estimating costs based on user preferences, and intelligent pricing models.',
      techStack: 'MongoDB, Express, React, Node.js, JotForm, Contentful',
      liveLink: 'https://yatramaker.com',
      githubLink: 'https://github.com/kamlesh-21/travel-app'
    },
    {
      id: 2,
      image: '../img/mid3a.png',
      name: 'AI Image Generation App',
      intro: 'An innovative solution for generating AI-driven images, designed to transform ideas into visually stunning outputs for creative industries and businesses.',
      description: 'An innovative solution designed to transform text prompts into visually stunning images using advanced AI technology. Built with React, the app ensures a seamless and interactive user experience, while Hugging Face models power its sophisticated text-to-image generation capabilities. The backend leverages AI pipelines to efficiently process data and render high-quality outputs. Robust hosting solutions are implemented to ensure scalability, reliability, and performance.',
      techStack: 'React, Hugging Face, AI Models',
      liveLink: 'https://tryphoto.netlify.app',
      githubLink: 'https://github.com/kamlesh-21/ai-image-gen'
    },
    {
      id: 3,
      image: '../img/mid3a.png',
      name: 'RAG-Based Hotel AI Chatbot',
      intro: 'AI-powered chatbot seamlessly chats with you in over 36 languages.It can even handle reservations and bookings, all in your natural language.',
      description: 'This innovative project leverages cutting-edge technologies like generative AI, retrieval augmentation, and fine-tuned LLMs from Hugging Face, OpenAI, LangChain, and SupaBase to create a truly helpful and personalized hotel experience. The system employs generative AI frameworks with Retrieval-Augmented Generation (RAG) techniques it deliver highly contextual and precise responses. By using vector embeddings, the platform enhances search accuracy, making hotel operations smoother.',
      techStack: 'generative AI, retrieval augmentation, Hugging Face, OpenAI, LangChain, and SupaBase',
      liveLink: 'https://ihobo.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/hotel-ai-system'
    },
    {
      id: 4,
      image: '../img/bhh1.jpg',
      name: 'Hotel Consulting Website',
      intro: 'A dynamic platform for hotel consulting services, enabling businesses to showcase offerings and publish insights through a user-friendly website.',
      description: 'A dynamic and user-friendly website created for hotel consulting services, enabling businesses to showcase their offerings and insights effectively. Developed with React, the site delivers a high-performing and responsive interface. A headless CMS is integrated to allow effortless updates to blogs and catalogs. The Context API ensures efficient state management and smooth navigation throughout the platform. Built with scalability in mind, the website is ready to accommodate future growth and additional features.',
      techStack: 'React, Headless CMS, Context API',
      liveLink: 'https://bhargavihospitality.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/hotel-consulting-site'
    },
    {
      id: 5,
      image: '../img/oldagram-square.png',
      name: 'Oldagram',
      intro: 'Oldagram is a small clone of Instagram, designed with a similar layout and functionality. The project utilizes JavaScript and DOM manipulation to create an interactive user interface.',
      description: 'It showcases a collection of posts, each consisting of a user"s name, username, location, avatar, post image, comment, and number of likes. The likes count is displayed dynamically, and users can increment the likes by clicking on the "increment" button or the heart icon. The project leverages event listeners to update the likes count and reflect the changes in real-time.', 
      techStack: 'JavaScript, DOM manipulation, HTML, CSS.',
      liveLink: 'https://oldogram.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Oldagram',
    },
    {
      id: 6,
      image: '../img/tenzies.jpg',
      name: 'Tenzies',
      intro: 'Tenzies is a dice game built using React. The objective of the game is to roll the dice until all of them show the same value.',
      description: 'The game features a dynamic user interface with dice that can be held or released to freeze their current value between rolls. The game tracks the number of rolls taken and displays the best score achieved so far, as well as the last score. Users have the option to clear the stored scores. The game also includes a visual effect of confetti when the player achieves "tenzies" (all dice showing the same value)', 
      techStack: 'React, React hooks, nanoid, react-confetti',
      liveLink: 'https://sweet-belekoy-83486a.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Tenzies_Game',
    },
    {
      id: 7,
      image: '../img/password-generator.jpg',
      name: 'Password Generator',
      intro: 'The Password Generator is a JavaScript-based tool that generates random passwords. It utilizes an array of characters containing uppercase and lowercase letters, numbers, and special symbols.',
      description: 'The tool allows users to generate two random passwords simultaneously, which are displayed in separate boxes on the webpage. Each password consists of 15 characters randomly selected from the available character set. The generated passwords can be used for various purposes, such as creating strong and secure passwords for online accounts.', 
      techStack: ' JavaScript, HTML, CSS.',
      liveLink: 'https://sage-kleicha-673556.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Random_Password_Generator_2',
    },
    {
      id: 8,
      image: '../img/meme-generator.jpg',
      name: 'Meme Generator',
      intro: 'The Meme Generator is a React-based application that allows users to generate custom memes by adding text to a random image fetched from an API.',
      description: 'The application features two input fields for entering the top and bottom text of the meme. By clicking the "Get a new Meme Image" button, a random image is fetched from the Imgflip API and displayed alongside the entered text. Users can update the text inputs and generate new meme combinations by clicking the button again. The generated memes can be humorous, satirical, or creative, depending on the user"s input.', 
      techStack: ' React, JavaScript, HTML, CSS, Imgflip API',
      liveLink: 'https://vermillion-souffle-8b93ed.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Meme-Generator',
    },
    {
      id: 9,
      image: '../img/personal_dashboard.jpg',
      name: 'Personal Dashboard',
      intro: 'The Personal Dashboard is a web application that provides a personalized dashboard experience to users. The application uses the Fetch API to make API requests and handle the responses asynchronously.',
      description: 'It fetches data from Unsplash API, CoinGecko API, OpenWeatherMap API, Geolocation API to display dynamic content such as a random nature image from Unsplash as the background, the author of the image, real-time cryptocurrency data (specifically for Dogecoin), the current time, and the weather information based on the user"s geolocation.  It also handles errors gracefully and provides default data or fallbacks in case of any issues with the API requests', 
      techStack: 'JavaScript, HTML, CSS, Fetch API',
      liveLink: 'https://fluffy-clafoutis-cf081f.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/dashboard',
    },
    {
      id: 10,
      image: '../img/xpace.jpg',
      name: 'Corp Tech Consulting Site',
      intro: 'This project was crafted for Xpace, an IT and business consulting firm specializing in innovative digital solutions in technology, marketing, and scalability to thrive in a dynamic market.',
      description: 'This React project implements a modern web application with a responsive navigation system and routing powered by react-router-dom. It features a clean and scalable architecture, integrating pages such as Home, About Us, Services, and Tech Talks, alongside dynamic elements like a product catalog and an AI-powered Superbot. With FontAwesome for icons and structured component organization, the project delivers a seamless user experience.', 
      techStack: 'React, JavaScript, HTML, CSS',
      liveLink: 'https://xpace.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Corporate_Website',
    },
    {
      id: 11,
      image: '../img/color-picker.jpg',
      name: 'Color Scheme Generator',
      intro: 'The Color Scheme Generator is a web application that generates a color scheme based on a user-selected color and scheme type. ',
      description: ' The application uses an HTML form with a color picker and scheme selection dropdown. unction retrieves the user-selected color and scheme type from the form inputs. It then makes a GET request to thecolorapi.com, passing the selected color and scheme type as parameters. The API returns a set of colors that match the provided scheme type, based on the selected color. The returned colors are stored in an array, and the function loops over each color to generate HTML elements dynamically. Each color is displayed as a colored shape with its corresponding hexadecimal value.', 
      techStack: 'JavaScript, HTML, CSS, Fetch API, thecolorapi.com API.',
      liveLink: 'https://rainbow-biscuit-c760c0.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Color-Scheme-Generator',
    },
    {
      id: 12,
      image: '../img/restaurant-menu.jpg',
      name: 'Food Ordering Site',
      intro: 'The Food Ordering Site is an online platform that allows users to browse and order various food items. Users can view the menu, add items to their order, and complete the checkout process. The site provides a user-friendly interface to select food items, track the order, and make payments. ',
      description: ' The Food Ordering Site offers a diverse menu of delicious food items. Users can add items to their order with the ability to increase or decrease quantities. The site dynamically updates the order total and displays the selected items for review. Upon completing the order, users receive a confirmation message with the estimated delivery time.', 
      techStack: 'JavaScript, HTML, CSS, Fetch API, event listeners, DOM manipulation',
      liveLink: 'https://order-food-items.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Food-Ordering-Site',
    },
    {
      id: 13,
      image: '../img/twitter.jpg',
      name: 'Twitter Frontend Clone',
      intro: 'The Twitter Frontend Clone is a web application that replicates the user interface and functionality of Twitter. Users can view a feed of tweets, interact with them by liking, retweeting, and replying, as well as post their own tweets.',
      description: 'The Twitter Frontend Clone offers a seamless experience of browsing tweets and engaging with the content. Users can like tweets, retweet them, and view replies. The clone also enables users to compose and post their own tweets, contributing to the interactive and dynamic nature of the platform. The clone provides a familiar and intuitive interface that resembles the core features of Twitter', 
      techStack: 'JavaScript, HTML, CSS, Fetch API, uuid ',
      liveLink: 'https://helpful-panda-1d5db6.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/twitter_clone',
    },
    {
      id: 14,
      image: '../img/tagurl.png',
      name: 'TagURL - Browser Extension',
      intro: 'The TagURL project allows users to save and organize their favorite website URLs along with associated tags. It provides a simple interface to save URLs, add tags, and remove saved entries. Users can also delete all saved data at once.',
      description: 'The project is built as a browser extension using HTML, CSS, and JavaScript. It leverages the Chrome Extension API (chrome.tabs.query) to capture the active tab"s URL and the user"s input for the associated tag. The saved URL and tag are stored as an object in the myLeads array, which is then stored in the browser"s local storage using localStorage.setItem(). The saved entries are rendered on the page, displaying the URL, tag, and a remove button for each entry. Users can remove individual entries by clicking the "Remove" button, which updates the myLeads array and local storage accordingly. Additionally, users can delete all saved data by double-clicking the "Delete All" button.', 
      techStack: 'JavaScript, HTML, CSS, Chrome Extension API',
      liveLink: 'https://helpful-panda-1d5db6.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/TagURL',
    },
    {
      id: 15,
      image: '../img/movie_watchlist.jpg',
      name: 'Movie Watchlist',
      intro: 'This Movie Watchlist project allows users to search for movies using the Open Movie Database (OMDb) API and add them to their watchlist. It provides information about the movies such as title, poster, IMDb rating, runtime, genre, and plot. Users can add movies to their watchlist and remove them if desired.',
      description: 'The project is built using HTML, CSS, and JavaScript. It utilizes the OMDb API to fetch movie data based on user search input. The fetched movie data is then stored in the moviesArray and rendered on the page. The user can add movies to their watchlist by clicking the "Add to Watchlist" button, and the movie is stored in the watchlistArray and in the browser"s local storage. If a movie is already in the watchlist, the user is alerted with a message. The user can also remove movies from the watchlist by clicking the "Remove from Watchlist" button, which updates the watchlistArray and local storage accordingly.', 
      techStack: 'JavaScript, HTML, CSS, OMDb API API ',
      liveLink: 'https://remarkable-7d47ea.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/Movie_Watchlist',
    },
    {
      id: 16,
      image: '../img/learning_journal.jpg',
      name: 'Learning Journal',
      intro: 'portfolio styled journal replete with blogs and portfolio',
      description: ' The HTML structure consists of a head section containing the document title, CSS stylesheets, and fonts. The body section includes a header with a navigation menu, a featured article with an image, title, and content, and a main section with recent articles displayed in a container. The main section also includes a sidebar with widgets displaying information about the author and projects. Finally, a footer is present at the bottom of the page with copyright information.', 
      techStack: ' HTML, CSS,  Google Fonts (Quicksand), static web pages.',
      liveLink: 'https://learning-journal-aside.netlify.app/',
      githubLink: 'https://github.com/kamlesh-21/my-learning-journal',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <header className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Kamlesh Kumar
          {/* <img
                src="./img/kamnlesh2.png" 
                alt="Kamlesh Kumar"
                className="h-18 object-fill"
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
        {/* <section id="contact" className="bg-blue-700 text-white p-12 rounded-lg shadow-lg mb-8">
  <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2> */}
  {/* <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"> */}

    {/* Contact Details */}
    {/* <div className="w-full">
      {/* <p className="text-xl mb-4">Feel free to reach out!</p>
      <p className="text-lg mb-4">Mobile: <span className="font-bold">+91 1234567890</span></p>
      <p className="text-lg mb-4">Email: <span className="font-bold">kamlesh@example.com</span></p>
      <p className="text-lg">
        For a more detailed discussion, visit our <a href="https://calendly.com" className="text-yellow-400">Calendly link</a> to schedule a free consultation!
      </p>
    </div> */}
  <section id="contact">
  <ContactForm />
  </section>
    {/* <form 
      action="https://formspree.io/f/{your-form-id}" 
      method="POST" 
      className="w-full bg-white p-8 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
        <input 
          id="name" 
          type="text" 
          name="name" 
          className="w-full p-3 border border-gray-300 rounded-lg" 
          placeholder="Your Name" 
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
        <input 
          id="email" 
          type="email" 
          name="email" 
          className="w-full p-3 border border-gray-300 rounded-lg" 
          placeholder="Your Email" 
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-semibold">Phone (optional)</label>
        <input 
          id="phone" 
          type="text" 
          name="phone" 
          className="w-full p-3 border border-gray-300 rounded-lg" 
          placeholder="Your Phone (optional)" 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="4" 
          className="w-full p-3 border border-gray-300 rounded-lg" 
          placeholder="Your Message" 
          required
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full bg-yellow-500 text-blue-900 py-3 rounded-lg font-semibold hover:bg-yellow-600"
      >
        Send Message
      </button>
    </form> */}
  {/* </div> */}
{/* </section> */}



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