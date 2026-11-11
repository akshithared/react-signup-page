/**
 * Google OAuth 2.0 Configuration and Integration Handler
 * 
 * To connect to Google in production:
 * 1. Create a project in Google Cloud Console (https://console.cloud.google.com)
 * 2. Set up OAuth consent screen and create OAuth 2.0 Client Credentials (Web Application)
 * 3. Add Authorized JavaScript origins (e.g., http://localhost:3000) and Redirect URIs
 * 4. Add your Client ID to your .env file as: VITE_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
 */

export const GOOGLE_CONFIG = {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
  redirectUri: import.meta.env.VITE_GOOGLE_REDIRECT_URI || (typeof window !== 'undefined' ? window.location.origin : ''),
  scope: 'openid email profile',
  responseType: 'code',
  prompt: 'select_account',
};

/**
 * Initiates real Google OAuth redirect if client ID is provided.
 * Returns { success: boolean, message?: string, url?: string }
 */
export const initiateGoogleOAuth = () => {
  if (!GOOGLE_CONFIG.clientId || GOOGLE_CONFIG.clientId === 'YOUR_GOOGLE_CLIENT_ID') {
    return {
      configured: false,
      message: 'Google OAuth Client ID is not configured yet. Add VITE_GOOGLE_CLIENT_ID to your .env file.',
    };
  }

  const params = new URLSearchParams({
    client_id: GOOGLE_CONFIG.clientId,
    redirect_uri: GOOGLE_CONFIG.redirectUri,
    response_type: GOOGLE_CONFIG.responseType,
    scope: GOOGLE_CONFIG.scope,
    prompt: GOOGLE_CONFIG.prompt,
    access_type: 'offline',
  });

  const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  window.location.href = oauthUrl;

  return {
    configured: true,
    url: oauthUrl,
  };
};
