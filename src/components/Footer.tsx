import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-light dark:bg-secondary-dark text-text-dark dark:text-text-light py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 YourName. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;