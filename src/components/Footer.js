import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Unique top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="rgb(248 250 252)" opacity="0.1"></path>
        </svg>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10 pt-20 pb-8">
        {/* Unique CTA Section */}
        <div className="glass-dark p-8 rounded-2xl mb-12 text-center border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Build Something <span className="gradient-text">Amazing</span> Together! ✨
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-bold hover:from-primary-700 hover:to-accent-700 hover:shadow-2xl hover:shadow-primary-500/50 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Mohit Kulkarni</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              A passionate Full Stack Developer - JAVA creating beautiful, responsive websites with clean code.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/mohitkulkarni1999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-dark rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all hover:-translate-y-1">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/mohitkulkarni1999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-dark rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/mohitkulkarni99" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-dark rounded-lg flex items-center justify-center hover:bg-sky-600 transition-all hover:-translate-y-1">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="group text-slate-300 hover:text-primary-400 transition-all cursor-pointer inline-flex items-center gap-2 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-secondary-500 to-primary-500 rounded"></span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 text-sm sm:text-base group">
                <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-all">
                  <i className="fas fa-envelope text-primary-400 group-hover:text-white text-sm"></i>
                </div>
                <span className="break-all group-hover:text-white transition-colors">kulkarnimohit1999@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm sm:text-base group">
                <div className="w-8 h-8 bg-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-500 transition-all">
                  <i className="fas fa-phone text-secondary-400 group-hover:text-white text-sm"></i>
                </div>
                <span className="group-hover:text-white transition-colors">+91 8275139049</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm sm:text-base group">
                <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-all">
                  <i className="fas fa-map-marker-alt text-accent-400 group-hover:text-white text-sm"></i>
                </div>
                <span className="group-hover:text-white transition-colors">Pune, India 🇮🇳</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Unique Design */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright with special design */}
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm sm:text-base mb-1">
                &copy; {currentYear} <span className="text-primary-400 font-semibold">Mohit Kulkarni</span>
              </p>
              <p className="text-xs text-slate-500">All rights reserved. Crafted with precision.</p>
            </div>
            
            {/* Made with badge */}
            <div className="flex items-center gap-3">
              <div className="glass-dark px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                <span className="text-slate-400 text-sm">Made with</span>
                <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="glass-dark px-4 py-2 rounded-full border border-white/10">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">React + Tailwind</span>
              </div>
            </div>
            
            {/* Back to top mini button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/50"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
