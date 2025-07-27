import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Brain, Palette, Wrench
} from 'lucide-react';

const skillGroups = [
  {
    name: 'Programming Languages',
    icon: <Code className="w-6 h-6 text-sky-400" />,
    skills: ['Python', 'Java', 'JavaScript', 'C'],
  },
  {
    name: 'Full Stack Development',
    icon: <Palette className="w-6 h-6 text-purple-400" />,
    skills: ['React JS', 'Node JS', 'Express JS', 'MongoDB', 'Tailwind CSS', 'MySQL'],
  },
  {
    name: 'UI/UX Design',
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    skills: ['Figma', 'Wire-Framing', 'Responsive Design', 'Prototyping'],
  },
  {
    name: 'Tools',
    icon: <Wrench className="w-6 h-6 text-yellow-400" />,
    skills: ['Git', 'Postman', 'VS Code', 'GitHub'],
  },
  {
    name: 'AI/ML',
    icon: <Brain className="w-6 h-6 text-green-400" />,
    skills: ['Machine Learning', 'Data Analysis', 'Data Visualization'],
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center py-16 px-6 overflow-hidden"
    >
      {/* Background with Floating Lights */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_80%)]" />

      {/* Header */}
      <motion.div
        className="mb-14 text-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 tracking-tight mb-4">
          Skills & Technologies
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Technologies and tools I specialize in for building modern solutions.
        </p>
      </motion.div>

      {/* Skills Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full max-w-6xl z-10 flex flex-col gap-16"
      >
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-sky-500/30 via-indigo-500/20 to-transparent rounded-full z-0" />

        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.name}
            variants={itemVariants}
            className={`relative flex items-center ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
          >
            {/* Timeline Dot */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-full border-4 border-slate-900 shadow-lg flex items-center justify-center z-20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {group.icon}
            </motion.div>

            {/* Skill Card */}
            <motion.div
              className="relative bg-slate-900/70 backdrop-blur-xl border border-sky-800/30 rounded-2xl shadow-xl p-8 w-full max-w-md md:max-w-xl hover:scale-[1.03] hover:border-sky-500/50 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-sky-300 mb-4 flex items-center gap-2">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium bg-slate-800/70 text-sky-100 rounded-full border border-sky-700/40 hover:bg-sky-900/50 hover:border-sky-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
