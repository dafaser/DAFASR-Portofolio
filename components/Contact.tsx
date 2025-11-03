
import React from 'react';
import { LinkedInIcon, WhatsAppIcon, MailIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-card relative overflow-hidden">
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-vermilion/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-vermilion/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-grotesk">
          Get In <span className="text-vermilion">Touch</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <form action="mailto:anandafa.syukur@alumni.ui.ac.id" method="post" encType="text/plain" className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" className="w-full bg-dark-bg/50 border-2 border-border-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-vermilion focus:border-vermilion transition-all duration-300" required />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="Your Email" className="w-full bg-dark-bg/50 border-2 border-border-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-vermilion focus:border-vermilion transition-all duration-300" required />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows={5} placeholder="Your Message" className="w-full bg-dark-bg/50 border-2 border-border-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-vermilion focus:border-vermilion transition-all duration-300" required></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-vermilion text-white font-semibold rounded-lg shadow-glow hover:bg-neon-accent transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a href="tel:+6285155060832" className="flex items-center gap-4 text-light-gray hover:text-white transition-colors">
                <WhatsAppIcon />
                <span>0851-5506-0832</span>
              </a>
              <a href="mailto:anandafa.syukur@alumni.ui.ac.id" className="flex items-center gap-4 text-light-gray hover:text-white transition-colors">
                <MailIcon />
                <span>anandafa.syukur@alumni.ui.ac.id</span>
              </a>
              <a href="https://www.linkedin.com/in/dafasr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-light-gray hover:text-white transition-colors">
                <LinkedInIcon />
                <span>linkedin.com/in/dafasr</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;