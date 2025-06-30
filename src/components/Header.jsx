import React from "react";

const Header = ({ theme, setTheme }) => {
  return (
    <header className="header">
      <h1 className="title">Password Generator</h1>
      <button 
        className="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
};

export default Header;
