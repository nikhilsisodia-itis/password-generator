import React, { useState } from "react";

const PasswordDisplay = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = password;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy password:', err);
      }
      document.body.removeChild(textArea);
    }
  };

  if (!password) return null;

  return (
    <div className="password-output">
      <div className="card">
        <label className="form-label">Generated Password:</label>
        <div className="password-display">
          {password}
        </div>
        <button 
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={copyToClipboard}
        >
          {copied ? (
            <>
              ✅ Copied!
            </>
          ) : (
            <>
              📋 Copy Password
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordDisplay;
