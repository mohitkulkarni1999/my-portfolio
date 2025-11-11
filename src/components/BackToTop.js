import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-primary-500/50 hover:from-primary-700 hover:to-primary-800 hover:-translate-y-2 hover:shadow-3xl hover:shadow-primary-500/70 transition-all z-40 animate-fade-in border-2 border-white/20"
      aria-label="Back to top"
    >
      <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
    </button>
  );
};

export default BackToTop;
