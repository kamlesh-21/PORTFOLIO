// import React from 'react';
// import { FaGithub, FaLink } from 'react-icons/fa';

// const Projects = ({ projects }) => {
//   return (
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-8">My Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project) => (
//           <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
//               <p className="text-gray-600 mb-4">{project.intro}</p>
//               <p className="mb-4">{project.description}</p>
//               <div className="flex justify-between items-center">
//                 <div className="flex space-x-2">
//                   <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
//                     <FaGithub size={24} className="text-gray-600 hover:text-gray-800" />
//                   </a>
//                   {project.liveLink && (
//                     <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
//                       <FaLink size={24} className="text-gray-600 hover:text-gray-800" />
//                     </a>
//                   )}
//                 </div>
//                 <p className="text-gray-600">{project.techStack}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My projects</h2>
      <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
      <div className="portfolio">
        {/* Portfolio items */}
        <Link to="/work/1" className="portfolio__item">
          <img src="img/oldagram-square.png" alt="" className="portfolio__img" />
        </Link>
        <Link to="/work/2" className="portfolio__item">
         <img src="img/tenzies.jpg" alt="" className="portfolio__img" />
        </Link>
        <Link to="/work/3" className="portfolio__item">
          <img src="img/password-generator.jpg" alt="" className="portfolio__img" />
        </Link>
        <Link to="/work/4" className="portfolio__item">
          <img src="img/meme-generator.jpg" alt="" className="portfolio__img" />
        </Link>
        <Link to="/work/5" className="portfolio__item">
          <img src="img/personal-dashboard.png" alt="" className="portfolio__img" />
        </Link>
        <Link to="/work/6" className="portfolio__item">
          <img src="img/experiences.png" alt="" className="portfolio__img" />
        </Link>
        <Link to="/work/7" className="portfolio__item">
          <img src="img/color-picker-main.jpg" alt="" className="portfolio__img" />
        </Link>
        <Link to="/work/8" className="portfolio__item">
          <img src="img/restaurant-menu.jpg" alt="" className="portfolio__img" />
        </Link>
        <Link to="/work/9" className="portfolio__item">
          <img src="img/twitter.jpg" alt="" className="portfolio__img" />
        </Link>
        <Link to="/work/10" className="portfolio__item">
          <img src="img/tagurl.png" alt="" className="portfolio__img" />
        </Link>
        <Link to="/work/11" className="portfolio__item">
          <img src="img/movie_watchlist.jpg" alt="" className="portfolio__img" />
        </Link>
        <Link to="/work/12" className="portfolio__item">
          <img src="img/learning_journal.jpg" alt="" className="portfolio__img" />
        </Link>
      </div>
    </section>
  );
};

export default Work;