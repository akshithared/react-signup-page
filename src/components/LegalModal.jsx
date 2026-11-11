import React from 'react';

/**
 * Modal to display Terms & Conditions or Privacy Policy
 */
const LegalModal = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  const isTerms = type === 'terms';
  const title = isTerms ? 'Terms & Conditions' : 'Privacy Policy';

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="legal-modal-title">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 id="legal-modal-title" className="modal-title">{title}</h3>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="modal-body legal-content">
          {isTerms ? (
            <>
              <p>Welcome to our platform. By accessing or using our services, you agree to be bound by these terms.</p>
              <h4>1. Account Registration</h4>
              <p>You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate and complete.</p>
              <h4>2. Acceptable Use</h4>
              <p>You agree not to use the service for any unlawful purpose or to compromise the integrity of our security systems.</p>
              <h4>3. Modifications</h4>
              <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.</p>
            </>
          ) : (
            <>
              <p>Your privacy is important to us. This policy outlines how we handle your personal information.</p>
              <h4>1. Information Collection</h4>
              <p>We collect your full name, email address, and mobile number exclusively to create and secure your user account.</p>
              <h4>2. Data Protection</h4>
              <p>We employ industry-standard encryption protocols (TLS/SSL) to protect your personal data in transit and at rest.</p>
              <h4>3. Third-Party Sharing</h4>
              <p>We never sell or rent your personal information to third parties. OAuth credentials are exchanged securely with Google servers.</p>
            </>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
