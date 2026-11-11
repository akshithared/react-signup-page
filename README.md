# Modern Sign In & Registration Page

A production-grade, responsive, and accessible Sign In & Registration page built with **React.js**, **JavaScript**, and **vanilla CSS**.

---

## ✨ Features

- **Modern & Minimalist Design**: Clean white card on subtle radial gradient backdrop with ambient soft glows and professional typography (`Plus Jakarta Sans`).
- **Responsive Layout**: Pixel-perfect on mobile (<480px), tablet, and desktop viewports.
- **Form Fields with Icons & Validation**:
  - **Full Name**: Letters & spaces check, minimum length validation, inline user icon.
  - **Email Address**: RFC-compliant email regex validation, inline mail icon.
  - **Mobile Number**: Numeric formatting with international/national length validation, inline phone icon.
- **Real-Time & On-Blur Validation**: Clear error indicators with animated helper messages and success checkmarks.
- **Button Hover & Interactive Effects**:
  - Primary `"Continue with Email"` with loading spinner state and subtle elevation.
  - Secondary `"Continue with Google"` with official 4-color Google logo and hover elevation.
- **Standard Google OAuth 2.0 Integration**:
  - No fake or mock auth.
  - Ready for Google Cloud Console OAuth 2.0 Client credentials.
  - Interactive setup dialog if environment variables are not yet configured.
- **Modular Component Structure**: Clean separation of concerns with reusable inputs, buttons, dividers, and modal dialogs.
- **Terms & Conditions and Privacy Policy**: Built-in modal viewer for legal disclaimers.

---

## 📁 Project Architecture

```
modern-auth-page/
├── index.html                  # HTML entry point with Plus Jakarta Sans font
├── vite.config.js              # Vite bundler configuration
├── package.json                # Project dependencies and scripts
├── .env.example                # OAuth environment configuration template
└── src/
    ├── main.jsx                # Application root mount
    ├── App.jsx                 # Top-level page container with header & footer
    ├── index.css               # Design system & responsive styles
    ├── components/
    │   ├── AuthCard.jsx        # Core authentication card & state controller
    │   ├── AuthHeader.jsx      # "Welcome Back!" heading & subtitle
    │   ├── InputField.jsx      # Reusable input with validation icons & errors
    │   ├── Button.jsx          # Reusable button with loading & variants
    │   ├── GoogleButton.jsx    # "Continue with Google" button with brand logo
    │   ├── Divider.jsx         # "OR" divider component
    │   ├── AuthFooter.jsx      # Legal disclaimer links
    │   ├── OAuthModal.jsx      # Production Google OAuth integration guide
    │   ├── LegalModal.jsx      # Terms & Conditions / Privacy Policy viewer
    │   └── Icons.jsx           # Clean, lightweight SVG icon library
    ├── utils/
    │   └── validation.js       # Field-level and form-level validation logic
    └── config/
        └── oauth.js            # Google OAuth 2.0 URL generator & config
```

---

## 🚀 Quick Start Guide

### 1. Navigate to the project directory
```bash
cd C:\Users\gannu\.gemini\antigravity\scratch\modern-auth-page
```

### 2. Install dependencies (already installed)
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```

The application will run locally at:
👉 **`http://localhost:3000`** (or the port Vite prints in your terminal)

---

## 🔑 (Optional) Setting Up Google OAuth 2.0

To enable one-click Google Sign-In with your own Google Cloud project:
1. Open [Google Cloud Console Credentials](https://console.cloud.google.com/apis/credentials).
2. Create an **OAuth 2.0 Client ID** (Web application).
3. Add `http://localhost:3000` to **Authorized JavaScript origins**.
4. Create a `.env` file in the project root:
   ```env
   VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
   VITE_GOOGLE_REDIRECT_URI=http://localhost:3000
   ```
5. Restart your Vite dev server (`npm run dev`). Clicking "Continue with Google" will redirect to Google's official authorization screen.
