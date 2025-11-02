
import React from 'react';
import { LinkedInIcon, WhatsAppIcon, GithubIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg">
      <div className="container mx-auto px-6 py-8">
        <hr className="glowing-divider mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-light-gray text-sm mb-4 sm:mb-0">
            © 2025 Anandafa Syukur Rizky — Built with Tech & Empathy.
          </p>
          <div className="flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-vermilion transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/dafasr/" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-vermilion transition-colors">
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a href="https://wa.me/6285155060832" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-vermilion transition-colors">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
