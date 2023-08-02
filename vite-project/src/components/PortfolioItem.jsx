import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../ProjectData';
import {FaGithub} from 'react-icons/fa';


const PortfolioItem = () => {
  const { id } = useParams();

  // Find the project with matching ID from the projectData
  const project = projectData.find((project) => project.id === parseInt(id));

  // Handle case when project is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="portfolio-main">
      <section className="intro portfolio-intro">
        <h1 className="section__title section__title--intro">Project {id} : {project.name}</h1>
        <p className="section__subtitle section__subtitle--intro">{project.techStack}</p>
        <img src={project.image} alt="" className="intro__img" />
      </section>

      <div className="portfolio-item-individual">
        <div>
          <a className="" target="_blank" href={project.githubLink}>
            <i className="fab fa-github">{<FaGithub />}</i> GitHub Repo
          </a>
          <a className="" target="_blank" href={project.liveLink}>
            <i className="fas fa-eye"></i> Live version
          </a>
        </div>
        <p>
          {project.intro}
        </p>
        <p>
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;