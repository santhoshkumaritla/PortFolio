import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Github, Linkedin, Mail, Code, Figma } from 'lucide-react';

const About: React.FC = () => {
  const animation = useScrollAnimation({ 
    animationType: 'fade-in'
  });

  const roles = [
    { icon: <Code className="w-5 h-5" />, title: 'Full Stack Developer' },
    { icon: <Figma className="w-5 h-5" />, title: 'UI/UX Designer' }
  ];
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 px-4">
      <div 
        ref={animation.ref}
        className={`max-w-6xl w-full ${animation.animationClasses}`}
      >
        <div className="relative">
          {/* Animated Background Accents */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl animate-float" 
               style={{ animationDuration: '8s' }} />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-500/3 rounded-full blur-3xl animate-float" 
               style={{ animationDuration: '10s', animationDelay: '1s' }} />
          
          {/* Content */}
          <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-800/50 p-6 lg:p-10 shadow-[0_0_15px_rgba(0,0,0,0.1)] animate-scaleIn">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16">
              {/* Left Column - Profile Info */}
              <div className="flex flex-col items-center lg:items-start space-y-6">
                {/* Profile Image with Enhanced Glow Effect */}
                <div className="relative group animate-slideUp">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full blur opacity-15 group-hover:opacity-25 transition duration-500 animate-glow"></div>
                  <div className="relative rounded-full w-40 h-40 lg:w-44 lg:h-44 overflow-hidden ring-2 ring-slate-700/50 shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-105">
                    <img 
                      src="/profile.jpg" 
                      alt="Santhosh Kumar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="text-center lg:text-left w-full animate-slideUp delay-100">
                  <h1 className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-100 via-sky-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-sm">
                    Santhosh Kumar
                  </h1>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {roles.map((role, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700/50 shadow-lg hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 animate-scaleIn"
                        style={{ animationDelay: `${(index + 2) * 100}ms` }}
                      >
                        {role.icon}
                        <span className="text-sky-200/90 text-sm font-medium">{role.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links with Staggered Animation */}
                <div className="flex gap-4 justify-center lg:justify-start w-full">
                  {[
                    { icon: <Github className="w-5 h-5" />, href: "https://github.com/santhoshkumaritla" },
                    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/santhosh-kumar-002810291" },
                    { icon: <Mail className="w-5 h-5" />, href: "mailto:itlasanthoshkumar@gmail.com" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-sky-300 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 animate-fadeIn hover:scale-110 shadow-sm"
                      style={{ animationDelay: `${(index + 4) * 100}ms` }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* Resume Button with Shine Effect */}
                <a 
                  href="/Updated Resume .pdf"
                  download
                  className="group relative w-full lg:w-auto animate-slideUp delay-500"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg opacity-10 group-hover:opacity-20 blur-[2px] transition duration-300"></div>
                  <div className="relative px-5 py-2.5 bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
                    <div className="absolute inset-0 w-[200%] translate-x-[-25%] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:animate-shine"></div>
                    <span className="flex items-center justify-center gap-2 text-slate-200 text-sm font-medium">
                      Download Resume
                    </span>
                  </div>
                </a>
          </div>

              {/* Right Column - Description */}
              <div className="lg:py-4">
                <div className="space-y-6">
                  <p className="text-base text-slate-300/90 leading-relaxed animate-slideUp delay-200">
                    I'm a Full Stack Developer and UI/UX Designer who loves building modern web applications. 
                    I also work with Machine Learning and Data Analysis to create smart solutions. 
                    My goal is to combine beautiful design with powerful technology to solve real-world problems.
                  </p>

                  {/* Skills Section with Staggered Animation */}
                  <div className="animate-slideUp delay-300">
                    <h3 className="text-lg font-semibold text-slate-200/90 tracking-wide mb-3">Technical Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        {
                          title: "Full Stack Development",
                          skills: "React, Node.js, TypeScript, Python",
                          delay: 400
                        },
                        {
                          title: "UI/UX Design",
                          skills: "Figma, User Research, Prototyping",
                          delay: 500
                        },
                        {
                          title: "Data Analysis",
                          skills: "Pandas, NumPy, Data Visualization",
                          delay: 600
                        },
                        {
                          title: "Machine Learning",
                          skills: "TensorFlow, Scikit-learn, Deep Learning",
                          delay: 700
                        }
                      ].map((skill, index) => (
                        <div key={index} className="group animate-slideUp" style={{ animationDelay: `${skill.delay}ms` }}>
                          <div className="relative p-3 rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700/50 shadow-sm hover:shadow-[0_4px_15px_rgba(56,189,248,0.03)] transition-all duration-500 group-hover:scale-[1.02] hover:bg-slate-800/70 hover:border-slate-600/50">
                            <div className="relative">
                              <h4 className="text-sky-300 font-medium mb-1.5 text-sm">{skill.title}</h4>
                              <p className="text-slate-400 text-xs leading-relaxed">{skill.skills}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slideUp delay-600">
                    <a 
                      href="#contact" 
                      className="group relative flex-1"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg opacity-10 group-hover:opacity-20 blur-[2px] transition duration-300"></div>
                      <div className="relative px-5 py-2.5 bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
                        <div className="absolute inset-0 w-[200%] translate-x-[-25%] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:animate-shine"></div>
                        <span className="flex items-center justify-center gap-2 text-slate-200 text-sm font-medium">
                          Get in Touch
                        </span>
                      </div>
                    </a>
                    <a 
                      href="#projects" 
                      className="group relative flex-1"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-lg opacity-10 group-hover:opacity-20 blur-[2px] transition duration-300"></div>
                      <div className="relative px-5 py-2.5 bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
                        <div className="absolute inset-0 w-[200%] translate-x-[-25%] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:animate-shine"></div>
                        <span className="flex items-center justify-center gap-2 text-slate-200 text-sm font-medium">
                          View Projects
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;