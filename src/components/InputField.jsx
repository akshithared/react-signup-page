import React from 'react';
import { AlertCircleIcon, CheckCircleIcon } from './Icons';

/**
 * Reusable InputField component
 * Includes icon slot, floating/top label, inline validation state, and helpful error text.
 */
const InputField = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  isValid = false,
  icon: Icon,
  disabled = false,
  required = true,
  autoComplete,
  inputMode,
}) => {
  const hasError = Boolean(error);
  const isSuccess = isValid && !hasError && value?.trim()?.length > 0;

  return (
    <div className={`input-group ${hasError ? 'has-error' : ''} ${isSuccess ? 'is-valid' : ''}`}>
      <label htmlFor={id} className="input-label">
        <span>{label}</span>
        {required && <span className="required-star" aria-hidden="true">*</span>}
      </label>

      <div className="input-wrapper">
        {Icon && (
          <span className="input-leading-icon" aria-hidden="true">
            <Icon />
          </span>
        )}

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={hasError ? `${id}-error` : undefined}
          className={`input-control ${Icon ? 'with-leading-icon' : ''} ${
            hasError || isSuccess ? 'with-trailing-icon' : ''
          }`}
        />

        {/* Status indicator on the right */}
        {hasError && (
          <span className="input-trailing-icon error-icon" title={error} aria-hidden="true">
            <AlertCircleIcon />
          </span>
        )}
        {!hasError && isSuccess && (
          <span className="input-trailing-icon success-icon" title="Valid input" aria-hidden="true">
            <CheckCircleIcon />
          </span>
        )}
      </div>

      {hasError && (
        <div id={`${id}-error`} className="input-error-msg" role="alert">
          <AlertCircleIcon className="msg-icon" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default InputField;
