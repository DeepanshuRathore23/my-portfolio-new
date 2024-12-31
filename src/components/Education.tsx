import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      year: '2022 - 2026',
      institution: 'Current CGPA: 7.67',
    },
    {
      degree: 'Class XII',
      year: '2022',
      institution: '75%',
    },
    {
      degree: 'Class X',
      year: '2020',
      institution: '91%',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">{edu.year}</p>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">
                    {edu.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;