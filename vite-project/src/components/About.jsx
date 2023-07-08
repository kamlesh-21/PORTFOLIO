import React from 'react';

const About = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Front-End Developer and cat lover from London</p>
      <div className="about-me__body">
        <p>I'm a web developer and designer based out of London, UK. I love building apps that solve real-world problems and are delightful to use. My specialties include TypeScript, React JS, Tailwind CSS, and Styled Components.</p>
        <p>My background is in teaching and marketing, and I have a bachelor's degree in English from Kings College. I also have five adorable cats.</p>
      </div>
      <img src="img/dev-jane-02.jpg" alt="Jane leaning against a bus" className="about-me__img" />
    </section>
  );
};

export default About;
