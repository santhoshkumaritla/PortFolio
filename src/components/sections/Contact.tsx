import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Github, Linkedin, Mail, MapPin, Send, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const formAnimation = useScrollAnimation({ animationType: 'slide-up', delay: 0 });
  const infoAnimation = useScrollAnimation({ animationType: 'slide-up', delay: 200 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:itlasanthoshkumar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-slate-950">
      {/* Background Orbs */}
      <div className="absolute -top-24 -left-32 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[150px] animate-pulse" />

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
            Get in Touch
          </h2>
          <p className="text-slate-400 mt-3 text-lg">Let's create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div
            ref={formAnimation.ref}
            className={`bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/60 shadow-xl ${formAnimation.animationClasses}`}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-sky-500 text-white placeholder-slate-500 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-sky-500 text-white placeholder-slate-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-sky-500 text-white placeholder-slate-500 transition resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-sky-500/40"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            ref={infoAnimation.ref}
            className={`bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/60 shadow-xl ${infoAnimation.animationClasses}`}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: <MessageSquare />, label: 'Email', value: 'itlasanthoshkumar@gmail.com', link: 'mailto:itlasanthoshkumar@gmail.com' },
                { icon: <Phone />, label: 'Phone', value: '+91 63058 77692', link: 'tel:+916305877692' },
                { icon: <MapPin />, label: 'Location', value: 'Podili, Andhra Pradesh, India', link: '#' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="bg-sky-500/10 p-3 rounded-lg group-hover:bg-sky-500/20 transition">
                    {React.cloneElement(item.icon, { className: 'text-sky-400 w-6 h-6' })}
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-400">{item.label}</h4>
                    <a href={item.link} className="text-slate-200 hover:text-sky-300 transition">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-6 border-t border-slate-700/50">
                <h4 className="text-sm text-slate-400 mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Github />, link: 'https://github.com/santhoshkumaritla' },
                    { icon: <Linkedin />, link: 'https://www.linkedin.com/in/santhosh-kumar-002810291' },
                    { icon: <Mail />, link: 'mailto:itlasanthoshkumar@gmail.com' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/50 hover:bg-slate-700/50 p-3 rounded-lg transition hover:scale-110 shadow hover:shadow-sky-500/30"
                    >
                      {React.cloneElement(social.icon, { className: 'text-slate-400 hover:text-sky-400 transition w-5 h-5' })}
                    </a>
                  ))}
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
