import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Calendar, Wrench, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const animation = useScrollAnimation({ animationType: 'fade-in' });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      title: "CROP-PREDICTION",
      date: "Dec 2024",
      image: "/images/crop-prediction.jpeg",
      tools: ["Python", "Scikit-Learn", "TensorFlow", "FastAPI", "PostgreSQL"],
      github: "https://github.com/santhoshkumaritla/CROP-PREDICTION",
      description: [
        "Achieved 95% accuracy in crop yield predictions using ML.",
        "Implemented Random Forest & XGBoost for robust predictions.",
        "Built FastAPI backend serving 1000+ daily predictions.",
        "Integrated real-time weather & soil data."
      ]
    },
    {
      title: "AI-Powered CRM System",
      date: "Feb 2025",
      image: "/images/CRM.jpeg",
      tools: ["Python", "Flask", "MongoDB", "Google Gemini API", "Firebase"],
      github: "https://github.com/santhoshkumaritla/CRM",
      description: [
        "AI chatbot for personalized recommendations.",
        "Secure user login with Firebase authentication.",
        "Boosted engagement by 30%."
      ]
    },
    {
      title: "Virtual Health Assistant",
      date: "Mar 2025",
      image: "/images/Virtual-Health-Assist.jpeg",
      tools: ["AI Models", "Wearable Integration", "Flask", "TensorFlow"],
      github: "https://github.com/santhoshkumaritla/Health-Assistant",
      description: [
        "Healthcare insights and recommendations.",
        "Wearable integration for real-time monitoring.",
        "Symptom analysis & virtual consultations."
      ]
    },
    {
      title: "xRAY-AnaLyzer",
      date: "Apr 2025",
      image: "/images/X-ray.jpeg",
      tools: ["Python", "OpenCV", "TensorFlow", "Keras", "Flask"],
      github: "https://github.com/santhoshkumaritla/xRAY-AnaLyzer",
      description: [
        "AI-based tool for automated X-ray analysis.",
        "TensorFlow & OpenCV for image processing.",
        "Flask app for easy deployment."
      ]
    },
    {
      title: "TaskHub-Project",
      date: "2025",
      image: "/images/TaskHub.jpeg",
      tools: ["Tailwind", "React", "Node.js", "Express", "MongoDB", "Firebase"],
      github: "https://github.com/santhoshkumaritla/TaskHub-Project",
      description: [
        "Full-stack task management platform.",
        "Real-time updates & user-friendly dashboards.",
        "Scalable architecture with Docker."
      ]
    },
    {
      title: "GitHub-AgentTask",
      date: "2025",
      image: "public/images/git agent.jpeg",
      tools: ["Python", "Flask", "GitHub API"],
      github: "https://github.com/santhoshkumaritla/GitHub-AgentTask",
      description: [
        "Automated agent for managing GitHub tasks and repositories.",
        "Implements custom workflows using Python and the GitHub API.",
        "Streamlines project management and automates repetitive actions."
      ]
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-12 px-4">
      <div ref={animation.ref} className={`max-w-6xl w-full ${animation.animationClasses}`}>
        <div className="relative">
          {/* Background Effects */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-float" />

          {/* Container */}
          <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-900/95 backdrop-blur-xl rounded-xl border border-slate-800/50 p-6 lg:p-10 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-100 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>

            {/* Carousel */}
            <div
              className="relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 flex flex-col md:flex-row gap-8 bg-slate-800/40 bg-clip-padding backdrop-blur-xl rounded-2xl p-6 border border-slate-700/60 shadow-xl relative group transition-all duration-300 hover:shadow-2xl hover:border-sky-400/40 hover:bg-slate-800/60"
                    >
                      {/* Gradient Accent Bar */}
                      <div className="hidden md:block absolute left-0 top-6 bottom-6 w-2 rounded-full bg-gradient-to-b from-sky-400 via-indigo-400 to-purple-400 opacity-80" />
                      {/* GitHub Icon at Corner */}
                      <button
                        onClick={() => window.open(project.github, '_blank')}
                        className="absolute top-4 right-4 p-2 rounded-full bg-slate-700/60 hover:bg-sky-700 transition z-10 shadow-md border border-sky-400/30"
                      >
                        <Github className="w-5 h-5 text-sky-400" />
                      </button>
                      {/* Text */}
                      <div className="flex-1 z-10">
                        <h3 className="text-2xl font-bold text-slate-100 mb-3 tracking-tight drop-shadow-sm">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-400 mb-4">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{project.date}</span>
                        </div>
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Wrench className="w-4 h-4 text-sky-400" />
                            <span className="text-slate-300 text-sm font-semibold">Technologies</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-sky-900/30 text-sky-200 rounded-full text-xs font-medium border border-sky-700/30 shadow-sm hover:bg-sky-800/50 transition"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ul className="space-y-2 text-slate-200 text-sm">
                          {project.description.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-sky-400">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Image */}
                      <div className="md:w-80 flex-shrink-0 z-5 flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-56 object-cover rounded-xl border-2 border-sky-400/20 shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                        />
                      </div>
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 rounded-2xl blur-lg transition-opacity duration-500 pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/70 hover:bg-slate-700 transition"
              >
                <ChevronLeft className="w-6 h-6 text-sky-300" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/70 hover:bg-slate-700 transition"
              >
                <ChevronRight className="w-6 h-6 text-sky-300" />
              </button>

              {/* Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full ${
                      i === currentIndex ? 'bg-sky-400 w-4' : 'bg-slate-600 hover:bg-slate-500'
                    } transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
