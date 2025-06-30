import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordDisplay from "./components/PasswordDisplay";

function App() {
  const [theme, setTheme] = useState("light");
  const [generatedPassword, setGeneratedPassword] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handlePasswordGenerated = (password) => {
    setGeneratedPassword(password);
  };

  return (
    <div className="container">
      <Header theme={theme} setTheme={setTheme} />
      <PasswordGenerator onPasswordGenerated={handlePasswordGenerated} />
      <PasswordDisplay password={generatedPassword} />
    </div>
  );
}

export default App;
