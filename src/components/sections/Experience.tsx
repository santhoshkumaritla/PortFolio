import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Link, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    const element = document.getElementById('experience'); // ✅ Fixed ID
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const experiences = [
    {
      company: "DevSecEngOops",
      role: "Software Engineer Intern",
      period: "Mar 2024 – Present",
      location: "Kondapur, Telangana, India",
      website: "https://www.devsecengops.com/",
      achievements: [
        "Designed and developed interactive, responsive websites using HTML, CSS, JavaScript, and React.",
        "Created UI/UX prototypes in Figma and implemented them for improved user experience.",
        "Built dynamic web features and optimized performance for scalability."
      ]
    },
    {
      company: "GirlScript Summer of Code",
      role: "Open Source Contributor",
      period: "Jul 2025 – Present · 1 mo",
      location: "Remote",
      website: "https://gssoc.girlscript.tech/",
      achievements: [
        "Contributed to open source projects as part of GirlScript Summer of Code.",
        "Collaborated with other contributors to improve project features and documentation."
      ]
    }
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="experience"
      className="relative min-h-[90vh] py-16 px-6 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 mb-12"
        >
          Professional Experience
        </motion.h2>

        {/* Experience Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(56,189,248,0.35)" }}
              className="bg-slate-900/70 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 shadow-lg transition-all duration-300 hover:border-sky-500/50"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <Building2 className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                    <p className="text-slate-400 text-sm">{exp.role}</p>
                  </div>
                </div>
                {/* Special Badge for GSSOC */}
                {exp.company === 'GirlScript Summer of Code' && (
                  <img
                    src="/images/1753596787293.jpeg"
                    alt="GSSoC 2025 Badge"
                    className="w-10 h-10 rounded-full border-2 border-yellow-400 shadow-md"
                  />
                )}
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-slate-400 text-sm mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition"
                >
                  <Link className="w-4 h-4" /> Website
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                {exp.location}
              </div>

              {/* Achievements */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h4 className="text-lg font-semibold text-white mb-2">Key Achievements</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
