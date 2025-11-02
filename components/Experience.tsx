
import React from 'react';

const experienceData = [
  {
    company: "PT Bank Mandiri Tbk",
    role: "Business Continuity Management Intern",
    duration: "Sep–Dec 2024",
    tasks: [
      "Designed incident response workflows and Cyber Crisis Management Exercise materials.",
      "Created executive Rolebooks for IT/Ransomware crisis handling.",
      "Conducted SIT/UAT for Website Archer (internal BCM tool)."
    ]
  },
  {
    company: "Faculty of Computer Science UI",
    role: "Teaching Assistant",
    duration: "Jan–Jun 2024",
    tasks: [
      "Assisted 65 students in HCI course (UI/UX).",
      "Guided prototyping in Figma and usability testing.",
      "Managed grades and academic coordination via Google Workspace."
    ]
  },
  {
    company: "Dropicst Pte Ltd",
    role: "Marketing Intern",
    duration: "Dec 2022–Feb 2023",
    tasks: [
      "Conducted brand research, built email campaigns, and improved B2B lead generation.",
      "Used Apollo & Adapt.io for data-driven international marketing expansion."
    ]
  }
];

const ExperienceCard: React.FC<typeof experienceData[0]> = ({ company, role, duration, tasks }) => (
  <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-vermilion hover:shadow-glow transform hover:-translate-y-2">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-bold text-white">{company}</h3>
      <span className="text-sm text-light-gray flex-shrink-0 ml-4">{duration}</span>
    </div>
    <p className="text-vermilion font-semibold mb-4">{role}</p>
    <ul className="list-disc list-inside space-y-2 text-light-gray">
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-grotesk">Experience</h2>
        <p className="text-center text-light-gray mb-12">My professional journey and key contributions.</p>
        <div className="space-y-8 relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border-gray hidden lg:block"></div>
          {experienceData.map((exp, index) => (
            <div key={index} className="lg:w-full lg:mx-auto">
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
