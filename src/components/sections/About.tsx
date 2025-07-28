import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Figma } from 'lucide-react';

const About: React.FC = () => {
  const roles = [
    { icon: <Code className="w-5 h-5" />, title: 'Full Stack Developer' },
    { icon: <Figma className="w-5 h-5" />, title: 'UI/UX Designer' },
    { icon: <Code className="w-5 h-5" />, title: 'ML Engineer' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden"
    >
      {/* Starry Background (Assumes you have CSS or canvas for stars) */}
      <div className="absolute inset-0 bg-[url('/stars-bg.svg')] bg-cover bg-center z-0" />

      {/* Transparent Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/50 to-slate-950/80 z-0 mix-blend-overlay" />

      {/* Decorative Glows */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />

      {/* Content */}
      <motion.div
        className="relative max-w-6xl w-full z-10 bg-slate-900/70 backdrop-blur-lg rounded-2xl border border-slate-800/50 p-6 lg:p-12 shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16">
          {/* Left - Profile Info */}
          <motion.div
            className="flex flex-col items-center lg:items-start space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Profile Image with Glow */}
            <motion.div
              className="relative group"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full blur opacity-20 group-hover:opacity-40 transition" />
              <div className="relative rounded-full w-44 h-44 overflow-hidden ring-2 ring-slate-700/50 shadow-lg group-hover:scale-105 transition duration-500">
                <img
                  src="/profile.jpg"
                  alt="Santhosh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name & Roles */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Santhosh Kumar
              </h1>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3">
                {roles.map((role, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-4 py-1.5 bg-slate-800/60 rounded-full border border-slate-700 text-sky-200 text-sm font-medium shadow hover:bg-slate-800 hover:border-sky-600 transition"
                  >
                    {role.icon} {role.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/santhoshkumaritla" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/santhosh-kumar-002810291" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:itlasanthoshkumar@gmail.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/60 border border-slate-700 text-slate-400 hover:text-sky-300 hover:border-sky-400 hover:scale-110 transition shadow"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1E0a6FfsvdTZOB4-MW_7ZLfJ19aF81MhJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 mt-4 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-lg text-white font-semibold shadow-lg overflow-hidden"
            >
              <span className="relative z-10">Open Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
          </motion.div>

          {/* Right - Description */}
          <div className="lg:py-4">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I’m a Full Stack Developer, UI/UX Designer, and Machine Learning Engineer passionate about creating
              modern web applications that combine aesthetics and performance. My expertise spans from frontend &
              backend development to ML-driven solutions, ensuring user-centric and scalable products.
            </p>

            {/* Expertise Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Full Stack Development", skills: "React, Node.js, Express, MongoDB" },
                { title: "UI/UX Design", skills: "Figma, Prototyping, Wireframing" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 shadow hover:border-sky-500 hover:scale-105 transition"
                >
                  <h4 className="text-sky-300 font-semibold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.skills}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#contact"
                className="flex-1 px-5 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-lg text-white font-medium shadow hover:scale-105 transition text-center"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="flex-1 px-5 py-3 bg-gradient-to-r from-indigo-600 to-sky-600 rounded-lg text-white font-medium shadow hover:scale-105 transition text-center"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
