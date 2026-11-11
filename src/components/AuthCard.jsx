import React, { useState } from 'react';
import AuthHeader from './AuthHeader';
import InputField from './InputField';
import Button from './Button';
import Divider from './Divider';
import GoogleButton from './GoogleButton';
import AuthFooter from './AuthFooter';
import OAuthModal from './OAuthModal';
import LegalModal from './LegalModal';
import { UserIcon, MailIcon, PhoneIcon, CheckCircleIcon } from './Icons';
import { validateField, validateName, validateEmail, validateMobile } from '../utils/validation';
import { initiateGoogleOAuth } from '../config/oauth';

const AuthCard = () => {
  // Form input state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
  });

  // Validation errors
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    mobile: '',
  });

  // Touched state to prevent displaying errors before user interaction
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    mobile: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Modal dialog states
  const [isOAuthModalOpen, setIsOAuthModalOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState({ isOpen: false, type: 'terms' });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // If the field was already touched, validate live
    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  // Handle field blur (validate upon leaving the field)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  // Validate entire form on submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      email: true,
      mobile: true,
    });

    const nameError = validateName(formData.fullName);
    const emailError = validateEmail(formData.email);
    const mobileError = validateMobile(formData.mobile);

    const newErrors = {
      fullName: nameError,
      email: emailError,
      mobile: mobileError,
    };

    setErrors(newErrors);

    // If any error exists, focus the first invalid field
    if (nameError || emailError || mobileError) {
      if (nameError) {
        document.getElementById('fullName')?.focus();
      } else if (emailError) {
        document.getElementById('email')?.focus();
      } else if (mobileError) {
        document.getElementById('mobile')?.focus();
      }
      return;
    }

    // Submit validated payload
    setIsSubmitting(true);

    try {
      // Simulate real asynchronous network request (e.g., auth service API call)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmittedData({
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        mobile: formData.mobile.trim(),
        timestamp: new Date().toLocaleTimeString(),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google OAuth handler
  const handleGoogleClick = () => {
    const result = initiateGoogleOAuth();
    if (!result.configured) {
      setIsOAuthModalOpen(true);
    }
  };

  // Reset form to sign in again
  const handleReset = () => {
    setFormData({ fullName: '', email: '', mobile: '' });
    setErrors({ fullName: '', email: '', mobile: '' });
    setTouched({ fullName: false, email: false, mobile: false });
    setSubmittedData(null);
  };

  return (
    <div className="auth-card-container">
      <div className="auth-card">
        {/* Header */}
        <AuthHeader
          title="Welcome Back!"
          subtitle="Sign in or create your account to continue."
        />

        {/* Success View after valid submission */}
        {submittedData ? (
          <div className="auth-success-box" role="status" aria-live="polite">
            <div className="success-icon-wrap">
              <CheckCircleIcon className="success-check-icon" />
            </div>
            <h2 className="success-title">Verification Successful!</h2>
            <p className="success-desc">
              Your information has been validated and the authentication payload is ready.
            </p>

            <div className="submitted-details-card">
              <div className="detail-row">
                <span className="detail-label">Full Name:</span>
                <span className="detail-val">{submittedData.fullName}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span className="detail-val">{submittedData.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Mobile:</span>
                <span className="detail-val">{submittedData.mobile}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Validated At:</span>
                <span className="detail-val">{submittedData.timestamp}</span>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={handleReset}
              className="btn-full-width"
            >
              Sign In with Another Account
            </Button>
          </div>
        ) : (
          /* Form View */
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {/* Input 1: Full Name */}
            <InputField
              id="fullName"
              name="fullName"
              label="Full Name"
              type="text"
              placeholder="e.g. John Doe"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.fullName}
              isValid={touched.fullName && !errors.fullName && formData.fullName.trim().length >= 2}
              icon={UserIcon}
              autoComplete="name"
              disabled={isSubmitting}
            />

            {/* Input 2: Email Address */}
            <InputField
              id="email"
              name="email"
              label="Email Address"
              type="email"
              placeholder="e.g. name@company.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              isValid={touched.email && !errors.email && formData.email.trim().length > 0}
              icon={MailIcon}
              autoComplete="email"
              inputMode="email"
              disabled={isSubmitting}
            />

            {/* Input 3: Mobile Number */}
            <InputField
              id="mobile"
              name="mobile"
              label="Mobile Number"
              type="tel"
              placeholder="e.g. +1 555-019-2834"
              value={formData.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.mobile}
              isValid={touched.mobile && !errors.mobile && formData.mobile.trim().length >= 10}
              icon={PhoneIcon}
              autoComplete="tel"
              inputMode="tel"
              disabled={isSubmitting}
            />

            {/* Primary Action Button */}
            <div className="form-action-group">
              <Button
                type="submit"
                variant="primary"
                isLoading={isSubmitting}
                className="btn-full-width"
              >
                Continue with Email
              </Button>
            </div>

            {/* Divider */}
            <Divider text="OR" />

            {/* Secondary Action: Continue with Google */}
            <div className="oauth-action-group">
              <GoogleButton
                onClick={handleGoogleClick}
                disabled={isSubmitting}
              />
            </div>

            {/* Footer Terms & Conditions */}
            <AuthFooter
              onOpenTerms={() => setLegalModalState({ isOpen: true, type: 'terms' })}
              onOpenPrivacy={() => setLegalModalState({ isOpen: true, type: 'privacy' })}
            />
          </form>
        )}
      </div>

      {/* Google OAuth Modal Dialog */}
      <OAuthModal
        isOpen={isOAuthModalOpen}
        onClose={() => setIsOAuthModalOpen(false)}
      />

      {/* Terms and Privacy Modal */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={() => setLegalModalState({ isOpen: false, type: 'terms' })}
      />
    </div>
  );
};

export default AuthCard;
