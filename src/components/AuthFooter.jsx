import React from 'react';

/**
 * Footer disclaimer with Terms & Conditions and Privacy Policy links
 */
const AuthFooter = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="auth-footer">
      <p className="auth-footer-text">
        By continuing, you agree to our{' '}
        <button
          type="button"
          onClick={onOpenTerms}
          className="legal-link"
        >
          Terms &amp; Conditions
        </button>{' '}
        and{' '}
        <button
          type="button"
          onClick={onOpenPrivacy}
          className="legal-link"
        >
          Privacy Policy
        </button>
        .
      </p>
    </footer>
  );
};

export default AuthFooter;
