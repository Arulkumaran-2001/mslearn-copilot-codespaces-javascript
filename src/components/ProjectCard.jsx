import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, liveUrl, githubUrl, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="card group"
    >
      {/* Project Image */}
      {image && (
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary-500/10 to-cyan-500/10">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>

      <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block px-3 py-1 bg-primary-500/10 dark:bg-cyan-500/10 text-primary-700 dark:text-cyan-400 text-xs font-semibold rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 text-sm font-semibold"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300 text-sm font-semibold"
          >
            <Github size={16} />
            Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
