import React from 'react';
import SkillCards from './SkillCards';

export default function Intro() {
  return (
    <>
      <section className="intro" id="home">
        <h1 class="section__title section__title--intro">
          Hi, I am <strong>Kamlesh Kumar</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">Front-End Developer</p>
        <img src="img/kamleshkumar_three.png" alt="portrait picture of kamlesh" class="intro__img" />
      </section>
      <div className="skill-cards-container">
          <SkillCards />
      </div>
    </>
 

  );
};