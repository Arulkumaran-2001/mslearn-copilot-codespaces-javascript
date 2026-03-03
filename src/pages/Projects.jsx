import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'React Parking Dashboard',
      description: 'Interactive parking management system with real-time slot visualization, filtering capabilities, and booking management. Features dynamic updates and responsive design.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Context API', 'Responsive Design'],
      liveUrl: 'https://example.com/parking',
      githubUrl: 'https://github.com/arulkumaran/parking-dashboard',
    },
    {
      title: 'Shopify Custom Collection Section',
      description: 'Dynamic Shopify collection section with custom badges, filtering options, and hover effects. Built with Liquid and JavaScript for seamless e-commerce integration.',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'JSON'],
      liveUrl: 'https://example.com/shopify-section',
      githubUrl: 'https://github.com/arulkumaran/shopify-sections',
    },
    {
      title: 'Interactive Product Banner',
      description: 'High-performance product banner with hover-triggered animations, dynamic content updates, and mobile optimization. Increases engagement and conversion rates.',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Accessibility'],
      liveUrl: 'https://example.com/product-banner',
      githubUrl: 'https://github.com/arulkumaran/product-banner',
    },
    {
      title: 'Role-based React Admin Dashboard',
      description: 'Comprehensive admin dashboard with role-based access control, data visualization, user management, and detailed analytics. Enterprise-grade application.',
      technologies: ['React', 'Redux', 'Chart.js', 'Material-UI', 'Node.js'],
      liveUrl: 'https://example.com/admin-dashboard',
      githubUrl: 'https://github.com/arulkumaran/admin-dashboard',
    },
    {
      title: 'E-commerce Store Customization',
      description: 'Complete e-commerce storefront customization with custom theme development, product page optimization, and checkout flow improvements on Shopify platform.',
      technologies: ['Shopify', 'Liquid', 'CSS', 'JavaScript', 'Conversion Optimization'],
      liveUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/arulkumaran/ecommerce',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features dark mode, smooth animations, and optimized performance.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Vercel'],
      liveUrl: 'https://arulkumaran-portfolio.vercel.app',
      githubUrl: 'https://github.com/arulkumaran/portfolio',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-primary-500/10 to-cyan-500/10 dark:from-primary-500/5 dark:to-cyan-500/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Showcase of my recent work across different technologies and platforms
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center gradient-text"
          >
            Project Expertise
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { count: '15+', label: 'Projects Completed' },
              { count: '50+', label: 'Happy Clients' },
              { count: '8+', label: 'Technologies' },
              { count: '100%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-5xl font-bold gradient-text mb-2">
                  {stat.count}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center gradient-text"
          >
            Technology Stack
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Frontend',
                tech: ['React', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS'],
              },
              {
                title: 'E-commerce',
                tech: ['Shopify', 'Liquid', 'WordPress', 'BigCommerce'],
              },
              {
                title: 'Tools & Libraries',
                tech: ['Git', 'VS Code', 'Framer Motion', 'Redux', 'Figma'],
              },
              {
                title: 'Deployment',
                tech: ['Vercel', 'Netlify', 'GitHub Pages', 'Heroku'],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 gradient-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary-500/10 dark:bg-cyan-500/10 text-primary-700 dark:text-cyan-400 rounded-lg font-semibold text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
