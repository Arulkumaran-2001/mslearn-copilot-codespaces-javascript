import React from "react";
import PropTypes from "prop-types";

const Hero = ({
  name = "Your Name",
  headline = "I Design & Build Digital Experiences That Drive Results.",
  subheading = "I'm a product designer and developer focused on creating high-end, human-centered digital products.",
  portraitSrc,
}) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-label">HELLO, I'M</p>
          <div style={{ marginBottom: "1rem" }}>
            <h1 style={{
              backgroundImage: "var(--gradient-primary)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "4rem",
              fontWeight: "700",
              margin: "0 0 1rem 0",
              fontFamily: "'Montserrat', sans-serif",
            }}>
              {name}
            </h1>
          </div>
          <h1 className="hero-headline">{headline}</h1>
          <p className="hero-subheading">{subheading}</p>
          <div className="hero-ctas">
            <a href="#portfolio" className="btn btn-primary">
              View My Work
            </a>
            <a href="#footer" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>
        <div className="hero-image">
          {portraitSrc ? (
            <img src={portraitSrc} alt="Portrait" />
          ) : (
            <div style={{
              width: "100%",
              paddingBottom: "100%",
              background: "var(--gradient-primary)",
              borderRadius: "16px",
            }} />
          )}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  name: PropTypes.string,
  headline: PropTypes.string,
  subheading: PropTypes.string,
  portraitSrc: PropTypes.string,
};

export default Hero;
