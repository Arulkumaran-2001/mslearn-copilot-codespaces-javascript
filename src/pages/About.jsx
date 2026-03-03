import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const strengths = [
    "Building responsive, pixel-perfect interfaces",
    "Modern JavaScript (ES6+) expertise",
    "React component architecture",
    "CSS-in-JS and Tailwind CSS mastery",
    "Performance optimization",
    "SEO-friendly development",
    "Accessibility (WCAG) standards",
    "Git version control",
    "Agile development practices",
  ];

  const journey = [
    {
      year: "2021",
      title: "Began My Journey",
      description:
        "Started learning web development with HTML, CSS, and JavaScript fundamentals.",
    },
    {
      year: "2022",
      title: "React & Advanced Styling",
      description:
        "Mastered React, component design patterns, and advanced CSS architecture (BEM, ITCSS, SMACSS).",
    },
    {
      year: "2023",
      title: "E-commerce Specialization",
      description:
        "Specialized in Shopify development, Liquid templating, and custom section creation.",
    },
    {
      year: "2024",
      title: "Full-stack Expertise",
      description:
        "Expanded to include WordPress, BigCommerce, and modern tooling with Tailwind CSS.",
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
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Frontend developer with 3 years of experience crafting beautiful,
            functional digital experiences
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              My Professional Summary
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              I&apos;m a passionate frontend developer with a keen eye for design
              and a drive for clean, maintainable code. Over the past 3 years,
              I&apos;ve worked on diverse projects ranging from small business
              websites to complex e-commerce platforms, always focusing on
              delivering exceptional user experiences.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              My expertise spans modern frontend technologies like React,
              JavaScript ES6+, and Tailwind CSS. I specialize in e-commerce
              development with a deep understanding of Shopify&apos;s ecosystem,
              including Liquid templating and custom section development.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Beyond coding, I&apos;m committed to creating accessible,
              performant web applications that not only meet but exceed client
              expectations. I follow best practices in CSS architecture and WCAG
              standards to ensure every project is robust and inclusive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Strengths */}
      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center gradient-text"
          >
            Technical Strengths
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
              >
                <CheckCircle
                  className="text-primary-500 dark:text-cyan-400 flex-shrink-0 mt-1"
                  size={24}
                />
                <p className="text-slate-700 dark:text-slate-300 font-medium text-lg">
                  {strength}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center gradient-text"
          >
            My Journey
          </motion.h2>

          <div className="space-y-8">
            {journey.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-primary-500 dark:border-cyan-400"
              >
                <div className="absolute -left-4 top-0 w-6 h-6 bg-primary-500 dark:bg-cyan-400 rounded-full"></div>
                <h3 className="text-2xl font-bold text-primary-500 dark:text-cyan-400 mb-2">
                  {milestone.year}
                </h3>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {milestone.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Architecture Section */}
      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center gradient-text"
          >
            CSS Architecture & Best Practices
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "BEM (Block Element Modifier)",
                description:
                  "Structured naming convention for clarity and maintainability in large projects.",
              },
              {
                title: "ITCSS (Inverted Triangle CSS)",
                description:
                  "Hierarchical organization from generic to specific for better specificity management.",
              },
              {
                title: "SMACSS (Scalable Modular CSS)",
                description:
                  "Categorized approach to CSS for scalable and reusable design systems.",
              },
              {
                title: "OOCSS (Object-Oriented CSS)",
                description:
                  "Separating structure and skin for DRY, reusable, and maintainable code.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 gradient-text">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 text-center gradient-text">
              Accessibility & WCAG Standards
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-center">
              I&apos;m committed to building inclusive web experiences that work
              for everyone. I follow WCAG 2.1 guidelines to ensure my projects
              are accessible to users with varying abilities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Semantic HTML",
                  desc: "Proper HTML structure for screen readers and assistive tech",
                },
                {
                  title: "Color Contrast",
                  desc: "Ensuring sufficient contrast ratios for readability",
                },
                {
                  title: "Keyboard Navigation",
                  desc: "Full functionality without mouse or touch interaction",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
