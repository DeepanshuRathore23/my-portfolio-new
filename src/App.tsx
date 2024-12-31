import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <footer className="bg-gray-50 dark:bg-gray-800 py-8 transition-colors">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
            <p>© {new Date().getFullYear()} Deepanshu Rathore. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;