import React from 'react';
import { GoogleIcon } from './Icons';

/**
 * Secondary Button designed specifically for Google OAuth Integration.
 * Adheres to Google's official brand guidelines and OAuth standards.
 */
const GoogleButton = ({ onClick, disabled = false, isLoading = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isLoading}
      className="btn-google"
      aria-label="Continue with Google"
    >
      <div className="btn-google-inner">
        <GoogleIcon size={20} />
        <span className="btn-google-text">Continue with Google</span>
      </div>
    </button>
  );
};

export default GoogleButton;
