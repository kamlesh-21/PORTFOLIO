import React from 'react';

export default function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Jane Smith</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">Front-End Developer</p>
      <img src="/img/dev-jane-01.jpg" alt="a picture of Jane Smith smiling" className="intro__img" />
    </section>
  );
};