import React from 'react';
import { Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 text-center bg-custom">
      <div className="container mx-auto px-4">
        <Terminal size={64} className="mx-auto mb-6 text-primary-light dark:text-primary-dark" />
        <h1 className="text-5xl font-bold mb-4">YourName</h1>
        <p className="text-2xl mb-8">Web Developer & Drupal Specialist</p>
        <a href="#contact" className="bg-primary-light dark:bg-primary-dark text-text-dark dark:text-text-light font-bold py-3 px-6 rounded-full transition-colors hover:bg-opacity-90">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;