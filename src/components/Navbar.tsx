import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change
      setIsScrolled(window.scrollY > 50);
      
      // Handle active section
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-white">
            Santhosh Kumar
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-indigo-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{ fontSize: 28 }}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center transition-opacity duration-300"
          onClick={closeMenu}
        >
          <div
            className="bg-gray-900/95 rounded-xl shadow-xl p-8 w-11/12 max-w-xs mx-auto flex flex-col items-center relative animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center space-y-8 mt-8 mb-4 w-full">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-2xl font-semibold w-full text-center py-2 rounded-lg transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-indigo-400 bg-gray-800/60'
                      : 'text-gray-200 hover:text-white hover:bg-gray-800/40'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;