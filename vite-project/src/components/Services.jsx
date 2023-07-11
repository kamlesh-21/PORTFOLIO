import React from 'react';

const Services = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Design</h3>
          <p>I strive to create beautiful and intuitive web apps, that incorporates intuitive navigation, clear messaging, and responsive layouts to ensure seamless interactions and an engaging user journey.</p>
        </div>
        <div className="service">
          <h3>Development</h3>
          <p>I am a versatile frontend developer with a specialty in React JS. I also have a solid grip on the fundamentals of web development using HTML, CSS, and JavaScript.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
