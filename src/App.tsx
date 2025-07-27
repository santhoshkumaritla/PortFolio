import React from 'react';
import StarryBackground from './components/StarryBackground';
import Navbar from './components/Navbar';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';

function App() {
  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      
      <div className="relative z-10">
      <Navbar />
      
        <main className="relative flex flex-col gap-y-24">
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      <footer className="py-6 text-center text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;