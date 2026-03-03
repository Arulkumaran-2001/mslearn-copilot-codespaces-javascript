/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <div
      className="header"
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", gap: "2rem" }}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#footer">Contact</a>
      </div>
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle dark mode"
        style={{
          background: "none",
          border: "2px solid currentColor",
          padding: "0.5rem 1rem",
          borderRadius: "20px",
          cursor: "pointer",
          fontSize: "1rem",
          transition: "all 0.3s ease",
        }}
      >
        {isDarkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
};

export default Header;
