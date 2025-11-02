import React from 'react';
import { WebDevIcon, WebDesignIcon, MobileDevIcon, NotaryIcon, WhatsAppIcon } from './icons';

const servicesData = [
    { title: "Web Development", icon: <WebDevIcon /> },
    { title: "Web Design", icon: <WebDesignIcon /> },
    { title: "Mobile App Development", icon: <MobileDevIcon /> },
    { title: "Notary Services", icon: <NotaryIcon /> },
    { title: "Lawyer Consultation", icon: <NotaryIcon /> },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-grotesk">What I Can Help You With</h2>
        <p className="text-light-gray mb-12 max-w-2xl mx-auto">Offering a diverse range of services to bring your ideas to life.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <div key={index} className="glass-card p-8 rounded-xl flex flex-col items-center group transition-all duration-300 hover:border-vermilion hover:shadow-glow transform hover:-translate-y-2">
              <div className="w-16 h-16 text-vermilion mb-4 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            </div>
          ))}
        </div>
        <a href="https://wa.me/6285155060832" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-vermilion text-white font-semibold rounded-lg shadow-glow hover:bg-neon-accent transition-all duration-300 transform hover:scale-105">
          <WhatsAppIcon /> Discuss Your Needs
        </a>
      </div>
    </section>
  );
};

export default Services;