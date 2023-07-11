import React, { useState } from 'react';

const SkillCards = () => {
  const [skills] = useState([
    { name: 'React JS', proficiency: 80, experience: '3 years', version: 'v18..2' },
    { name: 'JavaScript', proficiency: 90, experience: '3 years', version: 'ES6' },
    { name: 'HTML', proficiency: 95, experience: '5 years', version: 'HTML5' },
    { name: 'CSS', proficiency: 85, experience: '4 years', version: 'CSS3' },
    { name: 'UI/UX', proficiency: 80, experience: '3 years'},
    { name: 'API', proficiency: 75, experience: '3 years'},
    { name: 'Figma', proficiency: 45, experience: '2 years'},
    { name: 'SASS', proficiency: 45, experience: '1 years'},
    { name: 'GPT 3.5', proficiency: 85, experience: '> 1 year'},
    { name: 'Prompt', proficiency: 88, experience: '> 1 year', version: 'v8.1.1' },
    { name: 'Chatbot', proficiency: 65, experience: '> 1 years'},
    { name: 'Python', proficiency: 45, experience: '1 years'},
    { name: 'Flask', proficiency: 45, experience: '1 years'},
    { name: 'Redux', proficiency: 30, experience: '1 years', version: 'v8.1.1' },
    { name: "CDN's", proficiency: 70, experience: '2 years', version: 'v8.1.1' },
    { name: 'WordPress', proficiency: 70, experience: '4 years', version: 'v8.1.1' },
    { name: 'GIT', proficiency: 80, experience: '2 years', version: 'v8.1.1' },
    { name: 'Marketing', proficiency: 90, experience: '11 years'},

  ]);

  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardFlip = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter((cardIndex) => cardIndex !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <div className="skill-cards">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`skill-card ${flippedCards.includes(index) ? 'flipped' : ''}`}
          onClick={() => handleCardFlip(index)}
        >
          <div className="skill-card__front">
            <h3 className="skill-card__name">{skill.name}</h3>
          </div>
          <div className="skill-card__back">
            <h3 className="skill-card__name">{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.proficiency}%` }}></div>
            </div>
            <p className="skill-card__details">Experience: {skill.experience}</p>
            <p className="skill-card__details">Version: {skill.version}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
