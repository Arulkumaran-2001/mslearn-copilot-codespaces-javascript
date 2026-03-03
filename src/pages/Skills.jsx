import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['React', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'Performance Optimization', 'SEO Optimization'],
    },
    {
      category: 'E-commerce Platforms',
      skills: ['Shopify', 'Liquid Templating', 'Custom Sections', 'WordPress', 'BigCommerce', 'WooCommerce', 'App Development', 'Store Optimization'],
    },
    {
      category: 'UI/UX & Design',
      skills: ['Figma', 'UI Design', 'UX Principles', 'Wireframing', 'Prototyping', 'Component Design', 'Design Systems', 'Web Accessibility'],
    },
    {
      category: 'CSS Architecture',
      skills: ['BEM (Block Element Modifier)', 'ITCSS (Inverted Triangle CSS)', 'SMACSS (Scalable Modular CSS)', 'OOCSS (Object-Oriented CSS)', 'CSS Grid', 'Flexbox', 'CSS Variables', 'SASS/SCSS'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git & GitHub', 'VS Code', 'GitHub Codespaces', 'npm & Yarn', 'Webpack', 'Vite', 'Testing', 'Debugging'],
    },
    {
      category: 'Accessibility & Standards',
      skills: ['WCAG 2.1 Compliance', 'Semantic HTML', 'ARIA Attributes', 'Keyboard Navigation', 'Screen Reader Testing', 'Color Contrast', 'Form Accessibility', 'Testing Tools'],
    },
  ];

  const proficiencyLevels = [
    { skill: 'React', level: 95 },
    { skill: 'JavaScript', level: 90 },
    { skill: 'Tailwind CSS', level: 95 },
    { skill: 'Shopify/Liquid', level: 88 },
    { skill: 'HTML/CSS', level: 98 },
    { skill: 'Responsive Design', level: 95 },
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
            Skills & Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills and expertise areas
          </motion.p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                category={category.category}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Proficiency Levels */}
      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center gradient-text"
          >
            Proficiency Levels
          </motion.h2>

          <div className="space-y-8">
            {proficiencyLevels.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                    {item.skill}
                  </h3>
                  <span className="text-primary-500 dark:text-cyan-400 font-bold">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-cyan-500"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center gradient-text"
          >
            Learning & Growth
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'React Mastery', desc: 'Advanced React patterns, hooks, and best practices' },
              { title: 'Shopify Developer', desc: 'Certified in Shopify app and custom section development' },
              { title: 'Web Performance', desc: 'Optimizing web applications for speed and efficiency' },
              { title: 'Accessibility Expert', desc: 'WCAG 2.1 compliance and inclusive web design' },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 gradient-text">
                  {cert.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center gradient-text"
          >
            Specializations
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                items: ['Component Architecture', 'State Management', 'Performance Optimization', 'Testing & QA'],
              },
              {
                title: 'E-commerce Expertise',
                items: ['Shopify Customization', 'Product Pages', 'Checkout Optimization', 'Analytics Integration'],
              },
              {
                title: 'Quality & Accessibility',
                items: ['WCAG Standards', 'User Testing', 'Code Reviews', 'Documentation'],
              },
            ].map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 gradient-text">
                  {spec.title}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                    >
                      <div className="w-2 h-2 bg-primary-500 dark:bg-cyan-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
