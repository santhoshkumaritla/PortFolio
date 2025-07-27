import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech',
    specialization: 'Computer Science & Engineering',
    institute: 'RGUKT Nuzvid',
    year: '2023–2027',
    cpi: '8.4',
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    color: 'from-sky-500 via-indigo-500 to-purple-500',
    shadow: 'shadow-sky-500/40',
  },
  {
    degree: 'PUC',
    specialization: 'MPC',
    institute: 'RGUKT Nuzvid',
    year: '2023',
    cpi: '9.53',
    icon: <BookOpen className="w-8 h-8 text-white" />,
    color: 'from-purple-500 via-pink-500 to-rose-500',
    shadow: 'shadow-purple-500/40',
  },
  {
    degree: 'SSC',
    specialization: '',
    institute: 'Sri Chaitanya High School',
    year: '2021',
    cpi: '9.0',
    icon: <School className="w-8 h-8 text-white" />,
    color: 'from-green-500 via-emerald-500 to-teal-500',
    shadow: 'shadow-green-500/40',
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative min-h-[70vh] flex flex-col items-center justify-center py-20 px-6 overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-90" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[150px]" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[150px]" />

      {/* Header */}
      <motion.div
        className="mb-14 text-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 tracking-tight mb-3">
          Education
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            className={`relative bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-700 hover:border-sky-500 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl ${edu.shadow}`}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Floating Badge Icon */}
            <div
              className={`absolute -top-7 left-6 w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg`}
            >
              {edu.icon}
            </div>

            {/* Card Content */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
              {edu.specialization && (
                <p className="text-base text-slate-400 mt-1">{edu.specialization}</p>
              )}
              <p className="text-slate-300 mt-3 font-medium">{edu.institute}</p>
              <p className="text-slate-400 text-sm mt-1">{edu.year}</p>
              <p className="mt-4 text-sky-400 font-semibold text-lg">
                CPI: <span className="text-white">{edu.cpi}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
