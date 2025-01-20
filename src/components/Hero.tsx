import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 relative">
            <img
              src="/profile.jpeg"
              alt="Deepanshu Rathore"
              className="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            Deepanshu Rathore
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 transition-colors">
            D-App FullStack Developer & BTech Student
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-12 transition-colors">
            Passionate about building decentralized and user-friendly web experiences. Currently in my 3rd year of BTech, working as a freelance developer specializing in fullstack D-App development, with expertise in React, Solidity, and modern blockchain technologies.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;