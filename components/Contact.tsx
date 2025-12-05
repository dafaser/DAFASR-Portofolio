import React from 'react';
import { LinkedInIcon, WhatsAppIcon, MailIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-card relative overflow-hidden">
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-vermilion/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-vermilion/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-grotesk reveal">
          Get In <span className="text-vermilion">Touch</span>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
          {/* WhatsApp */}
          <a 
            href="https://wa.me/6285155060832" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 glass-card p-8 rounded-xl flex flex-col items-center justify-center group transition-all duration-300 hover:border-vermilion hover:shadow-glow transform hover:-translate-y-2 text-center reveal"
          >
            <div className="w-12 h-12 text-vermilion mb-4 transition-transform duration-300 group-hover:scale-110">
              <WhatsAppIcon className="w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-light-gray font-mono">0851-5506-0832</p>
          </a>

          {/* Email */}
          <a 
            href="mailto:anandafa.syukur@alumni.ui.ac.id" 
            className="flex-1 glass-card p-8 rounded-xl flex flex-col items-center justify-center group transition-all duration-300 hover:border-vermilion hover:shadow-glow transform hover:-translate-y-2 text-center reveal"
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="w-12 h-12 text-vermilion mb-4 transition-transform duration-300 group-hover:scale-110">
              <MailIcon className="w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-light-gray font-mono text-sm break-all">anandafa.syukur@alumni.ui.ac.id</p>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/dafasr/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 glass-card p-8 rounded-xl flex flex-col items-center justify-center group transition-all duration-300 hover:border-vermilion hover:shadow-glow transform hover:-translate-y-2 text-center reveal"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="w-12 h-12 text-vermilion mb-4 transition-transform duration-300 group-hover:scale-110">
              <LinkedInIcon className="w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-light-gray font-mono">/dafasr</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;