import React from 'react';
import { SpinnerIcon } from './Icons';

/**
 * Reusable Button component with primary/secondary variants, loading state, and icon support
 */
const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  isLoading = false,
  disabled = false,
  onClick,
  icon: Icon,
  className = '',
  ariaLabel,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      aria-busy={isLoading}
      className={`btn btn-${variant} ${isLoading ? 'btn-loading' : ''} ${className}`}
      {...rest}
    >
      {isLoading ? (
        <span className="btn-content-loading">
          <SpinnerIcon className="btn-spinner" />
          <span>Processing...</span>
        </span>
      ) : (
        <span className="btn-content">
          {Icon && <span className="btn-icon"><Icon /></span>}
          <span>{children}</span>
        </span>
      )}
    </button>
  );
};

export default Button;
