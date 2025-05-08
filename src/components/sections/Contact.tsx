import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { AtSign, Github, Linkedin, Mail, MapPin, Send, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formAnimation = useScrollAnimation({ 
    animationType: 'slide-up',
    delay: 0
  });
  
  const infoAnimation = useScrollAnimation({ 
    animationType: 'slide-up',
    delay: 200
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with pre-filled data
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:itlasanthoshkumar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative">
          {/* Background Accents */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/3 rounded-full blur-3xl animate-float" 
               style={{ animationDuration: '8s' }} />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-500/3 rounded-full blur-3xl animate-float" 
               style={{ animationDuration: '10s', animationDelay: '1s' }} />

          {/* Content */}
          <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-900/95 backdrop-blur-xl rounded-xl border border-slate-800/50 p-5 lg:p-8 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
            <div className="space-y-8">
              {/* Section Header */}
              <div className="text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-100 via-sky-200 to-indigo-200 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="text-slate-400 mt-2">Let's discuss how we can work together</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div 
                  ref={formAnimation.ref}
                  className={`bg-slate-800/30 rounded-lg border border-slate-700/50 p-6 ${formAnimation.animationClasses}`}
                >
                  <h3 className="text-xl font-semibold text-slate-200 mb-6">Send me a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-transparent text-white transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-transparent text-white transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-transparent text-white transition-all duration-300 resize-none"
                        placeholder="Your message here..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-4 py-2.5 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
                
                {/* Contact Info */}
                <div 
                  ref={infoAnimation.ref}
                  className={`bg-slate-800/30 rounded-lg border border-slate-700/50 p-6 ${infoAnimation.animationClasses}`}
                >
                  <h3 className="text-xl font-semibold text-slate-200 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="bg-sky-500/10 p-3 rounded-lg group-hover:bg-sky-500/20 transition-colors duration-300">
                        <MessageSquare size={24} className="text-sky-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">Email</h4>
                        <a href="mailto:itlasanthoshkumar@gmail.com" className="text-slate-200 hover:text-sky-300 transition-colors">
                          itlasanthoshkumar@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="bg-sky-500/10 p-3 rounded-lg group-hover:bg-sky-500/20 transition-colors duration-300">
                        <Phone size={24} className="text-sky-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">Phone</h4>
                        <a href="tel:+916305877692" className="text-slate-200 hover:text-sky-300 transition-colors">
                          +91 63058 77692
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="bg-sky-500/10 p-3 rounded-lg group-hover:bg-sky-500/20 transition-colors duration-300">
                        <MapPin size={24} className="text-sky-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-400">Location</h4>
                        <p className="text-slate-200">Podili, Andhra Pradesh, India</p>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-slate-700/50">
                      <h4 className="text-sm font-medium text-slate-400 mb-4">Connect with me</h4>
                      <div className="flex gap-4">
                        <a 
                          href="https://github.com/santhoshkumaritla" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800/50 hover:bg-slate-700/50 transition-colors p-3 rounded-lg group"
                          aria-label="GitHub"
                        >
                          <Github size={20} className="text-slate-400 group-hover:text-sky-400 transition-colors" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/santhosh-kumar-002810291" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800/50 hover:bg-slate-700/50 transition-colors p-3 rounded-lg group"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={20} className="text-slate-400 group-hover:text-sky-400 transition-colors" />
                        </a>
                        <a 
                          href="mailto:itlasanthoshkumar@gmail.com" 
                          className="bg-slate-800/50 hover:bg-slate-700/50 transition-colors p-3 rounded-lg group"
                          aria-label="Email"
                        >
                          <MessageSquare size={20} className="text-slate-400 group-hover:text-sky-400 transition-colors" />
                        </a>
                      </div>
                    </div>
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

export default Contact;