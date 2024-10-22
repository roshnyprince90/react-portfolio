import React from 'react';
import { CheckCircle } from 'lucide-react';

const skills = [
  'PHP', 'CodeIgniter', 'Drupal', 'JavaScript', 'React', 'MySQL',
  'HTML5', 'CSS3', 'Git', 'RESTful APIs', 'Agile Methodologies', 'Performance Optimization'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-custom">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center bg-secondary-light dark:bg-secondary-dark p-4 rounded-lg text-custom-inverse">
              <CheckCircle size={20} className="mr-2 text-primary-light dark:text-primary-dark" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;