
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-grotesk">
          About <span className="text-vermilion">Me</span>
        </h2>
        <div className="flex justify-center">
          <div className="text-center max-w-2xl">
            <p className="text-base md:text-lg text-light-gray mb-6">
              Fresh graduate in Information Systems from Universitas Indonesia with hands-on experience in project execution, stakeholder coordination, and digital operations across banking tech.
            </p>
            <p className="text-base md:text-lg text-light-gray mb-6">
              Driven by a passion for transforming ideas into measurable results through structured planning, collaboration, and analytical problem-solving.
            </p>
            <div className="mt-8 p-6 glass-card rounded-lg">
              <h3 className="font-semibold text-lg text-white mb-3">Currently seeking opportunities in:</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-dark-card border border-border-gray text-vermilion text-sm font-medium px-4 py-2 rounded-full">IT Risk Management</span>
                <span className="bg-dark-card border border-border-gray text-vermilion text-sm font-medium px-4 py-2 rounded-full">Project Management</span>
                <span className="bg-dark-card border border-border-gray text-vermilion text-sm font-medium px-4 py-2 rounded-full">Product Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
