import React, { useEffect, useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { 
  Code, Database, Brain, BarChart, 
  Server, Cloud, Shield, Terminal,
  Cpu, Layers, GitBranch, Zap,
  Palette, Globe, Box, Wrench
} from 'lucide-react';

const Skills: React.FC = () => {
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

    const element = document.getElementById('skills-container');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillGroups = [
    {
      name: "Programming Languages",
      icon: <Code className="w-4 h-4" />,
      skills: [
        { name: "Java", icon: <Code className="w-4 h-4" /> },
        { name: "C", icon: <Code className="w-4 h-4" /> },
        { name: "Python", icon: <Terminal className="w-4 h-4" /> },
        { name: "HTML5/CSS3", icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: "Frontend Development",
      icon: <Palette className="w-4 h-4" />,
      skills: [
        { name: "React", icon: <Code className="w-4 h-4" /> },
        { name: "BootStrap", icon: <Code className="w-4 h-4" /> },
        { name: "Tailwind CSS", icon: <Palette className="w-4 h-4" /> },
        { name: "Redux", icon: <Box className="w-4 h-4" /> }
      ]
    },
    {
      name: "Backend & APIs",
      icon: <Server className="w-4 h-4" />,
      skills: [
        { name: "Node.js", icon: <Server className="w-4 h-4" /> },
        { name: "Express.js", icon: <Server className="w-4 h-4" /> },
        { name: "REST APIs", icon: <Server className="w-4 h-4" /> },
        { name: "GraphQL", icon: <Server className="w-4 h-4" /> }
      ]
    },
    {
      name: "Databases",
      icon: <Database className="w-4 h-4" />,
      skills: [
        { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
        { name: "MySQL", icon: <Database className="w-4 h-4" /> },
        { name: "Firebase", icon: <Database className="w-4 h-4" /> }
      ]
    },
    {
      name: "UI/UX Design",
      icon: <Palette className="w-4 h-4" />,
      skills: [
        { name: "Figma", icon: <Palette className="w-4 h-4" /> },
        { name: "Wire-Framing", icon: <Palette className="w-4 h-4" /> },
        { name: "Responsive Design", icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: "Tools",
      icon: <Wrench className="w-4 h-4" />,
      skills: [
        { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
        { name: "Postman", icon: <Layers className="w-4 h-4" /> },
        { name: "VS Code", icon: <Cloud className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-12 px-4 overflow-hidden">
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
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-100 text-center">
                Technical Skills
              </h2>
              <div id="skills-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillGroups.map((group, groupIndex) => (
                  <div
                    key={group.name}
                    className={`bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      transitionDelay: `${groupIndex * 100}ms`
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 rounded-lg bg-gray-700/50 text-gray-300 border border-gray-600/50">
                        {group.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-gray-200">
                        {group.name}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {group.skills.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className="group bg-gray-700/30 rounded-lg p-2 border border-gray-600/50 hover:border-gray-500/50 hover:bg-gray-700/50 transition-all duration-300"
                          style={{
                            transitionDelay: `${(groupIndex * 100) + (skillIndex * 50)}ms`
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="p-1 rounded-lg bg-gray-600/50 text-gray-300 border border-gray-500/50">
                              {skill.icon}
                            </div>
                            <span className="text-xs font-medium text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      ))}
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

export default Skills;