import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Zap, Globe } from "lucide-react";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Crafting responsive, accessible interfaces with React & modern CSS",
    },
    {
      icon: Zap,
      title: "E-commerce Solutions",
      description: "Custom Shopify sections, Liquid templating, and storefront optimization",
    },
    {
      icon: Globe,
      title: "Performance Focused",
      description: "Building fast, scalable web applications with optimal user experience",
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <p className="text-primary-500 dark:text-cyan-400 font-semibold text-lg mb-4">
              Welcome to my portfolio
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="gradient-text">Arulkumaran Rajaram</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 font-medium"
          >
            Frontend Developer | React Developer | Shopify Customization Expert
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            With 3 years of experience, I specialize in building beautiful, functional web
            applications. I&apos;m passionate about clean code, user experience, and solving
            complexproblems with elegant solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              View My Projects
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
              Contact Me
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-600 dark:text-slate-400"
          >
            <p className="text-sm">Scroll to explore more</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            What I Do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-primary-500 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gradient-to-r from-primary-500/10 to-cyan-500/10 dark:from-primary-500/5 dark:to-cyan-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "15+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-5xl font-bold gradient-text mb-2">{stat.number}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white dark:bg-slate-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Whether you have a full project or just an idea, I&apos;m ready to help you bring it to
            life.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get In Touch
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
