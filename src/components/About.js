import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm mb-4">
            Get To Know More
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded"></span>
            <span className="w-2 h-1 bg-accent-500 rounded"></span>
            <span className="w-20 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 rounded"></span>
          </div>
        </div>

        <div
          ref={ref}
          className={`space-y-8 mt-16 ${
            inView ? 'animate-slide-in-up' : 'opacity-0'
          }`}
        >
          {/* Top Row: Image and Text Content */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Image */}
            <div className="flex-1 flex justify-center md:justify-center items-start">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
                
                {/* Image container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <img
                    src="/images/avatar2.png"
                    alt="About Mohit Kulkarni"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/384x384/22c55e/ffffff?text=About+Me';
                    }}
                  />
                  {/* Corner accent */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl opacity-80 -z-10"></div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-slate-800">
                Who am I? <span className="text-primary-600">💼</span>
              </h3>
              <p className="text-slate-600 mb-4 text-base sm:text-lg leading-relaxed">
                Dedicated Full Stack Java Developer with expertise in Java, SpringBoot, and Microservices, alongside
                web technologies like HTML, CSS, and JavaScript. Passionate about building scalable applications in Agile
                environments and delivering high-quality solutions. Eager to contribute analytical skills to a dynamic
                development team while advancing my career in software development.
              </p>
              <p className="text-slate-600 mb-0 text-base sm:text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or enjoying outdoor activities.
              </p>
            </div>
          </div>

          {/* Bottom Row: Info Cards and CV Button - All Horizontal */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-3 flex-1">
                <div className="glass p-4 rounded-xl hover:shadow-lg transition-shadow flex-1">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Name</p>
                      <p className="text-slate-800 font-semibold text-sm">Mohit Kulkarni</p>
                    </div>
                  </div>
                </div>
                <div className="glass p-4 rounded-xl hover:shadow-lg transition-shadow flex-1">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-slate-500 font-medium">Email</p>
                      <p className="text-slate-800 font-semibold text-xs truncate">kulkarnimohit1999@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="glass p-4 rounded-xl hover:shadow-lg transition-shadow flex-1">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Education</p>
                      <p className="text-slate-800 font-semibold text-xs">Bachelor of Computer Applications</p>
                    </div>
                  </div>
                </div>
                <div className="glass p-4 rounded-xl hover:shadow-lg transition-shadow flex-1">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Location</p>
                      <p className="text-slate-800 font-semibold text-sm">Pune, India 🇮🇳</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <a
                href="/assets/resumes/mohit-kulkarni-FSD.pdf"
                download="Mohit-Kulkarni-FSD-Resume.pdf"
                className="group flex items-center justify-center gap-2 px-6 lg:px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold hover:from-primary-700 hover:to-primary-800 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50 transition-all shine relative overflow-hidden lg:min-w-[180px]"
              >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
