import React from "react";

const services = [
  { title: "UI/UX Design", description: "Designing intuitive user interfaces." },
  { title: "Frontend Development", description: "Building performant React apps." },
  { title: "Brand Strategy", description: "Crafting cohesive brand experiences." },
  { title: "Product Design", description: "End-to-end product design and prototyping." },
];

const Services = () => (
  <section id="services" className="services">
    <h2 className="section-title">What I Do</h2>
    <div className="services-grid">
      {services.map((s) => (
        <div key={s.title} className="service-card">
          <div className="service-icon" />
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
