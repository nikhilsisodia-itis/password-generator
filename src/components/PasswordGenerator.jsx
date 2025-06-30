import React, { useState } from "react";

const PasswordGenerator = ({ onPasswordGenerated }) => {
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  const handleOptionChange = (option) => {
    setOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const generatePassword = () => {
    const { uppercase, lowercase, numbers, symbols } = options;
    
    // Check if at least one option is selected
    if (!uppercase && !lowercase && !numbers && !symbols) {
      alert("Please select at least one character type!");
      return;
    }

    let charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    onPasswordGenerated(password);
  };

  const isGenerateDisabled = !options.uppercase && !options.lowercase && !options.numbers && !options.symbols;

  return (
    <div className="card">
      <div className="form-group">
        <label className="form-label">Password Length: {length}</label>
        <div className="slider-container">
          <input
            type="range"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="slider"
          />
          <span className="slider-value">{length}</span>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Character Types:</label>
        <div className="checkbox-group">
          <div 
            className={`checkbox-item ${options.uppercase ? 'checked' : ''}`}
          >
            <input
              type="checkbox"
              checked={options.uppercase}
              onChange={() => handleOptionChange('uppercase')}
              className="checkbox"
              id="uppercase"
            />
            <label htmlFor="uppercase" className="checkbox-label">Uppercase Letters (A-Z)</label>
          </div>

          <div 
            className={`checkbox-item ${options.lowercase ? 'checked' : ''}`}
          >
            <input
              type="checkbox"
              checked={options.lowercase}
              onChange={() => handleOptionChange('lowercase')}
              className="checkbox"
              id="lowercase"
            />
            <label htmlFor="lowercase" className="checkbox-label">Lowercase Letters (a-z)</label>
          </div>

          <div 
            className={`checkbox-item ${options.numbers ? 'checked' : ''}`}
          >
            <input
              type="checkbox"
              checked={options.numbers}
              onChange={() => handleOptionChange('numbers')}
              className="checkbox"
              id="numbers"
            />
            <label htmlFor="numbers" className="checkbox-label">Numbers (0-9)</label>
          </div>

          <div 
            className={`checkbox-item ${options.symbols ? 'checked' : ''}`}
          >
            <input
              type="checkbox"
              checked={options.symbols}
              onChange={() => handleOptionChange('symbols')}
              className="checkbox"
              id="symbols"
            />
            <label htmlFor="symbols" className="checkbox-label">Symbols (!@#$%^&*)</label>
          </div>
        </div>
      </div>

      <button 
        className="generate-btn"
        onClick={generatePassword}
        disabled={isGenerateDisabled}
      >
        🔐 Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
