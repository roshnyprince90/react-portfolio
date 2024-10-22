import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully-featured e-commerce solution built with Drupal, featuring custom modules and integrations.',
    technologies: ['Drupal', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Content Management System',
    description: 'A bespoke CMS developed using CodeIgniter, tailored for a large media company.',
    technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery'],
  },
  {
    title: 'Real Estate Listing Portal',
    description: 'A comprehensive real estate platform with advanced search and filtering capabilities.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'PostgreSQL'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-secondary-light dark:bg-secondary-dark text-custom-inverse">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{project.title}</h3>
                <p className="text-text-light dark:text-text-dark mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary-light dark:bg-primary-dark text-text-dark dark:text-text-light px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center text-primary-light dark:text-primary-dark hover:underline">
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;