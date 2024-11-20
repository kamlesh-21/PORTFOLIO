import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Kamlesh Kumar</h1>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
          <p className="text-gray-600">
            I am a Business Generalist with over 18 years of experience in diverse sectors, including hospitality, technology, and consulting. I have a unique blend of expertise in hotel management, strategic planning, and digital transformation, enabling me to drive business growth and deliver innovative solutions.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <ul className="list-disc pl-6">
            <li>LLB (Hons), Law Graduate - Dhanbad Law College, BBMKU (2021-2024)</li>
            <li>B.Sc in Hotel Management - IHM, Mumbai, NCHMCT (2002-2005)</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <ul className="list-disc pl-6">
            <li>CS50x - Introduction to Computer Science, Harvard University & edX (2021-2022)</li>
            <li>Front-End Development, Scrimba (2021-2023)</li>
            <li>React and Advanced React JS, Scrimba (2023)</li>
            <li>AI Engineering, Scrimba (2023)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Technical and Business Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Technical Skills</h3>
              <ul className="list-disc pl-6">
                <li>JavaScript, Python, Django, Flask</li>
                <li>React JS, Node.js, Express.js</li>
                <li>MongoDB, SQLite</li>
                <li>Git, API Integrations, Headless CMS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Business Skills</h3>
              <ul className="list-disc pl-6">
                <li>Hotel Management</li>
                <li>Sales and Marketing Strategy</li>
                <li>Team Leadership and Management</li>
                <li>Strategic Planning and Business Development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">AI/ML Skills</h3>
              <ul className="list-disc pl-6">
                <li>Generative AI</li>
                <li>RAG methodologies</li>
                <li>Embeddings</li>
                <li>Fine-tuning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
