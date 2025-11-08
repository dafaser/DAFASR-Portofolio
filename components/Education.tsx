
import React from 'react';
import { UniversityIcon } from './icons';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-dark-card">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-grotesk">Education</h2>
        <div className="max-w-3xl mx-auto glass-card p-8 rounded-xl shadow-lg border border-border-gray">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-vermilion/10 rounded-full">
                <UniversityIcon className="w-8 h-8 text-vermilion" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">Universitas Indonesia</h3>
          <p className="text-vermilion font-medium mt-1">Bachelor’s Degree, Computer Science (2021–2025)</p>
          <hr className="my-6 border-border-gray" />
          <p className="text-light-gray italic">
            <strong>Thesis:</strong> “Examining the Effect of Dark Patterns Deception on Repurchase Intention in Shopee: The Role of Trust Transfer and Perceived Effectiveness of E-Commerce Institutional Mechanisms (PEEIM)”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;