
import React from 'react';

const skillsData = [
  { name: "Microsoft Office", label: "Microsoft Office Suite" },
  { name: "Google Workspace", label: "Google Docs, Sheets & Slides" },
  { name: "ChatGPT", label: "AI-Assisted Productivity" },
  { name: "Notion", label: "Notion Workspace & Docs" },
  { name: "Canva", label: "Graphic & Content Design" },
  { name: "ClickUp", label: "Project Management & Task Tracking" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-grotesk animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Skills & <span className="text-vermilion">Tools</span>
        </h2>
        <p className="text-light-gray mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Digital tools I use to build, organize, and create.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.name} 
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center group transition-all duration-300 hover:border-vermilion hover:shadow-glow transform hover:-translate-y-2 animate-fade-in-up min-h-[120px]"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-white text-center leading-tight">{skill.name}</h3>
              <p className="text-sm text-light-gray mt-2 text-center">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
