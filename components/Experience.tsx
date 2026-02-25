import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

const experienceData = [
  {
    company: "PT Bank Rakyat Indonesia",
    role: "BRIlian Future Leader Program (BFLP) Risk Management",
    duration: "Feb 2026–Present",
    tasks: []
  },
  {
    company: "PT Bank Mega",
    role: "Operasional Risk Management Specialist Intern",
    duration: "Nov 2025–Jan 2026",
    tasks: [
      "Developed the Business Requirement Document (BRD) for the Business Continuity Plan (BCP) module within the Operational Risk Web Links (OWL) system.",
      "Covered end-to-end functional flows, user journeys (UCC–Approval–ORMG–BCM), system integration requirements, approval workflow logic, and compliance-aligned BIA/RTO/RPO structures.",
      "Conducted analytical reviews of Bank Mega’s operational risk management reports submitted to the OJK."
    ]
  },
  {
    company: "PT Bank Mandiri",
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

const ExperienceCard: React.FC<typeof experienceData[0]> = ({ company, role, duration, tasks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasTasks = tasks.length > 0;

  return (
    <div 
      className={`glass-card rounded-xl p-6 transition-all duration-300 hover:border-vermilion hover:shadow-glow transform hover:-translate-y-1 ${hasTasks ? 'cursor-pointer' : ''}`}
      onClick={() => hasTasks && setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white">{company}</h3>
          <p className="text-vermilion font-semibold">{role}</p>
        </div>
        <div className="flex flex-col items-end ml-4">
          <span className="text-sm text-light-gray whitespace-nowrap mb-2">{duration}</span>
          {hasTasks && (
            <ChevronDownIcon 
              className={`w-5 h-5 text-vermilion transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            />
          )}
        </div>
      </div>
      
      {hasTasks && (
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="list-disc list-inside space-y-2 text-light-gray border-t border-border-gray pt-4">
            {tasks.map((task, index) => (
              <li key={index} className="text-sm md:text-base leading-relaxed">{task}</li>
            ))}
          </ul>
        </div>
      )}
      
      {hasTasks && !isOpen && (
        <p className="text-[10px] text-light-gray/40 mt-2 italic text-right">Click to see details</p>
      )}
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-grotesk reveal">Experience</h2>
        <p className="text-center text-light-gray mb-12 reveal">My professional journey and key contributions.</p>
        <div className="space-y-8 relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border-gray hidden lg:block reveal"></div>
          {experienceData.map((exp, index) => (
            <div key={index} className="lg:w-full lg:mx-auto reveal">
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;