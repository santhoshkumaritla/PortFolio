import React, { useEffect, useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Building2, Link, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const animation = useScrollAnimation({ 
    animationType: 'fade-in'
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience-container');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const experiences = [
    {
      company: "DevSecEngOops",
      role: "Software Engineer Intern",
      period: "Mar 2024 - Present",
      location: "Kondapur, Telangana, India",
      website: "https://www.devsecengops.com/",
      achievements: [
        "Created responsive web pages using HTML, CSS, JavaScript, and React, improving engagement by 30%",
        "Designed UI/UX with Figma, speeding up development process by 40%",
        "Analyzed user interactions to improve navigation and content usability",
        "Presented final designs to team, receiving appreciation for creative work"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-[80vh] flex items-center justify-center py-8 px-4 overflow-hidden">
      <div 
        ref={animation.ref}
        className={`max-w-6xl w-full ${animation.animationClasses}`}
      >
        <div className="relative">
          {/* Background Accents */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-gray-500/3 rounded-full blur-3xl animate-float" 
               style={{ animationDuration: '8s' }} />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gray-500/3 rounded-full blur-3xl animate-float" 
               style={{ animationDuration: '10s', animationDelay: '1s' }} />

          {/* Content */}
          <div className="relative bg-gradient-to-b from-gray-900/90 to-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700/50 p-5 lg:p-8 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-100 text-center">
                Professional Experience
              </h2>
              <div id="experience-container" className="grid gap-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`bg-gray-800/30 rounded-lg p-6 border-2 border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gray-700/50 text-gray-300 border border-gray-600/50">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-200">{exp.company}</h3>
                          <p className="text-base text-gray-400 mt-1">{exp.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-5 h-5" />
                          <span className="text-base">{exp.period}</span>
                        </div>
                        <a 
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-base text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Link className="w-5 h-5" />
                          Visit Website
                        </a>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-gray-400">
                      <MapPin className="w-5 h-5" />
                      <span className="text-base">{exp.location}</span>
                    </div>

                    <div className="mt-4 p-3 bg-gray-700/20 rounded-lg border border-gray-600/30">
                      <h4 className="text-lg font-semibold text-gray-200 mb-2">Key Achievements</h4>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex gap-2 items-start">
                            <span className="text-blue-400 mt-1">•</span>
                            <span className="text-gray-300 text-base leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
