import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 animate-gradient bg-[length:400%_400%]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Content */}
          <div className="flex-1 text-center md:text-left animate-slide-in-left">
            <div className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm mb-6 animate-bounce-slow">
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Mohit Kulkarni</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-slate-700 font-semibold mb-6">
              Full Stack Developer <span className="text-primary-600">-</span> <span className="text-secondary-600">JAVA</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              I create beautiful, scalable applications with clean code and modern technologies. 
              Passionate about building solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="group px-6 sm:px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-bold hover:from-primary-700 hover:to-primary-800 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50 transition-all cursor-pointer text-center shine relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="group px-6 sm:px-10 py-4 glass border-2 border-primary-500 text-primary-700 rounded-full font-bold hover:bg-primary-600 hover:text-white hover:border-primary-600 hover:-translate-y-1 hover:shadow-2xl transition-all cursor-pointer text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center animate-slide-in-right">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] animate-floating">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-3xl animate-gradient bg-[length:400%_400%]"></div>
                <div className="absolute inset-1 bg-white rounded-3xl overflow-hidden">
                  <img
                    src="/images/avatar.png"
                    alt="Mohit Kulkarni"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/450x450/3b82f6/ffffff?text=MK';
                    }}
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-500 rounded-full blur-xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
