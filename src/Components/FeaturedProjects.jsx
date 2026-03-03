import React from "react";

const projects = [
  {
    title: "Project One",
    category: "Web App",
    image: "",
    description: "A modern web application built with React and stunning UI design.",
    url: "#",
  },
  {
    title: "Project Two",
    category: "Mobile Design",
    image: "",
    description: "Mobile-first design system for seamless user experience.",
    url: "#",
  },
  {
    title: "Project Three",
    category: "Brand Identity",
    image: "",
    description: "Complete brand identity including logo, guidelines, and collateral.",
    url: "#",
  },
];

const FeaturedProjects = () => (
  <section id="projects" className="featured-projects">
    <h2 className="section-title">Selected Work</h2>
    <div className="projects-grid">
      {projects.map((p, idx) => (
        <a key={idx} href={p.url} className="project-card">
          <div
            className="project-image"
            style={{
              background: `linear-gradient(135deg, hsl(${idx * 90}, 70%, 60%}), hsl(${idx * 90 + 30}, 70%, 60%))`,
              width: "100%",
              paddingBottom: "56.25%",
              position: "relative",
            }}
          />
          <span className="project-category">{p.category}</span>
          <h3 className="project-title">{p.title}</h3>
          <p className="project-desc">{p.description}</p>
        </a>
      ))}
    </div>
  </section>
);

export default FeaturedProjects;
