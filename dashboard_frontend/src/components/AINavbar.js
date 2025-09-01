import React from 'react';

// PUBLIC_INTERFACE
export default function AINavbar({ theme = 'light' }) {
  /** Minimal header bar with product title, AI badge, and quick actions */
  return (
    <header className="ai-navbar" role="banner" data-theme={theme}>
      <div className="ai-navbar__left">
        <div className="ai-badge" aria-label="AI Powered">
          <span className="ai-badge__pulse" aria-hidden="true" />
          <span className="ai-badge__label">AI</span>
        </div>
        <h1 className="ai-title">CyberGuard Insights</h1>
      </div>
      <nav className="ai-navbar__right" aria-label="Primary Navigation">
        <button className="ai-nav-btn" aria-label="Search">
          🔎
        </button>
        <button className="ai-nav-btn" aria-label="Notifications">
          🔔
        </button>
        <button className="ai-nav-btn" aria-label="User menu">
          👤
        </button>
      </nav>
    </header>
  );
}
