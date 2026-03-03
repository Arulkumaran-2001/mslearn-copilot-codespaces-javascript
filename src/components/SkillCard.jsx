import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ category, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 gradient-text">
        {category}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-cyan-500/10 dark:from-primary-500/20 dark:to-cyan-500/20 text-slate-700 dark:text-slate-300 rounded-lg font-medium text-sm text-center hover:shadow-md transition-shadow duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
