import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projectsData = [
    {
      id: 1,
      title: 'foodie-website',
      description: 'A stylish pizza ordering website offering handcrafted gourmet pizzas, quick delivery, customer reviews, FAQs, and exclusive offers all designed for a delicious user experience.',
      image: '/images/projects/Screenshot 2025-06-03 174759.png',
      category: 'frontend',
      tech: ['HTML', 'CSS', 'JAVASCRIPT'],
      liveLink: 'https://foodie-website-rouge.vercel.app/',
      githubLink: 'https://github.com/mohitkulkarni1999/Foodie-website',
    },
    {
      id: 2,
      title: 'Paan-Shop',
      description: 'A responsive frontend for a premium paan shop, built with HTML, CSS, and JavaScript. Features a modern red/gold theme, interactive menu cards, mobile navigation, and smooth animations. Highlights include a testimonial slider, sticky header, and optimized performance for fast loading. (Pure frontend - ready to connect with backend APIs for full functionality.)',
      image: '/images/projects/paan shop.png',
      category: 'frontend',
      tech: ['HTML', 'CSS', 'JAVASCRIPT'],
      liveLink: 'https://sweet-shop-rust.vercel.app/',
      githubLink: 'https://github.com/mohitkulkarni1999/sweet-shop',
    },
    {
      id: 3,
      title: 'Online exam portal',
      description: 'Developed secure login functionality for Admin and User roles with credential-based authentication. Built an Admin dashboard to create timed question sets and manage exams. Implemented a user-friendly exam interface with progress saving, submission, and instant feedback features. Ensured data integrity through robust validation and secure submission processes.',
      image: '/images/projects/HomePage.png',
      category: 'fullstack',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      liveLink: '',
      githubLink: 'https://github.com/mohitkulkarni1999/Client-Seed-Project',
    },
    {
      id: 4,
      title: 'Nums Bank',
      description: 'Designed and developed a microservices-based banking system for managing accounts, transactions, customers, and authentication. Built RESTful APIs with Java & Spring Boot, ensured data integrity using MySQL, and deployed services via Docker. Developed responsive UIs with React to deliver a seamless user experience. Focused on performance, scalability, and code maintainability.',
      image: '/images/projects/nums bank homepage.png',
      category: 'fullstack',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Microservices', 'React'],
      liveLink: '',
      githubLink: 'https://github.com/mohitkulkarni1999/OnlineBanking',
    },
    {
      id: 5,
      title: 'salon-booking',
      description: 'Developed a backend microservices architecture for salon booking with secure authentication via Keycloak and JWT. Used Spring Boot and MySQL for service logic and data management, RabbitMQ for async communication, and WebSocket for real-time updates. Dockerized services for scalable deployment.',
      image: '',
      category: 'backend',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Keycloak', 'JWT', 'RabbitMQ', 'WebSocket', 'Docker'],
      liveLink: '',
      githubLink: 'https://github.com/mohitkulkarni1999/salon-booking',
    },
    {
      id: 6,
      title: 'Employee Management System',
      description: 'A full-stack employee management application built with React and Spring Boot. Features department/employee management, JWT authentication, and responsive Material-UI design. Includes RESTful APIs, form validation, and data visualization. Dockerized for deployment with MySQL database integration. (Fullstack application with both frontend and backend fully implemented.)',
      image: '/images/projects/employee-management.png',
      category: 'fullstack',
      tech: ['React', 'Spring Boot', 'MySQL'],
      liveLink: 'https://employee-management-system-mohitkulkarni1999s-projects.vercel.app',
      githubLink: 'https://github.com/mohitkulkarni1999/employee-management-system',
    },
  ];

  const filters = ['all', 'frontend', 'backend', 'fullstack'];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-accent-100 rounded-full text-accent-700 font-semibold text-sm mb-4">
            Browse My Recent
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-6">
            Explore my portfolio of full-stack applications showcasing modern technologies and clean code practices
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded"></span>
            <span className="w-2 h-1 bg-secondary-500 rounded"></span>
            <span className="w-20 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded"></span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`group px-6 py-3 rounded-full font-bold capitalize transition-all text-sm sm:text-base relative overflow-hidden ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-xl shadow-primary-500/30'
                  : 'glass border-2 border-primary-500/30 text-primary-700 hover:border-primary-500 hover:shadow-lg'
              }`}
            >
              {activeFilter === filter && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative glass rounded-2xl overflow-hidden shadow-xl card-hover border border-white/20 ${
                inView ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-secondary-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              
              {/* Project Image */}
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Project';
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all hover:scale-110 shadow-xl"
                      title="View Live Demo"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-800 hover:text-white transition-all hover:scale-110 shadow-xl"
                    title="View on GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
                    project.category === 'frontend' 
                      ? 'bg-primary-500/90 text-white' 
                      : project.category === 'backend'
                      ? 'bg-secondary-500/90 text-white'
                      : 'bg-accent-500/90 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-full text-xs font-semibold border border-slate-200 hover:border-primary-500 hover:text-primary-600 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
