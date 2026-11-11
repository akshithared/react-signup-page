import React from 'react';

/**
 * Header section of the authentication card
 */
const AuthHeader = ({
  title = 'Welcome Back!',
  subtitle = 'Sign in or create your account to continue.',
}) => {
  return (
    <div className="auth-header">
      <div className="auth-badge-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <h1 className="auth-title">{title}</h1>
      <p className="auth-subtitle">{subtitle}</p>
    </div>
  );
};

export default AuthHeader;
