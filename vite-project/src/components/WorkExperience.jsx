import React from 'react';

const WorkExperience = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Sales and Marketing Consultant</h2>
          <p className="text-gray-600 mb-2">Remote | May 2020 -- Present</p>
          <ul className="list-disc pl-6">
            <li>Provided consulting for customer segmentation, lead generation, sales planning, and social media management.</li>
            <li>Developed product marketing collateral, including corporate presentations, pitch decks, brochures, and newsletters.</li>
            <li>Created static posts, infographics, and blogs across LinkedIn, Twitter, Facebook, Instagram, Medium, and Quora.</li>
            <li>Enhanced SEO and executed multi-channel digital marketing campaigns, including LinkedIn lead generation, newsletters, and email marketing.</li>
            <li>Collaborated with startups (e.g., POSH consulting, EV battery analytics, SaaS, Fuel Delivery, Deeptech) to deliver metrics across the sales and marketing domains.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Program Manager</h2>
          <p className="text-gray-600 mb-2">TLC Relationship Management Pvt Ltd | Bangalore & Kolkata | Dec 2018 -- Apr 2020</p>
          <ul className="list-disc pl-6">
            <li>Managed a profit center team, overseeing Inside Sales Executives and operations staff.</li>
            <li>Acquired new customers via lead generation, inside sales, and corporate partnerships.</li>
            <li>Led recruitment, training, and team events while handling P&L and payroll.</li>
            <li>Developed and tracked monthly and annual budgets.</li>
          </ul>
        </div>
        {/* Add more work experience sections as needed */}
      </div>
    </div>
  );
};

export default WorkExperience;