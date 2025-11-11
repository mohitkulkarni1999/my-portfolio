import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-2xl shadow-primary-500/10 py-3 border-b border-white/20'
          : 'glass py-5'
      }`}
    >
      {/* Unique top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center">
          {/* Logo with unique design */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="group flex items-center gap-3 cursor-pointer"
          >
            {/* Logo Icon */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-500/50 transition-shadow">
                <span className="text-white font-bold text-xl">MK</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-500 rounded-full animate-pulse"></div>
            </div>
            {/* Logo Text */}
            <div className="hidden sm:block">
              <div className="text-xl md:text-2xl font-bold gradient-text group-hover:scale-105 transition-transform">
                Mohit Kulkarni
              </div>
              <div className="text-xs text-slate-500 font-medium">Full Stack Developer</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-slate-700 hover:text-primary-600 font-semibold cursor-pointer relative group transition-colors"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Unique CTA Button */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="group px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-bold hover:from-primary-700 hover:to-primary-800 hover:shadow-lg hover:shadow-primary-500/50 transition-all cursor-pointer shine relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="md:hidden cursor-pointer z-50"
            onClick={toggleMenu}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-dark transition-transform duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-dark transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-dark transition-transform duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transition-all duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className="space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={closeMenu}
                  className="text-2xl font-semibold text-dark cursor-pointer hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
