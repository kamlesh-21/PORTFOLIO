import React from 'react';
import ViteImage from "/img/vite.svg";

const Services = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Frontend Development Services:</h3>
          <p>As a versatile Frontend Developer, I bring a wealth of expertise to the table. My primary focus revolves around crafting captivating user experiences using the latest technologies.</p>
          <p>With proficiency in <img className="vite-logo" src={ViteImage} alt="Vite logo" /> , I can create dynamic and interactive interfaces that leave a lasting impression on users. Beyond React, I possess a solid grip on the fundamentals of web development, including HTML, CSS, and JavaScript.</p>
          <p>Additionally, I have experience working with Rest APIs, enabling seamless integration of data and functionalities. If you're looking for a skilled and innovative frontend developer who can bring your ideas to life, I am here to exceed your expectations.</p>
        </div>
        <div className="service">
          <h3>Marketing Services:</h3>
          <p>With over a decade of experience as a highly proficient Marketeer, I offer top-notch marketing services to boost your brand's presence and drive growth. My expertise lies in:</p>
          <ul>
            <li>ATL, BTL, and digital marketing</li>
            <li>Understanding lead funnels, consumer buying behavior, segmentation, and creating user personas</li>
            <li>Aiding in sales planning, leveraging marketing insights to align efforts with sales objectives</li>
            <li>Product marketing to present your offerings in the most compelling way</li>
          </ul>
          <p>As a forward-thinking marketer, I am always on the lookout for emerging trends and innovative techniques to ensure your brand stays ahead of the competition. Let's collaborate to unlock your brand's potential and achieve remarkable marketing results.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
