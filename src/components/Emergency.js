import React from 'react';
import { Link } from 'react-router-dom';
const Emergency = () => {
  return (
    <section id="em">
    <div className="emergency-page">
      <header>
      <Link to="/" className="back-button">
        Back
      </Link>
        <h1>Emergency! Stay Calm.</h1>
      </header>
      <main>
        <div className="emergency-instructions">
          <p>
            In case of emergency, follow these steps:
          </p>
          <ol>
            <li>Stay calm and take a deep breath.</li>
            <li>Find a safe place and stay there.</li>
            <li>Look for a trusted adult or authority figure.</li>
            <li>If you can't find anyone, call emergency services (100).</li>
            <li>Police: 100</li>
            <li>Fire Department: 101</li>
            <li>Medical Emergency/Ambulance: 102 or 108</li>
            <li>Disaster Management Helpline: 1070 or 1078 (Toll-Free)</li>
            <li>Child Helpline Number: 1098 (India)</li>
            <li>Cyber Crime Helpline: 155260 (India)</li>
          </ol>
        </div>
      </main>
      <footer>
        <p>© 2024 Emergency Page</p>
      </footer>
    </div>
    </section>
  );
};

export default Emergency;

