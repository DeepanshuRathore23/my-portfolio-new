import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Erudite World School',
      description: 'A comprehensive school website developed for a client.',
      link: 'https://theeruditeworldschool.com',
      type: 'Client Project',
    },
    {
      title: 'Electronic Junction',
      description: 'E-commerce website for electronic products.',
      link: 'https://electronicjunction.netlify.app',
      type: 'Client Project',
    },
    {
      title: 'H.S Electronics',
      description: 'An Electronic Startup Website',
      link: 'https://hsconnect.in',
      // github: 'https://github.com/DeepanshuRathore23/Text-to-Audio_Convertor',
      type: 'Client Project',
    },
    {
      title: 'University ERP',
      description: 'University Management Application.',
      link: 'https://university-erp.netlify.app/',
      github: 'https://github.com/DeepanshuRathore23/College-Erp-System',
      type: 'Personal Project',
    },
    {
      title: 'Election D-App',
      description: 'A Decentralized election Application.',
      link: 'https://decentralized-elections.netlify.app/',
      github: 'https://github.com/DeepanshuRathore23/Decentralized-Voting-App',
      type: 'Personal Project',
    },
  ];

  return (
    <section id="projects" className="py-20 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4" /> Visit Site
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;