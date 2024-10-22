import React from 'react';
import { Code } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark py-4 sticky top-0 z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code size={24} className="mr-2 text-primary-light dark:text-primary-dark" />
          <span className="text-xl font-bold">YourName</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li><a href="#about" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">Contact</a></li>
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;