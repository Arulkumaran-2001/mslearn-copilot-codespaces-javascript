/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
    icon: "📚",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
    icon: "🎓",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
    icon: "💼",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
    icon: "🎬",
  },
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = React.useState(null);

  return (
    <section className="padding" id="portfolio" style={{
      backgroundColor: "var(--bg-color)",
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ 
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Featured Projects
          </h2>
          <p style={{ 
            fontSize: "1.1rem",
            color: "var(--text-color)",
            opacity: 0.7,
            maxWidth: "600px",
            margin: "0 auto",
          }}>
            Showcase of my recent work, contributions, and creative projects
          </p>
        </div>

        {/* Main Portfolio Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
          marginBottom: "4rem",
        }}>
          {/* Image Section */}
          <div style={{ 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: "500px",
            }}>
              {/* Decorative background */}
              <div style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                right: "-20px",
                bottom: "-20px",
                background: "var(--gradient-primary)",
                borderRadius: "16px",
                opacity: 0.1,
                zIndex: 0,
              }} />
              
              <img
                src={image}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease",
                  position: "relative",
                  zIndex: 1,
                  display: "block",
                }}
                alt={imageAltText}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05) translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 102, 255, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
                }}
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
          }}>
            {projectList.map((project, index) => (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div 
                  style={{
                    backgroundColor: "var(--box-bg)",
                    border: hoveredProject === index ? "1px solid var(--accent-color)" : "1px solid var(--box-border)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    transform: hoveredProject === index ? "translateX(8px)" : "translateX(0)",
                    boxShadow: hoveredProject === index ? "var(--card-shadow), 0 12px 24px rgba(0, 0, 0, 0.1)" : "none",
                  }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Background gradient on hover */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: hoveredProject === index ? "0" : "-100%",
                    width: "100%",
                    height: "100%",
                    background: "var(--gradient-primary)",
                    opacity: 0.05,
                    transition: "left 0.4s ease",
                    pointerEvents: "none",
                  }}
                  />
                  
                  <div style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    gap: "1rem",
                  }}>
                    <div style={{
                      fontSize: "2rem",
                      minWidth: "50px",
                      display: "flex",
                      alignItems: "center",
                    }}>
                      {project.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        margin: "0 0 0.5rem 0",
                        color: "var(--text-color)",
                        transition: "color 0.3s ease",
                      }}>
                        {project.title}
                      </h3>
                      <p style={{
                        fontSize: "0.95rem",
                        color: "var(--text-color)",
                        opacity: 0.7,
                        margin: "0",
                        lineHeight: "1.6",
                      }}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: "center",
          paddingTop: "2rem",
          borderTop: "1px solid var(--box-border)",
        }}>
          <p style={{ 
            fontSize: "1.1rem",
            color: "var(--text-color)",
            marginBottom: "1.5rem",
          }}>
            Want to see more of my work?
          </p>
          <a
            href="#footer"
            style={{
              display: "inline-block",
              padding: "0.75rem 2rem",
              background: "var(--gradient-primary)",
              color: "#fff",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 102, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get In Touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
