import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'ReactJS', level: 'Advanced' },
    { name: 'NextJS', level: 'Intermediate' },
    { name: 'Git & GitHub', level: 'Advanced' },
    { name: 'Solidity', level: 'Intermediate' },
    { name: 'Truffle', level: 'Intermediate' },
    { name: 'Web3.js', level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;