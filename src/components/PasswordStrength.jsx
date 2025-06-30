import React from "react";

const PasswordStrength = ({ password }) => {
  if (!password) return null;

  const calculateStrength = (password) => {
    let score = 0;
    let feedback = [];

    // Length check
    if (password.length >= 8) {
      score += 25;
    } else {
      feedback.push("Use at least 8 characters");
    }

    if (password.length >= 12) {
      score += 10;
    }

    // Character variety checks
    if (/[a-z]/.test(password)) {
      score += 15;
    } else {
      feedback.push("Add lowercase letters");
    }

    if (/[A-Z]/.test(password)) {
      score += 15;
    } else {
      feedback.push("Add uppercase letters");
    }

    if (/[0-9]/.test(password)) {
      score += 15;
    } else {
      feedback.push("Add numbers");
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      score += 20;
    } else {
      feedback.push("Add special characters");
    }

    // Determine strength level
    let level, color, label;
    if (score < 30) {
      level = 1;
      color = "#dc3545";
      label = "Weak";
    } else if (score < 60) {
      level = 2;
      color = "#fd7e14";
      label = "Fair";
    } else if (score < 80) {
      level = 3;
      color = "#ffc107";
      label = "Good";
    } else if (score < 90) {
      level = 4;
      color = "#20c997";
      label = "Strong";
    } else {
      level = 5;
      color = "#28a745";
      label = "Very Strong";
    }

    return { level, color, label, score, feedback };
  };

  const strength = calculateStrength(password);

  return (
    <div className="password-strength">
      <div className="strength-header">
        <span className="strength-label">Password Strength:</span>
        <span 
          className="strength-text"
          style={{ color: strength.color, fontWeight: 'bold' }}
        >
          {strength.label}
        </span>
      </div>
      
      <div className="strength-meter">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`strength-bar ${level <= strength.level ? 'active' : ''}`}
            style={{
              backgroundColor: level <= strength.level ? strength.color : 'var(--border-color)'
            }}
          />
        ))}
      </div>

      <div className="strength-details">
        <div className="strength-score">
          Security Score: {strength.score}/100
        </div>
        
        {strength.feedback.length > 0 && (
          <div className="strength-tips">
            <span className="tips-title">💡 Tips to improve:</span>
            <ul className="tips-list">
              {strength.feedback.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordStrength;
