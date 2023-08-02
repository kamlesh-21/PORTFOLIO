import React, { useState } from 'react';
import ViteImage from "/img/vite.svg";

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const backgroundImage = isFlipped ? 'url("./img/services-bg5.jpg")' : 'url("./img/services-bg7.jpg")';

  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <div className="about-me-section-two" style={{ backgroundImage }}>
        <h3 className="section__subtitle section__subtitle--work"> Crafting Compelling User Experiences with <img className="vite-logo" src={ViteImage} alt="Vite" />React JS</h3>
        <button className="button-image" onClick={handleFlip}>
          <div className="button-content">
            <img className="vite-logo" src={ViteImage} alt="Vite" />
            <span className="button-text">Flip the Image</span>
          </div>
        </button>
      </div>
      <div className="about-me__body">
        <p>I'm a passionate web developer and designer based in India. I have a knack for building apps that not only solve real-world problems but also provide delightful user experiences. My specialties include React JS, JavaScript, Responsive Design, and Styled Components.</p> 
        
        <p>I hold a Certificate in <strong>Frontend Development</strong>, specializing in React, and I've also completed the <strong>Introduction to Computer Science (CS50x)</strong>, an online CS program from <strong>Harvard</strong> University over the edX platform. My educational background includes a bachelor's degree in Hotel & Hospitality Management from IHM Mumbai, and strong professional experience in Hospitality Operations and Digital Marketing. Oh, and did I mention? I'm also a proud parent to two little kids.</p>
      </div>
      <a href="/CV_Kumar_ Front _End_Developer.docx" className="button-image" download>Download Resume</a>

    </section>
  );
};

export default About;
