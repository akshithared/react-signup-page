import React from 'react';
import { GoogleIcon } from './Icons';

/**
 * Modal dialog displaying production Google OAuth configuration instructions
 * when a client ID is not yet provided in the environment.
 */
const OAuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="oauth-modal-title">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <GoogleIcon size={24} />
            <h3 id="oauth-modal-title" className="modal-title">Google OAuth 2.0 Integration</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-desc">
            This button is designed for standard <strong>Google OAuth 2.0</strong> authentication (no mocked or fake logins). To enable one-click Google Sign-In:
          </p>

          <ol className="modal-steps">
            <li>
              Visit the <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener noreferrer" className="inline-link">Google Cloud Console</a>.
            </li>
            <li>
              Create a new <strong>OAuth 2.0 Client ID</strong> (Application type: <em>Web application</em>).
            </li>
            <li>
              Add <code>http://localhost:3000</code> to <strong>Authorized JavaScript origins</strong>.
            </li>
            <li>
              Create a <code>.env</code> file in the project root and add:
              <pre className="code-block">
                <code>VITE_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com</code>
              </pre>
            </li>
          </ol>

          <p className="modal-note">
            Once configured, clicking this button automatically redirects users to Google's official authorization screen.
          </p>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default OAuthModal;
