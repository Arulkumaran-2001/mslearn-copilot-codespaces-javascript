import React from "react";

const toolkit = [
  "Figma",
  "Webflow",
  "React",
  "Framer",
  "Adobe Suite",
  "Notion",
  "UX Research",
  "Prototyping",
];

const Skills = () => (
  <section id="skills" className="skills">
    <h2 className="section-title">My Toolkit</h2>
    <div className="skills-grid">
      {toolkit.map((tool) => (
        <span key={tool} className="skill-tag">
          {tool}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
