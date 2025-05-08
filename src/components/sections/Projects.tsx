import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Calendar, Wrench, ArrowUpRight, Github, ChevronLeft, ChevronRight, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const animation = useScrollAnimation({ 
    animationType: 'fade-in'
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval: number;
    
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const projects = [
    {
      title: "CROP-PREDICTION",
      date: "Dec 2024",
      tools: [
        { name: "Python", icon: <Code className="w-4 h-4" /> },
        { name: "Scikit-Learn", icon: <Code className="w-4 h-4" /> },
        { name: "TensorFlow", icon: <Code className="w-4 h-4" /> },
        { name: "FastAPI", icon: <Code className="w-4 h-4" /> },
        { name: "PostgreSQL", icon: <Code className="w-4 h-4" /> }
      ],
      github: "https://github.com/santhoshkumaritla/CROP-PREDICTION",
      description: [
        "Engineered an advanced ML model achieving 95% accuracy in crop yield predictions",
        "Implemented ensemble learning with Random Forest and XGBoost for robust predictions",
        "Developed RESTful API with FastAPI serving 1000+ daily predictions",
        "Integrated real-time weather data and soil analysis for precise recommendations"
      ]
    },
    {
      title: "AI-Powered CRM System",
      date: "Feb 2025",
      tools: [
        { name: "Python", icon: <Code className="w-4 h-4" /> },
        { name: "Flask", icon: <Code className="w-4 h-4" /> },
        { name: "MongoDB", icon: <Code className="w-4 h-4" /> },
        { name: "Google Gemini API", icon: <Code className="w-4 h-4" /> },
        { name: "Firebase", icon: <Code className="w-4 h-4" /> }
      ],
      github: "https://github.com/santhoshkumaritla/CRM",
      description: [
        "Created AI chatbot for personalized product recommendations",
        "Implemented Firebase authentication for secure user login",
        "Increased customer engagement by 30%"
      ]
    },
    {
      title: "Virtual Health Assistant",
      date: "March 2025",
      tools: [
        { name: "AI Models", icon: <Code className="w-4 h-4" /> },
        { name: "Wearable Integration", icon: <Code className="w-4 h-4" /> },
        { name: "Flask", icon: <Code className="w-4 h-4" /> },
        { name: "TensorFlow", icon: <Code className="w-4 h-4" /> }
      ],
      github: "https://github.com/santhoshkumaritla/Health-Assistant",
      description: [
        "Developed healthcare solution for medical insights and recommendations",
        "Integrated wearable devices for health monitoring",
        "Implemented symptom analysis and virtual consultations"
      ]
    },
    {
      title: "xRAY-AnaLyzer",
      date: "April 2025",
      tools: [
        { name: "Python", icon: <Code className="w-4 h-4" /> },
        { name: "OpenCV", icon: <Code className="w-4 h-4" /> },
        { name: "TensorFlow", icon: <Code className="w-4 h-4" /> },
        { name: "Keras", icon: <Code className="w-4 h-4" /> },
        { name: "Flask", icon: <Code className="w-4 h-4" /> }
      ],
      github: "https://github.com/santhoshkumaritla/xRAY-AnaLyzer",
      description: [
        "Developed AI-based tool for automated X-ray image analysis",
        "Integrated TensorFlow and OpenCV for image processing",
        "Built Flask web application for easy deployment"
      ]
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + projects.length) % projects.length);
  };
  
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-12 px-4">
      <div 
        ref={animation.ref}
        className={`max-w-6xl w-full ${animation.animationClasses}`}
      >
        <div className="relative">
          {/* Background Accents */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/3 rounded-full blur-3xl animate-float" 
               style={{ animationDuration: '8s' }} />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-500/3 rounded-full blur-3xl animate-float" 
               style={{ animationDuration: '10s', animationDelay: '1s' }} />

          {/* Content */}
          <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-900/95 backdrop-blur-xl rounded-xl border border-slate-800/50 p-5 lg:p-8 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
            <div className="space-y-8">
              {/* Section Header */}
              <div className="text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-100 via-sky-200 to-indigo-200 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
              </div>

              {/* Project Carousel */}
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 group relative bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300"
                      >
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-slate-200 group-hover:text-sky-300 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <button 
                            onClick={() => window.open(project.github, '_blank')}
                            className="p-2 rounded-full bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-colors duration-300"
                          >
                            <Github className="w-5 h-5 text-slate-400 hover:text-sky-400" />
                          </button>
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>

                        {/* Tools */}
                        <div className="mb-4">
                          <div className="flex items-center gap-1.5 mb-2">
                            <Wrench className="w-4 h-4 text-sky-400" />
                            <span className="text-slate-300 text-sm">Technologies Used</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, idx) => (
                              <div
                                key={idx}
                                className="group bg-slate-700/30 rounded-lg p-2 border border-slate-600/50 hover:border-slate-500/50 hover:bg-slate-700/50 transition-all duration-300"
                              >
                                <div className="flex items-center gap-2">
                                  <div className="p-1 rounded-lg bg-slate-600/50 text-slate-300 border border-slate-500/50">
                                    {tool.icon}
                                  </div>
                                  <span className="text-xs font-medium text-slate-200 group-hover:text-slate-100 transition-colors duration-300">
                                    {tool.name}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2 text-slate-300 text-sm">
                          {project.description.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-sky-400">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg blur transition-opacity duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevProject}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-colors duration-300"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-400 hover:text-sky-400" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-colors duration-300"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5 text-slate-400 hover:text-sky-400" />
                </button>

                {/* Project Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-sky-400 w-4' 
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;