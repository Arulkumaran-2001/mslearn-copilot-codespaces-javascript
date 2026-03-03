import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/arulkumaran',
      color: 'hover:text-slate-700 dark:hover:text-slate-300',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/arulkumaran',
      color: 'hover:text-blue-600 dark:hover:text-cyan-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:arulkumaran@example.com',
      color: 'hover:text-red-500 dark:hover:text-red-400',
    },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-8 mb-8"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-600 dark:text-slate-400 transition-colors duration-300 ${social.color}`}
                aria-label={social.name}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 my-8"></div>

        {/* Copyright & Links */}
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
            © {currentYear} Arulkumaran Rajaram. All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-xs">
            Built with React, Tailwind CSS & Framer Motion • Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
