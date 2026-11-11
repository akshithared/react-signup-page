/**
 * Input validation utilities for Sign In / Registration Form
 */

export const validateName = (name) => {
  const trimmed = (name || '').trim();
  if (!trimmed) {
    return 'Full name is required';
  }
  if (trimmed.length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) {
    return 'Name can only contain letters, spaces, hyphens, and apostrophes';
  }
  return '';
};

export const validateEmail = (email) => {
  const trimmed = (email || '').trim();
  if (!trimmed) {
    return 'Email address is required';
  }
  // Standard robust email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed)) {
    return 'Please enter a valid email address (e.g. alex@example.com)';
  }
  return '';
};

export const validateMobile = (mobile) => {
  const trimmed = (mobile || '').trim();
  if (!trimmed) {
    return 'Mobile number is required';
  }
  // Remove non-digit characters except leading plus
  const cleaned = trimmed.replace(/[\s\-()]/g, '');
  // Must match optional + followed by 10 to 15 digits
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(cleaned)) {
    return 'Please enter a valid mobile number (10-15 digits)';
  }
  return '';
};

export const validateField = (fieldName, value) => {
  switch (fieldName) {
    case 'fullName':
      return validateName(value);
    case 'email':
      return validateEmail(value);
    case 'mobile':
      return validateMobile(value);
    default:
      return '';
  }
};
