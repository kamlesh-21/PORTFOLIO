import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioItem = () => {
  const { id } = useParams();

  return (
    <div>
      <section className="intro portfolio-intro">
        <h1 className="section__title section__title--intro">
          Project {id}
        </h1>
        <p className="section__subtitle section__subtitle--intro">HTML & CSS</p>
        <img src={`img/project-${id}.png`} alt="" className="intro__img" />
      </section>

      <div className="portfolio-item-individual">
        <div>
          <a className="" target="_blank" href="#"><i className="fab fa-github"></i> GitHub Repo</a>
          <a className="" target="_blank" href="#"><i className="fas fa-eye"></i> Live version</a>
        </div>
        <p>This is the main layout of Project {id}. It is built using vanilla CSS and HTML. It was built as a part of my portfolio to showcase my skills in web development.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ex a tellus rhoncus tempus vel id justo. Ut vel sem nec odio pretium bibendum.</p>
        <p>Quisque at nisi nulla. Sed faucibus tellus a mi scelerisque commodo. Donec non mauris vitae lorem sodales fermentum. Phasellus in turpis id turpis finibus elementum.</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
