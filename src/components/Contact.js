import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm mb-4">
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-6">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded"></span>
            <span className="w-2 h-1 bg-secondary-500 rounded"></span>
            <span className="w-20 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 rounded"></span>
          </div>
        </div>

        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-8 lg:gap-12 mt-16 items-stretch ${
            inView ? 'animate-slide-in-up' : 'opacity-0'
          }`}
        >
          {/* Contact Info */}
          <div className="flex-1 flex">
            <div className="glass p-8 rounded-2xl shadow-xl border border-white/20 flex flex-col w-full">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-800">Let's talk about everything! ✨</h3>
              <p className="text-slate-600 mb-8 text-base sm:text-lg">
              Feel free to reach out for collaborations or just a friendly hello. I'll get back to you as soon as
              possible.
            </p>

              <div className="space-y-4">
                <div className="glass p-4 rounded-xl hover:shadow-lg transition-shadow border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 mb-1 text-base sm:text-lg">Email</h4>
                      <p className="text-slate-600 break-all text-sm sm:text-base">kulkarnimohit1999@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="glass p-4 rounded-xl hover:shadow-lg transition-shadow border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1 text-base sm:text-lg">Phone</h4>
                      <p className="text-slate-600 text-sm sm:text-base">+91 8275139049</p>
                    </div>
                  </div>
                </div>

                <div className="glass p-4 rounded-xl hover:shadow-lg transition-shadow border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1 text-base sm:text-lg">Location</h4>
                      <p className="text-slate-600 text-sm sm:text-base">Pune, India 🇮🇳</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-auto pt-6">
                <a
                  href="#"
                  className="w-12 h-12 glass border border-white/20 rounded-xl flex items-center justify-center text-slate-700 hover:bg-gradient-to-br hover:from-primary-600 hover:to-primary-700 hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all"
                  title="GitHub"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 glass border border-white/20 rounded-xl flex items-center justify-center text-slate-700 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 glass border border-white/20 rounded-xl flex items-center justify-center text-slate-700 hover:bg-gradient-to-br hover:from-sky-600 hover:to-sky-700 hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all"
                  title="Twitter"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 glass border border-white/20 rounded-xl flex items-center justify-center text-slate-700 hover:bg-gradient-to-br hover:from-pink-600 hover:to-pink-700 hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all"
                  title="Instagram"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 flex">
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl shadow-xl border border-white/20 w-full h-full flex flex-col">
              <div className="flex-1 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 glass border border-white/40 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all text-sm sm:text-base text-slate-800 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 glass border border-white/40 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all text-sm sm:text-base text-slate-800 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 glass border border-white/40 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all text-sm sm:text-base text-slate-800 placeholder-slate-400"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full h-full px-4 py-3 glass border border-white/40 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all resize-none text-sm sm:text-base text-slate-800 placeholder-slate-400 min-h-[120px]"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-bold hover:from-primary-700 hover:to-primary-800 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50 transition-all shine relative overflow-hidden mt-6"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
