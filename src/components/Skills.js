import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 85 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'React', percentage: 75 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'JAVA', percentage: 90 },
        { name: 'Springboot', percentage: 90 },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', percentage: 80 },
        { name: 'JIRA', percentage: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary-100 rounded-full text-secondary-700 font-semibold text-sm mb-4">
            Explore My
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-20 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded"></span>
            <span className="w-2 h-1 bg-primary-500 rounded"></span>
            <span className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded"></span>
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16"
        >
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className={`group relative glass p-6 sm:p-8 rounded-2xl shadow-xl card-hover border border-white/20 ${
                inView ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-secondary-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              
              {/* Icon based on category */}
              <div className="flex items-center gap-3 mb-6">
                {category.category === 'Frontend' && (
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                {category.category === 'Backend' && (
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                {category.category === 'Tools' && (
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                  {category.category}
                </h3>
              </div>
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="mb-6 last:mb-0">
                  <div className="flex justify-between mb-3">
                    <span className="font-bold text-slate-700 text-sm sm:text-base">{skill.name}</span>
                    <span className="font-bold text-slate-800 text-sm sm:text-base">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden relative">
                    <div
                      className={`h-full rounded-full relative overflow-hidden ${
                        inView ? 'animate-skill-bar' : 'w-0'
                      }`}
                      style={{
                        width: inView ? `${skill.percentage}%` : '0%',
                        animationDelay: `${(idx * 0.2 + skillIdx * 0.1)}s`,
                        background: category.category === 'Frontend' 
                          ? 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)'
                          : category.category === 'Backend'
                          ? 'linear-gradient(90deg, #22c55e 0%, #4ade80 100%)'
                          : 'linear-gradient(90deg, #a855f7 0%, #c084fc 100%)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
