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
      </div>
    </section>
  );
};

export default Work;
