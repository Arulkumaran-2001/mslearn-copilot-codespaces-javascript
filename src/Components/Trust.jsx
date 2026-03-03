import React from "react";

const Trust = ({
  logos = [
    { src: "", alt: "Company 1" },
    { src: "", alt: "Company 2" },
    { src: "", alt: "Company 3" },
  ],
}) => {
  return (
    <section id="trust" className="trust">
      <p className="trust-label">Trusted by leading companies</p>
      <div className="trust-logos">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="trust-logo"
            style={{
              width: "120px",
              height: "60px",
              background: "rgba(0,0,0,0.1)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "var(--text-color)",
            }}
          >
            {logo.alt}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trust;
