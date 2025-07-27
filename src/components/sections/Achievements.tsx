import React, { useState, useEffect } from 'react';
import { Trophy, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: React.ReactNode;
}

interface AchievementItemProps {
  achievement: Achievement;
}

const achievements: Achievement[] = [
  {
    title: 'Hackathon Champions (3rd Prize)',
    description: "Team Magnum at TeckZite'25, IIIT Nuuzvid",
    year: '2025',
    icon: <Trophy size={28} className="text-yellow-400" />
  },
  {
    title: 'Hactivate Finalists',
    description: 'Team Magnum at GFG-Anurag University',
    year: '2025',
    icon: <Award size={28} className="text-purple-400" />
  }
];

const hackathonMemories = [
  '/images/memory.jpg',
  '/images/memory1.jpg',
  '/images/memory2.jpg',
  '/images/memory3.jpg',
  '/images/memory4.jpg'
];

const Achievements: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hackathonMemories.length);
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hackathonMemories.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + hackathonMemories.length) % hackathonMemories.length);
  };

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full">
        <div className="relative">
          {/* Background Accents */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-float" />

          {/* Content */}
          <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-900/95 backdrop-blur-xl rounded-xl border border-slate-800/50 p-5 lg:p-8 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
            <div className="space-y-8">
              {/* Section Header */}
              <div className="text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-100 via-sky-200 to-indigo-200 bg-clip-text text-transparent">
                  Achievements & Memories
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Achievements List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-6 w-1 bg-gradient-to-b from-sky-400 to-indigo-400 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-slate-200">Our Achievements</h3>
                  </div>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <AchievementItem key={index} achievement={achievement} />
                    ))}
                  </div>
                </div>

                {/* Hackathon Memories Carousel */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-6 w-1 bg-gradient-to-b from-yellow-400 to-purple-400 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-slate-200">Hackathon Memories</h3>
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 pointer-events-none"></div>
                    
                    {/* Image */}
                    <img
                      src={hackathonMemories[currentImageIndex]}
                      alt={`Hackathon Memory ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />

                    {/* Navigation Buttons */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/70 border border-slate-700/50 hover:bg-slate-700/70 transition-colors duration-300 z-20"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-slate-200 hover:text-yellow-400" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/70 border border-slate-700/50 hover:bg-slate-700/70 transition-colors duration-300 z-20"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-slate-200 hover:text-yellow-400" />
                    </button>
                  </div>

                  {/* Image Indicators */}
                  <div className="flex justify-center gap-2 mt-4">
                    {hackathonMemories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-yellow-400 w-4' : 'bg-slate-600 hover:bg-slate-500'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
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

const AchievementItem: React.FC<AchievementItemProps> = ({ achievement }) => (
  <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 group">
    <div className="flex items-start gap-4">
      <div className="bg-sky-500/10 p-3 rounded-lg group-hover:bg-sky-500/20 transition-colors duration-300">
        {achievement.icon}
      </div>
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
            {achievement.title}
          </h3>
          <span className="inline-block px-3 py-1 bg-sky-500/10 text-sky-300 text-sm rounded-full">
            {achievement.year}
          </span>
        </div>
        <p className="text-slate-300 mt-2 text-base">{achievement.description}</p>
      </div>
    </div>
  </div>
);

export default Achievements;
