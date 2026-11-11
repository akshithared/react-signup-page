import React from 'react';
import AuthCard from './components/AuthCard';
import { LockIcon } from './components/Icons';

function App() {
  return (
    <div className="auth-page-wrapper">
      {/* Background ambient lighting accents */}
      <div className="bg-glow bg-glow-1" aria-hidden="true" />
      <div className="bg-glow bg-glow-2" aria-hidden="true" />

      {/* Top Navigation Bar */}
      <header className="page-header">
        <div className="header-container">
          <div className="brand-logo">
            <span className="brand-symbol">◆</span>
            <span className="brand-name">Nexus<span className="brand-highlight">Auth</span></span>
          </div>

          <div className="security-badge" title="Bank-grade encryption enabled">
            <LockIcon className="security-icon" />
            <span>256-bit SSL Secure</span>
          </div>
        </div>
      </header>

      {/* Main Content Area: Centered Form */}
      <main className="page-main">
        <AuthCard />
      </main>

      {/* Bottom Trust Indicators */}
      <footer className="page-footer">
        <div className="trust-indicators">
          <span className="trust-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            SOC 2 Type II Certified
          </span>
          <span className="trust-dot">•</span>
          <span className="trust-item">GDPR &amp; CCPA Compliant</span>
          <span className="trust-dot">•</span>
          <span className="trust-item">2FA Ready</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
