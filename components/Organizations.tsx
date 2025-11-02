import React from 'react';
import { UsersIcon, CodeIcon, AwardIcon, PaletteIcon, UniversityIcon, MegaphoneIcon, ComputerDesktopIcon } from './icons';

interface Role {
  title: string;
  duration: string;
}

interface Org {
  name: string;
  roles: Role[];
  // FIX: Specify that the icon element can accept a className prop to satisfy TypeScript when using React.cloneElement.
  icon: React.ReactElement<{ className?: string }>;
}

const orgData: Org[] = [
  { 
    name: "COMPFEST", 
    roles: [
      { title: "Digital Marketing PIC", duration: "Dec 2022 – Dec 2023" },
      { title: "Digital Marketing Staff", duration: "Apr 2022 – Dec 2022" }
    ], 
    icon: <AwardIcon /> 
  },
  {
    name: "Pesta Rakyat Komputer",
    roles: [
      { title: "Strategic Marketing PIC", duration: "Jan 2023 – Dec 2023" }
    ],
    icon: <MegaphoneIcon />
  },
  {
    name: "Faculty of Computer Science, UI",
    roles: [
      { title: "Education Mentor (PMB)", duration: "Aug 2023 – Nov 2023" },
      { title: "Staff Liaison Officer (Open House)", duration: "Sep 2022 – Nov 2022" },
      { title: "Liaison Officer (Graduation)", duration: "Aug 2022 – Sep 2022" },
    ],
    icon: <UniversityIcon />
  },
  { 
    name: "UI Innovation War", 
    roles: [
      { title: "Sponsorship Staff", duration: "Jul 2021 – Dec 2021" }
    ], 
    icon: <AwardIcon /> 
  },
  { 
    name: "Stage of Art", 
    roles: [
      { title: "Sponsorship Staff", duration: "Sep 2021 – Dec 2021" }
    ], 
    icon: <AwardIcon /> 
  },
];

const membershipData = [
  { name: "Google Developer Student Club UI", icon: <CodeIcon /> },
  { name: "Brigade Universitas Indonesia", icon: <UsersIcon /> },
  { name: "Flocs Fasilkom UI", icon: <ComputerDesktopIcon /> },
];

const OrganizationCard: React.FC<Org> = ({ name, roles, icon }) => (
    <div className="glass-card rounded-xl p-6 flex items-start gap-5 transition-all duration-300 hover:border-vermilion hover:shadow-glow transform hover:-translate-y-2">
        <div className="flex-shrink-0 w-12 h-12 text-vermilion mt-1">
            {React.cloneElement(icon, { className: "w-full h-full" })}
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
            <div className="space-y-3">
                {roles.map((role, index) => (
                    <div key={index}>
                        <p className="font-semibold text-white">{role.title}</p>
                        <p className="text-sm text-light-gray">{role.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const Organizations: React.FC = () => {
  return (
    <section id="organizations" className="py-20 md:py-32 bg-dark-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-grotesk">
          Organization & <span className="text-vermilion">Volunteering</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {orgData.map((org, index) => (
                <OrganizationCard key={index} {...org} />
            ))}
        </div>

        <hr className="glowing-divider my-16" />

        <h3 className="text-2xl font-bold text-center mb-12 font-grotesk">Memberships</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-2xl mx-auto items-start">
            {membershipData.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 flex items-center justify-center glass-card rounded-full border-2 border-border-gray group-hover:border-vermilion group-hover:shadow-glow transition-all duration-300 mb-4">
                        <div className="text-vermilion w-10 h-10">{member.icon}</div>
                    </div>
                    <p className="font-semibold text-white leading-snug">{member.name}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Organizations;