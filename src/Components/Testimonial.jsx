import React from "react";

const Testimonial = ({ quote, name, role, company, image }) => (
  <div className="testimonial">
    <p className="testimonial-quote">"{quote}"</p>
    {image && <img className="testimonial-photo" src={image} alt={name} />}
    <p className="testimonial-name">{name}</p>
    <p className="testimonial-role">
      {role} at {company}
    </p>
  </div>
);

export default Testimonial;
