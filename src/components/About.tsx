import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary-light dark:bg-secondary-dark text-custom-inverse">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">
            With over 10 years of experience in web development, I specialize in creating robust and scalable web applications using PHP, CodeIgniter, and Drupal. My passion lies in crafting efficient, user-friendly solutions that meet and exceed client expectations.
          </p>
          <p>
            Throughout my career, I've honed my skills in both front-end and back-end development, with a particular focus on content management systems and custom web applications. I thrive on challenges and continuously stay updated with the latest industry trends and technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;