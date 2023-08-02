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
        <p> I'm a passionate web developer and designer based in India with expertise in React JS, JavaScript, Responsive Design, and Styled Components. Alongside a Certificate in Frontend Development, I've completed Harvard University's Introduction to Computer Science (CS50x). My professional background spans Hospitality Operations and Digital Marketing. As an IT and marketing consultant, I've assisted start-ups with web development and product marketing, enhancing user experience through content management and social media marketing.</p>
        <p> My expertise extends to the hospitality industry, where I have spent several years in various roles, including restaurant operations, event sales, hotel sales, and restaurant marketing. Furthermore, I have ventured into entrepreneurship with a b2b hotel and restaurant supplies drop-shipping firm, gaining valuable insights into content marketing and social media marketing.</p> 
        <p>Driven by an unwavering passion to learn and innovate, I'm determined to make a positive impact through web development, marketing, and tackling new challenges. My diverse skill set and entrepreneurial spirit enable me to thrive in the ever-changing digital landscape. Let's collaborate to achieve your business objectives and create exceptional user experiences.</p>
      </div>

      <a href="/CV_Kumar_ Front _End_Developer.docx" className="button-image" download>Download Resume</a>

    </section>
  );
};

export default About;
